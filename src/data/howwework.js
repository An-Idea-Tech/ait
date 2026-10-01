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
  image: "https://i.pinimg.com/1200x/39/fd/22/39fd22a10b1e5d0bb72dce985b0031fd.jpg",
  phaseIcon: "/images/image.png",
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
  {
    id: "discovery",
    phaseLabel: "Phase 1",
    title: "Discovery",
    image: "https://ik.imagekit.io/anideatech/ait/ait/discovery'.png",
    accordions: [
      {
        id: "discovery-understanding",
        content:
          "Discovery is where we understand the situation before deciding what to build. We discuss the issue, the people affected, and what needs to change.",
      },
      {
        id: "discovery-approach",
        content:
          "It gives you a clearer view of how to approach the problem and what may need to be built.",
      },
    ],
  },
  {
    id: "scope-prd",
    phaseLabel: "Phase 2",
    title: "Scope & PRD",
    image: "https://ik.imagekit.io/anideatech/ait/ait/PRD.png",
    accordions: [
      {
        id: "scope-definition",
        content:
          "Once we agree the direction, we define what is included, the key requirements, the people involved, review points, and the expected deliverables.",
      },
      {
        id: "scope-prd-use",
        content:
          "We use a Product Requirement Document internally to guide the build.",
      },
    ],
  },
  {
    id: "build-beta",
    phaseLabel: "Phase 3",
    title: "Build & Beta",
    image: "https://ik.imagekit.io/anideatech/ait/ait/build%20and%20beta.png",
    accordions: [
      {
        id: "build-stages",
        content:
          "We develop the agreed website or application in stages and share working versions for review. The client portal shows progress and anything that needs your input. We consider your feedback before moving to the next stage.",
      },
      {
        id: "build-project-types",
        content:
          "For application projects, this may be a beta. For website projects, it is the working site for review.",
      },
    ],
  },
  {
    id: "review-revise",
    phaseLabel: "Phase 4",
    title: "Review & Revise",
    image: "https://ik.imagekit.io/anideatech/ait/ait/review%20and%20revise.png",
    accordions: [
      {
        id: "review-changes",
        content:
          "We review the working version with you and make the agreed changes. If a new requirement comes up, we discuss it and quote it before adding it to the project. Once the revisions are complete, the project moves to final checks before launch.",
      },
    ],
  },
  {
    id: "launch-handover",
    phaseLabel: "Phase 5",
    title: "Launch & Handover",
    image: "https://ik.imagekit.io/anideatech/ait/ait/launch%20and%20handover.png",
    accordions: [
      {
        id: "launch-testing",
        content:
          "Before launch, we test the website or application in the setting where the team will use it, whether that is a browser, a mobile device, or a team computer.",
      },
      {
        id: "handover-support",
        content:
          "After the final checks, we launch it and give the team the walkthroughs and documentation agreed for the project. We provide the agreed support as they begin using it.",
      },
    ],
  },
  {
    id: "maintain-evolve",
    phaseLabel: "Phase 6",
    title: "Maintain & Evolve",
    image: "https://ik.imagekit.io/anideatech/ait/ait/Maintain%20&%20Evolve.png",
    accordions: [
      {
        id: "maintain-care",
        content:
          "An AMC can cover the ongoing care agreed for a website or application. The contract sets out the support and maintenance included.",
      },
    ],
  },
];

