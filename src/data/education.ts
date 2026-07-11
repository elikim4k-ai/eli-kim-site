export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  start: string;
  end: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Master's",
    field: 'Quantum Computing',
    institution: 'Universidad Politécnica de Madrid',
    start: 'May 2025',
    end: 'Jun 2026',
  },
  {
    degree: 'Postgraduate',
    field: 'Artificial Intelligence & Machine Learning',
    institution: 'Caltech',
    start: 'Jan 2025',
    end: 'Jun 2025',
  },
  {
    degree: 'Advanced Management Program (AMP)',
    field: 'Information Technology',
    institution: 'Cheung Kong Graduate School of Business',
    start: 'Mar 2022',
    end: 'Jun 2022',
  },
  {
    degree: "Master's",
    field: 'Innovation and Entrepreneurship',
    institution: 'HEC Paris',
    start: 'Feb 2020',
    end: 'Mar 2021',
  },
  {
    degree: "Bachelor's",
    field: 'Regional Development (GIS & Remote Sensing)',
    institution: 'University of Arizona',
    start: 'Aug 2005',
    end: 'Dec 2008',
  },
];

export const certifications = [
  {
    name: 'Microsoft Certified: Azure AI Fundamentals',
    detail: 'Score 918/1000',
  },
];

export const skills = [
  'Sales Enablement',
  'Training and Development',
  'Digital Transformation',
];
