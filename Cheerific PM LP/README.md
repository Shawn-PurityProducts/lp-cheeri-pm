# Cheerific™ Landing Page

A static landing page built with HTML, CSS, and JSX (via Babel CDN — no build step required).

## What's inside

```
index.html                      ← entry point, brand tokens, analytics + Shopify config
components/                     ← mobile React components (.jsx)
components-desktop/             ← desktop React components (.jsx)
assets/                         ← all images
```

The page renders **two parallel React trees** — a mobile design and a desktop design — and toggles between them at the **1024px breakpoint** via CSS `display: none`.

## Local preview

The page uses `<script type="text/babel" src="...">` which requires HTTP serving (not `file://`). From the project root:

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173/

## Deploying

Pure static files — drop the entire folder into any static host:

- **Vercel**: `npx vercel --prod` from the project root
- **Netlify**: drag the folder to https://app.netlify.com/drop
- **Cloudflare Pages**: connect a Git repo or upload via dashboard
- **AWS S3 + CloudFront**: upload as static site
- **GitHub Pages**: push to a repo, enable Pages

No build step. No `npm install`. Just HTML/CSS/JS over HTTP.

## Where things live

### Shopify checkout config

`index.html` near the top:

```js
window.CHEERI_SHOP = {
  domain: 'https://www.cheerific.com',
  variantId: '51477251424554',
  subscriptionPlanId: '10359177514',
  ...
};
```

All buy CTAs (mobile + desktop) read from this single object.

### UTM forwarding

`window.CHEERI_SHOP.checkoutUrl(plan)` reads any `utm_*` query parameter from the landing page URL and forwards it to the Shopify checkout. Example:

```
https://yourpage.com/?utm_source=facebook&utm_campaign=q4_keto
↓ (user clicks Add to Cart)
https://www.cheerific.com/.../checkout?utm_source=facebook&utm_campaign=q4_keto
```

Anything starting with `utm_` (case-insensitive) flows through — your standard 5, plus `utm_id` or any custom ones your ads pass.

### Analytics tags

`index.html` `<head>`:

- **Microsoft Clarity** (`rccp7p3qum`)
- **Meta Pixel** (`7161920017238575`) — fires `PageView` on every load
- **Google Tag** (`GT-NBJFM83X`)

All three fire identically on mobile and desktop.

### Copy

- **Mobile**: `components/*.jsx` (Hero, Intro, Reasons, CloseOffer, Buy, Testimonials, Faq, FinalCta, Footer)
- **Desktop**: `components-desktop/*Desktop.jsx` (HeroDesktop, ReasonsDesktop, CloseOfferDesktop, BuyDesktop, IngredientsDesktop, TestimonialsFinalFooterDesktop)

The two trees have separate copy — edits to one don't affect the other.

### Markdown helpers

The `richify` utility (defined in `index.html`) processes string-passed copy and renders:

- `**bold**` → `<strong>`
- `*italic*` → `<em>`
- `***bold-italic***` → `<strong><em>`
- Auto-inserts a styled `™` superscript after every "Cheerific"

Used in body arrays of Reasons / FAQ / Testimonials. Inline JSX literals use `<strong>` / `<em>` / `<sup className="tm">™</sup>` directly.

### Brand tokens

CSS variables at the top of `index.html` `<style>`:

```css
--paper, --paper-2, --paper-3, --paper-4    /* background tones */
--ink, --ink-soft, --ink-mid                /* text colors */
--accent                                    /* chocolate brown — primary CTA */
--green, --green-deep, --brand-green        /* greens (brand-green is the loud one) */
--sky, --sky-deep                           /* blues */
--font-display, --font-sans                 /* Rubik + DM Sans via Google Fonts */
```

## Notes

- **Dev cache-busting**: `index.html` includes a small inline script that stamps `?_t=<timestamp>` on every JSX `<script src>` so browser cache doesn't hold stale code during iteration. Safe in production.
- **Dependencies load from CDN**: React, ReactDOM, and Babel-standalone come from `unpkg.com`. Pin those URLs if you want offline / air-gapped operation.

## Browser support

Tested on current Chrome, Safari, Firefox, and Edge. Uses modern CSS (`aspect-ratio`, `text-wrap: balance`, `box-shadow` offset for sticker effect).
