/**
 * Homepage copy. Sourced from Person/linkedin profile.md (first person, per its note).
 * Edit freely — components only render what's here.
 */

export const hero = {
  eyebrow: 'Quantum & AI Engineer · Christchurch, Aotearoa New Zealand',
  /** headingAccent is rendered as the single italicised serif phrase. */
  headingStart: 'Translating deep tech into products with ',
  headingAccent: 'durable value',
  headingEnd: '.',
  valueProp:
    'Quantum & AI engineer translating deep tech into scalable, market-fit products.',
  primaryCta: { label: 'Book a conversation' }, // href resolved from site config
  secondaryCta: { label: 'Explore my work', href: '/projects/' },
  portraitAlt:
    'Portrait of Elijah W. Kim, quantum and AI engineer based in Christchurch, New Zealand',
} as const;

export const positioning = {
  eyebrow: 'Who I am',
  body: "I'm a quantum and AI engineer with 15+ years driving digital transformation where deep tech meets durable business value. I translate complex domains — quantum technology, AI/ML — into scalable products that reach real product-market fit, from spatial-computing assistants to global B2B marketplaces serving 22,000+ users. I work at the convergence of quantum readiness, applied AI, and creative technology.",
} as const;

export const focusAreas = [
  {
    title: 'Quantum Readiness',
    description:
      'Coordinating enterprise readiness for emerging quantum technologies.',
  },
  {
    title: 'Applied AI & ML',
    description: 'Azure-based AI/ML systems, from strategy to shipped product.',
  },
  {
    title: 'Product Leadership',
    description:
      'Roadmap development and end-to-end product lifecycle in high-stakes environments.',
  },
  {
    title: 'AI Creativity',
    description:
      'Harmonising human artistry with generative AI for music, visual storytelling, and cinematic workflows.',
  },
] as const;

/**
 * TODO (placeholder): Values — "what I stand for".
 * Wording intentionally left for Eli to supply (may later carry te reo Māori
 * or other framing he provides). Do not invent values language.
 */
export const values = {
  eyebrow: 'What I stand for',
  items: [
    {
      title: '[Value 1 — your wording]',
      description:
        '[Placeholder — a sentence or two in your own words about this principle.]',
    },
    {
      title: '[Value 2 — your wording]',
      description:
        '[Placeholder — a sentence or two in your own words about this principle.]',
    },
    {
      title: '[Value 3 — your wording]',
      description:
        '[Placeholder — a sentence or two in your own words about this principle.]',
    },
  ],
} as const;

/**
 * Approach — derived from Eli's own LinkedIn summary language
 * ("owning the outcome", partnering with engineering leads, end-to-end
 * lifecycle, harmonising artistry with AI). Edit to taste.
 */
export const approach = {
  eyebrow: 'How I work',
  items: [
    {
      title: 'Own the outcome',
      description:
        'I take responsibility for results, not just deliverables — through the whole product lifecycle.',
    },
    {
      title: 'Credible with engineers, strategic with the business',
      description:
        'Technical depth to partner with engineering leads, paired with a strategic product mindset.',
    },
    {
      title: 'End-to-end, in high-stakes environments',
      description:
        'From first roadmap to shipped product, in settings where the details matter.',
    },
    {
      title: 'Human artistry, amplified by AI',
      description:
        'Generative AI in service of human creativity — music, visual storytelling, cinematic workflows.',
    },
  ],
} as const;

export const explore = {
  eyebrow: 'Explore my work',
  cards: [
    {
      title: 'Experience',
      description:
        '15+ years across quantum, AI/ML, product leadership, and global organisations.',
      href: '/experience/',
    },
    {
      title: 'Projects',
      description:
        'Selected work — the problem, the technical approach, and my role in each.',
      href: '/projects/',
    },
    {
      title: 'Writing',
      description: 'Notes and research on quantum, AI, and building products.',
      href: '/writing/',
    },
  ],
} as const;
