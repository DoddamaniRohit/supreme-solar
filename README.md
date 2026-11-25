# SUPREME SOLAR website

React + Vite + Tailwind CSS + React Router + Lucide. Static site, no backend, free to host.
Pages: Home, Products & Services, About, Contact. Enquiries go through WhatsApp (919113221435).

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview
```

## Edit content (no code changes needed)
| What | File |
|---|---|
| Phone, address, hours, map and review links, rating | `src/data/site.js` |
| Products / Services | `src/data/products.js`, `src/data/services.js` |
| Gallery photos | `src/data/gallery.js` |
| Customer reviews | `src/data/reviews.js` |
| FAQs | `src/data/faqs.js` |

### Add real photographs
Copy images into `public/images/` (compress to under ~200 KB, around 1000 px wide) and add `image: '/images/name.jpg'` to a product or service, or `src: '/images/name.jpg'` to a gallery item. Items without a photo show a placeholder illustration.

### Reviews and rating
Only add genuine Google reviews, with the customer's permission, to `reviews.js`. The 4.8 / 147+ rating is hidden until you confirm it on Google and set `rating.verified: true` in `site.js`.

### Domain, sitemap and canonical URLs
Once you know your domain, replace `YOUR-DOMAIN.pages.dev` in `public/sitemap.xml` and `public/robots.txt`. Add an environment variable `VITE_SITE_URL=https://your-domain` (Cloudflare Pages > Settings > Environment variables) to enable canonical tags.

## Deploy: GitHub
```bash
git init && git add . && git commit -m "Supreme Solar website"
git branch -M main
git remote add origin https://github.com/<you>/supreme-solar.git
git push -u origin main
```

## Deploy: Cloudflare Pages (free plan)
1. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git.
2. Select the repository.
3. Framework preset: Vite (or None). Build command: `npm run build`. Output directory: `dist`.
4. Save and Deploy. `public/_redirects` handles page refreshes for client-side routes.
5. Optional: add a custom domain under Custom domains.

## Photos and videos in this project
Real photos are in `public/images/` (photo-XX.jpg) and videos in `public/images/videos/`.
Mapping lives in `src/data/products.js`, `services.js` and `gallery.js`. Products with no photo (coil models, pressurized models, assistant tank, solar lighting, heat pump, tank stand, panels, guarantee) still show illustrations; add `image: '/images/your-photo.jpg'` to replace them.
