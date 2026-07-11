/**
 * Global site configuration.
 * Everything a visitor sees is editable here or in the other files
 * under src/data/ and src/content/ — no component changes needed.
 */
export const site = {
  name: 'Elijah W. Kim',
  preferredName: 'Eli',
  role: 'Quantum & AI Engineer',
  location: 'Christchurch, Aotearoa New Zealand',
  email: 'eli.kim4k@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eli-kim-4k',

  /** TODO (placeholder): Calendly/Zoom scheduler URL.
   *  While empty, every "Book a conversation" button falls back to /contact. */
  schedulerUrl: '',

  /** TODO (placeholder): Formspree endpoint, e.g. https://formspree.io/f/xxxxxxx
   *  While empty, the contact page shows email/LinkedIn only (no broken form). */
  formspreeEndpoint: '',

  titleSuffix: 'Elijah W. Kim — Quantum & AI Engineer',
  defaultDescription:
    'Quantum & AI engineer in Christchurch, New Zealand — translating deep tech into scalable, market-fit products.',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Education', href: '/education/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Writing', href: '/writing/' },
  { label: 'Contact', href: '/contact/' },
] as const;

/** Primary CTA used in the header and hero. */
export const cta = {
  label: 'Book a conversation',
  href: site.schedulerUrl || '/contact/',
} as const;
