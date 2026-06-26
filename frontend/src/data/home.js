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
