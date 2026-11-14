import { images } from './images';
import type { Audience, Leader, Market, TitledText } from '../types/content';

export const audiences: Audience[] = [
{
  title: 'Corporates & business groups',
  description: 'Finance leaders seeking structure across treasury, financing and risk as operations grow.',
  image: images.boardroom
},
{
  title: 'Family offices & private investors',
  description: 'Families and individuals formalising how wealth is governed, allocated and reviewed.',
  image: images.kuwait
},
{
  title: 'Real estate owners & developers',
  description: 'Owners and sponsors evaluating acquisitions, developments and project funding.',
  image: images.architecture
},
{
  title: 'Institutions & holding companies',
  description: 'Boards overseeing capital, liquidity and compliance across multiple subsidiaries.',
  image: images.dubai
}];


export const advisoryApproach: TitledText[] = [
{ title: 'Understand', description: 'We begin by listening — to your objectives, constraints and the decision you need to make.' },
{ title: 'Assess', description: 'We review the financial position, structures and market context with independent rigour.' },
{ title: 'Structure', description: 'We set out clear, practical options and recommend a course suited to your risk appetite.' },
{ title: 'Support', description: 'We remain available through implementation and review, so advice turns into outcomes.' }];


export const principles: TitledText[] = [
{ title: 'Independence', description: 'Our recommendations are not tied to products, lenders or transaction commissions.' },
{ title: 'Discretion', description: 'Client information is handled confidentially and shared only with authorised parties.' },
{ title: 'Rigour', description: 'Every view is grounded in analysis, documented assumptions and clear reasoning.' },
{ title: 'Regional understanding', description: 'We advise with a working knowledge of the regions’ banking regulations and business culture.' },
{ title: 'Clarity', description: 'We communicate plainly, so boards and management can act with confidence.' },
{ title: 'Accountability', description: 'Senior advisors lead every engagement and remain responsible for its quality.' }];


export const mission =
'To provide businesses and investors with independent, well-reasoned financial advice that supports sound decisions and long-term resilience.';

export const vision =
'To be regarded as a trusted advisory partner — known for discipline, discretion and clarity of judgement.';

export const markets: Market[] = [
{
  code: 'KW',
  name: 'Kuwait',
  cities: 'Kuwait City',
  summary: 'Our home market, with deep relationships across corporates, family groups and investors.',
  overview:
  'Kuwait combines a long-established private sector with significant family-owned groups heavily involved in Oil & Gas and real estate market. We advise clients on formalising treasury and governance, structuring banking relationships, and evaluating domestic and regional investments circling around Oil & Gas business.',
  focus: ['Family business governance', 'Treasury and banking structure', 'Real estate portfolio review'],
  serviceSlugs: ['treasury-advisory', 'real-estate-investment-advisory', 'regulatory-compliance-risk-advisory'],
  image: images.kuwait
},
{
  code: 'QA',
  name: 'Qatar',
  cities: 'Doha',
  summary: 'Supporting regional groups operating in one of the Gulf’s most active financial centres.',
  overview:
  'The Qatar’s diverse economy and established financial centres attract regional headquarters, investors and developers. We support clients with financing strategy, portfolio structuring and multi-jurisdiction treasury arrangements.',
  focus: ['Corporate financing and facilities', 'Multi-entity treasury', 'Investment portfolio structuring'],
  serviceSlugs: ['corporate-financing-banking-facilities', 'investment-portfolio-advisory', 'treasury-advisory'],
  image: images.dubai
},
{
  code: 'BH',
  name: 'Bahrain',
  cities: 'Manama',
  summary: 'Advising businesses in a well-regulated financial hub with strong regional links.',
  overview:
  'Bahrain has a long history as a regional banking centre and a well-developed regulatory environment. We advise clients on risk and compliance frameworks, debt restructuring and access to financing.',
  focus: ['Regulatory readiness', 'Debt restructuring', 'Banking facility review'],
  serviceSlugs: ['regulatory-compliance-risk-advisory', 'debt-restructuring-advisory', 'corporate-financing-banking-facilities'],
  image: images.manama
}];


export const leaders: Leader[] = [
{
  name: '[Full Name]',
  role: 'Founder & Managing Director',
  bio: '[Name] leads the firm’s strategy and senior client relationships. [Placeholder: summary of career background, prior institutions and areas of focus — to be provided.]',
  expertise: ['Corporate strategy', 'Banking relationships']
},
{
  name: '[Full Name]',
  role: 'Head of Treasury & Corporate Finance',
  bio: '[Name] advises on liquidity, funding and facility structuring. [Placeholder: professional background and qualifications — to be provided.]',
  expertise: ['Treasury', 'Corporate financing']
},
{
  name: '[Full Name]',
  role: 'Head of Investment Advisory',
  bio: '[Name] oversees portfolio and real estate advisory engagements. [Placeholder: professional background and qualifications — to be provided.]',
  expertise: ['Portfolio advisory', 'Real estate']
},
{
  name: '[Full Name]',
  role: 'Head of Risk & Compliance',
  bio: '[Name] leads governance, risk and regulatory readiness work. [Placeholder: professional background and qualifications — to be provided.]',
  expertise: ['Governance', 'Regulatory risk']
}];


export const expertiseAreas: TitledText[] = [
{ title: 'Corporate & investment banking', description: 'Experience of how lenders assess credit, structure facilities and manage relationships.' },
{ title: 'Treasury & liquidity management', description: 'Practical understanding of cash, funding and risk management in complex business groups.' },
{ title: 'Real estate investment', description: 'Assessment of acquisitions, developments and income-producing portfolios.' },
{ title: 'Credit & restructuring', description: 'Experience supporting businesses through lender negotiations and turnarounds.' },
{ title: 'Governance, risk & compliance', description: 'Design of proportionate frameworks for boards and management.' },
{ title: 'Portfolio construction', description: 'Investment policy, allocation and manager oversight for long-term capital.' }];


export const engagementRoles: TitledText[] = [
{ title: 'Senior-led from the first meeting', description: 'A member of the management team participates in every initial consultation and scoping discussion.' },
{ title: 'Direct access throughout', description: 'Clients work directly with the senior advisor responsible for their engagement, not through layers of staff.' },
{ title: 'Quality and conflict review', description: 'Management reviews key recommendations and confirms independence before advice is delivered.' },
{ title: 'Continuity over time', description: 'Where engagements extend, the same senior advisors remain involved to preserve context.' }];
