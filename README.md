# elikim — personal site

Calm, editorial, content-first portfolio site for **Elijah W. Kim** — quantum & AI
engineer, Christchurch, Aotearoa New Zealand.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).
Fully static — no backend, no client JS except the mobile menu, scroll reveal, and
testimonial slider.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the built site locally
```

## Where the content lives

You never need to touch components to change copy.

| What | File |
| --- | --- |
| Name, email, LinkedIn, scheduler URL, Formspree endpoint | `src/data/site.ts` |
| Homepage (hero, positioning, focus areas, values, approach, explore) | `src/data/home.ts` |
| About page paragraphs | `src/data/about.ts` |
| Experience roles + descriptions | `src/data/experience.ts` |
| Education, certifications, skills | `src/data/education.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Projects (one Markdown file each, typed frontmatter + optional case-study body) | `src/content/projects/*.md` |
| Writing entries (set `externalUrl` for pieces published elsewhere) | `src/content/writing/*.md` |
| Design tokens (colours, fonts) | `src/styles/global.css` (`@theme` block) |

### Projects frontmatter

```yaml
title, tagline, problem, approach, role   # strings
tags: []                                  # rendered as pill tags
links: [{ label, url }]
featured: true                            # pins to top of grid + badge
unconfirmed: true                         # shows "Draft — unconfirmed" badge
image: /projects/foo.jpg                  # path under public/; empty = placeholder
order: 1                                  # sort within featured/non-featured
```

## Deploy (no backend needed)

The build output is plain static files in `dist/`.

**Cloudflare Pages** — connect the repo; build command `npm run build`, output
directory `dist`. Or `npx wrangler pages deploy dist`.

**Netlify** — connect the repo; build command `npm run build`, publish directory
`dist`. Or `npx netlify deploy --prod --dir=dist`.

**Vercel** — `npx vercel` in this directory; the Astro preset is detected
automatically (output `dist`).

After choosing a domain, set it in `astro.config.mjs` (`SITE_URL`) so canonical
URLs, Open Graph tags, and the sitemap are correct.

## Placeholders still to fill (checklist)

- [ ] `public/portrait.jpg` — currently a generated placeholder; drop in a real
      portrait (4:5 ratio, ≥800×1000)
- [ ] `public/og-default.png` — generated placeholder OG image; replace when
      branding is settled
- [ ] `SITE_URL` in `astro.config.mjs` — real domain
- [ ] `schedulerUrl` in `src/data/site.ts` — Calendly/Zoom link ("Book a
      conversation" falls back to /contact until set)
- [ ] `formspreeEndpoint` in `src/data/site.ts` — contact form stays hidden until set
- [ ] Values wording in `src/data/home.ts` — 3 placeholders, your words only
- [ ] Testimonials in `src/data/testimonials.ts` — 3 placeholder quotes
- [ ] Role descriptions in `src/data/experience.ts` — all 10 are TODO
- [ ] Project details in `src/content/projects/*.md` — all 3 entries are seeded
      drafts marked "unconfirmed" (KaiLoop, Quantum Ecosystem Map, QUBO)
- [ ] Writing entries — `src/content/writing/placeholder-first-post.md` is a
      draft stub; replace with real pieces
