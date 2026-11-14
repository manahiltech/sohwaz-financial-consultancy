import type { NavItem } from '../types/content';

export const navItems: NavItem[] = [
{ key: 'nav.home', to: '/' },
{ key: 'nav.about', to: '/about' },
{ key: 'nav.services', to: '/services', mega: 'services' },
{ key: 'nav.management', to: '/management' },
{ key: 'nav.markets', to: '/markets', mega: 'markets' },
{ key: 'nav.contact', to: '/contact' }];


export const logoUrl = "/1650037697411.jpg";

export const contactDetails = {
  phone: '[+965 0000 0000]',
  email: '[enquiries@sohwaz.com]',
  address: ['[Office / Tower name], [Floor]', '[Street], [Area]', 'Kuwait City, State of Kuwait'],
  hours: [
  { days: 'Monday – Friday', time: 'Open' },
  { days: 'Saturday - Sunday', time: 'Closed' }],

  linkedin: 'https://www.linkedin.com/in/sohwaz-holdings-08aa03237/'
};
