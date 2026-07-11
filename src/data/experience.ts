/**
 * Experience — from LinkedIn export (titles, orgs, dates only).
 * Each `description` marked TODO is a placeholder for Eli to fill;
 * placeholders render as a subtle "details to come" note, never as real copy.
 */
export interface Role {
  title: string;
  org: string;
  start: string;
  end: string;
  location?: string;
  /** 1–2 lines of accomplishment. Empty string = renders a placeholder note. */
  description: string;
}

export const roles: Role[] = [
  {
    title: 'Head of WISER Insider (Quantum)',
    org: 'The Washington Institute for STEM, Entrepreneurship and Research',
    start: 'Jan 2026',
    end: 'Present',
    location: 'Washington, DC',
    description: '', // TODO
  },
  {
    title: 'Artificial Intelligence Consultant',
    org: 'Skills Union',
    start: 'Sep 2025',
    end: 'Present',
    location: 'Singapore',
    description: '', // TODO
  },
  {
    title: 'Director',
    org: 'Deel',
    start: 'Aug 2023',
    end: 'Dec 2025',
    description: '', // TODO
  },
  {
    title: 'Founder',
    org: 'Qaankunka AI',
    start: 'Aug 2022',
    end: 'Dec 2025',
    description: '', // TODO
  },
  {
    title: 'AI Project Lead (Microsoft AI School)',
    org: 'Microsoft',
    start: 'May 2024',
    end: 'Nov 2024',
    location: 'Seoul, South Korea',
    description: '', // TODO
  },
  {
    title: 'Chief Strategy Officer',
    org: 'Ushuaia AI',
    start: 'Jan 2022',
    end: 'May 2024',
    location: 'Seoul, South Korea',
    description: '', // TODO
  },
  {
    title: 'Consultant (ICT)',
    org: 'Samsung Electronics',
    start: 'Nov 2018',
    end: 'May 2021',
    description: '', // TODO
  },
  {
    title: 'ICT Specialist',
    org: 'United Nations',
    start: 'Jun 2015',
    end: 'Oct 2018',
    description: '', // TODO
  },
  {
    title: 'Program Coordinator (ICT)',
    org: 'The State University of New York',
    start: 'Feb 2013',
    end: 'May 2015',
    description: '', // TODO
  },
  {
    title: 'ICT Officer',
    org: 'Republic of Korea Air Force',
    start: 'Sep 2009',
    end: 'Dec 2012',
    description: '', // TODO
  },
];
