// e-KYC case study content. Text comes from the supplied case-study PDF.
// This is a separate data file so the existing portfolioData.js stays untouched.

const img = (name) => `/kyc/${name}.webp`;

export const kycProject = {
  id: "ekyc",
  caseStudy: "kyc",
  title: "e-KYC (electronic Know Your Customer) solution",
  subtitle: "eKYC – Online Customer Onboarding and Identity Verification",
  category: "Fintech",
  tags: ["eKYC", "Fintech", "Biometrics", "Identity Verification", "Onboarding"],
  image: img("cover"),
  overview:
    "An e-KYC (electronic Know Your Customer) solution is a verification service that streamlines the process of verifying a customer's identity. It allows businesses to securely and efficiently collect, store and verify a customer's personal information.",
  highlights: [],
};

export const kycCaseStudy = {
  hero: {
    title: "e-KYC (electronic Know Your Customer) solution",
    subtitle: "eKYC – Online Customer Onboarding and Identity Verification",
    image: img("hero"),
  },
  overview: {
    title: "Overview",
    paragraphs: [
      "An e-KYC (electronic Know Your Customer) solution is a verification service that streamlines the process of verifying a customer's identity. It allows businesses to securely and efficiently collect, store and verify a customer's personal information, usually for the purpose of opening a new account, obtaining a loan or complying with regulatory requirements. The app typically uses biometric authentication, such as facial recognition or fingerprint scanning, to confirm the customer's identity. The solution eliminates the need for physical documentation and reduces the risk of identity fraud, making the process faster, more secure, and convenient for both the customer and the business. Not only that, eKYC solution also has more customised features, suitable for the requirements of each business such as: GPS positioning; MFS; E-wallet; Banking Apps; All type of Fintech platforms and Support multi-language",
      "eKYC solution offers complete remote identity verification and management tailored for banks and telecommunications companies for online client acquisition. eKYC (electronic Know-your-customer) is now a top buzzword among the banking industry. This trend has been going upward.",
    ],
    image: img("overview"),
  },
  problem: {
    title: "The Problem",
    intro:
      "Without an e-KYC (electronic Know Your Customer) solution, the process of verifying the identity of customers can be time-consuming, costly. Some of the specific problems that may arise include:",
    items: [
      {
        icon: "shield",
        title: "Lack of security:",
        text: "Without a secure electronic process, personal information may be vulnerable to fraud or identity theft.",
      },
      {
        icon: "access",
        title: "Limited accessibility:",
        text: "Without an electronic solution, it may be difficult for customers to access digital services, especially those without physical identity documents or those with limited access to technology. especially for customers who are located far away or have mobility issues.",
      },
      {
        icon: "clock",
        title: "Inefficiency:",
        text: "Traditional methods of identity verification, such as in-person verification or manual document review, can be slow and labor-intensive. This can lead to long wait times for customers and increased costs for businesses.",
      },
    ],
  },
  goals: {
    title: "Project Goal",
    items: [
      {
        icon: "users",
        title: "Improving Customer Onboarding",
        text: "We can establish onboarding process for new customers by reducing the need for physical documents and in-person verification.",
      },
      {
        icon: "shield-check",
        title: "Automatic online verification",
        text: "We will establish secure and efficient identity verification automatically in this app. And improve the customer experience by providing a convenient and user-friendly online verification process.",
      },
      {
        icon: "zap",
        title: "Fast, secure & prevent fraud",
        text: "We will increase customer satisfaction by providing a fast, easy, and secure verification process. Advanced artificial intelligence (AI)-driven identity verification prevents fraud.",
      },
    ],
  },
  scope: {
    title: "Scope",
    user: {
      label: "User",
      text: "People aging 18–60 years old are tech savvy MFS, Banking and Fintech mobile application in their life.",
    },
    market: { label: "Market", text: "All type of Fintech industry." },
  },
  research: {
    title: "Field Research",
    steps: [
      "Visited some MFS users and e-wallet users",
      "Observed friend's reaction as a first time KYC user",
      "Observed and talked to different kinds of people at each point. Documented their interactions with photos and notes",
      "Got down at the MFS agent who uses the fintech app daily and did some more observation and interviews to gain insights.",
    ],
    note: "4 of theses people were experiencing e-kyc for the first time",
    images: [img("field-1"), img("field-2")],
  },
  quotes: {
    title: "Quotes Directly from Random Users",
    items: [
      "I needs to be accessible and easy to use for users with limited technical skills.",
      "We needs to provide clear and concise instructions on how to complete the KYC process.",
      "I want to complete the KYC process quickly and efficiently.",
      "The app needs to be able to verify user identities quickly and efficiently.",
      "We needs to real-time feedback on the status of KYC verification.",
      "Biometric verification, It made me feel more secure and confident in the app's ability to protect my personal information.",
    ],
  },
  persona: {
    title: "Persona",
    name: "Mr. Safiq",
    facts: [
      ["Name", "Mr. Safiq"],
      ["Age", "27"],
      ["Occupation", "Business"],
      ["Status", "Single"],
      ["Location", "Bangladesh"],
    ],
    about:
      "Safiq is a Bkash agent. As a Mobile banking agent, he needs an e-KYC app that is easy to use and can be accessed from anywhere in the world. but he does not have a lot of time to spend on complicated processes. He is concerned about the security of his personal information and wants to make sure that the e-KYC app he uses is trustworthy and reliable.",
    goalsA: {
      title: "User Goals",
      items: [
        "Clear instructions on how to complete the KYC process",
        "A secure and trustworthy platform to share personal information",
        "A user-friendly interface that is easy to navigate",
        "Biometric verification for added security",
        "Real-time feedback on the status of the KYC verification process",
      ],
    },
    goalsB: {
      title: "User Goals",
      items: [
        "Complete the KYC process quickly and efficiently",
        "Access the e-KYC app from anywhere in the world",
        "Ensure the security of personal information",
        "Save time and avoid in-person verification",
      ],
    },
    frustrations: {
      title: "User Frustrations:",
      items: [
        "Complicated and time-consuming KYC processes",
        "Inaccessible KYC centers or long waiting times",
        "Difficult-to-understand instructions or unclear information",
        "Lack of security or trust in the verification process",
      ],
    },
  },
  competitive: {
    title: "Competitive Analysis",
    intro:
      "Competitive analysis for eKYC (electronic know your customer) solution apps involves comparing various eKYC apps and their features to understand how they differ from each other and what makes them stand out in the market.",
    columns: [
      "Mobile Application Name",
      "Real-Time ID Verification",
      "Biometric Authentication",
      "Document Verification",
      "Secure Storage",
      "Integration",
    ],
    rows: [
      ["Onfido", "Yes", "Yes", "N/A", "NO", "CRM"],
      ["Trulioo", "Yes", "Yes", "Yes", "N/A", "Govt. API"],
      ["Shufti Pro", "Yes", "N/A", "Yes", "N/A", "AI"],
      ["Veriff", "Yes", "N/A", "Yes", "N/A", "N/A"],
    ],
  },
  solution: {
    title: "Solution & The Final Outcome",
    text:
      "The customer's personal information is captured using an electronic device such as a smartphone, tablet, or computer. To upload their identity information and documents are verified against government or authorized databases to ensure their authenticity. Facial recognition is used to authenticate the customer's identity. If the customer's identity and documents are found to be valid, the e-KYC process is deemed successful, and the customer is onboarded.",
    banner: "Real-time verification reduces risk and Fraud",
    flow: [
      "Read the instruction and select country",
      "Select Verification option",
      "Document submission-NID, Passport etc",
      "Online Liveness detection",
    ],
    decision: "Verification ok?",
    yes: "Approval and onboarding",
    no: "No",
  },
  wireframe: {
    title: "Wireframe",
    image: img("wireframes"),
  },
  screens: [
    {
      title: "Instructions and Country selection",
      paragraphs: [
        "Apps require instructions is that they provide guidance on how to use the app and complete the identity verification process. these instructions may include information on what documents are needed, how to take photos of these documents, how to capture biometric data, and how to submit the information for verification",
        "Users to select their country because different countries have different regulations and requirements for identity verification",
      ],
      images: [img("s-instructions"), img("s-country")],
    },
    {
      title: "Document Choose",
      paragraphs: [
        "eKYC (Electronic Know Your Customer) can vary depending on the specific use case and country requirements. However, generally, the following documents are commonly accepted for eKYC:",
      ],
      list: ["National Identity Card (ID)", "Passport", "Driving License"],
      images: [img("s-document")],
    },
    {
      title: "Liveness Detection",
      paragraphs: [
        "Liveness detection is important because it helps to prevent fraud and ensure the security of biometric authentication systems. It is used in various applications such as mobile banking, eKYC, and other identity verification processes.",
      ],
      images: [img("s-liveness"), img("s-face-scan")],
    },
    {
      title: "Document Scan",
      paragraphs: [
        "By scanning these documents electronically for eKYC, the organization can verify that the person providing the information is the legitimate owner of the documents and that their personal information matches the records on file with the issuing authority.",
      ],
      images: [img("s-scan-1"), img("s-scan-2")],
    },
    {
      title: "Review User Details",
      paragraphs: [
        "Reviewing all the information provided to the user during the eKYC process is important to ensure accuracy, security, transparency, and compliance.",
      ],
      images: [img("s-info"), img("s-details")],
    },
    {
      title: "Success notification",
      paragraphs: [
        "Success notifications are an important part of the eKYC process and help ensure a smooth and secure onboarding experience for the user.",
      ],
      images: [img("s-success")],
    },
  ],
  conclusion: {
    title: "Conclusion",
    paragraphs: [
      "KYC chain reduces the time it takes to process and gather information with very few resources required for monitoring and assessing user behaviour for anomalies. The time and cost saved in turn can be used to find solutions to more complex KYC challenges",
      "However, blockchain cannot solve all the issues faced in KYC management. After the data is acquired, financial institutions still require to validate the information",
      "KYC chain when used in combination with other technologies such as AI can showcase high potential to help institutions reduce the cost and time linked with the KYC process.",
    ],
  },
};
