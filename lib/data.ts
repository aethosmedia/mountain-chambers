// All site content lives here so the client can edit it in one place.
// Source: https://mountainchambers.in/ (imported Nov 2026).

export const site = {
  name: "Mountain Chambers",
  url: "https://mountainchambers.in",
  tagline:
    "Mountain Chambers is a premier law firm in Kolkata, offering expert legal solutions across corporate, civil, and criminal law. Dedicated to excellence, we combine in-depth knowledge with personalized service to meet our clients’ needs.",
  email: "mountainchambers@gmail.com",
  phones: ["+91-90517-45299", "+91-97484-06299"],
  hours: "Mon - Sat 11:00am-08:00pm",
  offices: [
    {
      name: "Dum Dum",
      address: ["Ward Number 22, Prafulla Nagar, Amarpalli, South Dumdum, West Bengal 700074"],
      phone: "+91-90517-45299",
      map: "https://www.google.com/maps?q=22.6208754,88.4075717&z=17&output=embed",
      mapLink: "https://maps.app.goo.gl/XfVcW5V85KvJAQPTA",
    },
    {
      name: "Birati",
      address: ["2/2 Sibachal Road, Birati,", "Opp: Nimta P.S Kolkata-700051"],
      phone: "+91-97484-06299",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.7654426860463!2d88.41679277406246!3d22.662532329670622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e8ae3b016bf%3A0x810a4cdea304d283!2sMahendra%20Apartment%2C%202%2F2%2C%20Sibachal%20Rd%2C%20opposite%20Nimta%2C%20Shibachal%2C%20Birati%2C%20Thana%2C%20North%20Dumdum%2C%20West%20Bengal%20700051!5e0!3m2!1sen!2sin!4v1735235261603!5m2!1sen!2sin",
    },
  ],
  copyright: "Copyright 2024 Mountain Chambers, All Right Reserved.",
};

// Bar Council of India disclaimer – verbatim from the live site.
export const disclaimer =
  "The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, www.mountainchambers.in, the user acknowledges and confirms that: The user is seeking information relating to Mountain Chambers of their own accord and that there has been no form of solicitation, advertisement, or inducement by Mountain Chambers or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Any information obtained or downloaded by the user from our website does not lead to the creation of a client–attorney relationship between the Firm and the user. Mountain Chambers shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Mountain Chambers.";

export type Spec = string | { title: string; items: string[] };