export const afterLaunchData = {
  id: "after-launch",
  title: "After launch",
  subtitle:
    "Every AIT project ends with a launch. None of our long-term clients end there.",
  cards: [
    {
      id: "keep-doing",
      title: "What we keep doing\nafter launch.",
      color: "#5B7553",
      intro:
        "AMC is a monthly retainer that keeps your site or platform running. The day-to-day technical work happens whether you ask for it or not.\nThis is what's included every month:",
      points: [
        "Server uptime monitoring and response",
        "Security patches and plugin updates",
        "Backups — frequency and retention based on your hosting plan",
        "Broken link checks and fixes",
        "Performance monitoring (page speed, error rates)",
        "Bug fixes for anything that breaks",
        "A written monthly report showing what was done",
      ],
      outro:
        "You don't need to log a ticket for routine maintenance. We do it on schedule and tell you about it in the report.",
    },
    {
      id: "not-included",
      title: "What's not included.",
      color: "#5B7553",
      intro:
        "We're upfront about this because the wrong agency will quietly slot anything into AMC and surprise you with bills later.\nAMC does not cover:",
      points: [
        "New features or pages",
        "Major redesigns",
        "Custom integrations with new tools",
        "Marketing changes (SEO campaigns, ad landing pages)",
        "Anything that wasn't part of the original build",
      ],
      outro:
        "If you want any of these, we'll quote them separately. You'll always know what's AMC and what's a new project before any work starts.",
    },
    {
      id: "grow-beyond",
      title: "When you want to grow\nbeyond maintenance.",
      color: "#5B7553",
      intro:
        "Most of our long-term clients eventually want more than maintenance. A new feature. A second site. A platform that integrates with the one we built. When that happens, we don't treat it as a fresh project — we treat it as the next phase of the same relationship.",
      outro:
        "Growth work usually starts with a 30-minute call to scope what you want. From there it goes through the same four phases as a new project, but faster, because we already know your business, your tools, and your team.",
    },
  ],
  actions: [
    {
      id: "discuss-growth",
      label: "Already with us and want to discuss growth?",
      buttonText: "Discuss growth",
      link: "/contact",
    },
    {
      id: "first-time",
      label: "Considering AMC for the first time?",
      buttonText: "Explore AMC",
      link: "/contact",
    },
  ],
};

export const confusionData = {
  id: "talk-to-us",
  title: "Still Confused ?",
  description:
    "If you've made it this far, there's a good chance we'd be a useful conversation. The next step is a 30-minute call. We'll ask about your business, your goals, and what you're trying to build. By the end of the call, we'll tell you honestly whether we're the right fit — and if we're not, we'll usually be able to point you to someone who is.",
  buttons: [
    {
      id: 1,
      text: "Connect with us",
      link: "/contact",
      variant: "light",
    },
    {
      id: 2,
      text: "Connect with us",
      link: "/contact",
      variant: "outline",
    },
  ],
  note: {
    text: "Free 30-minute call. We'll tell you if we're the right fit.",
  },
};

export const dayToDayData = {
  id: "operating-layer",
  title: "How we run a project, day to day.",
  subtitle:
    "The phases are the structure. These are the working habits that show up inside them.",
  principles: [
    {
      id: "source-of-truth",
      number: "01",
      title: "One source of truth.",
      description:
        "You and we work off the same dashboard. Same tasks, same deadlines, same blockers, same status. We don't send weekly status emails because the dashboard is the status — visible to you any time you want to check. If you log in on a Tuesday and want to know what's happening, the answer is on the screen, not in someone's inbox.",
      practiceLabel: "What this means in practice:",
      practiceText:
        'no "let me check and get back to you" delays. No information lag between us and you. If we\'re stuck on something, you\'ll see it the same day we do.',
    },
    {
      id: "demos-not-promises",
      number: "02",
      title: "Demos, not promises.",
      description:
        'Every couple of weeks during the build, we show you something working. Not a slide deck. Not a Figma mockup with words like "final design." The actual product, in a browser, that you can click. Then we course-correct based on what you see, not on what you imagined.',
      practiceLabel: "What this means in practice:",
      practiceText:
        "if a feature feels off when you see it live, we change it before it ships. The cost of changing something during build is small. The cost of changing it after launch is large. Demos move that conversation early.",
    },
    {
      id: "reports-that-answer",
      number: "03",
      title: "Reports that answer\nthe question before\nyou ask it.",
      description:
        "Once a month, you get a written report. What we did, what we didn't, what's coming, what we're worried about. The report is designed so you don't have to ask follow-up questions — if something needs your attention, it says so plainly. If everything is fine, that's stated clearly too.",
      secondaryDescription:
        "Meetings happen when there's a real decision to make, not as a default. Your time is more valuable than a status call.",
    },
  ],
  bottomNote:
    "All three principles have one thing in common: they assume you're busy. Working with us shouldn't require chasing us for information.",
};
