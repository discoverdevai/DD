#!/usr/bin/env node
// Minimal static server for dist/ with clean URLs (/about -> about.html) and real 404s.
// Usage: node qa/serve.mjs [dist] [port=4321]
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(process.argv[2] || 'dist'); const port = +(process.argv[3] || 4321);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.ico': 'image/x-icon' };
http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.includes('..')) { res.writeHead(400); return res.end(); }
  const tries = p.endsWith('/') ? [p + 'index.html'] : [p, p + '.html', p + '/index.html'];
  for (const t of tries) { const f = path.join(root, t); if (fs.existsSync(f) && fs.statSync(f).isFile()) { res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); return fs.createReadStream(f).pipe(res); } }
  const nf = path.join(root, '404.html'); res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
  return fs.existsSync(nf) ? fs.createReadStream(nf).pipe(res) : res.end('Not found');
}).listen(port, () => console.log(`serving ${root} on http://localhost:${port}`));
