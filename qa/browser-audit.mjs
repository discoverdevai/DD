#!/usr/bin/env node
// Accessibility (axe) + performance (Lighthouse, mobile) on a built site or a URL.
// Runs where Chromium + these packages exist (Claude's QA container):
//   npm i -D playwright @axe-core/playwright lighthouse chrome-launcher
// Usage: node qa/browser-audit.mjs http://localhost:4321 [--report qa/reports/M4-browser.md]
import fs from 'node:fs';
import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const args = process.argv.slice(2);
const base = (args.find(a => !a.startsWith('--')) || 'http://localhost:4321').replace(/\/$/, '');
const ri = args.indexOf('--report'); const reportPath = ri > -1 ? args[ri + 1] : null;
const routes = fs.readFileSync(new URL('./routes.txt', import.meta.url), 'utf8').split('\n')
  .map(l => l.trim()).filter(l => l && !l.startsWith('#')).map(l => l.replace(/^\?/, ''));
const budget = { lcp: 2000, cls: 0.05, tbt: 200, perf: 90 }; // 07 §13 lab budgets (CLS 0.05 in the lab, 0.1 field)

const rows = []; let blockers = 0;
const exe = process.env.CHROME_PATH || chromium.executablePath();
const browser = await chromium.launch({ executablePath: exe });
for (const vp of [{ name: 'mobile', width: 390, height: 844 }, { name: 'desktop', width: 1366, height: 900 }]) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  for (const r of routes) {
    const page = await ctx.newPage();
    const errors = [];
    page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    const res = await page.goto(base + r, { waitUntil: 'networkidle' }).catch(e => ({ status: () => 'ERR ' + e.message }));
    if (res.status() !== 200) { rows.push(['BLOCKER', vp.name, r, 'http', String(res.status())]); blockers++; await page.close(); continue; }
    // One-time entrance sequences are capped at 2.4s (06 §9.6); audit the settled state, not a mid-fade frame.
    await page.waitForTimeout(2600);
    // Third-party iframes (the Cal.com booking calendar) are not our markup: exclude them from axe; the page around them is still audited.
    const axe = await new AxeBuilder({ page }).exclude('iframe').withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    for (const v of axe.violations) {
      const sev = ['critical', 'serious'].includes(v.impact) ? 'BLOCKER' : 'MINOR';
      if (sev === 'BLOCKER') blockers++;
      rows.push([sev, vp.name, r, `axe:${v.id}`, `${v.impact}: ${v.help} (${v.nodes.length} node(s)) e.g. ${v.nodes[0]?.target?.join(' ')}`]);
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    if (overflow) rows.push(['MAJOR', vp.name, r, 'layout', 'horizontal scroll (content wider than viewport)']);
    // The Cal.com embed script sets inline styles on its own elements, which our hash-based CSP blocks; the calendar still works (checked on the live preview). Reported as MINOR, third-party.
    for (const e of errors.slice(0, 3)) rows.push([/Content Security Policy|CSP/i.test(e) ? (r === '/book' && /inline style/i.test(e) ? 'MINOR' : 'MAJOR') : 'MINOR', vp.name, r, 'console', (r === '/book' && /inline style/i.test(e) ? 'third-party (Cal.com embed): ' : '') + e.slice(0, 140)]);
    await page.close();
  }
  await ctx.close();
}
await browser.close();

// Lighthouse mobile on key pages
let lh;
try { lh = (await import('lighthouse')).default; } catch { rows.push(['MINOR', '-', '-', 'lighthouse', 'lighthouse not installed; skipped']); }
if (lh) {
  const { launch } = await import('chrome-launcher');
  const chrome = await launch({ chromePath: exe, chromeFlags: ['--headless=new', '--no-sandbox'] });
  for (const r of ['/', '/launch-ready', '/book', '/insights/ai-app-to-production']) {
    if (!routes.includes(r)) continue;
    const out = await lh(base + r, { port: chrome.port, output: 'json', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], formFactor: 'mobile', screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 2, disabled: false } });
    const a = out.lhr.audits, c = out.lhr.categories;
    const lcp = a['largest-contentful-paint'].numericValue, cls = a['cumulative-layout-shift'].numericValue, tbt = a['total-blocking-time'].numericValue, perf = Math.round(c.performance.score * 100);
    const okp = lcp <= budget.lcp && cls <= budget.cls && tbt <= budget.tbt && perf >= budget.perf;
    if (!okp) blockers++;
    rows.push([okp ? 'PASS' : 'BLOCKER', 'mobile', r, 'lighthouse', `perf ${perf} · LCP ${Math.round(lcp)}ms · CLS ${cls.toFixed(3)} · TBT ${Math.round(tbt)}ms · a11y ${Math.round(c.accessibility.score * 100)} · SEO ${Math.round(c.seo.score * 100)} · BP ${Math.round(c['best-practices'].score * 100)}`]);
  }
  await chrome.kill();
}
const out = [`# Browser audit: ${base} (${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC)`, '', `Blockers: ${blockers}`, '',
  '| Severity | Viewport | Page | Check | Detail |', '|---|---|---|---|---|', ...rows.map(r => `| ${r.map(x => String(x).replace(/\|/g, '\\|')).join(' | ')} |`)].join('\n') + '\n';
if (reportPath) fs.writeFileSync(reportPath, out);
console.log(out);
process.exit(blockers ? 1 : 0);
