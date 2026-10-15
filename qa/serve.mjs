#!/usr/bin/env node
// Minimal static server for dist/ with clean URLs (/about -> about.html) and real 404s.
// Usage: node qa/serve.mjs [dist] [port=4321]
// Text responses are brotli/gzip-compressed like Cloudflare does in production, so Lighthouse measures real transfer sizes.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'; import zlib from 'node:zlib';
const root = path.resolve(process.argv[2] || 'dist'); const port = +(process.argv[3] || 4321);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' };
http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.includes('..')) { res.writeHead(400); return res.end(); }
  const tries = p.endsWith('/') ? [p + 'index.html'] : [p, p + '.html', p + '/index.html'];
  const send = (status, f) => {
    const type = types[path.extname(f)] || 'application/octet-stream';
    const ae = String(req.headers['accept-encoding'] || '');
    const text = /^(text\/|application\/(json|xml)|image\/svg)/.test(type);
    const enc = text && /\bbr\b/.test(ae) ? 'br' : text && /\bgzip\b/.test(ae) ? 'gzip' : null;
    res.writeHead(status, { 'content-type': type, ...(enc ? { 'content-encoding': enc, vary: 'accept-encoding' } : {}) });
    const stream = fs.createReadStream(f);
    return enc ? stream.pipe(enc === 'br' ? zlib.createBrotliCompress() : zlib.createGzip()).pipe(res) : stream.pipe(res);
  };
  for (const t of tries) { const f = path.join(root, t); if (fs.existsSync(f) && fs.statSync(f).isFile()) return send(200, f); }
  const nf = path.join(root, '404.html');
  if (fs.existsSync(nf)) return send(404, nf);
  res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); return res.end('Not found');
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
