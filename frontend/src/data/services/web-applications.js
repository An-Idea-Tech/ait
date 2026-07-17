export default {
  slug: "web-applications",
  title: "Web Applications",
  tier: {
    level: 3,
    name: "Operate",
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      title: "Web Applications",
      subtitle: "Tier 3 • Operate",
      heading: "Custom platforms for businesses that have outgrown the website.",
      description:
        "Bookings, orders, inventory, team workflows, customer dashboards, internal tools — software that runs your operations, not a site that describes them. Built in phases, integrated with the tools you already use.",
      buttons: [
        { text: "Discuss a custom build →", link: "/contact" },
        { text: "Not sure if a website would do? Run the decision tree", link: "/" },
      ],
    },
    {
      id: "what-we-build",
      type: "content",
      title: "What we build at this tier.",
      paragraphs: [
        "A Tier 3 web application is custom software, accessed through a browser, built specifically for how your business actually operates.",
        "This is different from a website. A website tells visitors who you are. A web application does work — it processes orders, tracks bookings, runs your inventory, manages your team's tasks, handles customer accounts, integrates with your accounting and payments. It's the operating system your business runs on.",
        "Most Tier 3 clients come to us at a specific moment: when manual operations are breaking. Orders are getting missed because they're tracked across WhatsApp, email, and a spreadsheet. Bookings are double-booking because three people manage the same calendar. The team is spending two hours a day on tasks that should take ten minutes. That's the moment a real platform pays for itself.",
        "We build web-first because that's where our depth is. When a project warrants mobile, we use cross-platform tooling. When it warrants native iOS or Android, we partner with specialists rather than overclaim.",
      ],
    },
    {
      id: "distinctions",
      type: "feature",
      title: "Wait — is this a Web Application, an MVP, or a Tier 2 website?",
      items: [
        {
          title: "It's a Web Application if:",
          description:
            "You have a working business and need software to run it. The thesis is already proven — orders are coming, customers exist, your team is doing work manually that software should automate. The goal is operational reliability.",
        },
        {
          title: "It's an MVP if:",
          description:
            "You're testing a thesis. You don't have proven product-market fit yet. The goal is to learn — to see whether real users behave the way you think they will. (See MVP Development.)",
        },
        {
          title: "It's a Tier 2 Website if:",
          description:
            "The build is mostly about presenting your business and capturing leads — even with dynamic features (a blog, a portfolio, a booking form). If a CMS like Statamic or WordPress could handle 80% of it, you're in Website Design territory.",
        },
        {
          title: "E-Commerce Note",
          description:
            "An e-commerce store could be any of the three depending on size: Shopify or WooCommerce can be Tier 2, custom-coded e-commerce is Tier 3. We'll figure it out together on the call.",
        },
      ],
    },
    {
      id: "who-should-be-here",
      type: "list",
      title: "Who should be at this tier.",
      items: [
        "Businesses managing operations across disconnected tools (WhatsApp + Excel + email + a CRM nobody likes) and watching things slip through the cracks.",
        "Service businesses (clinics, training centers, salons, consultancies) where bookings, customer records, and team scheduling need to live in one system.",
        "Retail and product businesses needing real inventory, order management, and integrated payments — beyond what off-the-shelf e-commerce handles.",
        "Membership-based businesses needing user accounts, role-based access, content gating, or community features.",
        "Founders building a software product (B2B SaaS, marketplace, vertical platform) who need a real engineering team without hiring one full-time.",
        "Businesses on enterprise platforms they've outgrown in the wrong direction — paying for features they don't use, missing features they need.",
      ],
    },
    {
      id: "what-youll-receive",
      type: "feature",
      title: "What you'll receive.",
      items: [
        {
          title: "A custom-built web application",
          description:
            "Designed for your specific business workflow. Not a template, not a configured SaaS. Real software, with architecture decisions made deliberately for what your business does.",
        },
        {
          title: "Phased delivery, not a 6-month black box",
          description:
            "We deliver in working milestones, not a monolithic launch. Within the first month, you have a working version of the most critical workflow — usually the one keeping you up at night. Subsequent phases add depth.",
        },
        {
          title: "Integration with your existing tools",
          description:
            "Zoho, Tally, payment gateways (Razorpay, Stripe, PayU), WhatsApp Business API, Google Workspace, accounting systems — we integrate with what you already use. The platform connects to your existing operations, not the other way around.",
        },
        {
          title: "Built on the right stack — for the project, not comfort",
          description:
            "PHP/Laravel, Node.js, Python/Django, modern JavaScript frameworks (React/Next.js), or whatever else fits — we pick the stack based on what your project actually needs and what your team can maintain long-term. Not based on what our developers happen to be comfortable with this quarter, and not based on what's trending. Sometimes the right answer is boring infrastructure that runs for ten years. Sometimes it's modern frameworks that ship faster. We choose deliberately.",
        },
        {
          title: "Database design that holds up",
          description:
            "Properly architected data models. Normalized where it should be, denormalized where it makes sense, indexed properly, backed up reliably. Database mistakes are the most expensive thing to fix later — we don't make them.",
        },
        {
          title: "Authentication, roles, and permissions",
          description:
            "Real user account systems with role-based access. Owner sees everything. Managers see their domain. Staff see their tasks. Customers see their own records. Built securely from day one.",
        },
        {
          title: "Admin dashboards for your team",
          description:
            "Internal admin views designed for the people who'll actually use them — not just for your customers. Most platforms ignore the operator experience. We design admin dashboards as carefully as customer-facing screens.",
        },
        {
          title: "Documentation that doesn't rot",
          description:
            "Technical documentation for whoever might work on the platform later — your future developer, your future agency, or us. Written so it stays useful past launch.",
        },
        {
          title: "Trained handover and ongoing AMC",
          description:
            "Documented training. Your team gets fluent in running the platform. Ongoing support is covered under AMC. For Tier 3 platforms, AMC is essential — software that runs operations needs ongoing maintenance, security patching, and gradual evolution.",
        },
      ],
    },
    {
      id: "what-this-doesnt-cover",
      type: "feature",
      title: "What this doesn't cover.",
      items: [
        {
          title: "Complex native mobile apps",
          description:
            "If your project genuinely needs deep iOS/Android integration, we partner with mobile specialists. We're upfront about that.",
        },
        {
          title: "AI/ML model development",
          description:
            "We integrate with existing AI APIs (OpenAI, Anthropic, Gemini, custom-deployed models). We don't train custom ML models from scratch.",
        },
        {
          title: "Blockchain or crypto-native projects",
          description:
            "Not our space. We'll refer you elsewhere honestly.",
        },
        {
          title: "Hardware-integrated systems",
          description:
            "IoT platforms, embedded software, hardware-tied applications need specialist teams.",
        },
        {
          title: "Marketing site or landing page work",
          description:
            "If your project also needs a marketing site, that's a separate Tier 1 or Tier 2 engagement, often run in parallel.",
        },
      ],
    },
    {
      id: "pricing",
      type: "pricing",
      title: "What it costs and how long it takes.",
      plans: [
        {
          title: "Investment",
          value: "₹2.5L – ₹12L",
          description:
            "Focused platforms ₹2.5L–₹4L. Operational platforms ₹4L–₹8L. Complex custom builds ₹8L–₹12L. Beyond ₹12L scoped as enterprise engagements.",
        },
        {
          title: "Timeline",
          value: "8–12+ weeks",
          description:
            "Minimum 8–12 weeks for the first working version. Larger projects run 4–9 months in phased delivery, each phase shipping a usable improvement.",
        },
        {
          title: "AMC after launch — Standard for Tier 3",
          value: "₹25,000+ / mo",
          description:
            "AMC for Tier 3 platforms starts at ₹25,000/month and scales with platform complexity and uptime requirements.\n\nAs a rule, AMC ranges between 10–15% of project cost per month — occasionally 5% for simpler maintenance scopes. A ₹4L platform typically lands ₹40K–₹50K/month AMC. A ₹10L platform typically lands ₹1L–₹1.25L/month. The rule applies because software that runs your operations needs proportional ongoing care.\n\nMost Tier 3 clients sign on at launch and stay for years. Software that runs operations isn't something you maintain casually.",
        },
      ],
    },
    {
      id: "tier-3-work",
      type: "content",
      title: "Tier 3 work.",
      paragraphs: [
        "SPC and SPPUC Puttur are referenceable Tier 3 institutional engagements (4th year). Suprabha Wellness sits between Tier 2 and Tier 3 depending on framing. Both available on the scoping call.",
      ],
    },
    {
      id: "cta",
      type: "cta",
      title: "Ready to build software that runs your operations?",
      paragraphs: [
        "Tier 3 projects are real engineering engagements. They take 3–9 months. They cost from ₹2.5L to ₹12L depending on scope. They're not for businesses still figuring out their model — they're for businesses that have a working model and need software to run it well.",
        "We typically take on 2 Tier 3 projects at a time — across web apps, MVPs, or mobile apps combined — alongside 3–4 Tier 2 builds and 10–12 Tier 1 engagements. If we're at capacity, we'll be honest about it and either schedule you for the next slot or refer you to teams we trust.",
        "The first step is a 30-minute scoping call. Bring whatever you have — workflow diagrams, current tools you're outgrowing, the spreadsheet that's holding everything together.",
      ],
      buttons: [
        { text: "Book a Tier 3 scoping call →", link: "/contact" },
        { text: "Or read about our build process", link: "/contact" },
      ],
    },
    {
      id: "navigation",
      type: "navigation",
      previous: "growth-consulting",
      next: "mvp-development",
    },
  ],
};
