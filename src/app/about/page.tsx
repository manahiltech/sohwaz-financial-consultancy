import { About } from '../../page-components/About';
import { pageMetadata } from '../../data/metadata';

export const metadata = pageMetadata(
  'About',
  'Sohwaz Financial Consultants provides strategic financial and investment advisory led by Sohail Nawaz.'
);

export default function Page() { return <About />; }

