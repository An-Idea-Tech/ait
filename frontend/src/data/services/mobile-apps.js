export default {
  slug: "mobile-apps",
  title: "Mobile Apps",
  tier: {
    level: 3,
    name: "Operate",
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      title: "Mobile Apps",
      subtitle: "Tier 3 • Operate",
      heading: "Cross-platform mobile builds, when a web app or PWA isn't enough.",
      description:
        "We build mobile apps using React Native and Flutter — for projects where the user genuinely needs an app, not just a mobile-friendly website. For native iOS and Android with deep platform integrations, we partner with specialists rather than overclaim.",
      buttons: [
        { text: "Discuss a mobile build →", link: "/contact" },
        { text: "Not sure if you need mobile or just mobile-friendly web? Run the decision tree", link: "/" },
      ],
    },
    {
      id: "what-we-mean",
      type: "content",
      title: "What we mean by mobile.",
      paragraphs: [
        "A real mobile app — distributed through the App Store and Play Store, installed on a user's phone, opened with a tap on a home screen icon. Different from a mobile-friendly website, different from a Progressive Web App, different from a responsive web build.",
        "Mobile apps are the right answer when:\n• Users will use the app frequently enough that home-screen presence matters (daily, multiple times a week).\n• You need push notifications that genuinely reach the user, not browser notifications that get ignored.\n• The app needs to work offline or with intermittent connectivity.\n• You need access to phone hardware — camera, GPS, contacts, calendar — beyond what a browser permits.",
        "Mobile apps are the wrong answer when:\n• A mobile-friendly website would do the same job for less time, less money, and easier maintenance.\n• Your users will visit once or twice and probably never install an app.\n• The \"we should also have an app\" thinking is driven by competitor-watching, not user behaviour.",
        "Most agencies will sell you an app whether you need one or not. We'll ask whether you need one before we build, and if the honest answer is \"a mobile-friendly web build is what you actually need\" — we'll route you to Tier 2 Website Design or Web Applications instead.",
      ],
    },
    {
      id: "distinctions",
      type: "feature",
      title: "Wait — is this a Mobile App, a Web App, or a PWA?",
      items: [
        {
          title: "It's a Mobile App if:",
          description:
            "Users will install it on their phone, use it frequently, and need offline support, push notifications, or hardware access. The home-screen presence matters. (You're on the right page.)",
        },
        {
          title: "It's a Web App if:",
          description:
            "Users access it through a browser — usually on desktop, sometimes on mobile — and the value is in the workflow, not in mobile-specific features. (See Web Applications.)",
        },
        {
          title: "It's a PWA (Progressive Web App) if:",
          description:
            "You want app-like behavior — installable from the browser, works on mobile, can send notifications — without the App Store tax, the longer build timeline, or the higher cost. PWAs work for most \"we want an app\" requests at one-third the budget. We'll suggest a PWA when it's the right answer.\n\nIf you're not sure which one you need, we'll figure it out on the scoping call. The build category usually becomes obvious within 15 minutes of conversation about how your users actually behave.",
        },
      ],
    },
    {
      id: "what-we-build-and-dont",
      type: "feature",
      title: "What we build, and what we don't.",
      items: [
        {
          title: "Cross-platform mobile (React Native, Flutter) — our depth",
          description:
            "For most mobile projects, we build using React Native or Flutter. These frameworks let us ship to both iOS and Android from one codebase, which means faster delivery, lower cost, and easier maintenance. The trade-off is some platform-native polish — but for 80% of business mobile apps, the trade-off is right.",
        },
        {
          title: "Native iOS or Android — partnership only",
          description:
            "If your app genuinely needs native — heavy hardware integration, performance-critical animations, deep platform-specific features (Apple Watch, Android Auto, ARKit, etc.) — we don't pretend to be a native specialist. We'll either route you to mobile-native partners we trust, or join a project as the backend/web team while specialists handle the native build.\n\nThis isn't a weakness we're hiding. It's a deliberate scope choice. AIT is a web-first studio that does mobile when the project fits cross-platform tooling. Above that line, we tell you.",
        },
        {
          title: "PWAs (Progressive Web Apps) — when an app might not be needed",
          description:
            "For some projects, a Progressive Web App is the right answer — installable from the browser, works like an app on the home screen, no App Store gatekeeping, much lower build cost. We'll suggest a PWA when it'll do the job. Not every business needs an app.",
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
            "• Founders or businesses with a genuine product-need for daily-use mobile (delivery, field services, on-the-go workflows, real-time tracking).\n• Web app clients ready to extend their platform to mobile — where the web product is working and the mobile experience is the obvious next step.\n• Service businesses where staff use mobile for in-the-field operations (technicians, drivers, salespeople, on-site teams) and the app is for internal use.\n• B2B SaaS founders shipping a companion app to support a primary web product.\n• Founders building a mobile-first product where the cross-platform trade-offs are acceptable for the use case.",
        },
        {
          title: "Who this is NOT for",
          description:
            "• Founders who want to \"also have an app\" because their competitor has one.\n• Projects requiring deep native integration (Apple HealthKit, ARKit, complex Bluetooth, advanced camera APIs). We'll route you to specialists.\n• Apple Watch, Android Auto, smart TV apps, or other platform-specific surfaces. Not our scope.\n• Anyone whose plan starts with \"we'll figure out the platform later, just build us an app first\" — we won't.",
        },
      ],
    },
    {
      id: "what-youll-receive",
      type: "feature",
      title: "What you'll receive.",
      items: [
        {
          title: "A working cross-platform mobile app",
          description:
            "React Native or Flutter, built specifically for your business case. Available for both iOS and Android from the start. Real installable app, ready for App Store and Play Store submission.",
        },
        {
          title: "App Store and Play Store submission, end-to-end",
          description:
            "We handle the submission process — developer account setup guidance, store listings, screenshots, descriptions, review responses, rejections and resubmissions. App Store rejections are normal. We expect them and handle them.",
        },
        {
          title: "Backend integration with your web platform",
          description:
            "If you already have a web app or website, we connect the mobile app to the same backend. Same database, same APIs, same user accounts. Mobile and web stay in sync because they share infrastructure.",
        },
        {
          title: "Push notifications, properly built",
          description:
            "Notification systems that actually work. Targeted, relevant, opt-in/opt-out controllable. We use Firebase Cloud Messaging or similar production-grade tooling.",
        },
        {
          title: "Authentication and account systems",
          description:
            "Secure login, social login if needed, biometric login on supported devices.",
        },
        {
          title: "Offline support, where it makes sense",
          description:
            "Some apps need to work without internet (field services, content readers, productivity tools). We build offline support when the use case warrants it, not as a default that bloats the project.",
        },
        {
          title: "Documentation, handover, and AMC",
          description:
            "Same standard as our other tiers. Mobile apps need ongoing AMC more than web apps do — operating systems update, app stores change policies, dependencies break.",
        },
      ],
    },
    {
      id: "what-this-doesnt-cover",
      type: "feature",
      title: "What this doesn't cover.",
      items: [
        {
          title: "Native iOS or Android development",
          description:
            "We partner with specialists, we don't pretend to be one.",
        },
        {
          title: "Platform-specific surfaces",
          description:
            "Apple Watch, Android Auto, smart TV, AR/VR, IoT companion apps. Specialist territory.",
        },
        {
          title: "Game development",
          description:
            "Whole different stack and skill set.",
        },
        {
          title: "Heavy on-device ML or computer vision",
          description:
            "We integrate with hosted ML APIs.",
        },
        {
          title: "App Store Optimization (ASO) as ongoing service",
          description:
            "We help with launch listings. Long-term ASO is a separate marketing engagement.",
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
          value: "₹3L – ₹10L",
          description:
            "Most cross-platform builds land ₹4L–₹7L. Below ₹3L is probably a PWA. Above ₹10L is native specialist territory.",
        },
        {
          title: "Timeline",
          value: "8–16 weeks",
          description:
            "Eight weeks aggressive. Twelve weeks common. Sixteen weeks for projects with significant offline requirements or complex integrations.",
        },
        {
          title: "AMC after launch — Standard for mobile",
          value: "₹25,000+ / mo",
          description:
            "Mobile AMC follows the same 10–15% of project cost rule as our other Tier 3 work, with a floor of ₹25,000/month. Mobile apps need more active maintenance than web apps — OS updates, App Store policy changes, library security patches, occasional emergency patches.\n\nSkipping AMC on a mobile app usually means it stops working within 12–18 months. Mobile is one tier where AMC is genuinely essential, not optional.",
        },
      ],
    },
    {
      id: "mobile-work-in-build",
      type: "content",
      title: "Mobile work, in build.",
      paragraphs: [
        "We have two cross-platform mobile apps in active development, shipping July–August 2026:\n• An expense calculator app for personal finance tracking.\n• A parenting and teaching app focused on early childhood learning support.\n\nBoth are AIT-owned products we're launching as standalone businesses.",
        "Once they ship, this section will showcase real shipped work.\n\nUntil then, we're transparent: AIT's mobile portfolio is small but actively growing. We're being deliberate about the projects we take on while the team scales mobile depth.",
      ],
    },
    {
      id: "cta",
      type: "cta",
      title: "Ready to figure out if mobile is actually the answer?",
      paragraphs: [
        "Most mobile scoping calls at AIT spend more time on \"do you actually need a mobile app?\" than on \"how should we build it?\" That question is usually the more valuable one.",
        "Sometimes the answer is yes — and we move to scoping a cross-platform build.\nSometimes the answer is \"a Progressive Web App will get you 80% of what you need at 30% of the cost.\"\nSometimes the answer is \"you need true native depth, here's a mobile specialist team we trust.\"\n\nEither way, you'll leave the call with a clearer picture than you came in with.",
        "We typically take on 2 Tier 3 projects at a time across web apps, MVPs, and mobile apps combined, alongside 3–4 Tier 2 builds and 10–12 Tier 1 engagements. If we're at capacity, we'll be honest and either schedule you for the next slot or route you elsewhere.",
      ],
      buttons: [
        { text: "Book a mobile scoping call →", link: "/contact" },
        { text: "Or read about our build process", link: "/contact" },
      ],
    },
    {
      id: "navigation",
      type: "navigation",
      previous: "mvp-development",
      next: "prd",
    },
  ],
};
