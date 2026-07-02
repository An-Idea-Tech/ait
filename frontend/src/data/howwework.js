export const navigationSections = [
  { id: "scope-prd", label: "Scope & PRD" },
  { id: "build-beta", label: "Build & Beta" },
  { id: "stabilize-grow", label: "Stabilize & Grow" },
  { id: "maintain-evolve", label: "Maintain & Evolve" },
  { id: "operating-layer", label: "Operating layer" },
  { id: "artifacts", label: "Artifacts" },
  { id: "after-launch", label: "After launch" },
  { id: "talk-to-us", label: "Talk to us" },
];

export const heroSectionData = {
  badgeText: "How a project at AIT actually moves",
  headingLine1: "Four phases.",
  headingLine2Highlight: "Real deliverables",
  headingLine2Suffix: " .No vanishing acts.",
  description:
    "Each phase has a clear start, a clear end, and a deliverable you can hold in your hand. You always know which phase you're in and what's coming next.",
  subCaption: "What the next 90 days look like if you hire us.",
  cards: [
    {
      id: 1,
      title: "Scope & PRD",
      description: "Complete architectural blueprint, clickable UI prototypes, and exact milestones aligned before building.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Build & Beta",
      description: "Weekly live builds, rigorous sprint testing, and transparent progress updates you can click and verify.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Stabilize & Grow",
      description: "Performance optimization, hardened security, live deployment, and dedicated ongoing growth support.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
    }
  ]
};

export const scopePrdData = {
  id: "scope-prd",
  phaseLabel: "Phase 1",
  title: "Scope & PRD",
  subtitle: "Before we build anything, we figure out what's actually worth building.",
  accordions: [
    {
      id: "what-happens",
      title: "What happens",
      content:
        "We sit with you — usually two or three working sessions — and walk through your business, your customers, your existing tools, and what you're trying to achieve. We translate that into a real Product Requirements Document: a written, structured plan that lists every feature, every page, every integration, and every decision we'd make during the build.",
      defaultOpen: true,
    },
    {
      id: "what-you-experience",
      title: "What you experience",
      content:
        "Total clarity and zero guesswork. You participate in collaborative workshops where your ideas are challenged, refined, and structured. You get direct access to our product architects and see your vision take shape step by step without any technical jargon.",
      defaultOpen: false,
    },
    {
      id: "optional-exit",
      title: "Optional exit point — pay and walk out with the PRD",
      content:
        "If you decide not to proceed into the build phase with us, you own the Product Requirements Document, technical architecture, and UI prototypes 100%. You can hand them to your internal engineering team or any agency to execute seamlessly.",
      defaultOpen: false,
    },
  ],
  durationLabel: "Typical duration : ",
  durationValue: "4-12 weeks",
  deliverableLabel: "Deliverable : ",
  deliverableValue: "A live, working product. Tested. Public.",
};

export const howWeWorkPhases = [
  scopePrdData,
  {
    id: "build-beta",
    phaseLabel: "Phase 2",
    title: "Build & Beta",
    subtitle: "Rapid, iterative engineering where you see functional progress every week.",
    accordions: [
      {
        id: "bb-what-happens",
        title: "What happens",
        content:
          "Our engineering team executes weekly sprints to build out your core architecture, frontend components, backend APIs, and third-party integrations. Every Friday, we deploy a live staging environment with the latest updates for you to test.",
        defaultOpen: true,
      },
      {
        id: "bb-what-you-experience",
        title: "What you experience",
        content:
          "Continuous visibility. No multi-month black boxes where you wonder what developers are doing. You test real, clickable software every week and provide a direct feedback loop.",
        defaultOpen: false,
      },
      {
        id: "bb-quality-assurance",
        title: "Quality assurance & testing",
        content:
          "Automated end-to-end testing, security scanning, and cross-browser validation ensure every feature is rock-solid before user beta access.",
        defaultOpen: false,
      },
    ],
    durationLabel: "Typical duration : ",
    durationValue: "6-16 weeks",
    deliverableLabel: "Deliverable : ",
    deliverableValue: "Production-ready staging build. Fully functional beta.",
  },
  {
    id: "stabilize-grow",
    phaseLabel: "Phase 3",
    title: "Stabilize & Grow",
    subtitle: "Hardening the application for real-world traffic, performance, and scale.",
    accordions: [
      {
        id: "sg-what-happens",
        title: "What happens",
        content:
          "We run intensive load testing, optimize database queries, set up monitoring alerts, and execute comprehensive security audits. Once verified, we launch publicly to your domain.",
        defaultOpen: true,
      },
      {
        id: "sg-what-you-experience",
        title: "What you experience",
        content:
          "A stress-free launch day. We handle server infrastructure, DNS configuration, SSL certificates, and zero-downtime deployment pipelines.",
        defaultOpen: false,
      },
      {
        id: "sg-post-launch",
        title: "Post-launch support",
        content:
          "Dedicated active monitoring during the critical first weeks of live user onboarding to instantly catch and resolve any edge cases.",
        defaultOpen: false,
      },
    ],
    durationLabel: "Typical duration : ",
    durationValue: "2-4 weeks",
    deliverableLabel: "Deliverable : ",
    deliverableValue: "Live public application. Scalable infrastructure.",
  },
  {
    id: "maintain-evolve",
    phaseLabel: "Phase 4",
    title: "Maintain & Evolve",
    subtitle: "Long-term partnership to iterate on user feedback and add powerful new features.",
    accordions: [
      {
        id: "me-what-happens",
        title: "What happens",
        content:
          "We analyze real user analytics and product telemetry to guide product improvements. We maintain your dependencies, keep security patches updated, and build roadmap enhancements.",
        defaultOpen: true,
      },
      {
        id: "me-what-you-experience",
        title: "What you experience",
        content:
          "An elite on-demand engineering team that scales with your growth without the overhead of recruiting and managing full-time hires.",
        defaultOpen: false,
      },
      {
        id: "me-continuous-optimization",
        title: "Continuous optimization",
        content:
          "Regular performance audits and UX refinements to keep your product fast, modern, and ahead of competitors.",
        defaultOpen: false,
      },
    ],
    durationLabel: "Typical duration : ",
    durationValue: "Ongoing partnership",
    deliverableLabel: "Deliverable : ",
    deliverableValue: "Continuous feature releases & SLA uptime.",
  },
];

