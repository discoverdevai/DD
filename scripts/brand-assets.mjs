// Brand assets from the official SVG set (assets/logo/svg, brand guidelines asset kit; D-33 resolved).
// Run: node scripts/brand-assets.mjs   (re-run only when the official files change).
import sharp from 'sharp';
import fs from 'node:fs';
const SVG = 'assets/logo/svg';
const render = (file, opts) => sharp(`${SVG}/${file}`, { density: 600 }).resize(opts).png().toBuffer();

// favicon.svg is the official mark as-is (transparent, works in light and dark tabs); PNG fallbacks for older agents.
fs.copyFileSync(`${SVG}/mark.svg`, 'public/favicon.svg');
for (const f of ['logo-horizontal-for-dark.svg', 'logo-horizontal-dark-text.svg', 'mark.svg']) fs.copyFileSync(`${SVG}/${f}`, `public/brand/${f}`);

// Square icons: mark centred on white (logo-512 is the Organization logo in JSON-LD) and the app icon (white on blue).
const onWhite = async (size, markH, out) => {
  const mark = await render('mark.svg', { height: markH });
  await sharp({ create: { width: size, height: size, channels: 4, background: '#FEFEFE' } }).composite([{ input: mark, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile(out);
};
await onWhite(512, 300, 'public/logo-512.png');
// Tab icons stay transparent (no white box in dark browser tabs).
await sharp(`${SVG}/mark.svg`, { density: 600 }).resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ compressionLevel: 9 }).toFile('public/favicon-32.png');
// Web app manifest icons (Android home screen): the official app icon, white mark on blue.
for (const s of [192, 512]) await sharp(`${SVG}/app-icon.svg`, { density: 600 }).resize(s, s, { fit: 'contain', background: '#1240BE' }).flatten({ background: '#1240BE' }).png({ compressionLevel: 9 }).toFile(`public/icon-${s}.png`);
await sharp(`${SVG}/app-icon.svg`, { density: 600 }).resize(180, 180, { fit: 'contain', background: '#1240BE' }).flatten({ background: '#1240BE' }).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');

// favicon.ico (browsers and crawlers request /favicon.ico directly): 16, 32 and 48 px PNGs in an ICO container.
{
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(sizes.map((s) => sharp(`${SVG}/mark.svg`, { density: 600 }).resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()));
  const head = Buffer.alloc(6 + 16 * sizes.length);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
  let offset = head.length;
  pngs.forEach((png, i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(sizes[i], e); head.writeUInt8(sizes[i], e + 1); head.writeUInt8(0, e + 2); head.writeUInt8(0, e + 3);
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6); head.writeUInt32LE(png.length, e + 8); head.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  fs.writeFileSync('public/favicon.ico', Buffer.concat([head, ...pngs]));
}

// Default share image (legal pages, 404): official vertical lockup for dark backgrounds on the ink canvas.
{
  const W = 1200, H = 630;
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><radialGradient id="g" cx=".88" cy="1.1" r=".75"><stop offset="0" stop-color="#2152D1" stop-opacity=".95"/><stop offset=".45" stop-color="#1240BE" stop-opacity=".4"/><stop offset=".8" stop-color="#01082D" stop-opacity="0"/></radialGradient></defs><rect width="${W}" height="${H}" fill="#01082D"/><rect width="${W}" height="${H}" fill="url(#g)"/></svg>`);
  const logo = await render('logo-vertical-for-dark.svg', { height: 300 });
  fs.mkdirSync('public/og', { recursive: true });
  await sharp(bg).composite([{ input: logo, gravity: 'center' }]).png({ compressionLevel: 9 }).toFile('public/og/default.png');
}

for (const f of ['public/favicon.svg', 'public/favicon.ico', 'public/favicon-32.png', 'public/icon-192.png', 'public/icon-512.png', 'public/apple-touch-icon.png', 'public/logo-512.png', 'public/og/default.png']) {
  console.log(f, fs.statSync(f).size + 'B');
}
