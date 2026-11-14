import type { NavItem } from '../types/content';

export const navItems: NavItem[] = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.services', to: '/services' },
  { key: 'nav.consultancy', to: '/consultancy' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.contact', to: '/contact' },
];

export const logoUrl = "/assets/eagle-logo.png";

export const contactDetails = {
  email: 'enquiries@sohwaz.com',
  secondaryEmail: 'sohwazfincons@gmail.com',
  emails: ['enquiries@sohwaz.com', 'sohwazfincons@gmail.com'],
  hours: [
    { days: 'Monday – Friday', time: 'Open' },
    { days: 'Saturday - Sunday', time: 'Closed' },
  ],
  linkedin: 'https://www.linkedin.com/in/sohwaz-holdings-08aa03237/',
};
