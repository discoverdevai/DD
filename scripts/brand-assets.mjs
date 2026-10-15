// INTERIM brand assets (D-33 open). Built from the official PNGs in assets/logo/source, never traced from the JPG.
// Replace with exports from the official SVG set when it arrives, then delete this script.
import sharp from 'sharp';
import fs from 'node:fs';
const SRC = 'assets/logo/source';
const pad = 4; const top = 387 - pad, height = 450 - 387 + 1 + 2 * pad;

// Wordmark masks (alpha only; colour comes from tokens via CSS mask, 06 §11 colourways).
await sharp(`${SRC}/logo-stacked-white.png`).extract({ left: 92, top, width: 405 - 92 + 1, height }).png({ compressionLevel: 9 }).toFile('public/brand/wordmark-discover.png');
await sharp(`${SRC}/logo-stacked-white.png`).extract({ left: 406, top, width: 555 - 406 + 1, height }).png({ compressionLevel: 9 }).toFile('public/brand/wordmark-dev.png');
await sharp(`${SRC}/mark-white.png`).trim().resize({ height: 96 }).png({ compressionLevel: 9 }).toFile('public/brand/mark.png');

// Square icons on white, mark in brand blue.
const square = async (size, markH, out) => {
  const mark = await sharp(`${SRC}/mark-blue.png`).trim().resize({ height: markH }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#FEFEFE' } })
    .composite([{ input: mark, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile(out);
};
await square(512, 340, 'public/logo-512.png');
await square(180, 120, 'public/apple-touch-icon.png');
await square(32, 24, 'public/favicon-32.png');

// favicon.svg wraps a transparent 64px mark (no white box in dark browser tabs).
const fav = await sharp(`${SRC}/mark-blue.png`).trim().resize({ height: 64 }).png({ compressionLevel: 9 }).toBuffer();
const m = await sharp(fav).metadata();
fs.writeFileSync('public/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${m.width} ${m.height}"><image width="${m.width}" height="${m.height}" href="data:image/png;base64,${fav.toString('base64')}"/></svg>\n`);

for (const f of ['public/brand/wordmark-discover.png', 'public/brand/wordmark-dev.png', 'public/brand/mark.png', 'public/logo-512.png', 'public/apple-touch-icon.png', 'public/favicon.svg']) {
  const st = fs.statSync(f); const md = f.endsWith('.svg') ? {} : await sharp(f).metadata();
  console.log(f, md.width ?? '', md.height ?? '', st.size + 'B');
}

// Default share image (06 §12 layout, Signal palette). Interim until the satori OG endpoint lands in M5.
{
  const W = 1200, H = 630;
  const blade = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><linearGradient id="b" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1240BE"/><stop offset=".7" stop-color="#032993"/></linearGradient></defs><rect width="${W}" height="${H}" fill="#01082D"/><polygon points="${W * 0.62},${H * 1.05} ${W * 1.08},${H * 0.28} ${W * 0.86},${H * 1.05}" fill="url(#b)" opacity=".85"/></svg>`);
  const logo = await sharp(`${SRC}/logo-stacked-white.png`).trim().resize({ height: 300 }).png().toBuffer();
  fs.mkdirSync('public/og', { recursive: true });
  await sharp(blade).composite([{ input: logo, left: 96, top: 165 }]).png({ compressionLevel: 9 }).toFile('public/og/default.png');
  console.log('public/og/default.png', fs.statSync('public/og/default.png').size + 'B');
}
