export type ServiceIconKey =
  | 'realEstate'
  | 'treasury'
  | 'portfolio'
  | 'financing'
  | 'restructuring'
  | 'compliance'
  | 'it'
  | 'hr';

export type TitledText = {
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  icon: ServiceIconKey;
  summary: string;
  intro: string;
  overview: string[];
  scope: TitledText[];
  audience: TitledText[];
  approach?: TitledText[];
  deliverables: string[];
  faqs: Faq[];
};

export type Audience = {
  title: string;
  description: string;
  image: string;
};

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type NavItem = {
  key: string;
  to: string;
};
