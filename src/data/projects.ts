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
    githubUrl: 'https://github.com/kholoud-mahmoud/upseeds-platform',
    keyFeatures: [
      'Interactive pitch deck review portal with embedded document previews',
      'Deal flow pipeline tracking with multi-stage status management',
      'Dynamic investor matching algorithm based on sector and ticket size',
      'Real-time syndication metrics and funding distribution charts'
    ],
    caseStudy: {
      overview: 'Upseeds was engineered to bridge the communication gap between early-stage founders seeking capital and angel syndicates looking for qualified deal flow. The application delivers an institutional-grade web interface prioritizing data clarity, low latency, and intuitive pipeline navigation.',
      problemStatement: 'Founders frequently face fragmented fundraising workflows—juggling pitch decks across email threads, manual investor follow-ups, and static spreadsheets. Investors need standardized data formats to quickly evaluate pitch submissions without friction.',
      role: 'Lead Frontend Developer responsible for architecting the component hierarchy, state management pipeline, responsive dashboard layouts, and seamless REST API integrations.',
      technicalDecisions: [
        {
          decision: 'Next.js App Router with Server-Driven Layouts',
          rationale: 'Utilized Server Components for data fetching and static asset delivery while isolating interactive dashboard charts and Kanban deal pipelines into modular Client Components.'
        },
        {
          decision: 'Zustand for Global Filter & Pipeline State',
          rationale: 'Replaced heavyweight state containers with lightweight Zustand stores, eliminating unnecessary re-renders across the deal flow pipeline and search filtering bars.'
        },
        {
          decision: 'Tailwind CSS + Custom Token Architecture',
          rationale: 'Designed a unified dark-mode design system with strict color contrast token variables, maintaining high accessibility for financial and analytical data.'
        }
      ],
      architectureOverview: 'The application is structured into decoupled domain modules: authentication & onboarding, startup deal flow, pitch deck viewer, and portfolio performance analytics. State flows unidirectionally from TanStack Query cache layers into UI presentation primitives.',
      challengesAndSolutions: [
        {
          challenge: 'Rendering dense financial telemetry and pipeline funnels without layout shifts or sluggish scrolling on smaller laptop screens.',
          solution: 'Implemented virtualized lists for investor pipelines, optimized SVG rendering with hardware-accelerated transforms, and applied fluid typography scales.'
        },
        {
          challenge: 'Standardizing disparate pitch deck metadata formats submitted by founders.',
          solution: 'Created reusable schema-driven form validation with Zod and React Hook Form, ensuring typed payload contracts before REST API submissions.'
        }
      ],
      mainFeatures: [
        'Multi-column Deal Flow Kanban with drag-and-drop status transitions',
        'Interactive funding distribution pie and area growth charts',
        'Filterable startup directory with multi-tag sector selection',
        'Secure founder-investor private inquiry and meeting scheduler interface'
      ],
      metrics: [
        { label: 'Pipeline Rendering Speed', value: '< 85ms' },
        { label: 'Bundle Footprint Reduction', value: '38%' },
        { label: 'Core Web Vitals Score', value: '98/100' }
      ]
    }
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
    githubUrl: 'https://github.com/kholoud-mahmoud/aurora-ecommerce',
    keyFeatures: [
      'Instant faceted search and multi-attribute filtering (brand, category, price, color)',
      'Persisted shopping bag drawer with optimistic item updates',
      'Accessible keyboard-navigable image gallery and swatch selector',
      'Streamlined multi-step checkout with form validation and order review'
    ],
    caseStudy: {
      overview: 'Aurora is a modern e-commerce web application inspired by high-end Scandinavian design studios. It combines an ultra-clean visual presentation with sub-100ms interaction feedback, providing customers with an intuitive product discovery experience.',
      problemStatement: 'Many modern retail websites suffer from sluggish filtering, cluttered interfaces, and jarring cart drawer shifts that degrade conversion rates and frustrate mobile shoppers.',
      role: 'Frontend Architect & UI Designer responsible for the complete user journey: product catalog, faceted filtering, interactive shopping bag, and checkout forms.',
      technicalDecisions: [
        {
          decision: 'Optimistic State Updates with Zustand',
          rationale: 'Quantity modifications and cart additions reflect instantly on screen with background synchronization, eliminating perceived latency.'
        },
        {
          decision: 'URL-Driven Filter State',
          rationale: 'Synced search queries, price ranges, and active categories to browser URL search parameters, enabling deep-linking and bookmarkable filtered views.'
        },
        {
          decision: 'Atomic Component Architecture',
          rationale: 'Built reusable ProductCard, PriceDisplay, SwatchSelector, and QuantityStepper components used consistently across the home, catalog, and bag drawer.'
        }
      ],
      architectureOverview: 'Built around a composable architecture where the product catalog acts as an independent data consumer. Filtering logic is encapsulated into a custom hook (`useProductFilters`) that interfaces cleanly with URL search params.',
      challengesAndSolutions: [
        {
          challenge: 'Handling simultaneous multi-parameter filters (price slider + category + color + availability) without jank or recalculation bottlenecks.',
          solution: 'Memoized filter pipelines using useMemo and debounced price slider updates to 150ms intervals.'
        },
        {
          challenge: 'Maintaining accessible focus states across the animated slide-over shopping cart drawer.',
          solution: 'Utilized accessible dialog focus traps and keyboard Escape handlers with automated return of focus to triggering buttons.'
        }
      ],
      mainFeatures: [
        'Responsive split-screen product grid with collapsible desktop and mobile filter drawers',
        'Persistent cart state stored with localStorage synchronization',
        'Live subtotal, tax calculation, and promotional code validation',
        'Rich product microdata markup for enhanced search indexing'
      ],
      metrics: [
        { label: 'Filter Interaction Response', value: '42ms' },
        { label: 'Lighthouse Accessibility', value: '100%' },
        { label: 'CLS Layout Shift', value: '0.00' }
      ]
    }
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
    githubUrl: 'https://github.com/kholoud-mahmoud/weatherflow-app',
    keyFeatures: [
      'Real-time atmospheric telemetry and dynamic condition rendering',
      'Hourly forecast visualizer with temperature trends and precipitation probability',
      'Air Quality Index gauge with particulate matter (PM2.5, PM10) breakdowns',
      'Global location autocomplete with browser geolocation auto-detection'
    ],
    caseStudy: {
      overview: 'WeatherFlow is a meteorological dashboard providing detailed current and forecast data in an organized, non-overwhelming visual hierarchy. Built for fast data comprehension across mobile and desktop displays.',
      problemStatement: 'Most consumer weather apps overwhelm users with intrusive advertisements, slow load times, and cluttered visual noise, making simple checks for hourly rain or wind conditions cumbersome.',
      role: 'Sole Frontend Engineer: designed the user interface, created API wrapper clients, configured data caching policies, and implemented responsive layout structures.',
      technicalDecisions: [
        {
          decision: 'TanStack Query for Intelligent API Caching',
          rationale: 'Cached meteorological responses with a 10-minute stale time and background refetching on window focus, drastically lowering external API quotas.'
        },
        {
          decision: 'Dynamic SVG Curves for Hourly Forecasts',
          rationale: 'Rendered lightweight SVG path coordinates directly from temperature data arrays instead of loading heavy charting libraries.'
        },
        {
          decision: 'Debounced City Autocomplete Client',
          rationale: 'Structured geolocation lookup with a 300ms debounce to minimize request thrashing while keeping search feeling instant.'
        }
      ],
      architectureOverview: 'Clean separation between the REST API client layer (`services/weatherApi.ts`), TanStack Query hooks (`hooks/useWeatherQuery.ts`), and purely presentational UI widgets (ForecastCard, AirQualityGauge, WindRadarMap).',
      challengesAndSolutions: [
        {
          challenge: 'Gracefully handling edge cases such as network dropouts, expired API tokens, or unavailable geolocation permissions.',
          solution: 'Constructed contextual error boundaries and user-friendly fallback cards with retry actions and default fallback locations.'
        },
        {
          challenge: 'Converting raw meteorological measurements between imperial and metric systems seamlessly.',
          solution: 'Implemented a localized unit conversion utility hook ensuring consistent numerical rounding across all weather modules.'
        }
      ],
      mainFeatures: [
        '7-day long-range weather outlook with temperature range bars',
        'Animated wind speed and gust vectors with compass orientation',
        'Automatic dark mode theme calibrated for low eye strain',
        'Persistent favorite cities list stored in local browser state'
      ],
      metrics: [
        { label: 'API Response Time', value: '110ms' },
        { label: 'Lighthouse Performance', value: '99/100' },
        { label: 'Zero JavaScript Dependencies', value: 'No chart libs' }
      ]
    }
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
    githubUrl: 'https://github.com/kholoud-mahmoud/syncflow-tasks',
    keyFeatures: [
      'Multi-column Kanban boards with Backlog, To Do, In Progress, Review, and Done workflows',
      'Custom task creation modal with Zod schema validation and deadline pickers',
      'Instant search and priority filtering across all board columns',
      'Sprint completion analytics and real-time progress indicators'
    ],
    caseStudy: {
      overview: 'SyncFlow was developed to deliver an agile, distraction-free board for engineering teams. It emphasizes rapid task manipulation, clear status categorization, and zero unnecessary visual clutter.',
      problemStatement: 'Heavyweight project management suites often suffer from over-complicated feature creep and sluggish boards that slow down fast-paced engineering standups.',
      role: 'Frontend Engineer responsible for board state architecture, custom modal dialogs, form validation workflows, and reusable UI components.',
      technicalDecisions: [
        {
          decision: 'Zustand Store with Immutable Updates',
          rationale: 'Managed task arrays, active sprint filters, and column definitions through a single authoritative store with selective subscriber hooks.'
        },
        {
          decision: 'Zod & React Hook Form Integration',
          rationale: 'Enforced type-safe form definitions for task title, assignee, priority enum, and due date with immediate inline feedback.'
        },
        {
          decision: 'Strict Modular Component Hierarchy',
          rationale: 'Separated TaskCard, ColumnHeader, AddTaskDialog, and FilterToolbar into isolated, independently testable component files.'
        }
      ],
      architectureOverview: 'State is centralized in `src/store/useTaskStore.ts`. Actions for moving tasks, updating priorities, and filtering columns trigger immutable updates that propagate down to granularly subscribed components.',
      challengesAndSolutions: [
        {
          challenge: 'Ensuring zero lag when filtering hundreds of sprint tasks across 6 simultaneous status columns.',
          solution: 'Applied selective Zustand state selectors to prevent unmodified columns and tasks from re-rendering during state updates.'
        },
        {
          challenge: 'Providing accessible keyboard alternatives for moving tasks between columns without drag-and-drop exclusive requirements.',
          solution: 'Implemented quick-action status dropdowns and keyboard shortcuts (M + arrow keys) on each task card.'
        }
      ],
      mainFeatures: [
        'Sprint progress bar calculated dynamically from completed story points',
        'Filterable by assignee avatar, priority badge, and search keyword',
        'Custom task details drawer with checklist and comment threads',
        'Exportable board snapshot to JSON for backup and migration'
      ],
      metrics: [
        { label: 'Task State Transition Latency', value: '16ms (60fps)' },
        { label: 'Form Validation Overhead', value: '< 2ms' },
        { label: 'Test Coverage', value: '92%' }
      ]
    }
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
    githubUrl: 'https://github.com/kholoud-mahmoud/space-tourism',
    keyFeatures: [
      'Multi-destination planetary views with atmospheric data and excursion highlights',
      'Interactive spacecraft schematic with component callouts and technical specifications',
      'Smooth page transitions and micro-interactions powered by Motion',
      'Accessible tab navigation with full keyboard and screen reader support'
    ],
    caseStudy: {
      overview: 'Astra Vox transforms the conceptual excitement of interplanetary commercial travel into a tactile, high-fashion web experience. Combining deep space imagery with precise scientific typography and fluid motion.',
      problemStatement: 'Concept websites often trade visual drama for usability, resulting in broken navigation, poor readability on smaller screens, and missing accessible keyboard controls.',
      role: 'Frontend Developer & Interaction Designer responsible for the design system implementation, motion choreography, responsive layouts, and cross-browser consistency.',
      technicalDecisions: [
        {
          decision: 'Motion for Staggered Visual Reveal Animations',
          rationale: 'Created subtle, hardware-accelerated stagger effects on page navigation that gracefully degrade under prefers-reduced-motion preferences.'
        },
        {
          decision: 'Tabbed Interface Architecture with ARIA Standards',
          rationale: 'Built standard WAI-ARIA tab controls for planetary destinations (Moon, Mars, Europa, Titan) with arrow key navigation.'
        },
        {
          decision: 'Responsive Split-Screen Visual Composition',
          rationale: 'Balanced high-contrast celestial photography against editorial typographic columns using CSS grid and clamp-based spacing.'
        }
      ],
      architectureOverview: 'Structured around dynamic destination, crew, and technology datasets. Data is decoupled from presentation widgets, enabling simple additions of new missions or spacecraft without markup refactoring.',
      challengesAndSolutions: [
        {
          challenge: 'Delivering rich visual textures and cosmic backdrops without causing layout shift or ballooning initial bundle payloads.',
          solution: 'Utilized optimized responsive image delivery, CSS backdrop filters, and subtle ambient gradients instead of heavy video assets.'
        },
        {
          challenge: 'Preserving readability on high-contrast backgrounds with bright planetary photography.',
          solution: 'Engineered measured scrim gradient overlays ensuring minimum 4.5:1 WCAG AA text contrast ratios across all display viewpoints.'
        }
      ],
      mainFeatures: [
        'Interactive Starship specification viewer with cabin layout details',
        'Planetary travel duration, distance, and gravity comparison calculators',
        'Dynamic mission countdown and launch schedule ticker',
        'Fully responsive mobile navigation drawer with backdrop blur'
      ],
      metrics: [
        { label: 'Animation Frame Rate', value: 'Steady 60 FPS' },
        { label: 'Accessible Contrast Ratio', value: '≥ 5.8:1' },
        { label: 'Initial Page Load Time', value: '0.4s' }
      ]
    }
  }
];
