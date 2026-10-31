// Global Skills case study content. Text comes from the supplied case-study document.
// Fields the document leaves as placeholders (role, timeline, team, tools, outcome metrics)
// and its internal layout / export checklists are intentionally not shown. Names, prices and
// figures inside the screens are demo content.

const img = (name) => `/globalskills/${name}.webp`;

export const globalSkillsProject = {
  id: "globalskills",
  caseStudy: "globalskills",
  title: "Global Skills — E-Learning Platform",
  subtitle: "UX Case Study · Live: globalskills.com.bd",
  client: "Global Skills",
  year: "2022",
  category: "E-Learning",
  tags: ["E-Learning", "Web Platform", "Two-sided Marketplace", "Certification", "Bangladesh"],
  image: img("cover"),
  overview:
    "Global Skills is an online learning platform for professional and IT training and certification in Bangladesh. Learners discover and buy courses and practice exams, study in a course player with in-video quizzes, and request or verify certificates, while trainers run their teaching from a dashboard.",
  highlights: [],
};

export const globalSkillsCaseStudy = {
  liveUrl: "https://globalskills.com.bd/",
  hero: {
    title: "Global Skills — E-Learning Platform",
    subtitle: "UX Case Study · Client: Global Skills · 2022 · Live: globalskills.com.bd",
    image: img("home"),
  },
  intro:
    "Global Skills is an online learning platform for professional and IT training and certification in Bangladesh. Learners discover and buy courses and practice exams, study in a course player with in-video quizzes, sit full practice exams, and request or verify certificates. Trainers apply for educator access and run their teaching from a dashboard — courses, discussions and payout wallet included. The platform is live at globalskills.com.bd, and the live site still follows the structure designed here.",
  glance: [
    ["Product", "Global Skills — online training, certification and placement platform"],
    ["Client", "Global Skills (Global Skills Development Agency)"],
    ["Year", "2022"],
    ["Live product", "https://globalskills.com.bd/ — live, and broadly matching this design"],
    ["Platforms", "Desktop web (public site, catalogue, cart, course player, trainer dashboard)"],
    ["Users", "Learners/students and trainers/educators"],
    [
      "Scope designed",
      "Home, course catalogue with filters, course details, cart with sign-up/sign-in states, course player with in-video quiz, practice-exam screens with result state, certificate request and verification, learner-to-educator application, trainer dashboard (overview, wallet, my courses, course-creation wizard, discussions), blog, contact and digital-services pages",
    ],
  ],
  problem: {
    title: "The Problem",
    paragraphs: [
      "Professional certification training in Bangladesh — ITIL, PMP, AWS and similar — was traditionally sold and delivered in person, with course information, enrolment, exam practice and certificates handled across separate channels. A learner could not easily compare courses, practise under exam conditions, or prove a certificate online; and a trainer had no single place to publish courses and track earnings.",
      "Global Skills brings the whole journey into one platform: discover a course, evaluate it, buy it, learn with embedded checks, practise full exams, and leave with a verifiable certificate — while trainers get a dashboard for courses, discussions and payouts.",
    ],
  },
  roles: {
    title: "Users and Roles",
    rows: [
      {
        role: "Learners / students",
        who: "Professionals preparing for IT and management certifications, and skill-development training",
        needs: "Browse and filter courses, compare details and fees, buy with discounts and add-ons, study video lessons with quizzes, sit practice exams, request and verify certificates",
      },
      {
        role: "Trainers / educators",
        who: "Subject-matter instructors who teach on the platform",
        needs: "Apply for educator access, create and publish courses, run discussions, track enrolments, manage a payout wallet",
      },
      {
        role: "Visitors / prospective clients",
        who: "People and businesses evaluating Global Skills' training and digital services",
        needs: "Read the blog, browse instructor profiles and events, explore digital-services offerings, get in touch",
      },
    ],
  },
  goals: {
    title: "Design Goals",
    items: [
      ["One journey, enrolment to certificate.", "Discovery, purchase, learning, exams and certification are one connected product, not separate sites."],
      ["Certification-grade practice.", "Timed practice exams with flagging, progress counts and a clear result state mirror the real exam experience learners are paying to prepare for."],
      ["Feedback inside the learning moment.", "In-video quizzes answer immediately — correct or incorrect, with skip and retry — instead of testing only at the end."],
      ["Trust that can be checked.", "A public certificate-verification path sits beside the certificate request flow, so an employer can validate what a learner earned."],
      ["A bilingual product.", "A Bangla/English toggle runs through the public site and the trainer dashboard, matching the local audience."],
      ["Trainers as first-class users.", "Educator application, course creation and payouts are designed flows, not afterthoughts."],
    ],
  },
  scope: {
    title: "Scope and Information Architecture",
    text: "A consistent public header (logo, E-Learning and Live menus, course search, language toggle, account) and footer organise the marketing and catalogue pages; the trainer dashboard switches to a sidebar layout. The designed areas are:",
    items: [
      ["Home", "hero, popular / skill-development / best-seller course sections, top categories, testimonials, upcoming events."],
      ["Courses catalogue", "full course grid with a category filter sidebar and category search."],
      ["Course Details", "about, what you'll learn, course plan, instructor, FAQ, reviews and recommendations, with the fee shown in a highlighted box."],
      ["Cart", "course list, an exam-retake add-on, promo code, and an order summary — designed in three states: plain, with a sign-up modal, and with a sign-in modal."],
      ["Course player (after purchase)", "video player, table-of-content sidebar, in-video quiz popups with feedback states, instructor and FAQ."],
      ["Practice exams and quizzes", "timed exam screens with answered / unanswered / flagged tracking, and a result modal with review."],
      ["Certificate", "hard-copy certificate request in two steps (details form, then a feedback matrix), plus certificate verification by number."],
      ["Educator access and trainer dashboard", "learner-to-educator application form, then overview, wallet and payouts, my courses, a course-creation wizard, and discussions."],
      ["Supporting pages", "blog index and article, contact, digital services, and instructor profiles."],
    ],
  },
  flows: {
    title: "Key User Flows",
    note: "The flows below follow the screen states and buttons, and are presented as the designed flow, not as a tested prototype. There is no payment-method or order-confirmation screen in the design, and no standalone login page — login exists as a modal state of the cart.",
    items: [
      {
        title: "Discover and evaluate",
        steps: ["Home", "Course sections & categories", "All Courses catalogue", "Filter or search", "Course Details", "Fee & enrolment"],
        text: "Home → course sections and categories → All Courses catalogue → filter by category or search → Course Details (about, learning outcomes, course plan, instructor, FAQ, reviews) → fee and enrolment action.",
      },
      {
        title: "Buy",
        steps: ["Add to cart", "My Cart", "Sign-up / sign-in modal", "Proceed to Payment"],
        text: "Add to cart → My Cart (course list, exam-retake add-on, promo code, summary) → sign-up or sign-in modal (email or social) → Proceed to Payment. The designed flow ends at this button.",
      },
      {
        title: "Learn and practise",
        steps: ["Course player", "Video lessons", "In-video quiz", "Practice exam", "Result modal"],
        text: "Enrolled course player → video lessons with a table of contents → in-video quiz with immediate feedback (incorrect answer shown, with skip / retry) → full practice exam (timed, with flag-for-later and progress counts) → result modal showing the score against the passing score, with a review option.",
      },
      {
        title: "Certify",
        steps: ["Certificate page", "Request Now", "Step 1 details", "Step 2 feedback matrix", "Submit"],
        text: "Certificate page → Request Now → Step 1 details form → Step 2 feedback matrix → submit. Separately: Verify Your Certificate by certificate number.",
      },
      {
        title: "Teach",
        steps: ["Educator application", "Trainer overview", "My Courses", "Course-creation wizard", "Wallet & payouts", "Discussions"],
        text: "Learner-to-Educator application (educator option, organisation details) → trainer dashboard overview → My Courses → course-creation wizard (Upload Video → Details → Add Quiz → Review and Publish) → Wallet and payout history → Discussions.",
      },
    ],
  },
  walkthrough: {
    title: "Design Walkthrough — Screen by Screen",
    home: {
      title: "Home — a catalogue that sells itself",
      text: "The homepage is structured as a funnel of proof: a skills-focused hero, then popular, skill-development and best-seller course rows built from one reusable course card, top categories, student testimonials and upcoming events. One card component carries the whole page, so the catalogue feels larger than the design effort behind it.",
      images: [[img("home"), "Home"]],
      cols: "grid-cols-1 max-w-4xl",
    },
    catalogue: {
      title: "Courses catalogue — filtering first",
      text: "The All Courses page pairs the course grid with a persistent category filter sidebar (checkboxes plus a category search), covering certification families such as ITIL 4, project management, server management, data science and digital marketing. Filtering is treated as the primary navigation, which suits buyers who arrive knowing their certification target.",
      images: [[img("catalogue"), "All courses"]],
      cols: "grid-cols-1 max-w-4xl",
    },
    details: {
      title: "Course details — everything a buyer checks, in order",
      text: "The detail page follows the questions a certification buyer actually asks: what the course is, what they will learn, the course plan module by module, who teaches it, FAQ, reviews, and recommendations — with the fee kept visible in a highlighted box. A second variant adds a table-of-content sidebar, Q&A and discussion for longer courses.",
      images: [
        [img("details"), "Course details"],
        [img("details-toc"), "Course details with table of contents"],
      ],
      cols: "md:grid-cols-2",
    },
    cart: {
      title: "Cart — three states, one summary",
      text: "The cart is designed in three states — plain, sign-up modal, sign-in modal — so the account step never ejects the buyer from checkout. The summary panel (subtotal, discount, promo code) stays fixed beside the course list, and an exam-retake add-on is offered as an upsell while intent is high.",
      images: [
        [img("cart"), "Cart"],
        [img("cart-signup"), "Cart — sign-up modal"],
        [img("cart-signin"), "Cart — sign-in modal"],
      ],
    },
    player: {
      title: "Course player — learning with checks built in",
      text: "After purchase, the player combines the video, a table-of-content sidebar, the instructor and FAQ — and interrupts the video with quiz questions that give immediate feedback. The incorrect state names the wrong answer and offers skip or retry, the only fully designed feedback state in the file and one of its strongest details.",
      images: [[img("player"), "Course player with in-video quiz"]],
      cols: "grid-cols-1 max-w-4xl",
    },
    exam: {
      title: "Practice exams — built like the real thing",
      text: "The PMP practice exam screen tracks answered, unanswered and flagged questions with previous/next navigation and a time-left indicator, then closes with a result modal — pass congratulations, the score against the passing score, and a review-quiz action. It rehearses exam behaviour, not just content.",
      images: [
        [img("exam"), "Practice exam"],
        [img("exam-result"), "Result modal"],
      ],
      cols: "md:grid-cols-2",
    },
    certificate: {
      title: "Certificate — request and verify",
      text: "The certificate page pairs the hard-copy request (a two-step flow that collects course details, then structured satisfaction feedback) with a public verification card. Verification turns a certificate from an image into a credential an employer can check.",
      images: [
        [img("certificate"), "Certificate request & verify"],
        [img("certificate-1"), "Request — step 1"],
        [img("certificate-2"), "Request — step 2"],
      ],
    },
    trainer: {
      title: "Trainer dashboard — the supply side, properly housed",
      text: "Trainers get a sidebar dashboard: an overview with headline stats, a wallet with balance, minimum-payout notice and payout history, their courses, and discussions. The course-creation wizard breaks publishing into upload, details, quiz and review steps — with a thumbnail specification shown at the upload step, a small but practical touch.",
      images: [
        [img("educator"), "Learner-to-educator application"],
        [img("trainer-overview"), "Trainer overview"],
        [img("trainer-wallet"), "Wallet details"],
        [img("trainer-courses"), "My courses"],
        [img("trainer-upload"), "Course creation — upload"],
        [img("trainer-discussions"), "Discussions"],
      ],
      cols: "md:grid-cols-2",
    },
    supporting: {
      title: "Supporting pages",
      text: "Blog index and article, contact, digital services, and instructor profiles round out the public site for visitors and prospective clients.",
      images: [
        [img("instructor"), "Instructor profile"],
        [img("digital"), "Digital services"],
        [img("blog"), "Blog"],
        [img("blog-article"), "Blog article"],
        [img("contact"), "Contact"],
      ],
      cols: "md:grid-cols-3",
    },
  },
  decisions: {
    title: "Key Design Decisions",
    items: [
      ["Account creation inside the cart, not before it.", "Sign-up and sign-in are modal states of checkout, so buying intent is never interrupted by a separate registration journey — and there is deliberately no standalone login page."],
      ["One course card everywhere.", "The same card serves the homepage rows, the catalogue and recommendations, keeping prices, ratings and actions predictable wherever a course appears."],
      ["Practice exams that rehearse behaviour.", "Flagging, progress counts and a timer teach exam technique alongside content — the real product being sold is readiness."],
      ["Feedback at the moment of learning.", "In-video quizzes answer immediately, while the attempt is fresh, rather than saving all assessment for the end."],
      ["Certificates that can be verified.", "Pairing the request flow with public verification makes the certificate worth more to learners and employers."],
      ["A two-sided platform from the start.", "Trainer application, course creation and payouts are designed alongside the learner experience, because the catalogue only grows if teaching pays."],
    ],
  },
  refinements: {
    title: "Refinements Identified (Next Iteration)",
    items: [
      "Complete the purchase flow: the design stops at Proceed to Payment — there is no payment-method screen and no order-confirmation screen, so checkout is the one journey that does not close.",
      "Fix the cart arithmetic: in the demo cart the discount is shown but not deducted from the total — exactly the kind of detail that destroys checkout trust.",
      "Finish the trainer overview: below its stat cards sits a large empty area that reads as unfinished.",
      "Add the missing states: no empty, error or loading states were found anywhere except the in-video quiz feedback.",
    ],
  },
  outcome: {
    title: "Outcome",
    text: "The product shipped and is still live: globalskills.com.bd runs today on the structure designed here — course carousels and catalogue filters, practice exams, certificate verification, trainer sign-up and digital services — with content that has continued to grow since 2022.",
  },
  learnings: {
    title: "What I Learned",
    items: [
      "In e-learning, assessment is part of the product, not an add-on — the exam and quiz states carried as much design weight as the catalogue.",
      "A live product is the best portfolio evidence: comparing the shipped site against the design file shows which decisions survived contact with real content.",
    ],
  },
  summary:
    "Global Skills is a live e-learning platform for professional certification training in Bangladesh (2022). I designed the end-to-end experience for two audiences: learners who discover, buy, study, practise timed certification exams and earn verifiable certificates; and trainers who apply, publish courses and get paid through a dashboard wallet. The platform is live at globalskills.com.bd, still running on the structure designed here.",
};
