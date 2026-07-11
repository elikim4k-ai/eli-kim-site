/**
 * TODO (placeholder): Testimonials — replace with real quotes.
 * The section renders with a visible "placeholder" badge until you do.
 * Set `placeholder: false` on real entries (or delete the flag).
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  org: string;
  placeholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '[Placeholder — a short quote from a colleague, client, or collaborator.]',
    name: '[Name]',
    role: '[Role]',
    org: '[Organisation]',
    placeholder: true,
  },
  {
    quote:
      '[Placeholder — a second quote. Two or three strong voices are enough.]',
    name: '[Name]',
    role: '[Role]',
    org: '[Organisation]',
    placeholder: true,
  },
  {
    quote:
      '[Placeholder — a third quote, ideally from a different context (product, quantum, teaching).]',
    name: '[Name]',
    role: '[Role]',
    org: '[Organisation]',
    placeholder: true,
  },
];
