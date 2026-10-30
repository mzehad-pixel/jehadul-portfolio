// Mike Sport case study content. Written from the supplied project brief and
// the supplied design PDF. No research findings or metrics beyond those in the brief.

const img = (name) => `/mikesport/${name}.webp`;

export const mikeSportProject = {
  id: "mikesport",
  caseStudy: "mikesport",
  title: "Mike Sport",
  subtitle: "Redesigning Sports E-commerce for Better Discovery, Trust & Conversion.",
  category: "E-Commerce",
  client: "Altcom LLC",
  role: "UX Designer - II",
  tags: ["E-Commerce", "Sports Retail", "Responsive Web", "UX Audit", "Mobile"],
  image: img("cover"),
  overview:
    "Mike Sport is a leading sporting goods retailer and wholesaler operating in Lebanon, Cyprus, and Iraq. I redesigned its e-commerce experience to improve product discovery, pricing clarity and trust.",
  highlights: [],
};

export const mikeSportCaseStudy = {
  hero: {
    title: "Mike Sport",
    subtitle: "Redesigning Sports E-commerce for Better Discovery, Trust & Conversion.",
    intro:
      "Mike Sport is a leading sports retailer in Lebanon. This case study follows the redesign of its e-commerce website, from a UX audit of the existing site to the final responsive designs.",
    image: img("hero-shot"),
    meta: [
      ["Project", "Mike Sport"],
      ["Industry", "Sports & E-commerce"],
      ["Platform", "Responsive Web"],
      ["Market", "Lebanon"],
      ["Role", "UX Designer - II"],
      ["Company", "Altcom LLC"],
    ],
  },
  overview: {
    title: "Project Overview",
    text:
      "Mike Sport is a leading sporting goods retailer and wholesaler operating in Lebanon, Cyprus, and Iraq. It serves professional athletes, amateurs, schools, clubs, and corporations.",
    objective:
      "The objective was to improve the online shopping experience while connecting digital discovery with physical retail.",
    stats: [
      { value: "20+", label: "Physical branches" },
      { value: "150+", label: "International sports brands" },
      { value: "1,000+", label: "Products" },
    ],
  },
  challenge: {
    title: "The Challenge",
    intro:
      "An initial audit of the existing website surfaced the UX problems below. The annotations on the screenshots are from that audit.",
    items: [
      "Difficult product discovery across a large catalogue.",
      "Poor navigation and category organization.",
      "Small typography and accessibility issues.",
      "Weak brand visibility.",
      "Unclear pricing and discount communication.",
      "Low-visibility delivery and return information.",
      "Limited store availability information.",
    ],
    shots: [
      { src: img("old-left"), caption: "Original website. Accessibility problem; no mega menu for category, with 1000+ items for sports wear." },
      { src: img("old-right"), caption: "Original website. Brand names are not visible; featured items and service offers are not visible." },
    ],
  },
  research: {
    title: "UX Audit & Research",
    intro:
      "I started with a structured audit of the existing site, organised around six areas. Each area fed directly into the design decisions in the next section.",
    areas: [
      ["Existing website audit", "A review of the original site against an ecommerce conversion checklist."],
      ["Navigation & information architecture", "A review of how categories and menus were organised for a catalogue of 1,000+ products."],
      ["Product discovery assessment", "An assessment of how easily shoppers could find and browse products."],
      ["Brand visibility analysis", "A check of how visible brands were across the site."],
      ["Pricing & trust assessment", "A review of how pricing, discounts and trust information were communicated."],
      ["Mobile usability observations", "Observations of the experience on smaller screens."],
    ],
    hotjar: {
      title: "Hotjar analysis",
      text:
        "Hotjar analysis was used as a research input. The team reviewed user interaction patterns and website behavior to identify friction points and opportunities.",
    },
    method: {
      title: "How we solve and improve UX in short time",
      text:
        "In this project, we are following an ecommerce CRO checklist to maintain all the features and implement them. Ecommerce Conversion checklist cover every single nook-and-cranny of store's conversion process.",
      image: img("cro"),
    },
  },
  strategy: {
    title: "Design Strategy",
    intro: "Each design decision below responds to a specific problem found in the audit.",
    items: [
      {
        title: "Simplified mega menu and category navigation",
        problem: "A very large catalogue with no clear category navigation.",
        response:
          "Simple top-level navigation (Home, Men, Women, Kids, Outlet) and category structure, with sports-based entry points such as Shop by Adventure.",
        image: img("header"),
        wide: true,
      },
      {
        title: "Improved search experience and predictive suggestions",
        problem: "Shoppers need a fast route to products in a catalogue of 1,000+ items.",
        response:
          "A prominent search field in the header on every page, supported by predictive suggestions to get shoppers to products faster.",
        image: img("header"),
        wide: true,
      },
      {
        title: "Better brand discovery and brand listing",
        problem: "Brand names were not visible.",
        response:
          "A Top brands row on the homepage with a link to the full brand listing, and a dedicated Shop by Brand section.",
        image: img("brands"),
        wide: true,
      },
      {
        title: "Clearer product cards and pricing hierarchy",
        problem: "Pricing and discounts were unclear.",
        response:
          "Product cards with a clear order of information: brand, product name, then a highlighted price, with discount indicators where they apply.",
        image: img("plp-top"),
        wide: true,
      },
      {
        title: "More visible delivery, return, and payment information",
        problem: "Delivery and return information had low visibility.",
        response:
          "Exchange & return, refund, and shipping & delivery information organised under clear Privacy & Terms headings, so shoppers can find it when they need it.",
        image: img("footer-policies"),
      },
      {
        title: "Improved mobile shopping experience",
        problem: "Mobile usability was reviewed as part of the audit.",
        response:
          "A responsive design with mobile navigation, a filter flow for browsing products, and simplified product and cart screens.",
        images: [img("phone-1"), img("phone-2")],
      },
      {
        title: "Better store availability and physical store integration",
        problem: "Limited store availability information.",
        response:
          "Store information and a Find a store link placed in the site footer, connecting online discovery with the physical branches.",
        image: img("footer-help"),
      },
    ],
  },
  showcase: {
    title: "Design Showcase",
    intro: "The final designs, shown as delivered.",
    home: {
      title: "A. Homepage Redesign",
      points: [
        "Hero banner",
        "Promotional content",
        "Service highlights",
        "Brand discovery",
        "Featured products",
        "Improved content hierarchy",
      ],
      hero: img("hero-shot"),
      full: [img("home-1"), img("home-2")],
      details: [
        { src: img("adventure"), label: "Shop by Adventure" },
        { src: img("featured"), label: "Featured products" },
        { src: img("shop-look"), label: "Shop the look" },
        { src: img("gift-card"), label: "E-Gift Card" },
      ],
    },
    nav: {
      title: "B. Navigation & Mega Menu",
      points: [
        "Category organization",
        "Sports-based discovery",
        "Brand navigation",
        "Improved information architecture",
      ],
      header: img("header"),
      filter: img("plp-filter"),
      filterCaption: "Filter panel: Collections, Explore Now, Product Type, Price Range and Product Brand.",
    },
    brand: {
      title: "C. Brand Discovery",
      points: ["Brand showcase", "Brand listing", "Improved brand visibility"],
      images: [img("brands"), img("shop-brand")],
    },
    product: {
      title: "D. Product Discovery",
      points: ["Product cards", "Pricing and discount hierarchy", "Product browsing experience"],
      list: img("plp"),
      pdp: img("pdp"),
      cart: img("cart"),
    },
    mobile: {
      title: "E. Mobile Experience",
      points: ["Responsive homepage", "Mobile navigation", "Product browsing", "Mobile-friendly interactions"],
      phones: [
        { src: img("phone-1"), label: "Home" },
        { src: img("phone-2"), label: "Product list" },
        { src: img("phone-3"), label: "Filter" },
        { src: img("phone-4"), label: "Product details" },
        { src: img("phone-5"), label: "Cart" },
      ],
    },
  },
  impact: {
    title: "Business Impact & Results",
    value: "~30%",
    label: "increase in sales following the redesign",
    note:
      "Observed after reviewing post-redesign sales reports and website behavior through Hotjar analysis. This is an observed business outcome, not a proven causal attribution.",
    points: [
      "Improved shopping experience",
      "Better product and brand discovery",
      "Clearer pricing and trust communication",
      "Improved navigation and browsing experience",
    ],
  },
  learnings: {
    title: "Key Learnings",
    items: [
      "Large catalogues require clear and predictable navigation.",
      "Product discovery should be simple and intuitive.",
      "Pricing transparency builds shopping confidence.",
      "Trust information should appear when customers need it.",
      "A consistent responsive experience is essential across devices.",
      "UX improvements should be evaluated against real business outcomes.",
    ],
  },
  closing: {
    quote:
      "Good design is not just about how a product looks. It's about making the experience easier, clearer, and more valuable for both users and businesses.",
  },
};
