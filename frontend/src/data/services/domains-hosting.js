export default {
  slug: "domains-hosting",
  title: "Domains & Hosting",
  tier: {
    level: 0,
    name: "Foundation",
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      title: "Domains & Hosting",
      subtitle: "Tier 0 • Foundation",
      heading: "The boring infrastructure your business runs on, handled properly.",
      description:
        "Domains and managed hosting for businesses that would rather not deal with three different vendors and four logins. Buy it directly from us, or let us manage it as part of an AIT engagement. Either way, it just works.",
      buttons: [
        { text: "Browse domains & hosting →", link: "https://domains.anideatech.com" },
        { text: "Already an AIT client? Email us", link: "mailto:products@anideatech.com" },
      ],
    },
    {
      id: "what-we-offer",
      type: "feature",
      title: "What we offer.",
      items: [
        {
          title: "Domain registration",
          description:
            "Buy a new domain, transfer an existing one, or have us manage your existing portfolio. Standard TLDs (.com, .in, .co.in, .org, .net) plus regional and industry-specific ones (.tech, .studio, .health, etc.). Real DNS management, real renewal reminders, real support when something breaks.\n\nOur domain registration runs on ResellerClub's infrastructure, branded and managed under AIT — you deal with us, not them, but the underlying registrar is reliable and well-established.",
        },
        {
          title: "Managed hosting",
          description:
            "All client projects are hosted on dedicated infrastructure we manage through Globo.tech. From our side, it's a dedicated server. From your side, it's shared with other AIT clients — but managed by people who actually know your project, not a generic support queue.\n\nWe handle server configuration, security patching, SSL renewal, daily backups, performance monitoring, and uptime tracking. You get a working website without learning what cPanel is.\n\nBoth products live at domains.anideatech.com, sold standalone or bundled into any AIT build engagement.",
        },
      ],
    },
    {
      id: "who-buys-this",
      type: "list",
      title: "Who buys this.",
      items: [
        "Businesses that want one vendor, not five. Right now your domain is on GoDaddy, hosting is on Hostinger, email is on Google Workspace, and your developer is somewhere else. When something breaks, nobody knows whose problem it is. We consolidate.",
        "First-time founders buying their first domain. No idea what .in vs .co.in means? What an SSL certificate is? Why your hosting plan keeps charging you for things you don't understand? We'll walk you through it.",
        "Existing AIT build clients who haven't yet bundled their hosting with us. If we built your site but it's hosted somewhere else, moving it under our managed hosting means we control the full stack.",
        "Businesses outgrowing budget hosting. When your shared GoDaddy plan starts choking on traffic, when your site goes down during peak hours, when you can't get a real human on support — that's when managed hosting starts paying for itself.",
      ],
    },
    {
      id: "hosting-plans",
      type: "content",
      title: "Hosting plans.",
      paragraphs: [
        "We're finalizing our hosting plan structure with our infrastructure partner — three tiers covering small sites, full business websites, and Tier 3 application hosting. Final plan names, pricing, and specs go live at domains.anideatech.com by end of May 2026.",
        "Custom server configurations (specific cloud regions, compliance needs, dedicated infrastructure for enterprise platforms) are scoped separately — talk to us for those.",
      ],
    },
    {
      id: "how-support-works",
      type: "content",
      title: "How support works.",
      paragraphs: [
        "All support requests go through our ticketing portal at support.anideatech.com. Every ticket gets a number, a tracked thread, and an audit trail — no 'I sent you an email last week' moments.",
        "Typical response and resolution times:\n• First response within 1 hour during working hours.\n• Resolution within 48 business hours to 5 working days, depending on issue complexity.",
        "Critical issues (site down, security incident) jump the queue. Routine requests (DNS changes, plan upgrades, configuration tweaks) follow standard priority. Complex issues (database recovery, custom server work) take longer because they need careful work — we'd rather fix it properly than fast.",
        "Support is included with all managed hosting plans and with all AMC engagements.",
      ],
    },
    {
      id: "whats-included-and-what-isnt",
      type: "feature",
      title: "What's included and what isn't.",
      items: [
        {
          title: "Included with managed hosting",
          description:
            "• Server configuration and ongoing maintenance\n• SSL certificate setup and renewal\n• Daily backups with retention based on plan\n• Security patching and OS updates\n• Uptime monitoring and outage response\n• Ticket-based support during business hours\n• Migration help when moving from another host",
        },
        {
          title: "Not included",
          description:
            "• Email hosting. Domains let you set up email, but we don't run our own email servers — we recommend Google Workspace or Zoho Mail and help configure them.\n• CDN configuration beyond basics. Cloudflare or similar for production-grade content delivery is a separate setup, scoped per project.\n• Custom application code fixes. Hosting handles the server. If your application code has bugs, that's a build engagement, not a hosting issue.\n• Domain disputes or trademark issues. We register domains. We don't handle legal fights over them — that's a lawyer's job.",
        },
      ],
    },
    {
      id: "how-pricing-works",
      type: "content",
      title: "How pricing works.",
      paragraphs: [
        "Domain registration is priced per TLD per year — standard market rates. Managed hosting plans are priced monthly, with annual discounts. Specific plan pricing lives at domains.anideatech.com — it's clearer to see the plan comparison there than to copy the table here.",
        "If you're an AIT build client, hosting is usually bundled into your AMC at a small additional rate, or included in higher AMC tiers.",
      ],
    },
    {
      id: "cta",
      type: "cta",
      title: "Ready to consolidate, or just need a domain?",
      paragraphs: [
        "If you know what you want — a specific domain, a hosting plan — head straight to domains.anideatech.com and buy. The whole flow is self-serve.",
        "If you'd rather have a quick conversation first — especially if you're consolidating from multiple vendors, migrating an existing site, or unsure which plan fits — email us or book a 15-minute call. No long sales process. We'll tell you what makes sense.",
      ],
      buttons: [
        { text: "Go to domains.anideatech.com →", link: "https://domains.anideatech.com" },
        { text: "Or email: products@anideatech.com", link: "mailto:products@anideatech.com" },
      ],
    },
    {
      id: "navigation",
      type: "navigation",
      previous: "branding",
      next: "landing-pages",
    },
  ],
};