export type PracticeArea = {
  slug: string;
  title: string;
  intro: string[];
  specializations: Spec[];
  /** true = page content was not imported yet (see README) */
  pending?: boolean;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    intro: [
      "We provide legal services to individuals, businesses, and investors in all aspects of real estate transactions and disputes. Our practice focuses on residential and commercial real estate transactions, including the negotiation and drafting of contracts, lease agreements, and property sales.",
      "We also specialise in resolving real estate disputes, handling title issues, and advising on zoning laws, and we are committed to providing expert legal guidance and protecting your interests in real estate matters. If you’re facing a real estate issue or need assistance with a transaction, reach out for a consultation.",
      "We take a client-centred approach, ensuring clear communication and practical legal solutions tailored to each individual’s needs. Whether you’re buying your first home or navigating a commercial property dispute, we guide you through the legal complexities with confidence and care.",
    ],
    specializations: [
      "Residential and commercial property transactions",
      "Contract negotiations",
      "Real estate disputes (e.g., landlord-tenant disputes, property ownership conflicts)",
      "Zoning and land use regulations",
      "Foreclosure Defense",
      "Real estate financing and mortgages",
      "Lease agreements",
      "Real estate development and construction contracts",
    ],
  },
  {
    slug: "arbitration-law",
    title: "Arbitration Law",
    intro: [
      "We offer expert legal counsel for individuals, businesses, and organizations seeking efficient, private, and cost-effective dispute resolution. Whether you’re dealing with commercial contracts, international disputes, or employment matters, our team of skilled arbitration attorneys ensures that your interests are protected every step of the way.",
      "Our arbitration attorneys provide clear, strategic advice and aggressive representation. Whether you’re initiating arbitration or need defence against a claim, we offer tailored solutions that align with your business objectives or personal goals.",
    ],
    specializations: [
      "International Arbitration",
      "Commercial Arbitration",
      "Construction & Real Estate Arbitration",
      "Employment & Labor Disputes",
    ],
  },
  {
    slug: "commercial-and-joint-venture-agreement",
    title: "Commercial and Joint Venture Agreement",
    intro: [
      "We provide businesses with the legal expertise needed to form successful partnerships, minimise risks, and maximise opportunities through commercial agreements and joint venture agreements. Whether you’re entering a new joint venture or negotiating complex commercial contracts, our team ensures that your interests are protected every step of the way.",
      "Contact us to discuss your commercial or joint venture agreement. Let our experienced attorneys guide you through the process of creating agreements that work for your business.",
    ],
    specializations: [
      "Joint Venture Agreements",
      "Mergers & Acquisitions (M&A)",
      "Partnership Agreements",
    ],
  },
  {
    slug: "banking-finance-insurance-law",
    title: "Banking, Finance & Insurance Law",
    intro: [
      "We provide businesses, financial institutions, and individuals with the legal expertise needed to navigate the complex and highly regulated financial world across banking, finance, and insurance law. Our attorneys are committed to delivering tailored solutions that ensure compliance, mitigate risk, and protect your financial interests.",
      "Whether you’re an individual navigating personal finance, a business seeking regulatory compliance, or an insurer managing complex claims, we offer the legal knowledge and experience to ensure your success.",
    ],
    specializations: [
      "Banking Law",
      "Finance Law",
      "Insurance Law",
      "Regulatory Compliance & Licensing",
      "Financial Transactions & Contracts",
      "Dispute Resolution & Litigation",
      "Banking Compliance",
      "Mergers & Acquisitions",
      "Securities & Investments",
      "Insurance Disputes",
    ],
  },
  {
    slug: "civil-law",
    title: "Civil Law",
    intro: [
      "We provide expert legal representation in civil litigation for individuals, businesses, and organizations involved in disputes. Whether you are facing a personal legal issue or dealing with a complex business dispute, our team of skilled attorneys is here to guide you through the litigation process and fight for your rights.",
      "Whether you’re facing a personal injury claim, business dispute, or any other civil matter, our experienced litigators are here to represent you every step of the way.",
    ],
    specializations: [
      "Personal Injury Litigation",
      "Contract Disputes",
      "Property & Real Estate Disputes",
      "Business & Commercial Litigation",
      "Debt Collection & Creditors’ Rights",
      "Family Law Disputes",
      "Class Action Lawsuits",
      "Landlord-Tenant Issues",
      "Boundary Disputes",
      "Shareholder/Partner Disputes",
      "Debt Recovery",
      "Creditor Protection",
      "Debt Defense",
      "Appealing Unfavourable Judgments",
      "Appellate Strategy & Support",
    ],
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    intro: [
      "We provide expert legal defence for individuals accused of crimes ranging from minor offences to serious felonies. Our team of skilled and experienced criminal defence attorneys is committed to protecting your rights, your freedom, and your future.",
      "If you’ve been charged with a crime, don’t face it alone. Our attorneys provide aggressive, strategic representation, guiding you through every step of the criminal justice process. The sooner you contact us, the sooner we can begin building a strong defence on your behalf.",
    ],
    specializations: [
      { title: "Drug Offenses", items: ["Possession, Trafficking, and Distribution", "Drug DUI/DWI"] },
      { title: "Violent Crimes", items: ["Assault and Battery", "Homicide and Manslaughter", "Robbery and Burglary"] },
      { title: "Sex Crimes", items: ["Sexual Assault and Rape", "Child Pornography and Exploitation"] },
      { title: "White-Collar Crimes", items: ["Fraud and Embezzlement", "Identity Theft"] },
      { title: "DUI/DWI Defense", items: ["Driving Under the Influence", "License Suspension"] },
      { title: "Domestic Violence", items: ["Domestic Assault", "Protective Orders"] },
      { title: "Juvenile Defense", items: ["Juvenile Delinquency", "Expungement of Juvenile Records"] },
      {
        title: "Federal Crimes",
        items: ["White-Collar Federal Offenses", "Drug Trafficking and Organized Crime", "Immigration Violations"],
      },
      { title: "Criminal Appeals", items: ["Post-Conviction Relief", "Expungement"] },
    ],
  },
  {
    slug: "consumer-disputes",
    title: "Consumer Disputes",
    intro: [
      "We help individuals protect their rights and seek justice when businesses engage in deceptive, fraudulent, or unfair practices. Whether you’ve been misled by false advertising, faced subpar products, or dealt with unethical business behaviour, we are here to fight for you.",
      "If you’ve encountered issues with a business that has caused harm or financial loss, our experienced consumer protection attorneys are ready to assist you in resolving disputes and holding wrongdoers accountable.",
      "Have you been wronged by a business? Let us fight for your consumer rights.",
    ],
    specializations: [
      { title: "Fraud and Deceptive Practices", items: ["False Advertising", "Identity Theft", "Consumer Fraud"] },
      { title: "Defective Products and Product Liability", items: ["Product Defects", "Warranty Violations", "Toxic Products"] },
      {
        title: "Breach of Contract & Consumer Agreements",
        items: ["Service Contract Disputes", "Online Purchases & E-commerce Disputes"],
      },
      {
        title: "Debt Collection and Credit Issues",
        items: ["Debt Collection Harassment", "Credit Report Errors", "Unfair Lending Practices"],
      },
      { title: "Consumer Protection Laws", items: ["Consumer Rights Violations", "Class Action Lawsuits"] },
      {
        title: "Unfair Business Practices",
        items: ["Price Gouging", "False or Unjustified Fees", "Predatory Lending and Financing"],
      },
      { title: "Data Privacy and Consumer Protection", items: ["Privacy Violations", "Unlawful Data Collection"] },
    ],
  },
  {
    slug: "taxation-laws",
    title: "Taxation Laws",
    intro: [
      "We help individuals and businesses navigate the complexities of tax laws in taxation matters and income tax services. Whether you’re seeking help with personal income tax returns, strategic tax planning, or resolving disputes with tax authorities, our attorneys provide personalized legal solutions to ensure compliance and minimize liabilities.",
      "With years of experience in both federal and state tax matters, we guide you through the intricacies of income tax, offering expert counsel and representation to help you achieve your financial and tax goals. Whether you’re an individual seeking tax advice, a business looking for tax planning solutions, or you’re involved in a tax dispute, our attorneys are ready to help.",
    ],
    specializations: [
      {
        title: "Income Tax Planning and Strategy",
        items: ["Personal Income Tax Planning", "Business Income Tax Planning", "Tax-Deferred Investments"],
      },
      {
        title: "Income Tax Return Preparation and Filing",
        items: ["Personal Income Tax Returns", "Corporate Tax Returns", "Tax Filing for Foreign Income"],
      },
      {
        title: "Tax Compliance and Audits",
        items: ["Tax Audits and Investigations", "Income Tax Compliance", "Amended Returns and Tax Relief"],
      },
      {
        title: "Tax Dispute Resolution",
        items: ["IRS and State Tax Disputes", "Appeals and Negotiations", "Offer in Compromise"],
      },
      { title: "Tax Credits and Deductions", items: ["Tax Credits", "Deductions"] },
      {
        title: "Estate and Succession Planning",
        items: ["Minimizing Estate Taxes", "Succession Planning for Business Owners"],
      },
      { title: "State and Local Income Tax Issues", items: ["State Tax Planning", "Local Tax Issues"] },
      { title: "International Tax Matters", items: ["Cross-Border Tax Planning", "Expatriate Tax Services"] },
    ],
  },
  {
    slug: "company-law",
    title: "Company Law",
    intro: [
      "We provide comprehensive legal solutions for businesses of all sizes. Whether you’re a startup, a growing enterprise, or an established corporation, our team of experienced company law attorneys is dedicated to helping you navigate the complexities of corporate regulations and achieve your business goals.",
      "We combine deep legal knowledge with a business-oriented approach to deliver practical, actionable advice. Our team takes the time to understand your unique objectives, offering personalized solutions that drive your success.",
    ],
    specializations: [
      "Business Formation and Structuring",
      "Corporate Governance",
      "Mergers and Acquisitions (M&A)",
      "Regulatory Compliance",
      "Contract Drafting and Negotiation",
      "Corporate Litigation",
      "Startups and Emerging Companies",
    ],
  },
  {
    slug: "commercial-law",
    title: "Commercial Law",
    intro: [
      "Commercial law, also known as business law or trade law, governs the rights, relations, and conduct of individuals and businesses engaged in commerce, trade, and sales. It encompasses a wide range of legal issues, including contracts, business formations, mergers and acquisitions, intellectual property, and disputes between businesses.",
      "Commercial law is vital to the smooth operation of your business, as it governs day-to-day transactions and protects your business interests. Whether you are starting a new company, expanding an existing one, or facing legal challenges, we are here to provide the expertise you need to manage your commercial ventures with confidence.",
      "We understand the unique challenges that businesses face in today’s competitive market. Our team combines deep legal knowledge with practical business acumen to provide you with tailored solutions that align with your goals. Let us handle your commercial law needs so you can focus on what you do best: growing your business.",
    ],
    specializations: [
      "Business Formation & Structuring",
      "Contracts and Agreements",
      "Mergers & Acquisitions",
      "Commercial Litigation & Dispute Resolution",
      "Intellectual Property Protection",
      "Employment Law & Compliance",
      "Commercial Real Estate",
      "Franchise Law",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    intro: [
      "Family law encompasses legal issues relating to family relationships, including marriage, divorce, child custody, support, adoption, and other aspects of family life. These matters can be emotionally charged, and the decisions made can have lasting impacts on both individuals and children involved. Our goal is to provide you with the legal guidance and representation you need during these challenging times, helping you make informed decisions that protect your rights and the best interests of your family.",
      "We understand that family matters are deeply personal and often involve difficult emotions and complex legal challenges. Our compassionate and experienced attorneys provide dedicated legal representation for individuals and families dealing with family law issues. Whether you are navigating a divorce, seeking child custody arrangements, or managing the complexities of adoption or domestic violence, we are here to offer trusted advice, support, and effective solutions.",
    ],
    specializations: [
      "Divorce",
      "Child Custody & Parenting Time",
      "Child Support",
      "Adoption",
      "Domestic Violence & Restraining Orders",
      "Pre-Nuptial & Post-Nuptial Agreements",
      "Spousal Support & Alimony",
      "Modifications & Enforcement of Orders",
    ],
  },
  {
    slug: "food-beverage-law",
    title: "Food & Beverage Law",
    intro: [
      "Food and beverage law covers a broad range of legal issues affecting businesses involved in the production, distribution, and sale of food and beverages. The industry is subject to numerous regulations, covering everything from food safety and labeling requirements to marketing practices and intellectual property rights. Staying compliant is critical to avoiding costly litigation, fines, and reputational damage.",
      "Our team is well-versed in the intricacies of food and beverage law, offering the legal counsel you need to protect your business and ensure regulatory compliance while pursuing growth and innovation.",
      "Whether you’re a restaurateur, food manufacturer, distributor, or retailer, our experienced attorneys are here to help you navigate the legal landscape of food safety, labelling, advertising, compliance, and more.",
    ],
    specializations: [
      "Regulatory Compliance & Food Safety",
      "Labelling & Advertising",
      "Food Product Liability & Litigation",
      "Alcoholic Beverage Law",
      "Intellectual Property Protection",
      "Food & Beverage Contracts",
      "Franchise Law for Food & Beverage Businesses",
      "Export & Import Regulations",
      "Sustainability & Environmental Compliance",
    ],
  },
  {
    slug: "immigration-law",
    title: "Immigration Law",
    intro: [
      // NOTE: the live site describes U.S. immigration law here. Kept as-is – client to confirm.
      "Immigration law governs the rules and procedures by which individuals can enter, reside in, and obtain legal status in a country. In the U.S., immigration law encompasses a wide range of issues, including visas, asylum, green cards, naturalization, deportation defense, and more. Policies and procedures are subject to frequent changes, making it critical to work with experienced attorneys who stay up-to-date with the evolving laws and regulations.",
      "We help our clients navigate the complexities of immigration law, providing expert advice and representation in a wide range of matters. Our goal is to simplify the process and help you achieve your immigration objectives, whether you’re seeking temporary status or permanent residency.",
    ],
    specializations: [
      "Family-Based Immigration",
      "Employment-Based Immigration",
      "Deportation Defense",
      "Asylum & Refugee Status",
      "Naturalization & Citizenship",
      "Student & Visitor Visas",
      "Visa Waiver Program & ESTA Applications",
      "Waivers of Inadmissibility",
      "Business Immigration & Investor Visas",
    ],
  },
  {
    slug: "matrimonial-law",
    title: "Matrimonial Law",
    intro: [
      "Matters related to marriage and family law are deeply personal and often challenging. Our matrimonial law team provides compassionate, professional, and strategic legal services to individuals and families facing a range of matrimonial issues. Whether you are going through a divorce, seeking a prenuptial agreement, or navigating complex custody disputes, we are here to offer expert legal support and help you achieve the best possible outcome during what can be an emotionally charged time.",
      "Matrimonial law, a branch of family law, deals with legal issues surrounding marriage, divorce, child custody, and related matters. It includes everything from the legal dissolution of a marriage to the division of assets, child support, alimony, and more. These matters can be complex, and the outcomes can significantly affect your financial and personal well-being. Having an experienced matrimonial lawyer by your side ensures that your rights and interests are protected throughout the legal process.",
    ],
    specializations: [
      "Divorce",
      "Child Custody & Parenting Time",
      "Alimony & Spousal Support",
      "Property Division",
      "Prenuptial & Postnuptial Agreements",
      "Mediation & Alternative Dispute Resolution",
      "Domestic Violence & Protection Orders",
      "Post-Divorce Modifications",
      "Annulment",
    ],
  },
  {
    slug: "ndps-act",
    title: "NDPS Act",
    intro: [
      "The Narcotic Drugs and Psychotropic Substances Act, 1985 (NDPS Act) is a law in India that aims to prevent and control drug trafficking, abuse, and the illegal production, manufacture, and distribution of narcotic drugs and psychotropic substances. The Act provides comprehensive guidelines on the production, manufacture, possession, sale, purchase, transport, warehousing, use, consumption, inter-State import and export, import into India, export from India, and transshipment of narcotic drugs and psychotropic substances.",
      "The NDPS Act prescribes harsh penalties for those found guilty of drug offences, including imprisonment, fines, and in some cases, the death penalty for certain repeat offenders. Due to the severe consequences of drug-related charges, it is vital for anyone involved in or accused under the NDPS Act to seek immediate legal assistance.",
      "We provide expert legal services for individuals and businesses affected by the NDPS Act. Whether you are facing charges related to drug offences, seeking to challenge a conviction, or require legal advice on compliance, our attorneys are here to provide expert representation.",
    ],
    specializations: [
      "Drug Offense Defence",
      "Bail Applications",
      "Drug Trafficking and Distribution Cases",
      "Appeals and Post-Conviction Relief",
      "Search and Seizure Challenges",
      "Preventive Detention",
      "Legal Advice for Businesses",
      "International Drug Offenses",
    ],
  },
  {
    slug: "partnership-specific-relief-act",
    title: "Partnership & Specific Relief Act",
    intro: [
      "A partnership is a formal arrangement between two or more individuals to conduct business together with the objective of making a profit. The Indian Partnership Act, 1932, regulates partnerships in India, establishing a framework for the rights and obligations of partners.",
      "The Specific Relief Act, 1963, is an important piece of legislation in India designed to provide specific remedies when a person’s legal rights are violated, especially in cases involving contracts and property disputes. The Act offers various forms of relief, such as specific performance, injunctions, and rectification of documents, to enforce or restore rights.",
      "Our team provides comprehensive legal services related to both Partnership Law and the Specific Relief Act. Whether you are drafting a partnership deed, resolving disputes between partners, enforcing a contract, or seeking remedies under the Specific Relief Act, we are committed to ensuring that your legal interests are upheld.",
    ],
    specializations: [
      "Partnership Agreement Drafting & Review",
      "Dispute Resolution",
      "Specific Performance and Injunctions",
      "Legal Advice",
    ],
  },
  // ---- Pages listed in the live site's menu whose content has NOT been imported yet ----
  { slug: "sports-law", title: "Sports Law", intro: [], specializations: [], pending: true },
  { slug: "pharmaceutical-laws", title: "Pharmaceutical Laws", intro: [], specializations: [], pending: true },
  {
    slug: "labour-and-employment-law",
    title: "Labour and Employment Law",
    intro: [],
    specializations: [],
    pending: true,
  },
  { slug: "intellectual-property-law", title: "Intellectual Property Law", intro: [], specializations: [], pending: true },
  { slug: "motor-vehicle-act", title: "Motor Vehicle Act", intro: [], specializations: [], pending: true },
];

