import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'upseeds',
    slug: 'upseeds-platform',
    title: 'Upseeds',
    subtitle: 'Startup & Angel Investor Networking Platform',
    description: 'A comprehensive platform connecting seed-stage startups, accredited investors, and entrepreneurs with streamlined pitch decks, real-time deal flow, and syndication tracking.',
    image: '/src/assets/images/upseeds_platform_1793650027549.jpg',
    category: 'Full-Stack & Web Apps',
    featured: true,
    technologies: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Zustand', 'REST APIs', 'Lucide React'],
    liveUrl: 'https://upseeds.example.com',
    githubUrl: 'https://github.com/kholoud-mahmoud/upseeds-platform'
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-platform',
    title: 'Aurora Luxury E-Commerce',
    subtitle: 'Modern Minimalist Shopping Experience',
    description: 'An editorial shopping platform featuring instant faceted filtering, dynamic price range queries, real-time slide-over cart drawer management, and an accessible checkout flow.',
    image: '/src/assets/images/ecommerce_platform_1793650027884.jpg',
    category: 'E-Commerce',
    featured: true,
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Motion'],
    liveUrl: 'https://aurora-store.example.com',
    githubUrl: 'https://github.com/kholoud-mahmoud/aurora-ecommerce'
  },
  {
    id: 'weather',
    slug: 'weather-application',
    title: 'WeatherFlow',
    subtitle: 'Dynamic Meteorological Intelligence App',
    description: 'A responsive weather dashboard integrating real-time weather APIs, hourly temperature curves, UV and air quality indices, interactive wind radar vectors, and global city search.',
    image: '/src/assets/images/weather_app_1793650028724.jpg',
    category: 'Dashboard & API',
    featured: true,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST API Integration', 'TanStack Query'],
    liveUrl: 'https://weatherflow.example.com',
    githubUrl: 'https://github.com/kholoud-mahmoud/weatherflow-app'
  },
  {
    id: 'task-management',
    slug: 'task-management-app',
    title: 'SyncFlow',
    subtitle: 'Agile Task & Sprint Management System',
    description: 'A focused project management application featuring reusable component systems, Kanban sprint columns, priority tag filters, task search, and reactive state management.',
    image: '/src/assets/images/task_management_app_1793650030123.jpg',
    category: 'Full-Stack & Web Apps',
    featured: true,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Hook Form', 'Zod'],
    liveUrl: 'https://syncflow.example.com',
    githubUrl: 'https://github.com/kholoud-mahmoud/syncflow-tasks'
  },
  {
    id: 'space-tourism',
    slug: 'space-tourism-website',
    title: 'Astra Vox',
    subtitle: 'Interactive Space Tourism & Planetary Discovery',
    description: 'An immersive, multi-page space exploration website showcasing destination guides to Moon and Mars, interactive spacecraft technical specifications, crew dossiers, and booking flows.',
    image: '/src/assets/images/space_tourism_web_1793650029109.jpg',
    category: 'Interactive Experience',
    featured: true,
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    liveUrl: 'https://astravox-space.example.com',
    githubUrl: 'https://github.com/kholoud-mahmoud/space-tourism'
  }
];
