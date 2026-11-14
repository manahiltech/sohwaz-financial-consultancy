import type { Service, TitledText } from '../types/content';

export const engagementSteps: TitledText[] = [
{
  title: 'Initial Consultation',
  description:
  'A confidential conversation to understand your objectives, current position and the decision in front of you.'
},
{
  title: 'Discovery & Assessment',
  description:
  'We review financial information, structures and constraints, and agree a clear scope and timeline.'
},
{
  title: 'Analysis & Structuring',
  description:
  'Our advisors evaluate options against your risk appetite, regulatory context and long-term priorities.'
},
{
  title: 'Recommendations',
  description:
  'You receive practical, documented recommendations and a roadmap your team and board can act on.'
},
{
  title: 'Ongoing Support',
  description:
  'Where useful, we support implementation, lender or counterparty discussions, and periodic review.'
}];


export const services: Service[] = [
{
  slug: 'real-estate-investment-advisory',
  title: 'Real Estate Investment Advisory',
  icon: 'realEstate',
  summary:
  'Independent analysis and structuring support for acquisitions, developments and income-producing property across selected markets.',
  intro:
  'We help investors and owners evaluate property decisions with the same rigour applied to any other capital allocation.',
  overview: [
  'Real estate remains one of the most significant asset classes for investors in Kuwait, the UAE and Bahrain. Decisions are often large, illiquid and long-dated, which makes independent analysis essential.',
  'Sohwaz Holdings advises on acquisition and disposal decisions, development feasibility, portfolio positioning and financing structures, working alongside valuers, legal counsel and lenders.'],

  scope: [
  { title: 'Acquisition due diligence', description: 'Financial review of target assets, income profiles and key risks.' },
  { title: 'Feasibility assessment', description: 'Development and redevelopment viability, phasing and funding needs.' },
  { title: 'Portfolio review', description: 'Assessment of concentration, yield and hold-versus-sell options.' },
  { title: 'Financing structure', description: 'Advice on leverage, facility terms and lender engagement.' }],

  audience: [
  { title: 'Private investors & family offices', description: 'Building or rebalancing property holdings.' },
  { title: 'Developers', description: 'Assessing project viability and funding structures.' },
  { title: 'Corporate owners', description: 'Reviewing operational and investment property.' }],

  deliverables: [
  'Investment memorandum and financial model review',
  'Feasibility and sensitivity analysis',
  'Portfolio assessment report',
  'Financing options paper'],

  faqs: [
  { question: 'Do you act as a broker or agent?', answer: 'No. Our role is advisory. We do not receive commissions on transactions, which allows us to give an independent view.' },
  { question: 'Do you advise on property outside your core markets?', answer: 'Our focus is Kuwait, the UAE and Bahrain. We can discuss cross-border holdings where they form part of a regional client’s wider portfolio.' },
  { question: 'Can you work with our existing valuer?', answer: 'Yes. We typically work alongside appointed valuers, lawyers and lenders rather than replacing them.' }]

},
{
  slug: 'treasury-advisory',
  title: 'Treasury Advisory',
  icon: 'treasury',
  summary:
  'Advising on liquidity, cash management, FX exposure and banking relationships to strengthen financial resilience.',
  intro:
  'We help finance teams build treasury functions that are disciplined, visible and resilient — from daily liquidity to long-term funding strategy.',
  overview: [
  'Treasury sits at the centre of every financial decision a business makes. Yet in many organisations across the region, cash is spread across multiple banks and entities, currency exposures are managed reactively, and treasury policy has not kept pace with growth.',
  'Sohwaz Holdings advises CFOs, treasurers and boards on how to structure and strengthen the treasury function. We review current arrangements, identify gaps in visibility and control, and recommend practical improvements suited to the banking and regulatory environment in Kuwait, the UAE and Bahrain.',
  'Our role is advisory. We support your team in making informed decisions, and we work alongside your existing banks, auditors and legal counsel.'],

  scope: [
  { title: 'Liquidity & cash management', description: 'Structuring cash visibility, pooling and concentration across entities and banks.' },
  { title: 'Cash flow forecasting', description: 'Designing forecasting methods that are reliable enough to support funding decisions.' },
  { title: 'FX & interest rate risk', description: 'Identifying exposures and advising on a proportionate hedging policy.' },
  { title: 'Banking relationship review', description: 'Assessing bank mix, service levels, fees and counterparty concentration.' },
  { title: 'Treasury policy & governance', description: 'Drafting policies, limits and delegated authorities appropriate to your scale.' },
  { title: 'Working capital', description: 'Reviewing receivables, payables and inventory cycles to release trapped cash.' }],

  audience: [
  { title: 'Multi-entity corporates and groups', description: 'Operating across several banks, currencies or jurisdictions.' },
  { title: 'Family businesses', description: 'Formalising the finance function as the business grows or transitions.' },
  { title: 'Investment holding companies', description: 'Managing surplus liquidity alongside operating subsidiaries.' },
  { title: 'Businesses preparing for financing', description: 'Strengthening controls ahead of new facilities or expansion.' }],

  approach: [
  { title: 'Diagnostic review', description: 'We map accounts, cash flows, exposures, policies and systems to establish a clear baseline.' },
  { title: 'Gap analysis & options', description: 'We compare current practice with an appropriate target model and set out realistic options.' },
  { title: 'Recommendations & roadmap', description: 'We prioritise changes by impact and effort, and agree a phased plan with your team.' },
  { title: 'Implementation support', description: 'Where requested, we support bank discussions, policy adoption and periodic reviews.' }],

  deliverables: [
  'Treasury diagnostic report',
  'Cash flow forecasting model and methodology',
  'Treasury policy and delegated authority framework',
  'FX and interest rate exposure assessment',
  'Banking relationship and fee review',
  'Prioritised implementation roadmap'],

  faqs: [
  { question: 'Do we need a dedicated treasury team to benefit?', answer: 'No. Many of our clients manage treasury within a small finance team. We scale recommendations to your organisation and resources.' },
  { question: 'Do you recommend specific banks or products?', answer: 'We provide an independent view of your banking arrangements. We do not receive referral fees from banks, and any product decisions remain with you.' },
  { question: 'How long does a treasury review take?', answer: 'A focused diagnostic typically takes several weeks depending on the number of entities, banks and the availability of information. We agree the timeline at the outset.' },
  { question: 'Can you support us across more than one country?', answer: 'Yes. We regularly consider structures that span Kuwait, the UAE and Bahrain, taking account of local banking practice and regulatory requirements.' },
  { question: 'Will our information be kept confidential?', answer: 'Yes. Engagements are conducted under confidentiality terms, and information is used only for the purpose of the engagement.' }]

},
{
  slug: 'investment-portfolio-advisory',
  title: 'Investment & Portfolio Advisory',
  icon: 'portfolio',
  summary:
  'Structuring investment policies and portfolio allocations aligned to objectives, risk appetite and time horizon.',
  intro:
  'We help investors set a clear framework for how capital is allocated, monitored and reviewed over time.',
  overview: [
  'Many portfolios in the region have grown through individual opportunities rather than a defined strategy. The result can be concentration, overlapping exposures and unclear performance measurement.',
  'We advise on investment policy, asset allocation frameworks and manager oversight, helping investors and boards bring structure and accountability to their portfolios.'],

  scope: [
  { title: 'Investment policy statements', description: 'Defining objectives, constraints, risk tolerance and governance.' },
  { title: 'Strategic asset allocation', description: 'Frameworks aligned to return needs and liquidity requirements.' },
  { title: 'Portfolio diagnostics', description: 'Reviewing concentration, costs and alignment to stated objectives.' },
  { title: 'Manager oversight', description: 'Support in selecting, monitoring and reviewing external managers.' }],

  audience: [
  { title: 'Family offices', description: 'Formalising investment governance across generations.' },
  { title: 'Corporate investment committees', description: 'Managing surplus or strategic capital.' },
  { title: 'High-net-worth investors', description: 'Seeking an independent view of their holdings.' }],

  deliverables: [
  'Investment policy statement',
  'Asset allocation framework',
  'Portfolio diagnostic report',
  'Manager review and reporting templates'],

  faqs: [
  { question: 'Do you manage money directly?', answer: 'No. We are advisors. We help you define strategy and oversee managers; we do not take custody of assets.' },
  { question: 'Can you structure policies around client requirements?', answer: 'Yes, we can structure policies and allocations around your documented requirements and governance framework.' },
  { question: 'How often should a portfolio be reviewed?', answer: 'We typically recommend a formal annual review with interim monitoring, adjusted to the complexity of the portfolio.' }]

},
{
  slug: 'corporate-financing-banking-facilities',
  title: 'Corporate Financing & Banking Facilities',
  icon: 'financing',
  summary:
  'Supporting the preparation, structuring and negotiation of credit facilities with regional and international banks.',
  intro:
  'We help businesses approach lenders well prepared, with a clear financing case and terms that fit their operations.',
  overview: [
  'Securing the right facility depends as much on preparation as on the business itself. Lenders look for clear information, credible forecasts and a well-understood use of funds.',
  'We advise on financing needs, facility structures, lender approach and term negotiation — supporting management throughout the process while decisions remain with the client.'],

  scope: [
  { title: 'Financing needs assessment', description: 'Quantifying requirements and suitable facility types.' },
  { title: 'Information preparation', description: 'Supporting credit papers, forecasts and lender presentations.' },
  { title: 'Lender engagement', description: 'Structuring a focused approach to suitable banks.' },
  { title: 'Term review', description: 'Advising on pricing, covenants, security and documentation.' }],

  audience: [
  { title: 'Mid-sized and large corporates', description: 'Raising new or refinancing existing facilities.' },
  { title: 'Project sponsors', description: 'Structuring funding for capital projects.' },
  { title: 'Family-owned groups', description: 'Consolidating fragmented banking lines.' }],

  deliverables: [
  'Financing strategy paper',
  'Lender information pack',
  'Term sheet comparison',
  'Covenant and headroom analysis'],

  faqs: [
  { question: 'Do you lend or arrange funds yourselves?', answer: 'No. We are not a lender. We advise you on preparing for and negotiating with banks and other financiers.' },
  { question: 'Can you help with financing structures?', answer: 'Yes. We can advise on facility structures alongside your legal and financial advisors.' },
  { question: 'Is approval guaranteed?', answer: 'No. Credit decisions rest with lenders. Our aim is to improve preparation and help you secure terms appropriate to your position.' }]

},
{
  slug: 'debt-restructuring-advisory',
  title: 'Debt Restructuring Advisory',
  icon: 'restructuring',
  summary:
  'Helping businesses assess their debt position and engage lenders on sustainable, workable restructuring options.',
  intro:
  'When financial pressure builds, we help management take a clear view of the position and approach lenders constructively.',
  overview: [
  'Changes in trading conditions, interest rates or project timelines can put pressure on a company’s ability to service debt. Early, well-prepared engagement with lenders tends to preserve more options.',
  'We advise on liquidity assessment, restructuring options and lender communication, supporting management and boards with discretion throughout.'],

  scope: [
  { title: 'Liquidity and solvency review', description: 'A clear, short-term view of cash and obligations.' },
  { title: 'Options analysis', description: 'Rescheduling, refinancing, asset disposals and other routes.' },
  { title: 'Lender strategy', description: 'Preparing proposals and structuring lender discussions.' },
  { title: 'Business plan review', description: 'Testing the plan that underpins any restructuring.' }],

  audience: [
  { title: 'Corporates under financial pressure', description: 'Facing covenant or repayment challenges.' },
  { title: 'Boards and shareholders', description: 'Seeking an independent assessment.' },
  { title: 'Groups with complex debt', description: 'Multiple lenders, entities or jurisdictions.' }],

  deliverables: [
  'Short-term cash flow and liquidity analysis',
  'Restructuring options paper',
  'Lender proposal pack',
  'Monitoring and reporting framework'],

  faqs: [
  { question: 'When should we seek advice?', answer: 'As early as possible. Earlier engagement generally allows more options and a more constructive dialogue with lenders.' },
  { question: 'Do you represent lenders?', answer: 'Our engagements are with the company or its shareholders. We disclose any potential conflicts before accepting an engagement.' },
  { question: 'Is the process confidential?', answer: 'Yes. We work discreetly and only share information with parties you have authorised.' }]

},
{
  slug: 'regulatory-compliance-risk-advisory',
  title: 'Regulatory Compliance & Risk Advisory',
  icon: 'compliance',
  summary:
  'Supporting governance, risk frameworks and regulatory readiness across Kuwaiti, Emirati and Bahraini jurisdictions.',
  intro:
  'We help organisations build proportionate risk and compliance frameworks that support growth rather than slow it.',
  overview: [
  'Regulatory expectations continue to evolve, particularly around governance, anti-money laundering and financial reporting. Organisations need frameworks that are robust yet workable.',
  'We advise on governance structures, risk frameworks and compliance readiness, working alongside your legal advisors. We do not provide legal opinions.'],

  scope: [
  { title: 'Governance review', description: 'Board, committee and delegated authority structures.' },
  { title: 'Enterprise risk frameworks', description: 'Risk identification, appetite and reporting.' },
  { title: 'Compliance readiness', description: 'Gap assessments against applicable requirements.' },
  { title: 'Policies and controls', description: 'Drafting and reviewing internal policies and procedures.' }],

  audience: [
  { title: 'Growing companies', description: 'Formalising governance and controls.' },
  { title: 'Holding companies', description: 'Overseeing risk across subsidiaries.' },
  { title: 'Organisations entering a new market', description: 'Preparing for local requirements.' }],

  deliverables: [
  'Governance and risk assessment',
  'Risk register and appetite statement',
  'Compliance gap analysis',
  'Policy and control framework'],

  faqs: [
  { question: 'Do you provide legal advice?', answer: 'No. We provide risk and compliance advisory support and work alongside your legal counsel where legal interpretation is required.' },
  { question: 'Which regulators do you consider?', answer: 'We consider the requirements relevant to your sector and jurisdiction across Kuwait, the UAE and Bahrain, confirmed during scoping.' },
  { question: 'Can you support an internal audit function?', answer: 'Yes. We can help design risk-based review programmes and support internal teams.' }]

},
{
  slug: 'hr-consultancy',
  title: 'HR Consultancy',
  icon: 'hr',
  summary:
    'Strategic HR advisory supporting organisations with workforce planning, talent management, policies and organisational development.',
  intro:
    'We help organisations build effective people strategies, strengthen HR practices and align their workforce with business objectives.',
  overview: [
    'Effective people management is essential to building resilient and high-performing organisations. Our HR consultancy services help businesses strengthen their people practices, improve organisational effectiveness and address workforce challenges.',
    'We provide practical HR advisory support across workforce planning, talent management, policies, performance management and organisational development.'
  ],

  scope: [
    { title: 'HR Strategy & Workforce Planning', description: 'Developing HR strategies, workforce plans and organisational structures aligned with business objectives.' },
    { title: 'Talent Acquisition & Management', description: 'Supporting recruitment strategy, talent identification, retention and succession planning.' },
    { title: 'HR Policies & Procedures', description: 'Developing and reviewing HR policies, procedures and employee frameworks.' },
    { title: 'Performance Management', description: 'Designing performance frameworks, objectives and review processes.' },
    { title: 'Organisational Development', description: 'Improving organisational structures, employee engagement and workforce effectiveness.' }
  ],

  audience: [
    { title: 'Growing businesses', description: 'Building structured HR functions as the organisation scales.' },
    { title: 'Family-owned groups', description: 'Formalising people practices, governance and succession planning.' },
    { title: 'Established organisations', description: 'Strengthening existing HR frameworks and organisational effectiveness.' }
  ],

  deliverables: [
    'HR strategy and workforce plan',
    'HR policy and procedure framework',
    'Organisation structure and role framework',
    'Performance management framework',
    'Talent and succession planning recommendations'
  ],

  faqs: [
    { question: 'Do you provide recruitment services?', answer: 'We can advise on recruitment strategy, processes and talent management as part of an HR advisory engagement.' },
    { question: 'Can you review our existing HR policies?', answer: 'Yes. We can assess existing policies and procedures and recommend improvements based on your organisation and requirements.' },
    { question: 'Can you support organisations without an internal HR team?', answer: 'Yes. Our advisory support can be scaled to organisations with either dedicated HR teams or limited internal HR resources.' }
  ]
},
{
  slug: 'it-consultancy',
  title: 'IT Consultancy',
  icon: 'it',
  summary:
    'Technology advisory covering IT strategy, digital transformation, AI, cybersecurity and digital forensics and incident response.',
  intro:
    'We help organisations use technology more effectively, strengthen their digital capabilities and respond confidently to technology and cybersecurity challenges.',
  overview: [
    'Technology is increasingly central to business operations, but fragmented systems, cybersecurity risks and rapidly evolving technologies can make technology decisions difficult.',
    'We provide practical IT consultancy across technology strategy, digital transformation, artificial intelligence, cybersecurity and Digital Forensics and Incident Response (DFIR).'
  ],

  scope: [
    { title: 'IT Strategy & Architecture', description: 'Technology assessments, IT roadmaps and architecture recommendations aligned with business objectives.' },
    { title: 'Digital Transformation', description: 'Identifying and implementing technology opportunities to improve processes, efficiency and customer experience.' },
    { title: 'Artificial Intelligence & Automation', description: 'Advising on AI adoption, intelligent automation and practical use cases for business operations.' },
    { title: 'Cybersecurity Advisory', description: 'Assessing security risks, controls and technology practices to strengthen organisational resilience.' },
    { title: 'Digital Forensics & Incident Response (DFIR)', description: 'Supporting organisations in investigating security incidents, analysing digital evidence and responding to cybersecurity breaches.' },
    { title: 'IT Risk & Technology Assessment', description: 'Reviewing technology environments, risks, controls and opportunities for improvement.' }
  ],

  audience: [
    { title: 'Growing businesses', description: 'Building scalable and secure technology foundations.' },
    { title: 'Established organisations', description: 'Modernising technology environments and improving operational efficiency.' },
    { title: 'Organisations facing security incidents', description: 'Seeking structured investigation and incident response support.' },
    { title: 'Businesses adopting AI', description: 'Identifying practical AI and automation opportunities.' }
  ],

  deliverables: [
    'IT strategy and technology roadmap',
    'Digital transformation assessment',
    'AI and automation opportunity assessment',
    'Cybersecurity risk assessment',
    'Digital forensics and incident response report',
    'Technology architecture and improvement recommendations'
  ],

  faqs: [
    { question: 'Do you provide AI consultancy?', answer: 'Yes. We advise organisations on practical AI adoption, automation opportunities and technology use cases aligned with business objectives.' },
    { question: 'What is DFIR?', answer: 'Digital Forensics and Incident Response (DFIR) combines digital investigation and forensic analysis with structured response to cybersecurity incidents.' },
    { question: 'Can you support an organisation after a cybersecurity incident?', answer: 'Yes. We can support incident investigation, digital forensic analysis, response planning and recommendations to strengthen future resilience.' },
    { question: 'Do you provide managed IT services?', answer: 'Our primary focus is consultancy and advisory services. Any implementation or ongoing support can be scoped based on the organisation’s requirements.' }
  ]
},
];


export function getService(slug: string | undefined) {
  return services.find((s) => s.slug === slug);
}
