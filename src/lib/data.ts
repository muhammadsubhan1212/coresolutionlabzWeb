export const siteConfig = {
  name: "CoreSolutionLabz",
  tagline: "Build • Innovate • Transform",
  description:
    "CoreSolutionLabz is a software engineering partner for ambitious companies — building websites, custom software, mobile apps, cloud infrastructure, automation, and security programs that hold up under real-world scale.",
  url: "https://www.coresolutionlabz.com",
  email: "hello@coresolutionlabz.com",
  phone: "+92 312 2264055",
  phoneSecondary: "+92 319 6869553",
  whatsappNumber: "923122264055",
  location: "Strategix Marketing Co., St. 4, Jahangir Town, Block H, Gulzar-e-Hijri, Scheme 33, Karachi, Pakistan 74700",
  founder: "Muhammad Awais",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61591839523492",
  linkedin: "https://www.linkedin.com/company/core-solutions-labz",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website",
    description:
      "Marketing sites, web platforms, and portals engineered for speed, clarity, and conversion — built on modern frameworks and maintained for the long run.",
    image: "/assets/illustrations/website-development.png",
    points: ["Responsive front-end engineering", "CMS & headless architecture", "Performance-first builds"],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Software",
    description:
      "Bespoke applications and internal tools shaped around your workflows, not the other way around — built to scale as your operation grows.",
    image: "/assets/illustrations/software-development.png",
    points: ["Product & platform engineering", "Legacy modernization", "API & systems integration"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile",
    description:
      "Native and cross-platform mobile experiences designed for retention, built for reliability, and shipped on schedule to iOS and Android.",
    image: "/assets/illustrations/mobile-app.png",
    points: ["iOS & Android native development", "Cross-platform mobile engineering", "App store readiness"],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortTitle: "Cloud",
    description:
      "Cloud architecture, migration, and managed infrastructure that reduces cost, improves resilience, and scales cleanly with demand.",
    image: "/assets/illustrations/cloud-solutions.png",
    points: ["Cloud architecture across major providers", "Migration & modernization", "Cost & performance optimization"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    description:
      "Workflow and process automation that removes manual overhead, reduces error, and frees your team to focus on higher-value work.",
    image: "/assets/illustrations/automation.png",
    points: ["Workflow automation", "RPA & integration pipelines", "Operational tooling"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Security",
    description:
      "Security architecture, audits, and monitoring that protect your systems and data without slowing down your engineering teams.",
    image: "/assets/illustrations/cybersecurity.png",
    points: ["Security audits & hardening", "Zero-trust architecture", "Compliance readiness"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    shortTitle: "Consulting",
    description:
      "Strategic technology guidance for teams making critical infrastructure, architecture, and digital transformation decisions.",
    image: "/assets/illustrations/it-consulting.png",
    points: ["Technology roadmapping", "Digital transformation strategy", "Architecture review"],
  },
];

export const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "8+", label: "Industries Served" },
  { value: "12+", label: "Years, Combined Team Experience" },
  { value: "24/7", label: "Support Availability" },
];

export const whyChooseUs = [
  {
    title: "Senior engineering, from day one",
    description:
      "Every engagement is led by senior engineers and architects — not routed through junior benches. You get accountability and depth from the first conversation.",
  },
  {
    title: "Built to scale, not just to ship",
    description:
      "We design systems for what your business becomes, not just what it is today. Architecture decisions are made with growth, maintainability, and cost in mind.",
  },
  {
    title: "Security and reliability by default",
    description:
      "Every build follows secure engineering practices, thorough testing, and documented handover — so nothing is a black box once we're done.",
  },
  {
    title: "Transparent process, real communication",
    description:
      "Clear timelines, honest estimates, and direct access to the people building your product. No account-manager layers, no surprises.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We study your business goals, users, and constraints to define scope, priorities, and success metrics before any code is written.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "System architecture, UX flows, and interface design are mapped out and validated with you before development begins.",
  },
  {
    step: "03",
    title: "Engineering & Build",
    description: "Iterative development in short cycles, with regular demos, code review, and continuous integration throughout the build.",
  },
  {
    step: "04",
    title: "Quality & Testing",
    description: "Rigorous functional, performance, and security testing to make sure what we ship holds up under real-world conditions.",
  },
  {
    step: "05",
    title: "Launch & Deployment",
    description: "Controlled, zero-drama releases with monitoring, rollback plans, and documentation handed over clean.",
  },
  {
    step: "06",
    title: "Support & Growth",
    description: "Ongoing support, monitoring, and iteration so your platform keeps pace with your business after launch.",
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Enterprise Web Platform",
    category: "Website Development",
    description: "A high-performance corporate platform rebuilt for speed, clarity, and search visibility across the client's key markets.",
    image: "/assets/illustrations/website-development.png",
    tags: ["Modern Web Stack", "Headless CMS", "SEO"],
  },
  {
    title: "Operations Management Suite",
    category: "Custom Software",
    description: "An internal platform that replaced several disconnected spreadsheets with a single source of truth for operations and reporting.",
    image: "/assets/illustrations/software-development.png",
    tags: ["Custom Platform", "Dashboards", "Integrations"],
  },
  {
    title: "Consumer Banking App",
    category: "Mobile App Development",
    description: "A cross-platform banking companion app built with biometric security, offline resilience, and consistently strong app store reviews.",
    image: "/assets/illustrations/mobile-app.png",
    tags: ["Cross-Platform Mobile", "Fintech", "Security"],
  },
  {
    title: "Cloud Infrastructure Migration",
    category: "Cloud Solutions",
    description: "A full migration from on-premise servers to a scalable, cost-optimized, and highly available cloud architecture.",
    image: "/assets/illustrations/cloud-solutions.png",
    tags: ["Cloud Architecture", "DevOps", "Cost Optimization"],
  },
  {
    title: "Warehouse Automation Pipeline",
    category: "Business Automation",
    description: "An automated fulfillment workflow that significantly cut manual order processing time and reduced fulfillment errors.",
    image: "/assets/illustrations/automation.png",
    tags: ["Workflow Automation", "RPA", "Logistics"],
  },
  {
    title: "Zero-Trust Security Overhaul",
    category: "Cybersecurity",
    description: "A ground-up security architecture redesign, from identity access to encrypted data pipelines, for a regulated services provider.",
    image: "/assets/illustrations/cybersecurity.png",
    tags: ["Zero Trust", "Compliance", "Monitoring"],
  },
];

export type TechCapability = {
  category: string;
  description: string;
};

export const techStack: TechCapability[] = [
  {
    category: "Frontend Engineering",
    description: "Modern, component-based frameworks for fast, accessible web and product interfaces.",
  },
  {
    category: "Backend & APIs",
    description: "Scalable service architectures across widely-used enterprise and open-source frameworks.",
  },
  {
    category: "Mobile Development",
    description: "Native and cross-platform engineering for polished iOS and Android experiences.",
  },
  {
    category: "Cloud & Infrastructure",
    description: "Cloud-native architecture, containerization, and infrastructure automation across major providers.",
  },
  {
    category: "Data & Storage",
    description: "Relational, NoSQL, and caching systems matched to your workload and scale.",
  },
];

export type Industry = {
  name: string;
  description: string;
};

export const industries: Industry[] = [
  { name: "Finance & Fintech", description: "Secure, compliant platforms for banking, payments, and investment products." },
  { name: "Healthcare", description: "HIPAA-aware systems for providers, clinics, and health-tech platforms." },
  { name: "Retail & E-commerce", description: "High-conversion storefronts and inventory systems built for scale." },
  { name: "Logistics & Supply Chain", description: "Real-time tracking, routing, and fulfillment automation." },
  { name: "Real Estate", description: "Listing platforms, CRMs, and portals for property and asset management." },
  { name: "Education", description: "Learning platforms and administrative systems for institutions and edtech." },
  { name: "Manufacturing", description: "Operational software and IoT integration for production environments." },
  { name: "Government & Public Sector", description: "Secure, accessible digital services built to compliance standards." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "CoreSolutionLabz rebuilt our core platform without slowing the business down for a single day. Their engineering discipline is the kind you usually only find at much larger firms.",
    name: "S. Malik",
    role: "CTO, Financial Services Company",
  },
  {
    quote:
      "What stood out was the clarity — every decision was explained, every timeline was honest. The mobile app they delivered has been rock solid since day one.",
    name: "R. Ahmed",
    role: "Founder, Consumer Mobile App",
  },
  {
    quote:
      "Our cloud costs dropped noticeably and our uptime went from a liability to a non-issue. That migration paid for itself faster than we expected.",
    name: "N. Farooq",
    role: "VP Engineering, Logistics Platform",
  },
  {
    quote:
      "They approached our security overhaul like it was their own company on the line. Thorough, methodical, and completely transparent throughout.",
    name: "A. Siddiqui",
    role: "Director of IT, Regulated Services Firm",
  },
];

export const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We work across finance, healthcare, retail, logistics, real estate, education, manufacturing, and the public sector — anywhere software, cloud, or security infrastructure needs to be engineered to a high standard.",
  },
  {
    question: "How is a typical engagement structured?",
    answer:
      "Most projects move through discovery, architecture and design, iterative development, testing, launch, and ongoing support. You'll always know what phase you're in, what's next, and why.",
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer:
      "Both. We tailor engagement models to the stage of the business — from lean MVP builds for early-stage teams to long-term platform partnerships for enterprise clients.",
  },
  {
    question: "Can you take over an existing codebase or product?",
    answer:
      "Yes. We regularly take over legacy systems and in-progress builds, starting with a technical audit so you understand exactly what you're working with before we proceed.",
  },
  {
    question: "What does support look like after launch?",
    answer:
      "Every engagement includes documented handover, and most clients continue with a monitoring and support retainer so the platform keeps pace with the business after launch.",
  },
  {
    question: "How do you price projects?",
    answer:
      "We scope projects based on complexity and provide fixed-quote or milestone-based pricing wherever possible, with retainer options for ongoing work. You'll get a clear estimate before anything begins.",
  },
];
