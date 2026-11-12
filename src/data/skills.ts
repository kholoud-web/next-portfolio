import { SkillCategory } from '../types/skill';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Core',
    description: 'Modern component-driven web development with type safety and state-of-the-art framework primitives.',
    skills: [
      { name: 'React.js', highlight: true, level: 'Advanced' },
      { name: 'Next.js (App Router)', highlight: true, level: 'Advanced' },
      { name: 'TypeScript', highlight: true, level: 'Advanced' },
      { name: 'JavaScript (ES6+)', highlight: false, level: 'Expert' },
      { name: 'HTML5 Semantic', highlight: false, level: 'Expert' },
      { name: 'CSS3 / Modern Layouts', highlight: false, level: 'Expert' }
    ]
  },
  {
    id: 'styling',
    name: 'Styling & Design Systems',
    description: 'Crafting responsive, high-fidelity UI systems with zero-slop discipline and accessible interaction tokens.',
    skills: [
      { name: 'Tailwind CSS', highlight: true, level: 'Expert' },
      { name: 'shadcn/ui', highlight: true, level: 'Advanced' },
      { name: 'Material UI (MUI)', highlight: false, level: 'Proficient' },
      { name: 'Bootstrap', highlight: false, level: 'Proficient' },
      { name: 'Responsive Layouts (360px–4k)', highlight: true, level: 'Expert' }
    ]
  },
  {
    id: 'state-management',
    name: 'State Management & Caching',
    description: 'Predictable, performant client and server state synchronization without unnecessary re-renders.',
    skills: [
      { name: 'Zustand', highlight: true, level: 'Advanced' },
      { name: 'TanStack Query', highlight: true, level: 'Advanced' },
      { name: 'React Context API', highlight: false, level: 'Expert' },
      { name: 'Client Cache Invalidation', highlight: false, level: 'Proficient' }
    ]
  },
  {
    id: 'forms-validation',
    name: 'Forms & Schema Validation',
    description: 'Type-safe user input pipelines with instant validation feedback and seamless payload contracting.',
    skills: [
      { name: 'React Hook Form', highlight: true, level: 'Advanced' },
      { name: 'Zod Validation Schemas', highlight: true, level: 'Advanced' },
      { name: 'Accessible Form Controls', highlight: false, level: 'Advanced' }
    ]
  },
  {
    id: 'tools-workflows',
    name: 'Tooling, APIs & Workflows',
    description: 'End-to-end frontend development workflows, versioning, collaborative design, and network integration.',
    skills: [
      { name: 'REST API Integration', highlight: true, level: 'Advanced' },
      { name: 'Git & GitHub', highlight: true, level: 'Advanced' },
      { name: 'Figma to Code Implementation', highlight: true, level: 'Advanced' },
      { name: 'Vite & Next Build Tooling', highlight: false, level: 'Proficient' },
      { name: 'Chrome DevTools & Profiling', highlight: false, level: 'Proficient' }
    ]
  }
];

export const professionalStrengths = [
  {
    title: 'Responsive UI Development',
    description: 'Mobile-first design precision guaranteeing pixel perfection from 360px phones to ultra-wide displays without horizontal overflow.'
  },
  {
    title: 'Component-Based Architecture',
    description: 'Designing modular, single-responsibility components with strict TypeScript contracts that are effortless to test and scale.'
  },
  {
    title: 'Reusable Design Systems',
    description: 'Building cohesive token palettes, fluid typography, and accessible UI kits that maintain consistency across large applications.'
  },
  {
    title: 'REST API Integration',
    description: 'Resilient data fetching with optimistic updates, caching strategies, and graceful error boundary handling.'
  },
  {
    title: 'Performance Optimization',
    description: 'Zero unnecessary re-renders, tree-shaken bundles, image optimization, and sub-100ms interaction feedback.'
  },
  {
    title: 'Accessibility (a11y)',
    description: 'WCAG AA compliance, semantic HTML landmarks, full keyboard navigation, screen reader testing, and visible focus rings.'
  },
  {
    title: 'Clean & Maintainable Code',
    description: 'Applying SOLID principles, consistent naming, self-documenting code, and zero mechanical dead weight.'
  }
];
