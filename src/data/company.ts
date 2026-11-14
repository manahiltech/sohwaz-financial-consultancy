import { images } from './images';
import type { Audience, TitledText } from '../types/content';

export const audiences: Audience[] = [
  {
    title: 'Corporates & business groups',
    description: 'Finance leaders seeking structure across treasury, financing and risk as operations grow.',
    image: images.boardroom,
  },
  {
    title: 'Family offices & private investors',
    description: 'Families and individuals formalising how wealth is governed, allocated and reviewed.',
    image: images.kuwait,
  },
  {
    title: 'Real estate owners & developers',
    description: 'Owners and sponsors evaluating acquisitions, developments and project funding.',
    image: images.architecture,
  },
  {
    title: 'Institutions & holding companies',
    description: 'Boards overseeing capital, liquidity and compliance across multiple subsidiaries.',
    image: images.dubai,
  },
];

export const advisoryApproach: TitledText[] = [
  { title: 'Understand', description: 'We begin by listening — to your objectives, constraints and the decision you need to make.' },
  { title: 'Assess', description: 'We review the financial position, structures and market context with independent rigour.' },
  { title: 'Structure', description: 'We set out clear, practical options and recommend a course suited to your risk appetite.' },
  { title: 'Support', description: 'We remain available through implementation and review, so advice turns into outcomes.' },
];

export const principles: TitledText[] = [
  { title: 'Independence', description: 'Our recommendations are not tied to products, lenders or transaction commissions.' },
  { title: 'Discretion', description: 'Client information is handled confidentially and shared only with authorised parties.' },
  { title: 'Rigour', description: 'Every view is grounded in analysis, documented assumptions and clear reasoning.' },
  { title: 'Regional understanding', description: 'We advise with a working knowledge of the region’s banking regulations and business culture across the Middle East and Pakistan.' },
  { title: 'Clarity', description: 'We communicate plainly, so boards and management can act with confidence.' },
  { title: 'Accountability', description: 'Senior advisors lead every engagement and remain responsible for its quality.' },
];

export const mission =
  'To provide businesses and investors with independent, well-reasoned financial advice that supports sound decisions and long-term resilience.';

export const vision =
  'To be regarded as a trusted advisory partner — known for discipline, discretion and clarity of judgement.';
