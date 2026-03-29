export interface TechItem {
  name: string;
  icon: string;
  color?: string;
}

export interface TechCategory {
  name: string;
  description: string;
  items: TechItem[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    name: 'Frontend',
    description: 'Building responsive, accessible, and performant user interfaces.',
    items: [
      { name: 'React', icon: '⚛️', color: '#61DAFB' },
      { name: 'Angular', icon: '🅰️', color: '#DD0031' },
      { name: 'Next.js', icon: '▲', color: '#ffffff' },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: '🌊', color: '#06B6D4' },
      { name: 'Framer Motion', icon: '⚡' },
    ],
  },
  {
    name: 'Backend',
    description: 'Developing scalable, secure, and robust server-side architectures.',
    items: [
      { name: 'Node.js', icon: '🟢', color: '#339933' },
      { name: 'Spring Boot', icon: '🍃', color: '#6DB33F' },
      { name: 'Express', icon: '🚂', color: '#ffffff' },
      { name: 'NestJS', icon: '🐱', color: '#E0234E' },
      { name: 'Go', icon: '🐹' },
      { name: 'Python', icon: '🐍' },
    ],
  },
  {
    name: 'Databases',
    description: 'Designing optimized schemas and managing high-volume data storage.',
    items: [
      { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
      { name: 'MongoDB', icon: '🍃', color: '#47A248' },
      { name: 'Redis', icon: '🔴', color: '#DC382D' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'Elasticsearch', icon: '🔍' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    description: 'Automating deployments and managing highly available infrastructure.',
    items: [
      { name: 'AWS', icon: '☁️', color: '#FF9900' },
      { name: 'Docker', icon: '🐳', color: '#2496ED' },
      { name: 'Kubernetes', icon: '☸️', color: '#326CE5' },
      { name: 'GitHub Actions', icon: '🐙' },
      { name: 'Terraform', icon: '🏗️' },
      { name: 'Vercel', icon: '▲' },
    ],
  },
];
