# Potli — Astro

Static Astro + Tailwind rebuild of the Lovable/React project. No React, no client-side state, no Lovable scaffolding.

```
src/
  content/     site.json, home.json, menu.json, story.json, reviews.json, book.json, order.json
  layouts/     Potli.astro          head, nav, footer
  pages/       index, menu, story, book, order
  styles/      global.css
public/
  images/      ← drop the photography here (see below)
  favicon.png
  robots.txt
```

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Deploy to Cloudflare Pages

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 or later |

No adapter is needed — `output: "static"` produces plain HTML.

## Two things to finish

**1. Images.** The Lovable export only contained `.asset.json` pointer files, not the image binaries. Download these from the Lovable project and save them into `public/images/` under exactly these names:

- `potli-logo-transparent.png`
- `potli-interior.avif`
- `potli-exterior.avif`
- `potli-food-3-web.jpg`
- `potli-food-4-web.jpg`
- `butter-chicken-samosa.avif`
- `daal-makhni.avif`
- `img-2983.jpg`

**2. The menu.** The live menu lived in Supabase (`menu_categories`, `menu_items`) and was not in the export — only the schema was. `src/content/menu.json` has the right shape with placeholder dishes. Replace `categories` and `items` with a real export:

```sql
select json_build_object(
  'categories', (select json_agg(c order by c.sort) from menu_categories c),
  'items',      (select json_agg(i order by i.sort) from menu_items i)
);
```

The JSON field names match the database columns exactly, so the result can be pasted straight in. Both `/menu` and `/order` read from this one file.

## Forms

`book.astro` and `order.astro` post to the `formAction` URL set in `src/content/book.json` and `src/content/order.json` — both are `https://formspree.io/f/REPLACE_ME`. Point them at Formspree, a Cloudflare Pages Function, or your own endpoint.

Live availability and the basket total are gone: those needed server functions and client state. The forms collect the same fields and the kitchen confirms by phone.

## Editing content

Everything visible is in `src/content/*.json` — copy, prices, hours, nav, addresses, SEO titles, review quotes, press list. The `.astro` files hold structure and styling only.

## Design tokens

Colours and fonts are in `tailwind.config.mjs`; the bespoke utilities (`sign-panel`, `hard-shadow`, `torn-note`, `heading-rule`, `signboard-address`, `jute`, `marquee-track`, `edge-notched`) are in `src/styles/global.css`. Both carry the original palette comment.
