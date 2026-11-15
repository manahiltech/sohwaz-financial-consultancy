import { Services } from '../../page-components/Services';
import { pageMetadata } from '../../data/metadata';

export const metadata = pageMetadata(
  'Services',
  'Specialized financial advisory services across Treasury, ALM, ALCO, restructuring, real estate, HR, and IT.'
);

export default function Page() { return <Services />; }

