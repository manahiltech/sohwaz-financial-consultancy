import { Home } from '../page-components/Home';
import { pageMetadata } from '../data/metadata';

export const metadata = pageMetadata(
  'Independent Financial Advisory',
  'Strategic financial and investment advisory across the Middle East and Pakistan.'
);

export default function Page() { return <Home />; }
