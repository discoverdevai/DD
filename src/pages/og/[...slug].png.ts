// Build-time share images (05 §6, 07 §5): satori renders the card to SVG (text as paths), sharp rasterises it to PNG.
// One image per OG_PAGES route plus one per published article. Prerendered: nothing runs at request time.
// The logo is the official artwork (assets/logo/source), recoloured with sharp the same way the site's CSS masks do it
// (06 §11 two-tone: "Discover" light, "Dev" and the mark in brand blue). Fonts are OFL woff files in src/assets/og.
import type { APIRoute, GetStaticPaths } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { OG_PAGES, ogPath, type OgCard } from '../../data/og';
import { publishedInsights, insightPath } from '../../lib/insights';
import { t } from '../../i18n/t';

const W = 1200, H = 630;
const C = { ink: '#01082D', raised: '#02103E', text: '#FEFEFE', muted: '#C9DBFF', machine: '#A2C1FE', blue: '#6C9AFF', brand: '#1240BE', human: '#7FD8A6', line: 'rgba(162,193,254,0.22)' };

export const getStaticPaths = (async () => {
  const cards: { slug: string; card: OgCard }[] = Object.entries(OG_PAGES).map(([route, card]) => ({ slug: ogPath(route).slice(4, -4), card }));
  for (const entry of await publishedInsights('en')) {
    cards.push({ slug: ogPath(insightPath(entry)).slice(4, -4), card: { eyebrow: t('nav.insights'), title: entry.data.title } });
  }
  return cards.map(({ slug, card }) => ({ params: { slug }, props: card }));
}) satisfies GetStaticPaths;

const root = process.cwd();
const font = (f: string) => fs.readFileSync(path.join(root, 'src/assets/og', f));
let fonts: Parameters<typeof satori>[1]['fonts'] | undefined;
let logo: { mark: string; discover: string; dev: string; markW: number; discoverW: number; devW: number } | undefined;

/** White mask PNG → solid colour with the mask's alpha, as a data URI (what CSS mask-image does on the site). */
async function tint(input: string | Buffer, colour: string, height: number) {
  const mask = await sharp(typeof input === 'string' ? path.join(root, input) : input).trim().resize({ height }).ensureAlpha().png().toBuffer();
  const { width = 0 } = await sharp(mask).metadata();
  const png = await sharp({ create: { width, height, channels: 4, background: colour } }).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  return { uri: `data:image/png;base64,${png.toString('base64')}`, width };
}

async function assets() {
  fonts ??= [
    { name: 'Manrope', data: font('manrope-latin-700-normal.woff'), weight: 700, style: 'normal' },
    { name: 'Manrope', data: font('manrope-latin-600-normal.woff'), weight: 600, style: 'normal' },
    { name: 'Rubik', data: font('rubik-latin-400-normal.woff'), weight: 400, style: 'normal' },
    { name: 'JetBrains Mono', data: font('jetbrains-mono-latin-500-normal.woff'), weight: 500, style: 'normal' },
  ];
  if (!logo) {
    const mark = await tint('assets/logo/source/mark-white.png', C.blue, 46);
    // The stacked white lockup holds the wordmark; the same crop as scripts/brand-assets.mjs, split at the "Dev" join.
    const lockup = 'assets/logo/source/logo-stacked-white.png';
    const crop = (left: number, right: number) => sharp(path.join(root, lockup)).extract({ left, top: 383, width: right - left + 1, height: 72 }).png().toBuffer();
    const discover = await tint(await crop(92, 405), C.text, 34);
    const dev = await tint(await crop(406, 555), C.blue, 34);
    logo = { mark: mark.uri, markW: mark.width, discover: discover.uri, discoverW: discover.width, dev: dev.uri, devW: dev.width };
  }
  return { fonts, logo };
}

// Satori takes a React-like element tree; plain objects keep this file free of a JSX runtime.
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });
const img = (src: string, width: number, height: number, style: Record<string, unknown> = {}) => ({ type: 'img', props: { src, width, height, style } });

export const GET: APIRoute = async ({ props }) => {
  const { eyebrow, title } = props as OgCard;
  const { fonts, logo } = await assets();
  const size = title.length > 62 ? 58 : title.length > 40 ? 66 : 76;
  const tree = el('div', {
    width: W, height: H, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px',
    backgroundColor: C.ink, color: C.text, fontFamily: 'Rubik',
    backgroundImage: `radial-gradient(60% 80% at 88% 110%, rgba(33,82,209,0.95) 0%, rgba(18,64,190,0.45) 40%, rgba(1,8,45,0) 75%), linear-gradient(180deg, ${C.raised} 0%, ${C.ink} 60%)`,
  }, [
    el('div', { display: 'flex', alignItems: 'center', gap: 16 }, [
      img(logo.mark, logo.markW, 46),
      el('div', { display: 'flex', alignItems: 'center' }, [img(logo.discover, logo.discoverW, 34), img(logo.dev, logo.devW, 34)]),
    ]),
    el('div', { display: 'flex', flexDirection: 'column', gap: 22 }, [
      el('div', { display: 'flex', fontFamily: 'JetBrains Mono', fontWeight: 500, fontSize: 24, color: C.muted }, [
        el('span', { color: C.machine, marginRight: 12 }, '//'), eyebrow,
      ]),
      el('div', { display: 'flex', fontFamily: 'Manrope', fontWeight: 700, fontSize: size, lineHeight: 1.06, letterSpacing: -2, maxWidth: 940, textWrap: 'balance' }, title),
    ]),
    el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: `1px solid ${C.line}`, fontSize: 22, color: C.muted }, [
      el('div', { display: 'flex', alignItems: 'center', gap: 12 }, [el('div', { width: 10, height: 10, borderRadius: 5, backgroundColor: C.human }), t('proof.rating')]),
      el('div', { display: 'flex', fontFamily: 'JetBrains Mono', fontWeight: 500, color: C.text }, 'discoverdev.ai'),
    ]),
  ]);
  const svg = await satori(tree as Parameters<typeof satori>[0], { width: W, height: H, fonts: fonts! });
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
