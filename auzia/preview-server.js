// Optional local preview only. GitHub Pages serves the static files without this server.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon'};
const port = Number(process.env.PORT || 4173);
http.createServer((req,res)=>{
  const pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname);
  const target = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (!target.startsWith(root + path.sep) && target !== path.join(root,'index.html')) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(target,(err,data)=>{ if(err){res.writeHead(err.code==='ENOENT'?404:500,{'Content-Type':'text/plain; charset=utf-8'});return res.end(err.code==='ENOENT'?'Not found':'Server error');} res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data); });
}).listen(port,'127.0.0.1',()=>console.log(`Static preview: http://127.0.0.1:${port}`));
