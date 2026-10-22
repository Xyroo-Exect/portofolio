# UI refresh — Neo-brutalism × Glassmorphism

UI portfolio diperbarui dengan kombinasi outline dan offset shadow neo-brutalist, frosted-glass panels, soft ambient gradients, dan layout responsif.

## Menjalankan versi React/Vite

```bash
pnpm install
pnpm dev
```

Source utama:
- `client/src/pages/Home.tsx` — section dan konten portfolio.
- `client/src/components/Navbar.tsx` — navigasi glassmorphism dan menu mobile.
- `client/src/index.css` — style sistem dan breakpoint.

## Deploy versi statis

Root `index.html` menggunakan `assets/portfolio-refresh.css` dan `assets/portfolio-refresh.js`, jadi bisa dilayani langsung dari document root oleh hosting statis/GitHub Pages.

Untuk output React produksi, jalankan `pnpm build`; hasil Vite ditulis ke `dist/public`.
