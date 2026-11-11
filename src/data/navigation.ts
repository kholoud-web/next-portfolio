export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' }
];

export const developerInfo = {
  name: 'Kholoud Mahmoud',
  title: 'Frontend Developer | React & Next.js Specialist',
  shortBio: 'Frontend Developer focused on building modern, responsive, accessible, and high-performance web applications.',
  email: 'kholud.mahmoud62@gmail.com',
  whatsapp: '201014500049', // international format without + or spaces for wa.me link
  whatsappFormatted: '+20 10 1450 0049',
  github: 'https://github.com/kholoud-web',
  linkedin: 'www.linkedin.com/in/kholoud-mahmoud-537588172',
  location: 'Available for Remote & Relocation',
  availabilityStatus: 'Available for select frontend engineering roles & freelance collaborations',
  yearsOfFocus: '1+ Years',
  coreStack: ['React', 'Next.js', 'TypeScript', 'Restful APIs']
};
