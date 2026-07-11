You are helping me build a personal professional website — a calm, editorial,
content-first leadership/portfolio site. Use this reference for tone and structure
only (do NOT copy its text): https://ammar.ansense.nz/

I'm a quantum & AI engineer based in Christchurch, Aotearoa New Zealand, with 15+
years across deep tech, product, and AI/ML. The site should feel grounded, calm,
and credible — not corporate or salesy.

## Content source
My professional content is in `person/linkedin profile.md` in obsidian vault — read it FIRST. It's structured
from my LinkedIn profile and includes name, headline, a first-person bio, focus
areas, experience, education, certifications, skills, and TODO markers. Where a TODO
appears (e.g. role descriptions, project details, scheduler URL), leave a clearly
marked placeholder rather than inventing content, and list every placeholder for me
at the end. Render my bio and copy in FIRST PERSON (the file notes this).

## Tech stack
- Astro + Tailwind CSS (static output). If you think Next.js suits me better, say why
  and let me decide before scaffolding.
- All content in editable data files (Markdown/MDX or a typed `content/` collection)
  so I can update text without touching components.
- Deployable to Cloudflare Pages / Netlify / Vercel with no backend. Include a README
  with run + deploy steps.

## Pages (multi-page, shared nav + footer)
1. Home  2. About  3. Experience  4. Education  5. Projects  6. Writing  7. Contact
Persistent sticky header with nav + a primary CTA button ("Book a conversation" or
"Get in touch"). Footer with social links, email, and copyright.

## Homepage sections (in order)
- Hero: eyebrow label, a large heading with ONE italicised accent phrase, a one-line
  value proposition (from the file), two buttons (primary + secondary), and a
  portrait image (use `public/portrait.jpg`, add a placeholder if missing).
- Positioning: short "who I am / what I do" paragraph with an eyebrow label.
- Focus areas: 3–4 cards from the file (Quantum Readiness, Applied AI & ML, Product
  Leadership, AI Creativity), each a title + 1–2 sentence description.
- Values: a short "what I stand for" section — 3–4 named principles. Leave the exact
  wording as placeholders for me to supply; do NOT insert cultural, personal, or
  values language I haven't given you. (If I later provide te reo Māori or other
  framing, this section will hold it.)
- Approach / principles: 3–4 short named principles (can merge with Values if cleaner).
- Testimonials: a simple carousel/slider (name, role, org, quote). Placeholders if none.
- "Explore my work": 3 link cards → Experience, Projects, Writing.

## Projects page (make this a highlight, not a résumé list)
A grid or stacked layout of project cards, each with: title, one-line tagline, the
problem, the technical approach, my role, tech/tools as tags, and optional links.
Pull project entries from the "Projects" section of `content/linkedin.md`. Those are
drafts I must confirm — render them but flag them as unconfirmed and add placeholders
for images and links. Support a "featured" flag to pin key projects, and let each
project optionally render a longer case-study body from Markdown.

## Design system
- Aesthetic: minimal, editorial, generous whitespace, calm and professional.
- Neutral base palette (off-white background ~#F7F6F3, near-black text) plus ONE
  restrained accent colour — ask me for a preference or pick a muted default.
- Typography: a refined serif or high-quality sans for headings, clean sans for body.
  Variable Google Fonts or self-hosted. Small uppercase letter-spaced eyebrow labels
  above sections.
- Fully responsive, mobile-first. Semantic HTML, good contrast, keyboard-accessible
  nav, alt text on images (WCAG-minded).
- Subtle, tasteful motion only (fade/slide on scroll). No heavy animation.

## Technical requirements
- SEO: per-page <title>, meta description, canonical, Open Graph + Twitter card tags.
  Generate an OG image or wire a placeholder.
- Fast: optimised images, no unused JS, Lighthouse-friendly.
- CTA scheduler link (Calendly/Zoom — placeholder from the file) and a contact method:
  mailto (eli.kim4k@gmail.com) and/or a no-backend form (Formspree; leave endpoint as
  a placeholder).
- Sensible file structure, typed content schemas, clear component names.

## Process
Scaffold the project, then build page by page, pausing after the homepage so I can
review the look before you continue. Before writing content into components, confirm
the structure you extracted from `content/linkedin.md` back to me. Ask me anything you
need (accent colour, fonts, scheduler URL, values wording, which projects to include)
rather than guessing on things that are hard to change later.