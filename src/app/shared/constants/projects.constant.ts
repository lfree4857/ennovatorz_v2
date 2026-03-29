export interface Project {
  title: string;
  category: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  techStack: string[];
  impact: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'PuratanAyurveda',
    category: 'Web Apps',
    shortDesc: 'An e-commerce platform for Ayurveda products with secure payments and order management.',
    challenge: 'Needed a secure and scalable system to manage products, users, and high-volume transactions along with smooth checkout experience.',
    solution: 'Developed complete backend APIs for authentication, product catalog, cart, and order handling. Integrated secure payment processing and automated notifications for order lifecycle. Implemented encryption mechanisms for API security and admin controls for CMS and product management.',
    techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
    impact: 'Improved order processing efficiency and ensured secure transactions with seamless user experience.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Healthcare Consultation System',
    category: 'Web Apps',
    shortDesc: 'A virtual healthcare platform enabling video consultations, chat, and digital prescriptions.',
    challenge: 'Required real-time communication, secure patient data handling, and smooth appointment scheduling system.',
    solution: 'Built a full-featured platform supporting video consultations, real-time chat, prescription generation, and payment integration. Developed an admin panel for managing doctors, patients, appointments, and reports with automated notifications.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    impact: 'Enabled efficient remote healthcare services with improved patient engagement and streamlined operations.',
    gradient: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Dry Fish E-Commerce System',
    category: 'Web Apps',
    shortDesc: 'An online marketplace for dry fish products with complete order and inventory management.',
    challenge: 'Needed to handle regional logistics, inventory tracking, and smooth user experience for online purchases.',
    solution: 'Developed a robust backend with product management, cart, checkout, and order tracking features. Implemented secure payment integration and admin panel for managing inventory and orders efficiently.',
    techStack: ['PHP', 'Laravel', 'MySQL', 'Angular'],
    impact: 'Streamlined online sales process and improved inventory visibility for business operations.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    title: 'Loan Management System',
    category: 'Enterprise',
    shortDesc: 'A digital loan management system for quick loan processing and approvals.',
    challenge: 'Required fast processing of loan applications with secure data handling and approval workflows.',
    solution: 'Built a system to handle loan applications, verification workflows, and approval processes with automated notifications and tracking. Ensured secure handling of sensitive financial data.',
    techStack: ['React', 'PHP', 'Laravel', 'MySQL'],
    impact: 'Reduced loan processing time and improved operational efficiency for financial services.',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    title: 'BDrive Portal',
    category: 'SaaS',
    shortDesc: 'A cloud-based file storage and sharing platform similar to Google Drive.',
    challenge: 'Needed scalable file storage, secure access control, and efficient file sharing capabilities.',
    solution: 'Developed a platform for uploading, storing, and sharing files with role-based access and secure authentication. Implemented folder management, file preview, and sharing features for collaboration.',
    techStack: ['Angular', 'Node.js', 'Laravel', 'MySQL'],
    impact: 'Enabled secure and efficient file management and collaboration for users.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'College Management System',
    category: 'Web Apps',
    shortDesc: 'A comprehensive college platform with payment gateway, student registration, and blog management.',
    challenge: 'Required a feature-rich platform to handle student registrations, fee payments, and content management for a college institution.',
    solution: 'Created a comprehensive college platform with payment gateway integration, student registration workflows, and a blog management system with a full-featured admin panel.',
    techStack: ['PHP','Laravel', 'MySQL'],
    impact: 'Streamlined student registration and fee collection while improving content management for the institution.',
    gradient: 'from-cyan-500 to-sky-600',
  }
];  

export const PROJECT_CATEGORIES = ['All', 'SaaS', 'Web Apps', 'Enterprise'];
