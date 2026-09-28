export const heroSection = {
  subtitle: "",
  headline: "When the business grows, the gaps start to show",
  image: {
    src: "https://www.wrkwrk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faboutbg.13257621.jpg&w=3840&q=75&dpl=dpl_fMXfyCZironyhf3shuRWLAMQUZsS",
    alt: "An Idea Tech Mangaluru Studio Team",
  },
  description:
    "Customer-facing information, enquiry handling, and internal processes are often added piece by piece. We find where things are slowing down, then decide whether the answer is a clearer website, a workflow change, a custom web app, standalone software, or an integration.",
  socialProof: {
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    ],
    text: "Served more than 20+ Clients",
  },
  cta1:{
    text:"See how we decide ",
    url:"/contact"
  },
  cta2: {
    text: "Book a Strategy Call",
    url: "/contact",
  },
};

export const introSection = {
  heading: {
    title: "Think Bigger",
    subtitlePrefix: "and ",
    subtitleHighlight: "Creatively",
  },
  statsRow: [
    {
      icon: "client",
      count: "30+",
      label: "Projects Completed",
      description: "Make your project grow bigger.",
    },
    {
      icon: "star",
      count: "100+",
      label: "Career-Driven Learners",
      description: "Join a large and growing community of coders.",
    },
  ],
  bannerCard: {
    line1Prefix: "EVERYDAY ",
    avatars: [
      "https://ik.imagekit.io/anideatech/ait/hero-image.webp",
      "https://ik.imagekit.io/anideatech/ait/hero-image.webp",
      "https://ik.imagekit.io/anideatech/ait/hero-image.webp",
      "https://ik.imagekit.io/anideatech/ait/hero-image.webp",
    ],
    line1Suffix: " IS",
    headline: "NEW OPPORTUNITY\n to learn something valuable.",
    ctaUrl: "/contact",
  },
  featureCard: {
    video: {
      src: "/videos/anideatech-into.mp4",
      alt: "anideatech-into",
    },
  },
};

export const quizSection = {
  header: {
    title: "Does your business actually need a website?",
    description:
      "Most agencies will say yes to anything. Here's how we decide.",
  },
  questions: {
    1: {
      indicator: "QUESTION 1 / 4",
      question:
        "Are you already getting customers — through WhatsApp, walk-ins, referrals, or word of mouth?",
      options: [
        { badge: "A", text: "No", next: 2 },
        { badge: "B", text: "Yes", next: 3 },
      ],
    },
    2: {
      indicator: "QUESTION 2 / 4",
      question: "Have you talked to 10 paying customers in the last 30 days?",
      options: [
        { badge: "A", text: "No", verdict: "A" },
        { badge: "B", text: "Yes", verdict: "B" },
      ],
    },
    3: {
      indicator: "QUESTION 3 / 4",
      question:
        "Are you handling more than 50 customers a month, or losing track of orders, leads, or follow-ups?",
      options: [
        { badge: "A", text: "No", verdict: "B" },
        { badge: "B", text: "Yes", next: 4 },
      ],
    },
    4: {
      indicator: "QUESTION 4 / 4",
      question:
        "Do you need this to run automatically, or are you fine managing it manually for now?",
      options: [
        { badge: "A", text: "Manual", verdict: "C" },
        { badge: "B", text: "Automatic", verdict: "D" },
      ],
    },
  },
  verdicts: {
    A: {
      tag: "VERDICT A",
      title: "You don't need a website yet. You need customers.",
      body: "You haven't validated your idea with real buyers. A website right now is a distraction — it'll cost you money and tell you nothing about whether your business will work.",
      highlightTitle: "What to do instead:",
      highlightText:
        "Go talk to 10 people who'd pay for what you're building. If you can't find 10, your problem isn't a website.",
      ctaText: "Read: How to validate before you build →",
      ctaLink: "#contact",
    },
    B: {
      tag: "VERDICT B",
      title: "You need a landing page and a WhatsApp flow. Not a website.",
      body: "You're either validating an idea or running a business that's already converting on WhatsApp. A full website is overkill. A focused landing page that captures interest and routes people to WhatsApp is what'll actually move your numbers.",
      highlightTitle: "What this looks like:",
      highlightText:
        "A single, well-written landing page. WhatsApp Business setup. A simple lead capture flow. 1–2 weeks. ₹30,000–₹55,000.",
      ctaText: "See Landing Page + WhatsApp Flow →",
      ctaLink: "#contact",
    },
    C: {
      tag: "VERDICT C",
      title: "You need a proper website. With a system behind it.",
      body: "You have a working business and you're past the validation stage. Now you need a site that does more than look good — it should bring in leads, qualify them, and reduce the manual work your team is doing every day.",
      highlightTitle: "What this looks like:",
      highlightText:
        "A custom website with a built-in lead system, basic CRM integration, and analytics that tell you what's working. 4–8 weeks. ₹80,000–₹2L.",
      ctaText: "See Website + Lead System →",
      ctaLink: "#contact",
    },
    D: {
      tag: "VERDICT D",
      title: "You need a custom platform. Built to run your operations.",
      body: "Your business has grown past what a website can handle. You need software that runs your operations — bookings, orders, inventory, team workflows. Most of our long-term clients started here.",
      highlightTitle: "What this looks like:",
      highlightText:
        "A custom web platform integrated with your existing tools (Zoho, Tally, payment gateways, WhatsApp Business API). 8–12 weeks minimum. From ₹2L.",
      ctaText: "See Custom Platform Build →",
      ctaLink: "#contact",
    },
  },
};

