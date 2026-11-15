import { Contact } from '../../page-components/Contact';
import { pageMetadata } from '../../data/metadata';

export const metadata = pageMetadata(
  'Contact',
  'Contact Sohwaz Financial Consultants for a confidential conversation about your financial objectives.'
);

export default function Page() { return <Contact />; }

