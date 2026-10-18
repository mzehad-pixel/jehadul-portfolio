export const portfolioData = {
  personal: {
    name: "Md Jehadul Islam",
    shortName: "Jehadul",
    role: "Senior Product Designer",
    location: "Dhaka, Bangladesh",
    availability: "Available for new projects & full-time roles",
    tagline: "Crafting High-Impact Digital Products & Design Systems",
    bio: "I am a Senior Product & UI/UX Designer with over 5 years of experience building scalable SaaS, Fintech, and consumer applications. I bridge the gap between user needs and business revenue with clean aesthetics and systematic design.",
    phone: "+8801670566270",
    email: "m.zehad@gmail.com",
    dribbble: "https://dribbble.com/jehadbd",
    behance: "https://www.behance.net/mdjehadulislam",
    linkedin: "https://www.linkedin.com/in/md-jehadul-islam/",
    resumeUrl: "/resume.pdf",
    avatar: "/avatar.png",
    photo: "/profile.png",
  },
  metrics: [
    { value: "5+", label: "Years Experience" },
    { value: "40+", label: "Projects Shipped" },
    { value: "1M+", label: "Users Impacted" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  services: [
    {
      num: "01",
      title: "UI / UX Design",
      desc: "Designing intuitive, human-centered interfaces that balance aesthetics with frictionless usability across iOS, Android, and Web.",
      deliverables: ["User Research & Personas", "Wireframes & Prototypes", "Micro-interactions & UX Audits"]
    },
    {
      num: "02",
      title: "Design Systems",
      desc: "Creating scalable, tokenized component libraries in Figma that accelerate development and maintain 100% brand consistency.",
      deliverables: ["Atomic Component Libraries", "Design Tokens & Documentation", "Figma to Code Alignment"]
    },
    {
      num: "03",
      title: "Fintech & SaaS Architecture",
      desc: "Specialized in complex domain products: digital banking, merchant payment gateways, remittance flows, and data-dense dashboards.",
      deliverables: ["Complex Multi-step Workflows", "Data Visualization", "Frictionless Checkout & KYC"]
    },
    {
      num: "04",
      title: "Product Strategy",
      desc: "Aligning user needs directly with business goals through rapid design sprints, competitive analysis, and conversion optimization.",
      deliverables: ["Design Sprints", "Conversion Rate Optimization", "Stakeholder Alignment"]
    }
  ],
  projects: [
    {
      id: "kori-bank",
      title: "Kori Digital Bank PLC",
      subtitle: "Next-Gen Digital Banking & Enterprise Design System",
      category: "Fintech",
      year: "2024",
      client: "Kori Digital Bank",
      role: "Lead Design System Designer",
      tags: ["Fintech", "Design System", "Mobile App", "Web App"],
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
      overview: "Designed a comprehensive, accessible design system and core digital banking journeys for Kori Digital Bank PLC. Standardized dozens of components including dynamic authentication, multi-step transaction authorization, and real-time ledger dashboards.",
      highlights: [
        "Architected complete token-based design system across light & dark themes",
        "Streamlined account creation and biometric KYC verification flows",
        "Decreased frontend handoff discrepancy by 45%"
      ],
      linkText: "View Case Study"
    },
    {
      id: "smanager",
      title: "sManager (Sheba Platform)",
      subtitle: "Empowering 1M+ Micro & Small Businesses in Bangladesh",
      category: "MSME Fintech",
      year: "2022",
      client: "Sheba Platform Limited",
      role: "Product Designer",
      tags: ["Mobile App", "Fintech", "SaaS", "Top-Up & EMI"],
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
      overview: "Crafted core revenue-generating features for sManager, Bangladesh's leading MSME platform. Researched and designed mobile flows from scratch for digital collections, utility top-up, and merchant EMI loans.",
      highlights: [
        "Conducted in-field user interviews with local shop owners to tailor UX for low digital literacy",
        "Streamlined digital cash collection and payment link generation",
        "Achieved 28% increase in weekly repeated merchant transactions"
      ],
      linkText: "View Case Study"
    },
    {
      id: "globpay",
      title: "GlobPay & Deshi-Pay",
      subtitle: "Cross-Border Remittance & Consumer Digital Wallet",
      category: "Fintech & Payments",
      year: "2021 - 2022",
      client: "Newroz Technology Ltd",
      role: "UI/UX Designer",
      tags: ["Cross-Border", "Crypto/Fiat", "iOS & Android", "FINTRAC Canada"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      overview: "Designed frictionless mobile apps for GlobPay (registered with FINTRAC Canada) and Deshi-Pay, enabling low-cost global money transfers, personal micro-loans, and multi-currency digital storage.",
      highlights: [
        "Designed transparent exchange rate calculator and status tracker",
        "Created a secure 3-step KYC onboarding flow with high conversion",
        "Consistent brand guidelines across all customer touchpoints"
      ],
      linkText: "View Case Study"
    },
    {
      id: "altcom",
      title: "Altcom Global Commerce",
      subtitle: "Multi-Brand E-Commerce & Retail Experience",
      category: "E-Commerce",
      year: "2022 - 2024",
      client: "Altcom LLC",
      role: "Senior UI/UX Designer",
      tags: ["E-Commerce", "Web & Mobile", "Design System", "Conversion"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      overview: "Redesigned consumer-facing web and mobile applications for international retail brands under Altcom. Focused on responsive product discovery, personalized recommendations, and a high-converting one-page checkout.",
      highlights: [
        "Engineered modular filter, sorting, and live cart drawer interactions",
        "Boosted checkout completion rate by 22% on mobile devices",
        "Integrated interactive gift packaging and dynamic delivery calculators"
      ],
      linkText: "View Case Study"
    },
    {
      id: "dnothi",
      title: "D-NOTHI GovTech Platform",
      subtitle: "Enterprise Document Lifecycle & Workflow Management",
      category: "Enterprise SaaS",
      year: "2023",
      client: "Enterprise E-Governance",
      role: "Product Designer",
      tags: ["Enterprise SaaS", "Web Platform", "Complex Workflows", "GovTech"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      overview: "Transformed bureaucratic document flows into an intuitive digital filing system. Modeled incoming and outgoing mail tracking, note-taking, draft creation, and digital signature authorization.",
      highlights: [
        "Unified high-density tables with customizable views and filters",
        "Reduced document processing time by over 50% across departments",
        "Built responsive web views for tablet and desktop monitors"
      ],
      linkText: "View Case Study"
    }
  ],
  process: [
    {
      step: "01",
      title: "Request & Alignment",
      desc: "We begin with a deep dive into your product vision, target audience, business model, and project milestones to ensure shared understanding.",
    },
    {
      step: "02",
      title: "Research & Ideation",
      desc: "Mapping out user journey maps, information architecture, competitive audits, and low-fidelity wireframes to solidify the core UX foundation.",
    },
    {
      step: "03",
      title: "Visual Design & Systems",
      desc: "Transforming concepts into high-fidelity screens. Crafting typography hierarchy, color palettes, micro-interactions, and reusable components in Figma.",
    },
    {
      step: "04",
      title: "User Testing & Refine",
      desc: "Validating prototypes through usability testing, heuristic evaluations, and stakeholder feedback to eliminate edge-case friction.",
    },
    {
      step: "05",
      title: "Developer Handoff & Launch",
      desc: "Delivering pixel-perfect Figma specs, design tokens, responsive guidelines, and supporting frontend developers through launch.",
    }
  ],
  career: [
    {
      company: "Altcom LLC",
      role: "Senior UI/UX Designer",
      period: "August 2022 — July 2024",
      description: "Led product design for mobile applications, e-commerce platforms, and direct-to-consumer digital ecosystems."
    },
    {
      company: "Sheba Platform Limited",
      role: "Product Designer",
      period: "January 2022 — August 2022",
      description: "Spearheaded sManager mobile app features: Digital Collections, Utility Top-up, and Merchant EMI loans with extensive field user testing."
    },
    {
      company: "Newroz Technology Limited",
      role: "UI/UX Designer",
      period: "August 2021 — February 2022",
      description: "Designed fintech and remittance applications (GlobPay registered with FINTRAC Canada, and Deshi-Pay digital wallet)."
    },
    {
      company: "Nurency Digital Agency",
      role: "UI/UX Designer",
      period: "November 2019 — August 2021",
      description: "Designed modern web applications, SaaS dashboards, LMS platforms, and high-conversion e-commerce themes."
    }
  ],
  skills: [
    "Product Design (UI/UX)",
    "Design Systems & Tokens",
    "Wireframing & Prototyping",
    "User Research & Usability Testing",
    "Information Architecture",
    "Interaction Design",
    "Figma & FigJam",
    "Mobile App Design (iOS/Android)",
    "SaaS & Enterprise Dashboards",
    "Design Sprints & Workshops"
  ],
  testimonials: [
    {
      quote: "Jehadul transformed our complex financial workflow into an intuitive, elegant experience that our users loved immediately. His attention to design systems saved our engineering team weeks.",
      author: "Product Director",
      role: "Fintech Group"
    },
    {
      quote: "Working with Jehadul was a game changer for our e-commerce platform. His meticulous attention to detail and customer psychology drove a noticeable increase in our conversion rates.",
      author: "Managing Partner",
      role: "Altcom Ecosystem"
    },
    {
      quote: "One of the most reliable and forward-thinking product designers. He takes ownership of projects from initial sketch to final developer handoff seamlessly.",
      author: "Engineering Lead",
      role: "Sheba Platform"
    }
  ]
};
