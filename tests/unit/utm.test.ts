// First-touch attribution (07 §5, §9.5): channel rules, UTM capture and /book link decoration.
// Run: node --test tests/unit/ (Node 24+ strips TS types). Browser globals are stubbed per test.
import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { deriveChannel, firstTouch, decorateBookLink } from '../../src/lib/utm.ts';

const none = {};

test('AI assistants win over everything else', () => {
  for (const host of ['chatgpt.com', 'chat.openai.com', 'perplexity.ai', 'www.perplexity.ai', 'claude.ai', 'gemini.google.com', 'copilot.microsoft.com']) {
    assert.equal(deriveChannel(host, none), 'ai_assistant', host);
  }
  assert.equal(deriveChannel('none', { utm_source: 'chatgpt.com' }), 'ai_assistant');
  assert.equal(deriveChannel('claude.ai', { utm_medium: 'email' }), 'ai_assistant');
});

test('utm_medium=email is email, even with a search referrer', () => {
  assert.equal(deriveChannel('www.google.com', { utm_medium: 'email' }), 'email');
});

test('no referrer: direct, or referral when a utm_source says where it came from', () => {
  assert.equal(deriveChannel('none', none), 'direct');
  assert.equal(deriveChannel('', none), 'direct');
  assert.equal(deriveChannel('none', { utm_source: 'newsletter' }), 'referral');
});

test('search engines on any country domain', () => {
  for (const host of ['www.google.com', 'google.com.eg', 'www.bing.com', 'duckduckgo.com', 'search.yahoo.com']) {
    assert.equal(deriveChannel(host, none), 'search', host);
  }
});

test('social networks', () => {
  for (const host of ['www.linkedin.com', 'linkedin.com', 'x.com', 't.co', 'www.reddit.com', 'facebook.com']) {
    assert.equal(deriveChannel(host, none), 'social', host);
  }
});

test('anything else with a referrer is referral; look-alike hosts do not match', () => {
  assert.equal(deriveChannel('clutch.co', none), 'referral');
  assert.equal(deriveChannel('notlinkedin.com', none), 'referral');
  // Known looseness, left as is (analytics label only, header-spoofable anyway): SEARCH matches any host that STARTS with
  // "google." / "bing.", so 'google.evil.example' counts as search. Tighten the pattern if channel data ever drives money.
  assert.equal(deriveChannel('google.evil.example', none), 'search');
});

// ---- browser stubs -------------------------------------------------------------------------------------------------
const store = new Map<string, string>();
function stub(url: string, referrer = '') {
  const u = new URL(url);
  Object.assign(globalThis, {
    sessionStorage: { getItem: (k: string) => store.get(k) ?? null, setItem: (k: string, v: string) => void store.set(k, v) },
    location: { search: u.search, host: u.host, origin: u.origin },
    document: { referrer },
  });
}
beforeEach(() => store.clear());

test('firstTouch reads UTMs lower-cased and capped at 100 characters', () => {
  stub(`https://discoverdev.ai/?utm_source=LinkedIn&utm_medium=Social&utm_campaign=${'a'.repeat(150)}&ignored=1`);
  const t = firstTouch();
  assert.equal(t.utm.utm_source, 'linkedin');
  assert.equal(t.utm.utm_medium, 'social');
  assert.equal(t.utm.utm_campaign?.length, 100);
  assert.equal('ignored' in t.utm, false);
  assert.equal(t.entry_referrer_host, 'none');
  assert.equal(t.channel, 'referral');
});

test('firstTouch records an external referrer host and ignores our own host', () => {
  stub('https://discoverdev.ai/', 'https://www.google.com/search?q=x');
  assert.equal(firstTouch().entry_referrer_host, 'www.google.com');
  store.clear();
  stub('https://discoverdev.ai/', 'https://discoverdev.ai/work');
  assert.equal(firstTouch().entry_referrer_host, 'none');
  assert.equal(firstTouch().channel, 'direct');
});

test('firstTouch is first-touch: a later page with other UTMs does not overwrite the session record', () => {
  stub('https://discoverdev.ai/?utm_source=first');
  firstTouch();
  stub('https://discoverdev.ai/work?utm_source=second');
  assert.equal(firstTouch().utm.utm_source, 'first');
});

test('firstTouch survives a corrupt stored record and a throwing sessionStorage', () => {
  stub('https://discoverdev.ai/');
  store.set('dd_utm', '{not json');
  assert.equal(firstTouch().channel, 'direct');
  Object.assign(globalThis, { sessionStorage: { getItem: () => { throw new Error('blocked'); }, setItem: () => { throw new Error('blocked'); } } });
  assert.equal(firstTouch().channel, 'direct');
});

const link = (href: string) => ({ href }) as HTMLAnchorElement;

test('decorateBookLink adds the stored UTMs and entry_cta to /book at click time', () => {
  stub('https://discoverdev.ai/?utm_source=linkedin&utm_medium=social');
  const a = link('https://discoverdev.ai/book#form');
  decorateBookLink(a, 'home_hero_clarity');
  assert.equal(a.href, '/book?utm_source=linkedin&utm_medium=social&entry_cta=home_hero_clarity#form');
});

test('decorateBookLink leaves other paths and other origins alone', () => {
  stub('https://discoverdev.ai/?utm_source=x');
  const other = link('https://discoverdev.ai/work');
  decorateBookLink(other, 'x_y_z');
  assert.equal(other.href, 'https://discoverdev.ai/work');
  const external = link('https://cal.com/book');
  decorateBookLink(external, 'x_y_z');
  assert.equal(external.href, 'https://cal.com/book');
});

test('decorateBookLink without UTMs or entry_cta adds nothing', () => {
  stub('https://discoverdev.ai/');
  const a = link('https://discoverdev.ai/book');
  decorateBookLink(a, null);
  assert.equal(a.href, '/book');
});
