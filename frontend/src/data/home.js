export const heroSection = {
  subtitle: "Most Indian SMEs don't need a website.",
  headline: "They need 3 Landing pages and a Whatsapp flow.",
  image: {
    src: "https://www.wrkwrk.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faboutbg.13257621.jpg&w=3840&q=75&dpl=dpl_fMXfyCZironyhf3shuRWLAMQUZsS",
    alt: "An Idea Tech Mangaluru Studio Team",
  },
  description:
    "We are a Mangaluru studio that helps founders decide what NOT to build. Then we build the rest properly.",
  socialProof: {
    avatars: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    ],
    text: "Served more than 20+ Clients",
  },
  cta: {
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
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
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
    tag: "START",
    title: "Landing Page + WhatsApp Flow",
    image: "/svgs/cube.svg",
    whoItsFor: "Founders validating an idea, or businesses already converting through WhatsApp who need a single page that captures interest properly.",
    whatYouGet: "One landing page, written and designed to convert. WhatsApp Business setup. A simple lead capture flow that routes interest directly to your phone.",
    bgColor: "bg-[#0861D9]",
    buttonText: "Connect with us"
  },
  {
    id: 2,
    tag: "GROW",
    title: "Website + Lead System",
    image: "/svgs/cube.svg",
    whoItsFor: "Running businesses past the validation stage. You have customers. Now you need a site that brings in more, qualifies them, and reduces the manual follow-up your team is doing.",
    whatYouGet: "A custom website. Built-in lead capture and qualification. Basic CRM integration. Analytics that tell you what's converting and what's not. Trained handover so your team can run it.",
    bgColor: "bg-[#DABC4C]",
    buttonText: "Connect with us"
  },
  {
    id: 3,
    tag: "OPERATE",
    title: "Custom Platform",
    image: "/svgs/cube.svg",
    whoItsFor: "Businesses that have outgrown a website. Bookings, orders, inventory, team workflows — you need software that runs your operations, not a site that describes them.",
    whatYouGet: "A custom web platform integrated with your existing tools — Zoho, Tally, payment gateways, WhatsApp Business API, whatever you already use. Built in phases, with a working version in your hands within the first month.",
    bgColor: "bg-[#50C260]",
    buttonText: "Connect with us"
  },
];

export const projectSection = {
  header: {
    tag: "IMPACT",
    title: "How We Are Doing It Faster And Better Than Others!",
  },
  projects: [
    {
      id: 1,
      tag: "Workshops",
      title: "Tech & Career Bootcamp",
      description: "Empowering students and professionals with hands-on coding skills, modern frameworks, and real-world engineering practices.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
      url: "/contact",
      tagColor: "bg-[#FFD700] text-black",
    },
    {
      id: 2,
      tag: "Meet-ups",
      title: "Meet And Greet",
      description: "Open Conversations About Careers, Coding, Bootcamps, Internships, Real-World Engineering, And The Journey.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop",
      url: "/contact",
      tagColor: "bg-[#FF6B00] text-white",
    },
    {
      id: 3,
      tag: "Community",
      title: "Developer Ecosystem",
      description: "Building a tight-knit community of innovators, builders, and creators collaborating on next-generation tech products.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      url: "/contact",
      tagColor: "bg-[#007BFF] text-white",
    },
    {
      id: 4,
      tag: "Mentorship",
      title: "1-on-1 Guidance",
      description: "Direct mentorship from industry veterans helping founders make the right architectural decisions early on.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      url: "/contact",
      tagColor: "bg-[#9333EA] text-white",
    },
  ],
};
