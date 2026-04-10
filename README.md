# feen.ma — Marrakech Preview

Private preview build for **feen.ma**, a menu-first dining guide starting with Marrakech.

## What is included

- Bilingual homepage (English + Arabic)
- Listings page with bilingual filters and search
- Neighborhood pages
- Individual venue pages
- User account preview page
- Admin workspace preview page
- Owner claim page
- Local saved-venues behavior for the preview account
- Static export compatible with GitHub Pages

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4

## Local run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is exported to `out/`.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy-pages.yml`.

Recommended repo setup:

1. Keep the repository private
2. In GitHub repo settings, enable **Pages** and set source to **GitHub Actions**
3. Push to `main`

The workflow builds the site and deploys it to GitHub Pages using the repository name as the base path.

## Notes

- Current listings are a **preview dataset**, not a live verified database yet
- Account and admin flows are implemented as a polished front-end preview with browser-local state
- The next version should wire real auth, roles, claims, uploads, and verification workflows to a live backend
