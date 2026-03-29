export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string; // path relative to public/images/testimonials/ or a fallback emoji/url
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Ennovatorz built our Ayurveda e-commerce platform end to end. The checkout flow, payment integration, and admin panel all worked flawlessly from day one. Very professional team.',
    author: 'Jiaul',
    role: '',
    company: 'Ayurveda Store',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Jiaul'
  },
  {
    quote: 'They handled everything from product catalog to order management. The backend APIs were clean, secure, and well-documented. Highly satisfied with the delivery.',
    author: 'Ram Niwas',
    role: '',
    company: 'Ayurveda Store',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=RamNiwas'
  },
  {
    quote: 'Our dry fish marketplace needed regional logistics and inventory tracking. Ennovatorz nailed every requirement and delivered ahead of schedule. Great experience overall.',
    author: 'Dipankar',
    role: '',
    company: 'Dry Fish Mart',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Dipankar'
  },
  {
    quote: 'The loan portal they built for us handles high volumes of applications with zero downtime. The approval workflow and notifications work exactly as we envisioned.',
    author: 'Sudip',
    role: '',
    company: 'Quick Loans',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Sudip'
  },
  {
    quote: 'Responsive team, clean code, and on-time delivery. They understood our requirements without much back and forth. Would definitely work with them again.',
    author: 'Arvind',
    role: '',
    company: 'TechVentures',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Arvind'
  },
  {
    quote: 'From design to deployment, the entire process was smooth. The team was transparent, communicative, and genuinely invested in making our product a success.',
    author: 'Kavitha',
    role: '',
    company: 'Startup Hub',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Kavitha'
  }
];
