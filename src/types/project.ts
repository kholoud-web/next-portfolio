export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  role: string;
  technicalDecisions: {
    decision: string;
    rationale: string;
  }[];
  architectureOverview: string;
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  mainFeatures: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'Full-Stack & Web Apps' | 'E-Commerce' | 'Dashboard & API' | 'Interactive Experience';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
  caseStudy: ProjectCaseStudy;
}
