// Quick Pay case study content. Text comes from the supplied case-study PDF,
// except the Conclusion, which was added at the user's request.

const img = (name) => `/quickpay/${name}.webp`;

export const quickPayProject = {
  id: "quickpay",
  caseStudy: "quickpay",
  title: "Quick Pay- E wallet mobile app",
  subtitle: "Payment Service Provider (PSP)- licence by Bangladesh Bank",
  category: "Fintech",
  tags: ["E-Wallet", "Fintech", "Mobile App", "Payments", "e-KYC"],
  image: img("cover-v3"),
  overview:
    "Quick Pay is a digital wallet that provides lifestyle, payment and financial services within a single app. Quickpay committed to revolutionizing the digital payment landscape in Bangladesh, with a strong focus on convenience, security, and financial inclusion.",
  highlights: [],
};

export const quickPayCaseStudy = {
  hero: {
    title: "Quick Pay- E wallet mobile app",
    subtitle: "Payment Service Provider (PSP)-",
    subtitleStrong: "licence by Bangladesh Bank",
    image: img("hero"),
    phone: img("home"),
  },
  about: {
    title: "About",
    text:
      "Quick Pay is a digital wallet that provides lifestyle, payment and financial services within a single app. Quickpay committed to revolutionizing the digital payment landscape in Bangladesh, with a strong focus on convenience, security, and financial inclusion.",
  },
  challenge: {
    title: "The Challenge",
    text:
      "I challenged myself to design a fintech e-wallet app that would compete with other apps around since this is the future of tech in Bangladesh. My aim was to design something that was easy to use and understand.",
  },
  objectives: {
    title: "Objectives of Quick pay",
    items: [
      "Creating seemless cashless experience for users",
      "Payment accessibility from a single platform",
      "Easier for people to pay for a lot of items where the customer would need bank accounts",
      "No convenient way of transferring funds to bank account",
    ],
  },
  problems: {
    title: "problems that E-wallet users faces",
    stats: [
      { value: 76, text: "Sign up for an account and a poor face scan when I attempt to do" },
      { value: 64, text: "I struggled to send money. It took a few tries to get it right" },
      { value: 36, text: "Using the app was difficult at first because of its complex layout." },
      { value: 34, text: "Challenged to understand charges for transactions when they started." },
    ],
  },
  solution: {
    title: "Ideal Solution",
    items: [
      {
        title: "Easy Sign up and verification process",
        text:
          "Facial recognition is used to authenticate the customer's identity. If the customer's identity and documents are found to be valid, the e-KYC process is deemed successful, and the customer is onboarded.. it takes 2-3 min",
      },
      {
        title: "Easy send money and payment process",
        text: "The feature allows to send money to other loved ones whenever there instantaneously",
      },
      {
        title: "Keep simple layout and easy navigation",
        text: "",
      },
    ],
  },
  sitemap: {
    title: "Features and sitemap",
    onboarding: ["Sign Up", "Sign In", "E-KYC(User Identity)"],
    columns: [
      { title: "Home", items: ["Profile", "Card", "Transections", "Activity", "Settings"] },
      {
        title: "Transection",
        items: ["Send Money", "Deposite", "Payment", "Bill payment", "Withdraw", "Binimoy"],
      },
      { title: "QR Service", items: ["Payment", "Bill Payment"] },
      { title: "More", items: ["Offers", "Rewords", "Notifications", "Helpline"] },
    ],
  },
  flows: [
    {
      id: "signin",
      title: "Sign in / Sign Up Flow",
      text: "",
      images: ["su-start", "su-otp", "su-pass", "su-login"].map(img),
    },
    {
      id: "ekyc",
      title: "E-KYC/User Verifications Flow",
      text:
        "An e-KYC (electronic Know Your Customer) solution is a verification service that streamlines the process of verifying a customer's identity. It allows businesses to securely and efficiently collect, store and verify a customer's personal information, usually for the purpose of opening a new account, obtaining a loan or complying with regulatory requirements.",
      images: ["kyc-update", "kyc-doc", "kyc-face", "kyc-scan", "kyc-done"].map(img),
    },
  ],
  home: {
    title: "Home Screen",
    text:
      "User can check balance in one tap, quick and easy access to core functions like sending money, paying bills, and checking transaction history. Just a tap away, these features empower to manage finances effortlessly.",
    callout: "User can check real time balance just one tap",
    image: img("home"),
  },
  more: [
    {
      id: "send",
      title: "Send Money Flow",
      text:
        "The feature allows to send money to other loved ones whenever there is a need, free of cost. And when User need money? Simply request and receive money instantaneously.",
      images: ["send-1", "send-2", "send-3", "send-4"].map(img),
    },
    {
      id: "pay",
      title: "Payment Flow",
      text: "User can Scan QR and Pay merchants right from his wallet. It’s quick, fast and secure",
      images: ["pay-1", "pay-2", "pay-3", "pay-4"].map(img),
    },
  ],
  conclusion: {
    title: "Conclusion",
    paragraphs: [
      "Quick Pay brings sign-up, e-KYC identity verification, send money and QR payments together in one wallet app. The design was shaped around the problems e-wallet users reported most: a poor face scan at sign-up, sending money taking several tries, a complex first-time layout, and unclear charges.",
      "In response, onboarding was kept to a short, guided flow that takes 2-3 min, sending money and paying merchants follow a few clear steps confirmed with a PIN, and the home screen keeps core services one tap away with a simple layout and easy navigation.",
      "Together these decisions support Quick Pay's goal of a seamless cashless experience, with convenience, security, and financial inclusion at the centre of the digital payment landscape in Bangladesh.",
    ],
  },
};
