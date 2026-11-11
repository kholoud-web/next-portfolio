export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface TechnicalDecision {
  decision: string;
  rationale: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problemStatement: string;
  role: string;
  technicalDecisions: TechnicalDecision[];
  architectureOverview: string;
  challengesAndSolutions: ChallengeSolution[];
  mainFeatures: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export type CaseStudy = ProjectCaseStudy;

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
