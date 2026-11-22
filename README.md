# Hadi Heydari: personal site and weekly notes

Astro 5 + Tailwind CSS 4, fully static, ready for Cloudflare Pages. Light and dark themes follow the visitor’s system setting.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview
```

## Add a weekly post

Create `src/content/news/YYYY-MM-DD-week-NN.md`:

```md
---
title: "Weekly Engineering & AI Notes - Week 48"
date: "2026-11-29"
summary: "One or two sentences shown in the expandable list."
---

Markdown body here.
```

The site shows the 10 newest posts by `date`. Older files stay in the repo but get no page.
The file name (without `.md`) becomes the URL: `/news/2026-11-29-week-48/`.

## Deploy to Cloudflare Pages

Push to GitHub or GitLab, then Workers & Pages > Create > Pages > Connect to Git.

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable (optional): `NODE_VERSION=22`

Every push (including a new `.md` file) triggers a rebuild and publishes the new post.

## Edit your details

Everything personal is in `src/data/profile.ts`. Add your LinkedIn and Xing URLs there.
