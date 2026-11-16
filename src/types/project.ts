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
}