// Practice areas highlighted on the home page (same four as the live site).
export const featuredPractice = [
  { slug: "real-estate", title: "Real Estate Law" },
  { slug: "arbitration-law", title: "Arbitration Law" },
  { slug: "commercial-and-joint-venture-agreement", title: "Commercial and Joint Venture Agreement" },
  { slug: "banking-finance-insurance-law", title: "Banking, Finance & Insurance Law" },
];

export const pillars = [
  {
    title: "Expertise Across Legal Domains",
    text: "Specialized services in corporate law, family law, criminal defense, real estate, and intellectual property to address diverse client needs.",
  },
  {
    title: "Client-Centric Approach",
    text: "Personalized legal strategies with a commitment to transparency, timely communication, and achieving optimal outcomes for clients.",
  },
  {
    title: "Proven Track Record",
    text: "Decades of successful case resolutions and a reputation for delivering results, backed by testimonials and industry recognition.",
  },
];

export const skills = [
  { label: "Practice Area", value: 100 },
  { label: "Happy Customer", value: 100 },
  { label: "Firm Size", value: 100 },
  { label: "Success Case", value: 95 },
];

export const testimonials = [
  {
    name: "Anjali S",
    text: "The team at Mountain Chambers is incredibly knowledgeable and professional. They handled my case with utmost care and delivered a favorable outcome beyond my expectations.",
  },
  {
    name: "Rahul M.",
    text: "I felt confident with Mountain Chambers by my side. Their dedication and attention to detail were unmatched, making the legal process smooth and stress-free.",
  },
  {
    name: "Priya D.",
    text: "The lawyers at Mountain Chambers resolved my property dispute swiftly and efficiently. I’m truly impressed by their skill and commitment.",
  },
];

