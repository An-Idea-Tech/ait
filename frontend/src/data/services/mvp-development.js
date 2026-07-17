export default {
  slug: "mvp-development",
  title: "MVP Development",
  tier: {
    level: 3,
    name: "Operate",
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      title: "MVP Development",
      subtitle: "Tier 3 • Operate",
      heading: "The cheapest MVP is the one you didn't build.",
      description:
        "We help founders ship the smallest version that proves the bet — usually in 4 to 8 weeks. We'll also tell you which features to cut before we write a line of code, even if it makes the project smaller.",
      buttons: [
        { text: "Scope your MVP →", link: "/contact" },
        { text: "Not sure if you need an MVP yet? Run the decision tree", link: "/" },
      ],
    },
    {
      id: "what-we-mean",
      type: "content",
      title: "What we mean by MVP.",
      paragraphs: [
        "An MVP is the smallest working version of your product that lets real users do the thing your business depends on. Nothing more. The point isn't to build something complete — it's to build something learnable.",
        "Most founders we talk to describe an MVP that's actually a Version 2.0. They've added the dashboard, the analytics, the notifications, the team feature, the billing tier, the admin tools. By the time we cut it down, the real MVP is one screen and a database — and it can ship in six weeks instead of six months.",
        "That's the work we do here. We start by helping you decide what not to build. Then we build what's left, fast, and put it in front of real users. The version one of your platform should feel slightly embarrassing — if you're proud of it, you over-built. If you're embarrassed, you'll learn faster.",
        "We've watched too many founders spend ₹8L building Version 2.0 of an idea nobody wanted, when they could've spent ₹3L building Version 0.5 of the same idea and learned the same thing six months earlier and ₹5L cheaper. That's the calculation this service exists to fix.",
      ],
    },
    {
      id: "distinctions",
      type: "feature",
      title: "Wait — is this an MVP, a web app, or a website?",
      items: [
        {
          title: "It's an MVP if:",
          description:
            "You're testing a thesis. You don't have proven product-market fit yet. The goal of the build is to learn — to see whether real users behave the way you think they will. The right scope is small, the right timeline is short, and the right code is throwaway-friendly.",
        },
        {
          title: "It's a Web Application if:",
          description:
            "You have a working business and need software to run it. The thesis is already proven. The goal is operational reliability, not learning. (See Web Applications.)",
        },
        {
          title: "It's a Tier 2 Website if:",
          description:
            "The build is mostly about presenting your business and capturing leads — even if it has dynamic features. (See Website Design.)",
        },
        {
          title: "A practical example: E-Commerce Store",
          description:
            "• An MVP: A founder testing whether people will buy a new product line should build it as an MVP — fast, lean, ready to throw away if the demand isn't there (₹1.5L–₹4L range, 4–8 weeks).\n• A Tier 2 Website: A boutique shop wanting to showcase products and route buyers to WhatsApp can be a Tier 2 website with light commerce features, often built on Shopify or WooCommerce (₹80K–₹2L range, 4–8 weeks).\n• A Tier 3 Web Application: An established retailer building a real online channel with custom workflows, integrations, and inventory logic — that's a Tier 3 Web Application, custom-coded (₹2.5L–₹12L range, 8–16 weeks).\n\nIf your situation doesn't fit cleanly — for example, you're a mid-sized retailer where Shopify almost works but breaks at one critical point — that's exactly the conversation we have on the scoping call. The platform decision (off-the-shelf vs custom) usually matters more than the tier name.",
        },
      ],
    },
    {
      id: "who-should-be-here",
      type: "feature",
      title: "Who should be at this tier — and who shouldn't.",
      items: [
        {
          title: "Who this is FOR",
          description:
            "• Founders with a clear thesis, some validation signal (paying customers, waitlist, design partners, real conversations), and a need to ship working software to test the next layer.\n• First-time founders who've never built software before and need a team that won't quietly inflate scope.\n• Repeat founders who've been burned by agencies that built bloated MVPs they couldn't iterate on.\n• Founders raising or about to raise — where shipping a working prototype unlocks the next conversation with investors, partners, or customers.\n• Operating businesses launching a new product line — where the new line is genuinely different from the existing business and needs its own MVP.",
        },
        {
          title: "Who this is NOT for",
          description:
            "• Pre-validation founders who haven't talked to 10 potential customers yet. You don't need an MVP — you need conversations.\n• Founders who want a \"polished V1\" that's launch-ready for the world. That's a Web Application, not an MVP.\n• Anyone whose plan starts with \"once we raise funding, we'll build…\" — we don't pre-build for hypothetical capital.",
        },
      ],
    },
    {
      id: "what-youll-receive",
      type: "feature",
      title: "What you'll receive.",
      items: [
        {
          title: "A working MVP, built and shipped in 4–8 weeks",
          description:
            "Real software, deployed, accessible to your real users — not a prototype, not a Figma click-through. Code that runs, data that persists, a URL you can share.",
        },
        {
          title: "Aggressive scope cutting before we start",
          description:
            "We spend the first week looking at your feature list and arguing about it. By the end, you'll have fewer features than you came in with. That's a feature, not a bug — every feature we cut now is a feature you don't have to maintain later.",
        },
        {
          title: "Foundation built for iteration, not perfection",
          description:
            "We don't optimize for code beauty in an MVP. We optimize for iteration speed — how fast can we change, ship, learn, repeat. The codebase is clean enough to maintain, lean enough to throw away if you pivot.",
        },
        {
          title: "Authentication and a real user system",
          description:
            "Even at MVP, your users need accounts. We build a basic auth system that's secure, simple, and extensible — not a half-baked one you'll have to rip out at scale.",
        },
        {
          title: "Core workflows for the bet",
          description:
            "Whatever the central thing is — booking, ordering, matching, posting, paying — we build that, end to end, with real data flow. Auxiliary features (admin dashboards, analytics, notifications) get the simplest possible version, or get deferred.",
        },
        {
          title: "Real analytics from day one",
          description:
            "Posthog, Mixpanel, or simpler tools — set up before launch, tracking the events that actually answer your validation questions. You'll know within two weeks of launch whether the thesis is working.",
        },
        {
          title: "Deployment, hosting, and basic monitoring",
          description:
            "We deploy the MVP to real infrastructure (DigitalOcean, AWS, Hetzner, or similar — picked for cost-to-performance fit), set up basic monitoring, and hand over working credentials. Your MVP runs without us.",
        },
        {
          title: "A 2-week iteration window after launch",
          description:
            "Once it's live, we stay close for 2 weeks. Real users surface real problems. We fix what breaks, ship the obvious next iteration, and watch the analytics with you. After that, you decide what comes next.",
        },
      ],
    },
    {
      id: "what-this-doesnt-cover",
      type: "feature",
      title: "What this doesn't cover.",
      items: [
        {
          title: "A polished V1 ready for public launch",
          description:
            "MVPs are for testing, not impressing.",
        },
        {
          title: "Native mobile apps",
          description:
            "Cross-platform mobile sometimes fits in MVP scope — native iOS/Android usually doesn't.",
        },
        {
          title: "Compliance-heavy domains",
          description:
            "Regulated fintech, full healthcare, formal legal-tech. MVPs in these spaces require specialized handling we don't offer in this tier.",
        },
        {
          title: "Pivot rebuilds",
          description:
            "If your MVP works, you'll probably want to rebuild parts of it for scale. That's a separate engagement.",
        },
        {
          title: "Co-founder-level equity arrangements",
          description:
            "We're a paid service. We don't trade equity for builds. If your business genuinely can't afford an MVP build at our pricing, you probably shouldn't build yet.",
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
          value: "₹1.5L – ₹6.5L",
          description:
            "Lean MVPs ₹1.5L–₹3L. Standard MVPs ₹3L–₹4.5L. Heavier MVPs ₹4.5L–₹6.5L. Below ₹1.5L is a Tier 1 build. Above ₹6.5L is Web Applications.",
        },
        {
          title: "Timeline",
          value: "4–8 weeks",
          description:
            "Four weeks if scope is genuinely tight. Most MVPs land at 6–8 weeks. We'd rather extend by two weeks than ship something half-baked. Final timeline depends on the PRD.",
        },
        {
          title: "AMC after launch — Iteration & Growth",
          value: "₹15,000 – ₹25,000 / mo",
          description:
            "For MVPs, AMC isn't usually the right model immediately. The first 2 weeks of post-launch iteration are included. After that, most founders pause for a month to look at data before deciding next steps.\n\nOnce direction is clear, the project either moves into AMC (₹15K–₹25K/month, scoped to maintenance + minor iterations), or continues as a phase-2 build engagement priced separately. The 10–15% AMC rule applies the same way it does for full Tier 3 builds.",
        },
      ],
    },
    {
      id: "founder-builds",
      type: "content",
      title: "Founder builds.",
      paragraphs: [
        "Real MVP work to reference:\n• The admission flow we built on top of Chokkady School's website (Tier 2 site with MVP-scope add-on for digital admissions).\n• An internal reporting tool we're building for AIT itself — our own MVP, replacing manual monthly client reporting with automated generation.\n• Earlier MVP-scope work in real estate (Tavara Projects — old site available as demo on request).",
      ],
    },
    {
      id: "cta",
      type: "cta",
      title: "Ready to ship the smallest version that proves the bet?",
      paragraphs: [
        "Most MVP scoping calls go the same way. The founder shows up with a feature list. We spend 30 minutes asking what each feature is for. By the end, half the list is gone, the other half is sharper, and the project either moves forward at a smaller scope or doesn't move forward at all.",
        "Either outcome is a win. Building the wrong MVP is more expensive than not building one. We'd rather you leave the call with clarity than with a contract.",
        "We typically take on 2 Tier 3 projects at a time — across web apps, MVPs, and mobile apps combined — alongside 3–4 Tier 2 builds and 10–12 Tier 1 engagements. If we're at capacity, we'll be honest about it.",
      ],
      buttons: [
        { text: "Book an MVP scoping call →", link: "/contact" },
        { text: "Or read about our build process", link: "/contact" },
      ],
    },
    {
      id: "navigation",
      type: "navigation",
      previous: "web-applications",
      next: "prd",
    },
  ],
};
