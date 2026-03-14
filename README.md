# AutoRepHero — Marketing Site

**autorephero.com** — The marketing and sales landing page for AutoRepHero.

## Stack

- React 19 + TypeScript
- Vite (static build)
- Tailwind CSS 4
- Deployed on Vercel (static site)

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Output goes to `dist/`. Deploy the `dist/` folder to Vercel or any static host.

## Vercel Deployment

1. Connect this repo in Vercel
2. Framework preset: **Vite**
3. Build command: `pnpm build`
4. Output directory: `dist`
5. Add custom domain: `autorephero.com`

## Key Files

- `src/pages/LandingPage.tsx` — Full marketing landing page
- `src/App.tsx` — Route config (single-page, all routes → LandingPage)
- `src/index.css` — Global styles and Tailwind theme tokens

## Contact

Phone: (509) 818-0787  
Email: info@autorephero.com  
Lead capture: chuck@autorephero.com
