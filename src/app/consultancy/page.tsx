import { Consultancy } from '../../page-components/Consultancy';
import { pageMetadata } from '../../data/metadata';

export const metadata = pageMetadata(
  'Consulting Services',
  'Independent consulting practices for treasury, real estate, credit, portfolio management, and governance.'
);

export default function Page() {
  return <Consultancy />;
}