export const trustsection = {
  quote:
    " We don't deliver projects and disappear. We build the system, then stay long enough to make sure it works.",
  description:
    "A lot of our clients came to us after another agency built something and left. The site looked fine on launch day. Six months in, something stopped working, the agency wasn't answering calls, and the client was paying someone else to figure out how it was built.\n That's the part we wanted to fix. We deliver the project and then support your growth for as long as you want us around — dashboards, real numbers, regular discussions, consulting on what you actually need next. AIT isn't another agency. We're a growth partner. Most of our oldest clients are still with us four or five years later for that reason.",
};

export const servicesData = [
  {
    id: 1,
    tag: "VALIDATE",
    title: "Validate - Landing Page + WhatsApp Flow",
    heighlight:"Starting point: Validate",
    image: "https://ik.imagekit.io/anideatech/ait/ait/cards%201.png",
    whoItsFor: "For founders testing an offer, or businesses already receiving WhatsApp enquiries that would benefit from one place to explain the offer and capture interest.",
    whatYouGet: "A landing page built around one offer, a clear enquiry route, and WhatsApp Business setup where it is part of the agreed project.",
    bgColor: "bg-[#f9706b]",
    btntext: "Explore Landing Pages",
    btnlink:'/services/landing-pages'
  },
  {
    id: 2,
    tag: "CONVERT",
    title: "Convert - Website + Lead System",
    heighlight:"Starting point: Convert",
    image: "https://ik.imagekit.io/anideatech/ait/ait/cards%202.png",
    whoItsFor: "For established businesses whose customers need to understand the offer, find the right information, and reach the team without unnecessary back-and-forth.",
    whatYouGet: "A custom website with clear enquiry routes and a handover your team can use. We add lead capture, automation, bookings, or connections to existing tools only when they support the way your team sells or serves customers.",
    guidance: "Choose this route when visitors require more context before they are ready to enquire, or when the website needs to carry part of the early customer journey.",
    bgColor: "bg-[#F7CC32]",
       btntext: "Explore Website Design",
    btnlink:'/services/website-design'
  },
  {
    id: 3,
    tag: "OPERATE",
    title: "Operate - Custom Platform",
    image: "https://ik.imagekit.io/anideatech/ait/ait/cards%203.png",
    heighlight:'Starting point: Operate',
    whoItsFor: "For businesses whose bookings, orders, requests, or internal workflows have outgrown a website that only describes the business.",
    whatYouGet: "A Custom Web App is a browser-based dashboard or internal tool for a recurring process the current tools cannot support. We recommend one only after Discovery.",
    guidance: "Choose this route when a recurring process still depends on messages, spreadsheets, or someone keeping track from memory.",
    isCallout: true,
    bgColor: "bg-[#A5CF83]",
        btntext: "Explore Custom Web Apps",
    btnlink:'/services/web-applications'
  },
];

export const projectSection = {
  header: {
    title: "Selected work.",
    subtitle: "Real outcomes for real businesses. Here are some of our recent projects and systems.",
  },
  projects: [
    {
      id: 1,
      slug: "philomena-puc",
      tag: "Education",
      title: "Philomena Pre-University College, Puttur",
      description: "Rebuilt the institution's website to be fully responsive, self-manageable, and reliable during peak traffic — freeing the administration from external dependency while giving students and parents a better experience.",
      image: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",
      url: "/work/philomena-puc",
      tagColor: "bg-[#FFD700] text-black",
    },
    {
      id: 2,
      slug: "meet-and-greet",
      tag: "Community",
      title: "Meet And Greet",
      description: "Open Conversations About Careers, Coding, Bootcamps, Internships, Real-World Engineering, And The Journey.",
      image: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",
      url: "/work/meet-and-greet",
      tagColor: "bg-[#FF6B00] text-white",
    },
    {
      id: 3,
      slug: "developer-ecosystem",
      tag: "Tech Platform",
      title: "Developer Ecosystem",
      description: "Building a tight-knit community of innovators, builders, and creators collaborating on next-generation tech products.",
      image: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",
      url: "/work/developer-ecosystem",
      tagColor: "bg-[#007BFF] text-white",
    },
  ],
};

export const comparisonSection = {
  header: {
    titlePrefix: "Who we’re for.",
    titleSuffix: " Who we’re not.",
    subtitle: "We've worked with founders for ten years. These patterns hold up.",
  },
  workWith: {
    title: "work with",
    items: [
      "Founders ready to move their business from person-driven to process-driven, even with a small team.",
      "Founders running real businesses who want a system that grows, not a website that sits.",
      "Owners who've outgrown manual operations and need software that catches up to where the business already is.",
      "First-time founders willing to be told their idea isn't ready yet.",
    ],
  },
  workNotWith: {
    title: "work not with",
    items: [
      "Anyone who walks in with a competitor's website and says \"build me this.\"",
      "Founders who refuse to talk to real customers but want to launch anyway.",
      "Clients looking for a cheap one-time job and a full disappearance after handover.",
      "Anyone who treats their tech partner like a vendor, not a partner.",
    ],
  },
  footerNote: "If you read the right column and felt called out — that's the point. Better to find out now than three months in",
};

export const comparisionSection = comparisonSection;
