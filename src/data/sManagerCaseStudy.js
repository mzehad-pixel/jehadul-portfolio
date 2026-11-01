// sManager Top-up case study content. Text comes from the supplied case-study document.
// Fields the document leaves as [placeholders] (research counts, end date, measured
// results) are intentionally not shown. Names, numbers and amounts in the screens are demo data.

const img = (name) => `/smanager/${name}.jpg`;

export const sManagerProject = {
  id: "smanager-topup",
  caseStudy: "smanager",
  title: "sManager — Mobile Top-up Redesign",
  subtitle: "UX Case Study · Android · Single & Bulk Top-up",
  client: "Sheba Platform Limited",
  year: "2022",
  category: "Fintech",
  tags: ["Fintech", "MSME SaaS", "Mobile App", "User Research", "Design System"],
  image: img("cover"),
  overview:
    "Redesigning mobile top-up inside sManager, an SME business app, for recharge retailers who top up customers all day, often with a queue at the counter. Bulk top-up for rush hours and a clear, fast operator selector came straight from watching how the work happens in busy shops.",
  highlights: [],
};

export const sManagerCaseStudy = {
  hero: {
    title: "Making top-up fast for the people who sell it",
    subtitle:
      "Redesigning the mobile top-up experience in sManager, an SME business app, for mobile-recharge retailers who recharge customers all day, often with a queue at the counter.",
    image: img("cover"),
  },
  intro:
    "For a customer, a top-up is one small task. For the retailer behind the counter, it is the business itself: repeated dozens of times a day, under time pressure, with money and commission riding on every transaction. This redesign started from that difference: first the product requirements, then what competitors got right and wrong, then what retailers themselves said they needed. Its two central answers, bulk top-up for rush hours and a clear, fast operator selector, came directly from watching how the work actually happens in busy places.",
  glance: [
    ["Product", "sManager — SME business app (Android) by Sheba Platform Limited"],
    ["Feature", "Mobile top-up (single and bulk)"],
    ["Primary users", "Mobile-recharge business owners / SME retailers who sell top-ups to customers"],
    ["Scale context", "11 lakh (1.1 million) users on the sManager platform — context for the redesign, not a result of it"],
    ["Timeline", "Redesign from January 2022"],
    ["Role", "Product Designer"],
    ["Process", "PRD analysis → Competitive analysis → User research → Design goals → Redesign → Component library"],
  ],
  playStore: "https://play.google.com/store/apps/details?id=xyz.sheba.managerapp&hl=en",
  problem: {
    title: "Top-up is not a side feature — it is the counter",
    text: "A customer walks up, gives a number, names an amount or an offer, pays, and expects the balance to arrive almost immediately. Then the next customer steps forward. A flow that feels merely “fine” for an occasional personal recharge becomes costly when it is repeated all day:",
    points: [
      ["Every extra step multiplies.", "One unnecessary screen, repeated across a day of customers, is real waiting time at the counter."],
      ["Errors are public and expensive.", "A wrong number or operator is a customer complaint, a refund conversation and lost trust, in front of other customers."],
      ["Money must stay visible.", "If balance, fee, cashback and commission are not clear before confirming, the retailer cannot answer: how much, exactly?"],
      ["Repeat work dominates.", "Re-typing a regular customer's number from scratch every time is wasted effort the design can remove."],
    ],
    statement:
      "The existing top-up journey was not built for the speed, repetition and certainty that selling recharge at a busy counter demands. The redesign set out to fix that, without breaking the trust steps (review and PIN) that handling other people's money requires.",
  },
  process: {
    title: "Requirements first, market second, users third",
    text: "Each phase answered the question the previous one left open, so the final design decisions can be traced back to evidence rather than preference.",
    rows: [
      ["PRD analysis", "What must this feature do for the business and the retailer?", "Requirements for balance, commission, offers and confirmation"],
      ["Competitive analysis", "What do the apps retailers already use do well, and badly?", "Patterns to keep, gaps to exploit: history, contacts, offers, journey length"],
      ["User research", "How does top-up actually happen at a real counter, especially when it is busy?", "The bulk top-up insight and the speed requirements"],
      ["Design goals", "What will we optimise for, in what order?", "How Might We questions and decision principles"],
      ["Redesign + components", "What does the new journey look like, state by state?", "Single flow, bulk flow and a reusable component library"],
    ],
  },
  prd: {
    title: "What the product required",
    text: "The work began with the Product Requirements Document, not with screens — translating business language into design obligations the interface would have to show, check and prove on every transaction.",
    items: [
      ["A complete transaction, in the app.", "Recipient, operator, amount or offer, review and PIN form one continuous journey, with no detour out of the app mid-payment."],
      ["Balance-aware design.", "Usable balance before confirming, and current versus after-top-up balance in the breakdown, so no one confirms blind."],
      ["Commission and cashback made explicit.", "Top-up is income: per-offer commission, cashback and fees are visible in the flow and on the landing dashboard."],
      ["Offers as first-class content.", "Retailers sell bundles, so amount is one tab among Amount / Internet / Minutes / Call rate / Bundle / SMS."],
      ["A record of everything.", "History, recent top-ups with processing status and a statement view are requirements, not extras."],
      ["Safety without friction theatre.", "PIN confirmation, the never-share-your-PIN warning and a clear total stay; everything around them gets faster."],
    ],
  },
  competitors: {
    title: "History was missing almost everywhere",
    text: "Six apps customers and retailers already used for recharge were walked end to end and noted as good or bad experience: Grameenphone, Airtel, Banglalink, bKash, Nagad and TAP. Two retail companion apps were also reviewed.",
    rows: [
      ["Grameenphone", "Top-up history; monthly statement download", "Uses a 3rd-party payment gateway", "gp"],
      ["Airtel", "Short recharge journey; easy access to saved contacts", "3rd-party gateway; no history; generic amounts instead of offers; redundant MFS option", "airtel"],
      ["Banglalink", "—", "3rd-party gateway; no history; generic amounts instead of offers; manual input only", "banglalink"],
      ["bKash", "Slightly long but smooth journey; auto contact sync", "No top-up history", "bkash"],
      ["Nagad", "—", "No top-up history; no offers shown", "nagad"],
      ["TAP", "—", "No top-up history; operator and package pop-ups make the journey long", "tap"],
    ],
    retail: [
      ["gp-retail", "Grameenphone Cockpit retail"],
      ["bl-retail", "Banglalink retail"],
    ],
    lessons: [
      ["History was the open opportunity.", "Five of six apps had no top-up history at all. For a retailer who must prove transactions all day, it was the clearest gap to own."],
      ["Gateway detours break the journey.", "Three apps pushed payment through a 3rd-party gateway. Keeping payment in one in-app flow became a firm constraint."],
      ["Short journeys win; pop-ups lose.", "Airtel's short journey was its strength; TAP's operator and package pop-ups stretched it. The operator selector would be visible and fast, never a pop-up maze."],
      ["Show offers, not just amounts.", "A retailer sells bundles, so offers needed their own place in the flow."],
      ["Contacts are not optional.", "Airtel's saved contacts and bKash's sync were praised; Banglalink's manual-only input failed. Contacts, recents and suggestions start on the first screen."],
    ],
  },
  research: {
    title: "The busy-place insight",
    text: "With requirements and market gaps in hand, the next step was to study the people who sell recharge: who is waiting, what is repeated, and where the current journey slows the retailer down.",
    findings: [
      ["Busy places need bulk, not just faster single top-ups.", "When several customers are waiting, the bottleneck is having to run the entire flow again for every customer. Retailers explicitly wanted to collect numbers and amounts, then send them together. Bulk became a headline capability, not a hidden extra."],
      ["Speed is about certainty, not just taps.", "Under a rush, retailers slow down to double-check: right operator? complete number? enough balance? Operator detection, a live digit count (8/11, 11/11) and balance beside the amount matter more than shaving a decorative step."],
      ["The same numbers come back.", "Regular customers return with the same numbers and similar amounts. Retailers wanted the app to remember: recents, suggestions and full contact access."],
      ["Operator choice must be fast and unambiguous.", "A wrong operator wastes money and creates a dispute. Detect it from the number, make it easy to correct, and pair it with the connection type (Prepaid / Postpaid / Skitto)."],
    ],
  },
  goals: {
    title: "Speed, certainty, repeatability — in that order",
    items: [
      ["Speed", "A routine top-up feels like one continuous motion, and a queue is handled as one bulk job, not many restarts."],
      ["Certainty", "At every step the retailer can verify number, operator, total, balance effect and status without leaving the flow."],
      ["Repeatability", "The next top-up to the same person is faster than the first, through recents, suggestions, contacts and history."],
    ],
    hmw: [
      "How might we let a retailer clear a queue of waiting customers without restarting the flow for each one?",
      "How might we make operator selection so clear that a wrong-operator top-up becomes hard to do by accident?",
      "How might we give every retailer the history and statement proof that most competitor apps never offered?",
      "How might we sell offers and bundles, not just bare amounts, without slowing the core journey?",
      "How might we keep PIN security and a clear total, while removing every other detour, pop-up and gateway break?",
    ],
  },
  single: {
    title: "Single top-up, end to end",
    text: "One linear journey with no gateway detour and no pop-up maze: recipient, operator, amount or offer, review, PIN. Each step answers the verification question retailers ask at that moment.",
    steps: [
      ["Recipient — start from memory", "“Who is this top-up for?” with recents, suggestions and full contacts below, plus a live 0/11 digit counter. A regular customer is one tap away instead of eleven keystrokes."],
      ["Operator — detected, visible, correctable", "The operator is detected from the number and shown explicitly with Prepaid / Postpaid / Skitto. One glance confirms it, one tap corrects it."],
      ["Amount or offer", "Quick amounts (Tk 20 / 50 / 70 / 100), a free amount field and usable balance on one screen, with Internet, Minutes, Call Rate, Bundle and SMS tabs."],
      ["Review, breakdown, then PIN", "Recipient, amount, cashback, fee and total, with current and after-top-up balance. Only then the PIN step, with the never-share-your-PIN warning."],
    ],
    screens: [
      ["single-1", "Recipient — contacts"],
      ["single-2", "Number + suggestions"],
      ["single-3", "Amount & offer tabs"],
      ["single-4", "Review & breakdown"],
      ["single-5", "PIN entry"],
      ["single-6", "Submitting"],
      ["single-7", "Request received"],
      ["single-8", "Back to recent top-ups"],
    ],
  },
  bulk: {
    title: "Bulk top-up and the repeat toolkit",
    text: "Bulk top-up is the direct answer to the busy-place finding. The retailer builds one list while customers wait: add each number, set its operator and amount line by line, review the combined total once, and confirm the batch with a single PIN. After sending, each number carries its own status, so one failed number never holds up the rest of the queue.",
    screens: [
      ["bulk-1", "Landing with recent status"],
      ["bulk-2", "Number entered"],
      ["bulk-3", "Add number & amount"],
      ["bulk-4", "Building the list"],
      ["bulk-5", "Batch review"],
      ["bulk-6", "Single PIN"],
      ["bulk-7", "Submitting"],
      ["bulk-8", "Request received"],
      ["bulk-9", "Per-number status"],
    ],
    toolkit: [
      ["Recent top-ups", "Latest transactions on the landing screen with relative time and a live processing count, so “has it gone?” gets an answer in seconds."],
      ["Top-up suggestions", "Likely repeat recipients with number and connection type, turning a repeat sale into tap-and-confirm."],
      ["All Contacts", "Full contact access inside the flow, instead of manual-only entry."],
      ["Top-up History", "A dedicated history view — the feature five of six competitors lacked — backed by statement and daily breakdown views."],
    ],
  },
  system: {
    title: "The component library behind the flow",
    text: "A component library defined the reusable parts and, just as importantly, their states, so a retailer meets the same patterns in a quiet single top-up or a bulk batch in a rush. Screen copy in the product is in Bangla.",
    blocks: [
      {
        title: "Landing dashboard & Top Offer cards",
        text: "Today's top-up total and commission, shortcuts to History, Offers, Statement and Request, cashback banners, and Top Offer cards carrying contents, commission, validity and price — the retailer's day at a glance, and offers that can be sold from the card itself.",
        images: [["lib-landing", "Landing dashboard"], ["lib-offers", "Operators and offer cards"]],
        cols: "md:grid-cols-[1fr_2.2fr]",
      },
      {
        title: "Recent top-ups, history & daily breakdown",
        text: "Status icons, recent rows with processing count, the full history list, and daily totals for top-up and commission broken down by operator — the history and statement capability only Grameenphone offered, here as a core feature.",
        images: [["lib-history", "Status, recents, history and daily operator breakdown"]],
      },
      {
        title: "Suggestions & contacts",
        text: "Suggested recipients with connection type and a full contact list inside the recipient step — no manual-only dead end.",
        images: [["lib-contacts", "Suggestions and all contacts"]],
        cols: "grid-cols-1 max-w-3xl",
      },
      {
        title: "Number + amount rows",
        text: "A number with its type paired with an amount, reused identically in single and bulk lists — one pattern to learn.",
        images: [["lib-bulk-rows", "Bulk number rows"], ["lib-operator-rows", "Operator and type rows"]],
      },
      {
        title: "Amount breakdown & PIN confirmation",
        text: "Top-up amount, cashback, fee, current and after-top-up balance and total, then recipient, amount and total restated beside the PIN — including the bundle case of Tk 50 for 160 Minutes + 5GB over 7 days.",
        images: [["lib-breakdown", "Amount breakdown"], ["lib-pin", "PIN confirmation states"]],
        cols: "grid-cols-1",
      },
      {
        title: "Amount and offer tabs",
        text: "Amount, Internet, Minutes, Call Rate, Bundle and SMS tabs share one layout, so switching from a bare amount to an offer never leaves the step.",
        images: [["lib-amount-tabs", "Amount and offer tab states"]],
        cols: "grid-cols-1 max-w-sm",
      },
    ],
    numberStates: {
      title: "Number entry: four states, designed deliberately",
      text: "Because a mistyped digit is a failed sale, the number field was designed as four explicit states rather than one field with an error bolted on.",
      image: ["lib-number-states", "Empty, typing, valid and invalid states"],
      items: [
        ["Empty (0/11)", "An example format as a hint: guidance before any typing, not after a mistake."],
        ["Typing (8/11)", "The live counter shows exactly how far the retailer is."],
        ["Valid (11/11)", "Unlocks Continue and surfaces the detected operator: progress and verification in one moment."],
        ["Invalid (11/11)", "A plain-language “wrong number” message in place. The entry is kept, so the retailer fixes a digit instead of starting over."],
      ],
    },
  },
  decisions: {
    title: "Key Design Decisions",
    rows: [
      ["Bulk top-up as a headline flow", "User research: busy-place retailers", "A queue handled as one list, one review, one PIN instead of N restarts"],
      ["Operator selector in-flow, detected + correctable", "Research (certainty) + TAP's pop-up failure", "Operator and Prepaid / Postpaid / Skitto confirmed before money moves"],
      ["History as a first-class feature", "Competitive analysis: 5 of 6 apps had none", "History, recents with status, daily operator breakdown and statements built in"],
      ["Offers over bare amounts", "Competitive analysis: Airtel, Banglalink, Nagad", "Offer tabs and Top Offer cards with contents, validity and commission"],
      ["Contacts, recents and suggestions from step one", "Airtel, bKash good; Banglalink bad + Finding 3", "Repeat top-ups start from memory; typing is the fallback"],
      ["One in-app journey, no gateway detour", "GP, Airtel, Banglalink gateway breaks + PRD", "Recipient to PIN stays inside sManager, end to end"],
      ["States designed as components", "Finding 2: certainty under rush", "Number entry, breakdown and PIN reused identically in single and bulk"],
    ],
  },
  outcome: {
    title: "What changed",
    text: "The redesign rebuilt top-up around how recharge is actually sold. For a platform serving 11 lakh users, small per-transaction savings compound: a retailer repeating this flow all day feels seconds saved as real capacity at the counter, and one avoided wrong-operator error as money kept.",
    items: [
      ["Fewer restarts", "A queue of customers is cleared as one bulk job instead of repeated full journeys."],
      ["Fewer verification pauses", "Digit count, detected operator, usable balance and a full breakdown answer the retailer's checks inside the flow."],
      ["Fewer disputes without proof", "Recents with status, full history and daily operator totals answer “did it go through?”"],
      ["Faster repeats", "Suggestions, recents and contacts make the second top-up to a customer quicker than the first."],
    ],
  },
  learnings: {
    title: "What I Learned",
    items: [
      ["Design for the seller, not the transaction.", "The same top-up looks completely different from behind the counter: queues, repeats, commission and proof produced different priorities."],
      ["“Faster” usually means “less to verify”.", "The biggest speed gains came from certainty aids, not from removing screens. Under pressure, people slow down to check — design the checks in."],
      ["Competitor gaps are a roadmap.", "History, offers and contacts were not inventions; they were what almost every competitor skipped."],
      ["States are the product, at scale.", "Empty, typing, valid and invalid states of one field mattered more to daily success than any hero screen."],
    ],
    next: "Next: instrument the flow to measure bulk-versus-single time for multi-customer jobs, test bulk top-up during real rush hours, explore saved bulk templates for regular customer groups, and extend the daily breakdown into a monthly statement download.",
  },
};
