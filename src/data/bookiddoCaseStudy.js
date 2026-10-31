// Bookiddo case study content. Text comes from the supplied case-study document.
// Fields the document leaves as placeholders (role, timeline, team, tools, outcome
// numbers) and its internal layout / export checklists are intentionally not shown.

const img = (name) => `/bookiddo/${name}.webp`;

export const bookiddoProject = {
  id: "bookiddo",
  caseStudy: "bookiddo",
  title: "Bookiddo — Kids' Party Marketplace",
  subtitle: "UX Case Study · Web Platform + Mobile Adaptation · Greece",
  category: "Marketplace",
  tags: ["Marketplace", "Web Platform", "Booking Flow", "Vendor Dashboard", "Greece"],
  image: img("cover"),
  overview:
    "Bookiddo is a two-sided marketplace where parents in Greece discover and book kids' party venues and entertainers in one place, and where entertainers, vendors and venue owners list their services, receive booking requests and get paid.",
  highlights: [],
};

export const bookiddoCaseStudy = {
  hero: {
    title: "Bookiddo — Kids' Party Marketplace",
    subtitle: "UX Case Study · Web Platform + Mobile Adaptation · Greece",
    image: img("home"),
  },
  intro:
    "Bookiddo is a two-sided marketplace where parents in Greece discover and book kids' party venues and entertainers in one place, and where entertainers, vendors and venue owners list their services, receive booking requests and get paid. This case study covers the full product surface: the public website, the parent booking flow and portal, a category-aware vendor onboarding flow, the vendor dashboard, and a mobile adaptation.",
  glance: [
    ["Product", "Bookiddo — kids' party booking marketplace (venues + entertainers/vendors)"],
    ["Market", "Greece — cities shown include Athens, Thessaloniki, Patras, Piraeus, Larissa, Heraklion"],
    ["Platforms", "Desktop web (1,600 px frames), mobile adaptation of the website"],
    ["Users", "Parents, entertainers/vendors, venue owners, platform admin"],
    [
      "Scope designed",
      "Homepage and auth, venue discovery and detail, booking cart and payment, parent portal, 9-step vendor onboarding, vendor dashboard, super admin, mobile version",
    ],
  ],
  problem: {
    title: "The Problem",
    paragraphs: [
      "Planning a child's birthday party usually means searching for a venue, an animator, a cake and catering across separate channels — social media, phone calls and word of mouth — with no single place to compare options, check availability or confirm a booking. On the other side, entertainers and small party businesses depend on irregular enquiries and have no simple way to present packages, manage requests or receive payment reliably.",
      "Bookiddo brings both sides into one platform: parents can browse verified venues and entertainers, build a complete party with add-ons, and pay in a single flow; vendors get a structured onboarding, a dashboard for booking requests, and scheduled payouts.",
    ],
  },
  roles: {
    title: "Users and Roles",
    rows: [
      {
        role: "Parents",
        who: "Parents organising a child's birthday or celebration",
        needs: "Find a venue, compare ratings and prices, add extras (animator, DJ, balloons, catering, cake), book, pay, review",
      },
      {
        role: "Entertainers / vendors",
        who: "Animators, magicians, clowns, DJs, photographers, balloon artists, pastry shops, caterers",
        needs: "Create a profile, set services and packages, set pricing and availability, verify identity, receive and manage bookings",
      },
      {
        role: "Venue owners",
        who: "Playgrounds and party venues across Greece",
        needs: "List a venue, present photos and a virtual tour, set capacity and minimum charge, take bookings",
      },
      {
        role: "Super admin",
        who: "Platform operations team",
        needs: "Monitor orders, income and platform activity through dashboard views",
      },
    ],
  },
  goals: {
    title: "Design Goals",
    items: [
      ["One flow for the whole party.", "Venue, entertainers and catering extras are booked together, not in separate transactions."],
      ["Trust at every step.", "Ratings, parent reviews and a safety-checked venue claim are surfaced where parents decide."],
      ["Fast booking.", "The product promises a party organised from a phone in minutes, so the flow is broken into short, clearly labelled steps."],
      [
        "Category-aware vendor onboarding.",
        "Each vendor type (animator–magician, balloon decorator, pastry shop, DJ, photographer) gets a service setup that matches its trade instead of one generic form.",
      ],
      ["One dashboard for running the business.", "New requests, income and order history are visible on a single screen for vendors."],
    ],
  },
  scope: {
    title: "Scope and Information Architecture",
    text: "The Figma file organises the product into clear audience sections, which map directly to the case study structure:",
    items: [
      ["Website", "public pages: homepage, login/sign-up, venue listing, venue detail, virtual tour, vendor profile, service cart, checkout and payment confirmation."],
      ["Entertainers onboarding", "the numbered vendor sign-up sequence (steps 01–09)."],
      ["Parents Portal", "bookings list, write-a-review, and profile management."],
      ["Vendor Dashboard", "booking requests, income status and order history."],
      ["Super admin", "dashboard views for platform-level orders and income."],
      ["Mobile", "a phone-width adaptation of the website content."],
      ["Brand", "a multicolour 'bookiddo' wordmark (grey-blue, coral, navy, teal and yellow letters) on a pale mint background."],
    ],
  },
  flows: {
    title: "Key User Flows",
    items: [
      {
        title: "Parent booking flow",
        steps: ["Homepage", "Venue listing", "Venue detail", "Service cart", "Customer & payment", "Payment confirmation", "Parent portal"],
        text: "Homepage → venue listing (396 venues, filterable by location and venue type) → venue detail (photos, virtual tour, date, guest count, extras) → service cart (add-on services with a booking summary) → customer and payment details → payment confirmation → parent portal (booking status, review, profile).",
        intent:
          "Design intent: the booking panel stays beside the venue story on the detail page, the summary stays visible through cart and checkout, and each step has one clear primary action.",
      },
      {
        title: "Vendor onboarding flow",
        steps: ["01 Basic Information", "02/03 Category & specialty", "04 Service Details", "05 Pricing & Availability", "08 Verify Your Profile", "09 Payment Details", "Confirmation", "Vendor Dashboard"],
        text: "Entertainer sign-up entry on the homepage → 01 Basic Information → 02/03 Category and specialty selection → 04 Service Details, with category variants 4.1 Animator–Magician, 4.2 Balloon Decorator, 4.3 Pastry Shop, 4.4 DJ, 4.5 Photographer → 05 Pricing and Availability (with the option to add another package) → 08 Verify Your Profile (ID/passport upload) → 09 Payment Details → confirmation → Vendor Dashboard.",
        intent:
          "Design intent: a progress bar runs across the top of the flow, one topic is handled per screen, and the service-details step adapts to the category chosen earlier.",
      },
      {
        title: "Vendor operations loop",
        steps: ["Booking request", "Accept / decline", "Weekly payout", "Visibility badges", "Parent reviews"],
        text: "A new booking request arrives in the dashboard with date, guest count and order ID → the vendor accepts or declines and customises the booking → payment is processed on a weekly cycle via Stripe/PayPal → strong reviews earn visibility badges → parent reviews feed back into the public listing pages.",
      },
    ],
  },
  walkthrough: {
    title: "Design Walkthrough — Screen by Screen",
    home: {
      title: "Homepage — one homepage, two audiences",
      text: "The homepage speaks to parents first (venue discovery, safety, parent reviews, organising a party from a phone in minutes) while a prominent entertainer sign-up entry recruits the supply side from the same screen. Social sign-up (Google, Facebook, Instagram) keeps entry friction low for both audiences.",
      images: [
        [img("home"), "Homepage"],
        [img("entertainers"), "Entertainers listing"],
      ],
    },
    auth: {
      title: "Login and sign-up — a consistent auth pattern",
      text: "Login and account creation share one split layout: a warm photo of a child playing on the left and a clean white form card on the right, with email/password plus social options. The same pattern repeats across audiences, so returning users always recognise it.",
      images: [
        [img("login"), "Login"],
        [img("signup"), "Create your account"],
      ],
    },
    listing: {
      title: "Venue listing — built for scanning",
      text: "The listing page leads with the result count and a filter sidebar (Location, Venue Type — for example Indoor Play Centre, Outdoor Garden, With Restaurant, Educational Venue). Venue cards carry a photo, name, location, star rating and price in a consistent grid, so parents can compare many options quickly.",
      images: [
        [img("listing"), "Venue listing"],
        [img("filters"), "Venue listing with filters"],
      ],
    },
    detail: {
      title: "Venue detail — decide and book on one page",
      text: "The detail page combines the venue story (about text, photos and videos, a 360° virtual tour) with a booking panel covering minimum charge, date and time, guest count against maximum capacity, and extras such as animator, DJ and balloon decoration that can be added in place. Parents never lose booking context while exploring the venue.",
      images: [
        [img("detail"), "Venue detail"],
        [img("tour"), "360° virtual tour"],
        [img("vendor-profile"), "Vendor profile"],
      ],
    },
    checkout: {
      title: "Service cart and checkout — summaries that stay visible",
      text: "The cart separates service details and add-on quantities on the left from a booking summary on the right; checkout keeps the same summary beside the customer form and payment method selection. A dedicated confirmation screen closes the flow with a clear success state.",
      images: [
        [img("cart"), "Service cart"],
        [img("checkout"), "Customer & payment details"],
        [img("done"), "Payment done"],
      ],
    },
    portal: {
      title: "Parent portal — everything after booking",
      text: "A simple sidebar portal groups My Booking (with status labels), profile management, and a review flow with star rating, written feedback and photo upload — closing the loop that feeds social proof back into the listing pages.",
      images: [
        [img("bookings"), "My bookings"],
        [img("rating"), "Write a review"],
        [img("profile"), "Profile"],
      ],
    },
    onboarding: {
      title: "Vendor onboarding — one template, five trades",
      text: "The onboarding reuses a single service-details template across five vendor categories, changing the fields to fit each trade. Pricing supports multiple packages, identity verification uses document upload, and the flow ends with payment details and a confirmation state.",
      steps: [
        ["ob-basic", "01 Basic Information"],
        ["ob-category", "02 Category Selection"],
        ["ob-specialty", "03 Specialty"],
        ["ob-service", "04 Service Details"],
        ["ob-pricing", "05 Pricing & Availability"],
        ["ob-verify", "08 Verify Your Profile"],
        ["ob-plan", "Subscribe to a plan"],
        ["ob-payment", "09 Payment Details"],
        ["ob-congrats", "Confirmation"],
      ],
      variants: [
        ["ob-var1", "4.1 Animator–Magician"],
        ["ob-var2", "4.2 Balloon Decorator"],
        ["ob-var3", "4.3 Pastry Shop"],
        ["ob-var4", "4.4 DJ"],
        ["ob-var5", "4.5 Photographer"],
      ],
    },
    dashboard: {
      title: "Vendor dashboard — requests, income, history",
      text: "The dashboard puts a new-booking alert with accept/decline actions at the top, headline stat cards beneath it, an income chart and an order-history table on the same screen — a vendor can run the day's business without leaving one page.",
      images: [
        ["vd-dashboard", "Dashboard"],
        ["vd-orders", "Order history & booking request"],
        ["vd-payouts", "Payout history & settings"],
        ["vd-profile", "Vendor profile"],
        ["vd-services", "Services"],
        ["vd-add-service", "Add new service"],
        ["vd-venues", "Venue gallery"],
        ["vd-add-venue", "Add new venue"],
      ],
    },
    admin: {
      title: "Super admin — platform overview",
      text: "Dashboard views give the platform team a view of orders, income and platform activity.",
      images: [
        ["ad-login", "Admin login"],
        ["ad-dashboard", "Dashboard"],
        ["ad-vendors", "Vendors"],
        ["ad-entertainers", "Entertainers"],
        ["ad-revenue", "Revenue"],
        ["ad-approvals", "Approvals"],
      ],
    },
  },
  system: {
    title: "Design System Signals",
    rows: [
      ["Colour roles", "Coral/salmon-orange for primary actions (Continue, Sign Up, Submit); yellow for highlight panels and the Log In action; teal/green for secondary actions, success states and charts; lavender/purple footers and accents; pale sky-blue and mint section backgrounds; white cards; dark navy/charcoal text"],
      ["Typography", "Clean sans-serif throughout; large bold headings; small grey supporting text; short, scannable card and filter labels."],
      ["Layout", "Desktop-first 1,600 px frames; long scrolling marketing and listing pages; centred white cards with rounded corners for auth, onboarding and checkout; sidebar + content layout for portal and dashboards; filter sidebar + card grid for listings"],
      ["Components", "Top navigation, venue photo cards (photo, name, location, stars, price), checkbox filter lists, quantity steppers, stat cards, bar chart, data tables, modals (sign-up, review, confirmation), step progress bar, social login rows, success banners"],
      ["Icons", "Minimal outline icon style; 360° virtual-tour icon; star ratings; social brand marks"],
    ],
    swatches: ["#ef6f5e", "#f6d84c", "#1f9d8a", "#c9a6f2", "#bfe6f2", "#c7e8c0", "#1f2a44"],
  },
  decisions: {
    title: "Key Design Decisions",
    items: [
      ["Dual-audience homepage.", "Parents are the demand side, but the marketplace only works with supply — so vendor recruitment starts on the homepage, not on a separate site."],
      ["Extras inside the booking, not after it.", "Animator, DJ, balloons and catering are added on the venue detail and cart screens, when parents are already in planning mode."],
      ["Trust signals where decisions happen.", "Ratings sit on every card, reviews are promoted on the homepage, and the safety-checked message appears before booking, not in a footer."],
      ["Category variants over one generic form.", "Vendor onboarding branches by trade, which keeps each form shorter and more relevant, at the cost of maintaining five variants of one template."],
      ["Summary persistence in checkout.", "The booking summary is visible in both cart and payment steps, so the total is never a surprise at the last screen."],
    ],
  },
  refinements: {
    title: "Refinements Identified (Next Iteration)",
    items: [
      "Unify currency and geography: venue and menu prices are shown in dollars, one vendor plan card appears in pounds per year, and one venue description references Disneyland Paris inside a Greece-focused product.",
      "Add the states not yet in the file: password reset, empty states, error states, and distinct super-admin actions (approvals, payouts, moderation).",
      "Check readability of the small body text and dense dashboard tables at real size.",
      "Close the onboarding numbering gap: the vendor sequence jumps from step 05 to 08, and steps 02 and 03 share the same title although 03 is a second state of 02.",
    ],
  },
  learnings: {
    title: "What I Learned",
    items: [
      "Marketplace design is a loop, not a funnel: the parent's review at the end of one booking becomes the trust signal that starts the next one.",
      "Operational screens (dashboards, portals) carry as much of the product's value as the marketing pages, and deserve the same design care.",
    ],
  },
  summary:
    "Bookiddo is a marketplace that lets parents in Greece book a complete kids' party — venue, entertainer and extras — in one flow, while giving entertainers and venues a structured way to get discovered, booked and paid. I designed the end-to-end experience across the public website, parent booking and portal, a nine-step category-aware vendor onboarding, and the vendor dashboard, with a consistent component system across desktop and mobile.",
};