export type Member = { slug: string; name: string; role: string; photo?: string };

// Associates #2–#6 are placeholder names on the live site. Add real names + photos
// (put images in /public/team and set `photo`) before launch.
export const team: Member[] = [
  { slug: "biswajit-das", name: "Adv. Biswajit Das", role: "Founder", photo: "/team/founder.png" },
  { slug: "zareen-hossain", name: "Zareen Hossain", role: "Associate" },
  { slug: "associate-2", name: "Associate #2", role: "Associate" },
  { slug: "associate-3", name: "Associate #3", role: "Associate" },
  { slug: "associate-4", name: "Associate #4", role: "Associate" },
  { slug: "associate-5", name: "Associate #5", role: "Associate" },
  { slug: "associate-6", name: "Associate #6", role: "Associate" },
];

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  intro: string;
  challenges: { title: string; text: string }[];
  process: { title: string; text: string }[];
  result: { title: string; text: string }[];
  conclusion: string;
};

// Case studies reworded from the three live-site posts (all dated December 26, 2024).
export const posts: Post[] = [
  {
    slug: "success-case-study-resolving-a-corporate-dispute",
    title: "Success Case Study: Resolving a Corporate Dispute",
    date: "2024-12-26",
    excerpt:
      "Mountain Chambers was retained by Zenith Tech Solutions (name changed), a mid-sized IT firm, after its former co-founder claimed a share of the company’s equity and alleged mismanagement of funds.",
    intro:
      "Mountain Chambers was retained by Zenith Tech Solutions (name changed), a mid-sized IT firm, in a high-stakes corporate dispute. The company’s former co-founder had begun legal action, claiming a significant share of the firm’s equity and alleging mismanagement of funds. The case risked derailing operations and reputation during an important growth phase.",
    challenges: [
      { title: "Complex ownership structure", text: "Equity distribution and ownership agreements were ambiguous and needed detailed analysis and expert testimony." },
      { title: "Financial audit scrutiny", text: "The mismanagement allegations required a thorough review of financial records to disprove them." },
      { title: "Operational impact", text: "The dispute unsettled employees and investors and threatened business continuity." },
      { title: "Reputational risk", text: "Media interest added pressure to resolve the matter quickly and discreetly." },
    ],
    process: [
      { title: "Document review", text: "The team studied incorporation documents, equity agreements and financial records to build a solid defence." },
      { title: "Mediation", text: "Mediation was opened with the opposing party to explore an out-of-court settlement and preserve business relationships." },
      { title: "Forensic audit", text: "Working with forensic accountants, the team disproved the allegations with a clear, transparent financial trail." },
      { title: "Legal defence", text: "In court, the firm highlighted procedural lapses in the plaintiff’s claims and presented evidence supporting the client." },
      { title: "Stakeholder communication", text: "The firm advised on clear communication with employees and investors to maintain trust during the proceedings." },
    ],
    result: [
      { title: "Case dismissed", text: "The court ruled for Zenith Tech Solutions, dismissing the equity and mismanagement claims." },
      { title: "Business continuity", text: "A swift resolution kept disruption and the impact on morale to a minimum." },
      { title: "Reputation preserved", text: "Sensitive details were kept out of the public domain." },
      { title: "Stronger governance", text: "Afterwards, the firm advised on revising company agreements and policies to prevent future disputes." },
    ],
    conclusion:
      "This case shows Mountain Chambers’ proficiency in managing intricate corporate disputes. Meticulous preparation, combined with effective litigation and mediation strategies, protected the client’s business interests and secured both legal and operational success.",
  },
  {
    slug: "success-case-study-resolving-a-privacy-invasion-dispute",
    title: "Success Case Study: Resolving a Privacy Invasion Dispute",
    date: "2024-12-26",
    excerpt:
      "Mountain Chambers was approached by Mr. Arjun Mehta (name changed), a senior executive whose private information and conversations had been leaked online, allegedly by a former associate.",
    intro:
      "Mountain Chambers was approached by Mr. Arjun Mehta (name changed for privacy), a senior executive whose personal information and private conversations had been leaked online, causing severe reputational and emotional damage. The breach was allegedly committed by a former associate in retaliation for a business disagreement.",
    challenges: [
      { title: "No immediate evidence", text: "Identifying the source of the leak and gathering admissible evidence was difficult because of encrypted communication channels." },
      { title: "Public attention", text: "Significant media coverage intensified the client’s distress and complicated privacy during the proceedings." },
      { title: "Technical complexity", text: "Digital forensic experts were needed to trace the origin of the data breach." },
      { title: "Time sensitivity", text: "Each passing day increased the potential harm to the client’s reputation and standing." },
    ],
    process: [
      { title: "Preliminary investigation", text: "The firm worked with cybersecurity experts to identify the source and scope of the breach." },
      { title: "Injunction", text: "An urgent application was filed for a restraining order to stop further sharing of the leaked information." },
      { title: "Defamation claim", text: "A defamation suit was filed against the suspected individual for the damage to the client’s reputation." },
      { title: "Data protection compliance", text: "Legal notices to platforms hosting the content required takedowns under applicable data protection laws." },
      { title: "Out-of-court negotiation", text: "An amicable settlement was explored to speed resolution and limit further public exposure." },
    ],
    result: [
      { title: "Injunction secured", text: "The court promptly issued a restraining order against further dissemination." },
      { title: "Leak source identified", text: "Digital forensics confirmed the associate’s involvement, strengthening the case." },
      { title: "Content removed", text: "Hosting platforms complied with takedown requests, greatly reducing the content’s visibility." },
      { title: "Favourable settlement", text: "The defendant agreed to settle out of court, including a formal apology and significant compensation." },
      { title: "Reputation restored", text: "The client’s professional standing was preserved and he resumed his career without further setbacks." },
    ],
    conclusion:
      "This case highlights Mountain Chambers’ expertise in complex privacy matters. Technical acumen combined with strategic legal measures safeguarded the client’s rights and reputation and delivered swift, effective results.",
  },
  {
    slug: "success-case-study-resolving-a-family-violence-dispute",
    title: "Success Case Study: Resolving a Family Violence Dispute",
    date: "2024-12-26",
    excerpt:
      "A young woman, Rhea (name changed), approached Mountain Chambers for help leaving an abusive marriage. The case needed swift action to protect her safety and rebuild her life.",
    intro:
      "A young woman, Rhea (name changed for privacy), approached Mountain Chambers seeking legal help to leave an abusive marriage. She had faced physical, emotional and financial abuse from her spouse over several years. The case required swift action to ensure her safety and give her legal recourse to rebuild her life.",
    challenges: [
      { title: "Immediate safety concerns", text: "Rhea was still living with her abuser, so intervention was urgent." },
      { title: "Lack of documentation", text: "She had little evidence of the abuse and no formal police complaints or medical records." },
      { title: "Financial dependence", text: "As a homemaker with no independent income, starting legal proceedings was difficult." },
      { title: "Social stigma", text: "Societal pressure to avoid legal action added to her emotional stress." },
    ],
    process: [
      { title: "Urgent protective measures", text: "A Protection Order was sought under the Protection of Women from Domestic Violence Act to secure her safety and restrain the abuser." },
      { title: "Evidence collection", text: "The team gathered witness statements, photographs and messages to support her claims." },
      { title: "Financial relief", text: "Interim monetary relief was sought so she could secure temporary financial support." },
      { title: "Counselling and guidance", text: "Alongside legal steps, she was connected with counsellors and NGOs specialising in domestic abuse support." },
      { title: "Divorce and custody", text: "Divorce proceedings began at the same time, with the team working to secure custody of her minor child." },
    ],
    result: [
      { title: "Protection Order issued", text: "The court granted a swift order ensuring her safety and barring the abuser from contacting her." },
      { title: "Financial support secured", text: "Interim monetary relief gave her stability while the case ran." },
      { title: "Favourable divorce settlement", text: "The court granted a divorce decree with custody of her child and a fair alimony settlement." },
      { title: "A new beginning", text: "With the case concluded, Rhea regained her independence and rebuilt her life in a safe, supportive environment." },
    ],
    conclusion:
      "This case reflects Mountain Chambers’ commitment to supporting victims of family violence with empathy and expertise. By addressing immediate safety concerns and pursuing comprehensive legal solutions, the firm secured justice and a brighter future for the client.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-team", label: "Our Team" },
  { href: "/practice-areas", label: "Practice Areas", children: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const CONSENT_COOKIE = "mc_terms_accepted";


