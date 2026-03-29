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
    quote: 'Honestly didn\'t expect this level of quality from an agency. They built our entire Ayurveda store — product pages, cart, payments, everything. Launched on time and barely had any issues after go-live.',
    author: 'Jiaul',
    role: '',
    company: 'Ayurveda Store',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Jiaul'
  },
  {
    quote: 'We had a tight budget and even tighter deadline. Ennovatorz worked with us on both. The admin panel they built saves us hours every week managing orders and inventory.',
    author: 'Ram Niwas',
    role: '',
    company: 'Ayurveda Store',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=RamNiwas'
  },
  {
    quote: 'Getting an online store for dry fish products built was not easy to explain but they got it immediately. Handled the inventory, orders, and delivery tracking without any issues. Happy with the result.',
    author: 'Dipankar',
    role: '',
    company: 'Dry Fish Mart',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Dipankar'
  },
  {
    quote: 'Our loan application volume is high and we needed something reliable. The system they built has been running for months without a single major issue. Support was also quick whenever we had questions.',
    author: 'Sudip',
    role: '',
    company: 'Quick Loans',
    rating: 4.5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Sudip'
  },
  {
    quote: 'Good communication throughout the project. They kept us updated at every step and didn\'t disappear after delivery. Small bugs were fixed quickly. Overall a solid team to work with.',
    author: 'Arvind',
    role: '',
    company: 'TechVentures',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Arvind'
  },
  {
    quote: 'We were a early stage startup with a lot of changing requirements. They were patient and flexible. The final product looked great and worked well. Would recommend to anyone starting out.',
    author: 'Kavitha',
    role: '',
    company: 'Startup Hub',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Kavitha'
  }
];
