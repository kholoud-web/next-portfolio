import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'Educational APP',
    slug: 'Educational APP',
    title: 'Edunexa',
    subtitle: 'Startup & Angel Investor Networking Platform',
    description: 'A comprehensive platform connecting seed-stage startups, accredited investors, and entrepreneurs with streamlined pitch decks, real-time deal flow, and syndication tracking.',
    image: '/images/Edunexa.png',
    category: 'Full-Stack & Web Apps',
    featured: true,
    technologies: ['React', 'Tailwind CSS', 'Redux', 'REST APIs', 'Lucide React'],
    liveUrl: 'https://edunexa-v1.vercel.app',
    githubUrl: 'https://github.com/lamadarawsheh/EduNEXA.git'
  },
  {
    id: 'Communication Platform',
    slug: 'communication-platform',
    title: 'Inovents',
    subtitle: 'Modern Minimalist Shopping Experience',
    description: 'An editorial shopping platform featuring instant faceted filtering, dynamic price range queries, real-time slide-over cart drawer management, and an accessible checkout flow.',
    image: '/images/inovents.png',
    category: 'Full-Stack & Web Apps',
    featured: true,
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Motion'],
    liveUrl: 'https://inovents.net/',
    githubUrl: 'https://github.com/kholoud-web/Inovents.git'
  },

  {
    id: 'Furniture E-commerce App',
    slug: 'furniture-ecommerce-app',
    title: 'FurniStyle',
    subtitle: 'Modern Furniture E-commerce Platform',
    description: 'A sleek, user-friendly furniture e-commerce platform with intuitive browsing, advanced search, and seamless checkout experiences.',
    image: '/images/Furino.png',
    category: 'E-Commerce',
    featured: true,
    technologies: ['React.js', 'Tailwind CSS', 'Motion'],
    liveUrl: 'https://e-commerce-furniture-zeta.vercel.app',
    githubUrl: 'https://github.com/kholoud-web/E-commerce-Furniture.git'
  },
    {
    id: 'landing-page',
    slug: 'landing-page',
    title: 'Dar-Realestate',
    subtitle: 'Modern Landing Page for Real Estate',
    description: 'A sleek, user-friendly landing page for a real estate company, showcasing properties with intuitive browsing, advanced search, and seamless contact experiences.',
    image: '/images/Dar.png',
    category: 'Interactive Experience',
    featured: true,
    technologies: ['React.js', 'Tailwind CSS', 'Motion'],
    liveUrl: 'https://real-estate-langing-page.vercel.app',
    githubUrl: 'https://github.com/kholoud-web/Real-EstateLangingPage.git'
  }
];
