export const servicesPageData = {
  seo: {
    title: "Services | An Idea Tech",
    description: "We don't sell services. We sell decisions. Find the right service based on what your business needs right now — from validation to fully custom web applications."
  },
  hero: {
    topTag: "WHAT WE OFFER, ORGANIZED BY WHAT YOUR BUSINESS NEEDS.",
    titlePlain: "We don't sell services. ",
    titleItalic: "We sell decisions.",
    subtitle: "Most agencies list 30 services and let you pick. We organize ours into five categories — based on where your business is, not what you came here looking for."
  },
  nav: [
    { label: "Foundation", href: "#foundation" },
    { label: "Validate", href: "#validate" },
    { label: "Convert", href: "#convert" },
    { label: "Operate", href: "#operate" },
    { label: "Standalone", href: "#standalone" }
  ],
  workSection: {
    title: "The work, organized by where your business is.",
    subtitle: "Five categories based on what your business needs right now.",
    decisionTreeLink: { text: "Not sure which tier fits?", linkText: "Run the decision tree →", href: "#decision-tree" },
    tiers: [
      {
        id: "foundation",
        tierTag: "TIER 0",
        title: "Foundation",
        tierSubtitle: "Start here if you don't have a brand yet.",
        services: [
          {
            title: "Branding & Design Assets",
            description: "Logo, brand guidelines, marketing collateral. Designed by our senior in-house designer before any website work begins. Most projects start here, even if you didn't think they needed to.",
            linkText: "See Branding →",
            slug: "/services/branding-design-assets"
          },
          {
            title: "Domains & Hosting",
            description: "Domain registration and managed hosting, sold standalone or bundled with builds. Run on dedicated infrastructure through our partner Globo.tech, with our own management layer on top.",
            linkText: "See Domains & Hosting →",
            slug: "/services/domains-hosting"
          }
        ]
      },
      {
        id: "validate",
        tierTag: "TIER 1",
        title: "Validate",
        tierSubtitle: "For testing if your idea works before building anything big.",
        services: [
          {
            title: "Landing Pages",
            description: "A single, focused landing page that captures interest and routes it to WhatsApp or your phone. Built to convert, not impress. Most validation-stage projects start here.",
            linkText: "See Landing Pages →",
            slug: "/services/landing-pages"
          },
          {
            title: "Google Business Profile + Local SEO",
            description: "For Mangaluru and Karnataka businesses who want to be found by people searching nearby. GBP setup, optimization, review responses, local SEO foundations.",
            linkText: "See GBP + Local SEO →",
            slug: "/services/gbp-local-seo"
          }
        ]
      },
      {
        id: "convert",
        tierTag: "TIER 2",
        title: "Convert",
        tierSubtitle: "For businesses with customers who need a system that brings in more.",
        services: [
          {
            title: "Website Design",
            description: "A custom website with built-in lead capture, basic CRM integration, and analytics. Not a brochure. A working system that turns visits into conversations.",
            linkText: "See Website Design →",
            slug: "/services/website-design"
          },
          {
            title: "Growth Consulting",
            description: "For SMEs that have a working business but don't know what to optimize next. Positioning, conversion, retention, sales process.",
            linkText: "See Growth Consulting →",
            slug: "/services/growth-consulting"
          }
        ]
      },
      {
        id: "operate",
        tierTag: "TIER 3",
        title: "Operate",
        tierSubtitle: "For businesses that need software, not just a website.",
        services: [
          {
            title: "Web Applications",
            description: "Custom web platforms for businesses running operations on tools that no longer fit. Bookings, inventory, dashboards, team workflows — built to scale.",
            linkText: "See Web Applications →",
            slug: "/services/web-applications"
          },
          {
            title: "MVP Development",
            description: "Working product in 4-8 weeks. The smallest version that proves the bet, ships to real users, and gives you data to decide what to build next.",
            linkText: "See MVP Development →",
            slug: "/services/mvp-development"
          },
          {
            title: "Mobile Apps",
            description: "Cross-platform mobile builds (React Native, Flutter) for projects where a web app or PWA isn't enough. Native partnerships when the project warrants it.",
            linkText: "See Mobile Apps →",
            slug: "/services/mobile-apps"
          }
        ]
      },
      {
        id: "standalone",
        tierTag: "STANDALONE",
        title: "Thinking work",
        tierSubtitle: "For thinking work, before any building begins.",
        services: [
          {
            title: "PRD as a Standalone Deliverable",
            description: "Pay us to think with you. Walk out with a written, structured PRD. Build with us later, or build it elsewhere. Either is fine. Most agencies wouldn't offer this. We do.",
            linkText: "See PRD engagements →",
            slug: "/services/prd-engagements"
          }
        ]
      }
    ]
  },
  decisionTreeCTA: {
    id: "decision-tree",
    title: "Still not sure where to start?",
    paragraphs: [
      "Most people don't land on this page knowing exactly what they need. They have a rough idea of a problem and want to figure out which service solves it. We built a short diagnostic for exactly that.",
      "Run the decision tree on our homepage. Five questions, one verdict, plain English. By the end, you'll know which tier fits and which service to start with — even if the answer is don't hire us yet."
    ],
    calloutBox: {
      title: "One thing worth knowing before you choose:",
      content: "We work best with founders who want to move their business from person-oriented to process-oriented — owners ready to stop being the bottleneck, even with a small team. If that sounds like you, almost any tier on this page will fit. If it doesn't, we're probably not your studio."
    },
    buttons: {
      primary: { text: "Run the decision tree →", href: "/#diagnosis" },
      secondary: { text: "Or just talk to us", href: "/contact" }
    },
    footerLinks: [
      { text: "Already know what you need?", linkText: "Talk to us →", href: "/contact" },
      { text: "Want to see what we've built before?", linkText: "See selected work →", href: "/work" }
    ]
  },
};


export const services = [
  {
    card: 'Branding & Design Assets',
    slug: 'branding-design-assets',
    tierTag: "TIER 0",
    title: "Foundation",
    sections: [
      {
        card: "Branding & Design Assets",

        slug: "branding-design-assets",

        sections: [

          // HERO SECTION
          {
            type: "hero",

            data: {
              tierTag: "TIER 0 — FOUNDATION",

              title: "Branding before the build.",

              description:
                "Logo, brand guidelines, marketing collateral — designed by our senior in-house designer before any website work begins. Most projects start here, even if you didn't think they needed to.",

              primaryCTA: {
                label: "Start with branding",
                target: "/contact"
              },

              secondaryCTA: {
                label: "See it bundled with a website",
                target: "/services/web-design"
              }
            }
          },

          // WHAT WE MEAN
          {
            type: "contentBlock",

            data: {
              heading: "What we mean by branding:",

              paragraphs: [
                "Branding isn't just a logo. It's the visual system that makes your business recognisable across every place a customer encounters you — your website, your invoices, your WhatsApp display picture, your shop signage, the brochure your sales team hands out.",

                "We build that system. The logo is the centrepiece. The brand guidelines are the rulebook. The marketing collateral is the proof that the system actually works in real-world conditions, not just on a Figma board.",

                "For most clients, branding comes before any web build. You can't design a website properly without knowing what brand it represents. Trying to do both at once is how you end up with a website that looks one way and an Instagram feed that looks another."
              ]
            }
          },

          // WHO SHOULD START HERE
          {
            type: "bulletList",

            data: {
              heading: "Who should start here.",

              items: [
                "Founders launching a new business who don't have a brand yet.",

                "Existing businesses with a logo their cousin made on Canva five years ago, ready for something professional.",

                "Businesses with a decent logo but no consistent application across their website, social, and print materials.",

                "Anyone planning a website or product build with us — branding usually comes first, even if you didn't think you needed it."
              ]
            }
          },

          // WHAT YOU'LL RECEIVE
          {
            type: "deliverables",

            data: {
              heading: "What you'll receive.",

              items: [
                {
                  title: "Logo design",

                  description:
                    "Two to three concept directions. Multiple revision rounds. Final files in every format you'll ever need — vector, raster, transparent, light/dark, square, horizontal."
                },

                {
                  title: "Brand guidelines document",

                  description:
                    "A written and visual rulebook. Logo usage, colour palette, typography, spacing, do's and don'ts. The kind of document a future agency, freelancer, or in-house designer can pick up and follow without calling you."
                },

                {
                  title: "Core marketing collateral",

                  description:
                    "Business card design, letterhead, basic social media templates (Instagram post, story, profile), and one print piece of your choice — pamphlet, poster, or brochure cover."
                },

                {
                  title: "Source files",

                  description:
                    "You walk away with the editable Figma or Illustrator files. Not just the exports. The brand belongs to you, fully."
                }
              ]
            }
          },

          // EXCLUSIONS
          {
            type: "exclusions",

            data: {
              heading: "What this doesn't cover.",

              description:
                "We're upfront about this so you don't sign on expecting things we don't deliver.",

              items: [
                {
                  title: "Ongoing social media design.",

                  description:
                    "This is a one-time engagement that gives you templates, not a monthly creative retainer."
                },

                {
                  title: "Photography or videography.",

                  description:
                    "If you need brand photography, we can recommend photographers in Mangaluru. We don't shoot."
                },

                {
                  title: "Naming and tagline development.",

                  description:
                    "We design around the name you bring. Naming workshops are a separate consulting engagement."
                },

                {
                  title: "Packaging design.",

                  description:
                    "If you sell physical products, packaging is its own discipline — we'll refer you to specialists."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              investment: {
                label: "INVESTMENT",

                value: "₹25,000 – ₹1,00,000",

                description:
                  "Variance depends on how many concept directions you want, revision rounds, pencil sketches, and the volume of marketing collateral."
              },

              timeline: {
                label: "TIMELINE",

                value: "4 to 8 weeks",

                description:
                  "Variance depends on iterations and how much pencil-sketch exploration you want before locking direction. Faster if you decide quickly."
              },

              amc: {
                title: "AMC after delivery",

                description:
                  "Not applicable. Branding is a one-time deliverable. Future updates are quoted separately when needed."
              }
            }
          },

          // PORTFOLIO
          {
            type: "portfolioPreview",

            data: {
              heading: "Recent branding work.",

              description:
                "Portfolio examples coming soon. Contact us to see recent work in your industry."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to start with branding?",

              description:
                "Most projects benefit from getting branding right first. If you're planning a website or app build, we'd usually recommend branding as Phase 0 of that engagement. If you only need branding and nothing else, that works too.",

              primaryCTA: {
                label:
                  "Start a branding project",
                target: "/contact"
              },

              secondaryCTA: {
                label:
                  "See branding bundled with a website",
                target: "/services/web-design"
              }
            }
          }
        ]
      }
    ]

  },
  {
    card: 'Domains & Hosting',
    slug: '/services/domains-hosting',
    sections: [
      {
        card: "Domains & Managed Hosting",

        slug: "domains-managed-hosting",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "TIER 0 — FOUNDATION",

              title:
                "The boring infrastructure your business runs on, handled properly.",

              description:
                "Domains and managed hosting for businesses that would rather not deal with three different vendors and four logins. Buy it directly from us, or let us manage it as part of an AIT engagement. Either way, it just works.",

              primaryCTA: {
                label: "Browse domains & hosting",
                target: "https://domains.anideatech.com"
              },

              secondaryCTA: {
                label: "Already an AIT client? Email us",
                target: "/contact"
              }
            }
          },

          // WHAT WE OFFER
          {
            type: "contentBlock",

            data: {
              heading: "What we offer.",

              intro:
                "Two products, sold as standalone or bundled with builds.",

              blocks: [
                {
                  title: "Domain registration",

                  paragraphs: [
                    "Buy a new domain, transfer an existing one, or have us manage your existing portfolio. Standard TLDs (.com, .in, .co.in, .org, .net) plus regional and industry-specific ones (.tech, .studio, .health, etc.). Real DNS management, real renewal reminders, real support when something breaks.",

                    "Our domain registration runs on ResellerClub's infrastructure, branded and managed under AIT — you deal with us, not them, but the underlying registrar is reliable and well-established."
                  ]
                },

                {
                  title: "Managed hosting",

                  paragraphs: [
                    "All client projects are hosted on dedicated infrastructure we manage through Globo.tech. From our side, it's a dedicated server. From your side, it's shared with other AIT clients — but managed by people who actually know your project, not a generic support queue.",

                    "We handle server configuration, security patching, SSL renewal, daily backups, performance monitoring, and uptime tracking. You get a working website without learning what cPanel is.",

                    "Both products live at domains.anideatech.com, sold standalone or bundled into any AIT build engagement."
                  ]
                }
              ]
            }
          },

          // WHO BUYS THIS
          {
            type: "bulletList",

            data: {
              heading: "Who buys this.",

              items: [
                {
                  title:
                    "Businesses that want one vendor, not five.",

                  description:
                    "Right now your domain is on GoDaddy, hosting is on Hostinger, email is on Google Workspace, and your developer is somewhere else. When something breaks, nobody knows whose problem it is. We consolidate."
                },

                {
                  title:
                    "First-time founders buying their first domain.",

                  description:
                    "No idea what .in vs. .co.in means? What an SSL certificate is? Why your hosting plan keeps charging you for things you don't understand? We'll walk you through it."
                },

                {
                  title:
                    "Existing AIT build clients",

                  description:
                    "who haven't yet bundled their hosting with us. If we built your site but it's hosted somewhere else, moving it under our managed hosting means we control the full stack."
                },

                {
                  title:
                    "Businesses outgrowing budget hosting.",

                  description:
                    "When your shared GoDaddy plan starts choking on traffic, when your site goes down during peak hours, when you can't get a real human on support — that's when managed hosting starts paying for itself."
                }
              ]
            }
          },

          // HOSTING PLANS
          {
            type: "contentBlock",

            data: {
              heading: "Hosting plans.",

              paragraphs: [
                "We're finalizing our hosting plan structure with our infrastructure partner — three tiers covering small sites, full business websites, and Tier 3 application hosting. Final plan names, pricing, and specs go live at domains.anideatech.com by end of May 2026.",

                "Custom server configurations (specific cloud regions, compliance needs, dedicated infrastructure for enterprise platforms) are scoped separately — talk to us for those."
              ]
            }
          },

          // SUPPORT
          {
            type: "supportSection",

            data: {
              heading: "How support works.",

              intro:
                "All support requests go through our ticketing portal at support.anideatech.com. Every ticket gets a number, a tracked thread, and an audit trail — no “I sent you an email last week” moments.",

              subheading:
                "Typical response and resolution times:",

              bullets: [
                "First response within 1 hour during working hours.",

                "Resolution within 48 business hours to 5 working days, depending on issue complexity."
              ],

              paragraphs: [
                "Critical issues (site down, security incident) jump the queue. Routine requests (DNS changes, plan upgrades, configuration tweaks) follow standard priority. Complex issues (database recovery, custom server work) take longer because they need careful work — we'd rather fix it properly than fast.",

                "Support is included with all managed hosting plans and with all AMC engagements."
              ]
            }
          },

          // INCLUDED / NOT INCLUDED
          {
            type: "includedExcluded",

            data: {
              heading:
                "What's included and what isn't.",

              included: {
                title:
                  "Included with managed hosting:",

                items: [
                  "Server configuration and ongoing maintenance",

                  "SSL certificate setup and renewal",

                  "Daily backups with retention based on plan",

                  "Security patching and OS updates",

                  "Uptime monitoring and outage response",

                  "Ticket-based support during business hours",

                  "Migration help when moving from another host"
                ]
              },

              excluded: {
                title: "Not included:",

                items: [
                  {
                    title: "Email hosting.",

                    description:
                      "Domains let you set up email, but we don't run our own email servers — we recommend Google Workspace or Zoho Mail and help configure them."
                  },

                  {
                    title:
                      "CDN configuration beyond basics.",

                    description:
                      "Cloudflare or similar for production-grade content delivery is a separate setup, scoped per project."
                  },

                  {
                    title:
                      "Custom application code fixes.",

                    description:
                      "Hosting handles the server. If your application code has bugs, that's a build engagement, not a hosting issue."
                  },

                  {
                    title:
                      "Domain disputes or trademark issues.",

                    description:
                      "We register domains. We don't handle legal fights over them — that's a lawyer's job."
                  }
                ]
              }
            }
          },

          // PRICING
          {
            type: "contentBlock",

            data: {
              heading: "How pricing works.",

              paragraphs: [
                "Domain registration is priced per TLD per year — standard market rates. Managed hosting plans are priced monthly, with annual discounts. Specific plan pricing lives at domains.anideatech.com — it's clearer to see the plan comparison there than to copy the table here.",

                "If you're an AIT build client, hosting is usually bundled into your AMC at a small additional rate, or included in higher AMC tiers."
              ]
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to consolidate, or just need a domain?",

              paragraphs: [
                "If you know what you want — a specific domain, a hosting plan — head straight to domains.anideatech.com and buy. The whole flow is self-serve.",

                "If you'd rather have a quick conversation first — especially if you're consolidating from multiple vendors, migrating an existing site, or unsure which plan fits — email us or book a 15-minute call. No long sales process. We'll tell you what makes sense."
              ],

              primaryCTA: {
                label:
                  "Go to domains.anideatech.com",
                target:
                  "https://domains.anideatech.com"
              },

              secondaryCTA: {
                label:
                  "Or email: products@anideatech.com",
                target:
                  "mailto:products@anideatech.com"
              }
            }
          }
        ]
      }
    ]
  },
  {
    card: 'Landing Pages',
    slug: '/services/landing-pages',
    sections: [
      {
        card: "Landing Pages",

        slug: "landing-pages",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "TIER 1 — VALIDATE",

              title:
                "A single page that turns visitors into leads — and leads into faster WhatsApp sales.",

              description:
                "For founders testing an idea, or businesses already converting on WhatsApp who need a focused page that captures interest properly. No full website. No bloat. Just one well-written page that does one job well.",

              primaryCTA: {
                label: "Start a landing page",
                target: "/contact"
              },

              secondaryCTA: {
                label:
                  "Not sure if this is what you need? Run the decision tree",
                target: "/decision-tree"
              }
            }
          },

          // WHAT WE BUILD
          {
            type: "contentBlock",

            data: {
              heading:
                "What we build at this tier.",

              paragraphs: [
                "A landing page is one page on the internet that does one specific thing — capture a visitor's interest and route them to a real conversation. Usually that conversation happens on WhatsApp, sometimes on a phone call, sometimes through a booking form.",

                "This is not a \"website.\" A website has a homepage, an about page, a services page, a contact page, and so on. A landing page has one page. That single constraint is what makes it work — the visitor has nowhere to drift, no menu to click around, no decision to delay. They either take the action you want, or they leave.",

                "For most early-stage businesses, this is a better starting point than a full website. It's faster to build, cheaper to run, easier to test, and almost always converts better in the first six months."
              ]
            }
          },

          // WHO SHOULD START HERE
          {
            type: "bulletList",

            data: {
              heading:
                "Who should start here.",

              items: [
                "Founders validating an idea who need a real link to share with potential customers, not just a Google Form.",

                "Businesses already getting customers on WhatsApp who want a professional page that backs up the conversation.",

                "Service businesses (consultants, doctors, trainers, freelancers) where the goal is a booking call or enquiry, not browsing.",

                "Any business running ads on Google or Meta — landing pages convert better than full websites for paid traffic.",

                "Founders who tried building a full website before and noticed nobody clicked beyond the homepage anyway."
              ]
            }
          },

          // WHAT YOU'LL RECEIVE
          {
            type: "deliverables",

            data: {
              heading:
                "What you'll receive.",

              items: [
                {
                  title:
                    "One landing page, fully designed and written",

                  description:
                    "A single, scrollable page. Hero, value proposition, social proof, what you do, why you're different, and a strong call to action. Designed for mobile first, because that's where most of your visitors will read it."
                },

                {
                  title:
                    "Copywriting that converts, not decorates",

                  description:
                    "We write the page with you, not for you. The copy comes from real conversations about your business, not generic templates. Your voice, your customer's words, your actual offering — translated into a page that sells."
                },

                {
                  title:
                    "WhatsApp Business setup and routing",

                  description:
                    "WhatsApp Business profile configured properly. Click-to-WhatsApp button on the page. Auto-reply flow for when you're not available. Pre-filled message that tells you exactly which page the lead came from."
                },

                {
                  title:
                    "Lead capture form (optional)",

                  description:
                    "For visitors who'd rather leave their details than start a chat. Routes the form submission to your phone, your email, or your CRM — whichever you actually check."
                },

                {
                  title:
                    "Analytics that tell you what's happening",

                  description:
                    "Google Analytics or simpler equivalents set up properly. You'll see how many visitors landed, how far they scrolled, where they came from, and whether they converted. No agency dashboard. Just the real numbers, in tools you can access yourself."
                },

                {
                  title:
                    "Domain and hosting setup",

                  description:
                    "We'll guide you through buying a domain, set up hosting, and deploy the page. You own everything. We just ship it."
                }
              ]
            }
          },

          // WHAT THIS DOESN'T COVER
          {
            type: "exclusions",

            data: {
              heading:
                "What this doesn't cover.",

              items: [
                {
                  title:
                    "Multi-page websites.",

                  description:
                    "If you need a homepage plus services plus about plus blog, that's Tier 2 (Website Design), not this."
                },

                {
                  title:
                    "Blog or content publishing.",

                  description:
                    "Landing pages don't have blogs. If you need to publish articles, you've outgrown this tier."
                },

                {
                  title:
                    "E-commerce.",

                  description:
                    "Selling products online needs proper inventory, payments, and order management. That's a different engagement."
                },

                {
                  title:
                    "Ongoing copywriting.",

                  description:
                    "We write the page once, well. Future copy changes are quoted separately or covered under maintenance."
                },

                {
                  title:
                    "Paid advertising management.",

                  description:
                    "We build the page that ads point to. Running the ads themselves is a separate skillset and engagement."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              investment: {
                label: "INVESTMENT",

                value: "₹30,000 – ₹55,000",

                description:
                  "Variance depends on how complex the offering is to write about, whether WhatsApp routing needs custom setup, and CRM integration depth."
              },

              timeline: {
                label: "TIMELINE",

                value: "1–2 weeks",

                description:
                  "One week if your offering is clear and you respond to feedback within 24 hours. Two weeks if there's back-and-forth."
              },

              amc: {
                title:
                  "\"Up & Running\" — Quarterly Maintenance",

                description:
                  "Optional. Covers server checks, plugin updates, security patches, broken link sweeps, and SSL renewal. ₹4,500 per quarter. Deliberately low so any founder can afford it.",

                note:
                  "Designed so a single landing page doesn't quietly break while you're building your business. Most landing page clients add this.",

                warning:
                  "Up & Running is technical only. It keeps your page online. It doesn't grow your business. If you're still on Tier 1 a year from now and the page is still your main asset, something has gone wrong — either the validation didn't work, or you're stuck. Most clients move to Tier 2 within 6–9 months of validating. That's the point."
              }
            }
          },

          // PORTFOLIO
          {
            type: "portfolioPreview",

            data: {
              heading:
                "Landing page work.",

              description:
                "Recent landing page examples coming soon. Core Technologies' static site is one example — see their full case study."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to start with one well-built page?",

              paragraphs: [
                "A good landing page is the cheapest, fastest way to test whether your business has real demand. Here you'll validate your idea, talk to 10–20 real customers, and figure out whether anyone actually wants to pay you. If it works, you'll have proof, traffic data, and the right starting point for a bigger build later. If it doesn't, you'll have spent ₹30–55K to learn that — instead of ₹3L to ₹5L on a full web app or MVP nobody visits.",

                "The next step after a working landing page is usually Tier 2 — a real website with a lead system behind it. That's where most of our long-term clients end up. Tier 1 is the door. Tier 2 is the room."
              ],

              primaryCTA: {
                label:
                  "Start a landing page",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or run the decision tree",
                target:
                  "/decision-tree"
              }
            }
          }
        ]
      }
    ]
  },
  {
    card: 'Google Business Profile + Local SEO',
    slug: '/services/google-business-profile-local-seo',
    sections: [
      {
        card: "GBP + Local SEO",

        slug: "gbp-local-seo",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              breadcrumbs: [
                "Home",
                "Services",
                "GBP + Local SEO"
              ],

              tierTag: "TIER 1 — VALIDATE",

              title:
                "Most Mangaluru businesses are invisible on Google Maps. We fix that.",

              description:
                "Google Business Profile setup and optimization, local SEO foundations, and ongoing visibility work for businesses that need to be found by people searching nearby — and stay found.",

              primaryCTA: {
                label: "Start a GBP audit",
                target: "/contact"
              },

              secondaryCTA: {
                label: "Or just talk to us",
                target: "/contact"
              }
            }
          },

          // WHAT WE MEAN
          {
            type: "contentBlock",

            data: {
              heading:
                "What we mean by GBP + Local SEO.",

              paragraphs: [
                "If your business serves customers in a specific city — Mangaluru, Udupi, Manipal, Puttur, anywhere in Karnataka — most of your visibility is determined by two things: how well your Google Business Profile is set up, and how findable your website is for \"near me\" searches.",

                "Most SMEs get neither right. The GBP is left at default settings, the wrong category is selected, photos are missing or outdated, reviews go unanswered, and the website has no local SEO foundation. The result: customers searching for what you offer never see you, even when you're literally down the street.",

                "We fix this systematically. Some of it is one-time setup and audit. Most of it is ongoing — because Google Business Profiles drift, competitors update theirs, reviews keep coming in, and search behavior shifts. This isn't a project. It's a working relationship."
              ]
            }
          },

          // WHO THIS IS FOR
          {
            type: "bulletList",

            data: {
              heading:
                "Who this is for.",

              items: [
                "Local businesses (clinics, retail, services, restaurants, professional practices) who serve a defined geography and rely on local customers.",

                "Businesses with a physical location that should be showing up on Google Maps but isn't, or shows up with wrong information.",

                "Service businesses (plumbers, electricians, photographers, consultants) where customers search \"near me\" before they search by name.",

                "Businesses with a website that gets traffic from outside their service area but very little from local searches — a sign the local SEO foundation is missing.",

                "Anyone whose GBP has fewer than 20 reviews, hasn't been updated in 6+ months, or is missing photos and posts."
              ]
            }
          },

          // WHAT WE ACTUALLY DO
          {
            type: "serviceBreakdown",

            data: {
              heading:
                "What we actually do.",

              intro:
                "The work splits into two parts: an initial setup or audit, then ongoing monthly work.",

              groups: [

                {
                  title:
                    "Initial setup & audit",

                  items: [
                    {
                      title:
                        "Full GBP audit",

                      description:
                        "every field reviewed: primary category, secondary categories, services, attributes, photos, business description, hours, phone, website. We document what's wrong, what's missing, and what's unoptimized."
                    },

                    {
                      title:
                        "Category and attribute optimization",

                      description:
                        "the single biggest GBP mistake is the wrong primary category. We review yours, study competitors', and recommend the optimal primary plus 5–10 secondary categories. This alone often moves rankings within weeks."
                    },

                    {
                      title:
                        "Photo strategy and upload",

                      description:
                        "real photos matter for local rankings. Either we upload your existing photos correctly (geo-tagged, named, captioned) or guide you through what photos to take."
                    },

                    {
                      title:
                        "Local SEO foundation on your website",

                      description:
                        "schema markup for local business. NAP (Name, Address, Phone) consistency. Service area pages if relevant. Local intent in titles and meta descriptions. Citations cleanup if needed."
                    }
                  ]
                },

                {
                  title:
                    "Ongoing monthly work",

                  items: [
                    {
                      title:
                        "Review responses",

                      description:
                        "every review answered within 48 hours, in your voice, written specifically (no copy-paste), with keywords used naturally. Responding to reviews is the single most underrated GBP activity. Most competitors don't bother. We make sure you do."
                    },

                    {
                      title:
                        "GBP posts",

                      description:
                        "weekly or fortnightly posts on your GBP. Service highlights, offers, updates. Posts increase visibility, signal activity to Google, and give people more reasons to click through. We write and publish them."
                    },

                    {
                      title:
                        "Insights monitoring and reporting",

                      description:
                        "monthly review of GBP insights: search queries, photo views, calls, direction requests. We watch what's working, what's slipping, and adjust."
                    },

                    {
                      title:
                        "Citation building and cleanup",

                      description:
                        "local directories, professional listings, industry-specific platforms. Accurate listings on the platforms that matter, duplicates cleaned up."
                    },

                    {
                      title:
                        "Competitor monitoring",

                      description:
                        "we watch your top 3–5 local competitors. Their categories, post cadence, review patterns. When the local search landscape shifts, you'll know."
                    }
                  ]
                }
              ]
            }
          },

          // WHAT THIS DOESN'T COVER
          {
            type: "exclusions",

            data: {
              heading:
                "What this doesn't cover.",

              items: [
                {
                  title:
                    "National or international SEO.",

                  description:
                    "This service is built for local visibility. Customers nationwide or global means a different SEO engagement."
                },

                {
                  title:
                    "Content marketing or blog writing.",

                  description:
                    "We can recommend topics tied to local SEO. Ongoing blog production is separate."
                },

                {
                  title:
                    "Paid advertising.",

                  description:
                    "GBP is organic. Google Ads is paid. Related but separate engagements."
                },

                {
                  title:
                    "Buying or generating fake reviews.",

                  description:
                    "We won't, and you shouldn't. Google catches them and penalizes the business."
                },

                {
                  title:
                    "Website design or rebuild.",

                  description:
                    "If your site has bigger problems than missing local SEO, that's a Tier 1 or Tier 2 engagement."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              pricingCards: [

                {
                  label:
                    "GBP AUDIT (ONE-TIME)",

                  value:
                    "₹2,500",

                  description:
                    "Paid 1-week audit. You walk away with the report whether you continue with us or not. Audit fee credited if you move into a full retainer."
                },

                {
                  label:
                    "SETUP TIMELINE",

                  value:
                    "2–3 weeks",

                  description:
                    "Initial audit and foundation work. Ongoing work begins immediately after."
                },

                {
                  label:
                    "1–3 LOCATIONS",

                  value:
                    "₹15K–₹35K setup + ₹6K–₹15K/mo",

                  description:
                    "Setup is one-time. Monthly retainer covers ongoing work."
                },

                {
                  label:
                    "MORE THAN 3 LOCATIONS",

                  value:
                    "+ ₹3,500/location setup add-on",

                  description:
                    "Setup plus per-location add-on. Monthly retainer typically ₹12K–₹25K depending on volume."
                }
              ],

              amc: {
                title:
                  "Or — manage it yourself.",

                description:
                  "If you'd rather DIY, we sell our GBP & Local SEO handbook for ₹4,500. You run your own profile and SEO using the same approach we use with clients. We're not responsible for account suspensions, errors, or outcomes — but the handbook is the closest thing to having us in the room.",

                warning:
                  "Minimum engagement on the full retainer: 3 months. Local SEO doesn't show meaningful results in 30 days. By month 3, you'll see real movement — rankings, calls, direction requests. Most clients stay 12+ months because the work compounds."
              }
            }
          },

          // RESULTS
          {
            type: "portfolioPreview",

            data: {
              heading:
                "What this work has done.",

              description:
                "Suprabha Wellness GBP work is a referenceable case (see full case study). AIT's own GBP performance — 4.7 rating, growing review base — is another example we can reference on a call."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to be findable in Mangaluru?",

              paragraphs: [
                "If you're a local business in Karnataka and you're not showing up consistently in Google Maps for what you actually do — that's a fixable problem. Usually within 2–3 months, sometimes faster.",

                "We start with a GBP audit. Either as a paid 1-week engagement (₹2,500, you walk away with the audit report whether you continue or not) or included as the first 2 weeks of a longer retainer.",

                "Local SEO compounds. The first month is setup. The second month is foundation. By month three, you'll start seeing what's working. By month six, you'll wonder why you didn't do this earlier."
              ],

              primaryCTA: {
                label:
                  "Start with a GBP audit",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or talk it through first",
                target:
                  "/contact"
              }
            }
          }
        ]
      }
    ]
  },
  {
    card: 'Website Design',
    slug: '/services/website-design',
    sections: [
      {
        card: "Business Websites",

        slug: "business-websites",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "TIER 2 — CONVERT",

              title:
                "A real website. Built to bring in customers, not just describe what you do.",

              description:
                "For businesses past the validation stage. You have customers. Now you need a site that brings in more, qualifies them, and reduces the manual follow-up your team is doing every day.",

              primaryCTA: {
                label:
                  "Build a working website",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Not sure if this is what you need? Run the decision tree",
                target:
                  "/decision-tree"
              }
            }
          },

          // WHAT WE BUILD
          {
            type: "contentBlock",

            data: {
              heading:
                "What we build at this tier.",

              paragraphs: [
                "A Tier 2 website is a multi-page custom site designed to do real work for your business — not sit there as a digital brochure.",

                "Most agencies will sell you a \"website\" that's really just five pages of marketing copy with a contact form at the bottom. We don't. A real website at this tier brings in leads, qualifies them before they reach your team, integrates with the tools you already use, and gives you data on what's actually working.",

                "This is also where most of our long-term clients live. If you're building a serious business and expect to be running it in five years, a Tier 2 website is the foundation that holds up. Tier 1 helps you start. Tier 2 helps you grow."
              ]
            }
          },

          // WHO SHOULD BE HERE
          {
            type: "bulletList",

            data: {
              heading:
                "Who should be at this tier.",

              items: [
                "Businesses with a working revenue model and customers actively coming in, who need their website to do more than represent the brand.",

                "Service businesses (clinics, consultancies, training centers, agencies) where every visitor should be qualified before reaching the team.",

                "Retail businesses with a real product line who want online presence that drives walk-ins, calls, or orders.",

                "Anyone whose Tier 1 landing page is converting well and is ready to expand to a full site.",

                "Founders moving their business from person-driven to process-driven — where the website becomes part of the operating system, not a marketing afterthought."
              ]
            }
          },

          // WHAT YOU'LL RECEIVE
          {
            type: "deliverables",

            data: {
              heading:
                "What you'll receive.",

              items: [
                {
                  title:
                    "A custom multi-page website",

                  description:
                    "Designed and built specifically for your business. Not a template. Typical scope is 6–12 pages — homepage, about, services, work, blog or insights, contact, plus any service-specific pages your business needs."
                },

                {
                  title:
                    "Built-in lead capture and qualification",

                  description:
                    "Forms placed at the right points in the visitor journey. Each form collects what you actually need to qualify a lead before your team picks up the conversation. No more emails saying \"interested, please call\" with no context."
                },

                {
                  title:
                    "CRM integration",

                  description:
                    "The website connects to whichever CRM you use — Zoho, HubSpot, or a simpler setup if you don't have one yet. Leads land where your sales team already works. No copy-paste between tools."
                },

                {
                  title:
                    "WhatsApp and email routing",

                  description:
                    "Every form, every CTA, every contact point routes correctly. Visitors who prefer WhatsApp get WhatsApp. Visitors who prefer email get email. Your team knows which channel each lead came through."
                },

                {
                  title:
                    "Content management system",

                  description:
                    "Built on the right platform for your project — Statamic, a headless CMS, or WordPress when it genuinely fits. We pick based on what your team will maintain, not what's fastest for us. Either way, your team updates content without calling us."
                },

                {
                  title:
                    "Analytics that actually tell you something",

                  description:
                    "Google Analytics set up properly. Conversion tracking on every form. Heatmaps if useful. Real reporting on what's converting, what isn't, and what to test next."
                },

                {
                  title:
                    "SEO foundations done right",

                  description:
                    "Page titles, meta descriptions, schema markup, sitemap, mobile optimization, page speed. Nothing flashy — just the technical foundation Google needs to find and rank your pages."
                },

                {
                  title:
                    "Documented training",

                  description:
                    "Documented training so your team can run the site, plus questions answered as they come up post-launch. Regular ongoing support is covered under AMC, so there's no clock-watching or \"your support window expired\" emails three months after launch."
                }
              ]
            }
          },

          // EXCLUSIONS
          {
            type: "exclusions",

            data: {
              heading:
                "What this doesn't cover.",

              items: [
                {
                  title:
                    "E-commerce or online payments.",

                  description:
                    "If you sell products online with inventory and payments, that's closer to Tier 3 (Web Applications). We'll route you there."
                },

                {
                  title:
                    "Complex membership or login systems.",

                  description:
                    "User accounts, dashboards, role-based access — these are Tier 3 territory."
                },

                {
                  title:
                    "Ongoing content writing.",

                  description:
                    "We'll write the launch copy and your first blog posts. After that, content production is a separate engagement or covered under AMC."
                },

                {
                  title:
                    "Paid advertising management.",

                  description:
                    "We build the site that ads point to. Running the ads themselves (Google, Meta, LinkedIn) is a different skill and separate engagement."
                },

                {
                  title:
                    "Photography and videography.",

                  description:
                    "If you need brand photography or video content for the site, we can recommend specialists."
                },

                {
                  title:
                    "Custom integrations beyond standard CRM and tools.",

                  description:
                    "If you need the site to talk to a custom-built ERP, hospital system, or anything bespoke — that's a Tier 3 project, not Tier 2."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              investment: {
                label:
                  "INVESTMENT",

                value:
                  "₹80,000 – ₹2,00,000",

                description:
                  "Variance depends on number of pages, CRM integration depth, custom design complexity, content scope, and revision rounds."
              },

              timeline: {
                label:
                  "TIMELINE",

                value:
                  "6–10 weeks",

                description:
                  "Six weeks if scope is tight and decisions are quick. Up to 12 weeks if revisions get extensive — which is fine, we'd rather take longer than ship something half-decided."
              },

              amc: {
                title:
                  "AMC after launch — Recommended for growth",

                description:
                  "AMC for Tier 2 websites starts at ₹4,500/month for technical maintenance only and scales up to ₹12,000/month or higher when scope includes ongoing content updates, blog publishing, or active SEO work. Most Tier 2 clients land in the ₹6K–₹10K range.",

                note:
                  "Standard AMC covers everything in our default scope (server uptime, security, plugin updates, backups, broken link checks, performance monitoring, bug fixes, monthly written reports), plus minor content updates and quarterly growth check-ins.",

                warning:
                  "Most Tier 2 clients move into AMC at launch and stay for 3+ years. That's not a coincidence — a Tier 2 website is meant to keep working and evolving with the business, not be replaced every two years."
              }
            }
          },

          // PORTFOLIO
          {
            type: "portfolioPreview",

            data: {
              heading:
                "Tier 2 work.",

              description:
                "Suprabha Wellness is the strongest Tier 2 case currently — see the full Suprabha case study. SPC and SPUC Puttur are also Tier 2 institutional examples."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to build a website that actually works?",

              paragraphs: [
                "A Tier 2 website is the most common starting point for serious businesses, and the place most of our long-term clients have ended up. If you're past validation, have customers coming in, and need a system that does more than describe your business — this is the tier.",

                "Tier 1 was the door. Tier 2 is the room.",

                "We typically take on 3–4 Tier 2 projects at a time when we have 2 Tier 3 projects running. If you're ready to start, the first step is a 30-minute call to scope what you actually need. By the end of the call we'll know whether we're the right fit, and you'll know roughly what your project will cost and how long it'll take."
              ],

              primaryCTA: {
                label:
                  "Start a Tier 2 project",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or read how a real Tier 2 build works",
                target:
                  "/case-studies"
              }
            }
          }
        ]
      }
    ]
  },
  {
    card: 'Growth Consulting',
    slug: '/services/growth-consulting',
    sections: [
      {
        card: "Growth Consulting",

        slug: "growth-consulting",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "TIER 2 — CONVERT",

              title:
                "For businesses where the website isn't the problem. The strategy is.",

              description:
                "Most SMEs don't fail because of bad code. They fail because of unclear positioning, leaky funnels, weak retention, or a sales process that loses customers between \"interested\" and \"booked.\" That's where consulting comes in — before, after, or instead of a build.",

              primaryCTA: {
                label:
                  "Start with a strategy session",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Not sure if you need this? Run the decision tree",
                target:
                  "/decision-tree"
              }
            }
          },

          // WHAT WE MEAN
          {
            type: "contentBlock",

            data: {
              heading:
                "What we mean by growth consulting.",

              paragraphs: [
                "Growth consulting at AIT isn't generic \"growth hacking\" or paid-ad management. It's structured strategic work for SMEs that have a working business but are stuck somewhere — leads aren't converting, customers aren't returning, the sales process is leaking, or the positioning isn't landing the right clients.",

                "We work in four areas: positioning (who you are, who you're for, why someone picks you over competitors), conversion (the path from first contact to first sale), retention (what happens after the first sale), and sales process (how your team handles inbound, qualifies leads, and closes).",

                "Most engagements start with a diagnostic — we look at your numbers, your process, your team, your market — and surface where the actual leak is. Then we work on it together, in a defined engagement, with measurable outcomes.",

                "Growth consulting is led by Aneesh P V, founder of AIT, working directly with 2–3 SMEs at a time. Engagements run for a defined window — 2 weeks, 3 months, or 6+ months — so capacity opens up regularly, but the senior bandwidth is intentionally limited. As the practice scales, senior associates will join. For now, you're working with the founder."
              ]
            }
          },

          // ENGAGEMENT FORMATS
          {
            type: "serviceBreakdown",

            data: {
              heading:
                "What a typical engagement looks like.",

              intro:
                "Most engagements follow one of three formats. We'll recommend the right one after a free 30-minute scoping call.",

              groups: [

                {
                  title:
                    "Format 1 — Strategy Sprint (2 weeks)",

                  items: [
                    {
                      description:
                        "A focused diagnostic engagement. We spend 2 weeks looking at your business — talking to you, your team, sometimes your customers. Output: a written strategic memo identifying the 3–5 highest-leverage interventions, prioritized by effort vs impact. You take the memo and execute. We're available for follow-up questions for 30 days."
                    }
                  ]
                },

                {
                  title:
                    "Format 2 — Quarterly Retainer (3 months)",

                  items: [
                    {
                      description:
                        "Strategy Sprint plus 3 months of execution support. We meet weekly, work through the interventions together, and adjust as data comes in. Output: documented changes to positioning, funnel, retention, or sales process — with measurable improvement against a baseline we set in week 1."
                    }
                  ]
                },

                {
                  title:
                    "Format 3 — Embedded Consulting (6+ months)",

                  items: [
                    {
                      description:
                        "For businesses going through structural transitions — repositioning, scaling, restructuring sales, building a process. We work as a fractional growth lead, attending leadership meetings, helping make decisions, occasionally rolling up sleeves on specific initiatives. Reserved for businesses where consulting needs to be deeply integrated, not advisory."
                    }
                  ]
                },

                {
                  title:
                    "Across all three formats, you'll get",

                  items: [
                    {
                      description:
                        "A baseline measurement at the start. Defined outcomes (what we're trying to move and by how much). Documented frameworks (so the team can run the new approach without us). Honest opinions, including ones you didn't ask for. A monthly written report (same format as our build engagements)."
                    }
                  ]
                }
              ]
            }
          },

          // WHO THIS IS FOR
          {
            type: "includedExcluded",

            data: {
              heading:
                "Who this is for.",

              included: {
                items: [
                  "SMEs with revenue between ₹25L and ₹1Cr annually who have a working business but feel stuck.",

                  "Founders who suspect the problem isn't their product, marketing budget, or website — but can't pinpoint what is the problem.",

                  "Businesses where the founder is the bottleneck — sales runs through them, decisions run through them, growth is capped at their personal capacity.",

                  "Service businesses (clinics, training centers, B2B services, professional practices) where pricing, positioning, and process are unclear.",

                  "Founders moving from person-driven to process-driven who need help designing the system, not just executing tactics."
                ]
              },

              excluded: {
                title:
                  "Who this is NOT for:",

                items: [
                  {
                    description:
                      "Pre-revenue founders looking for \"marketing strategy\" — you don't need consulting, you need to talk to customers."
                  },

                  {
                    description:
                      "Anyone looking for someone to run their Facebook ads or Google Ads. That's not what this is."
                  }
                ]
              }
            }
          },

          // EXCLUSIONS
          {
            type: "exclusions",

            data: {
              heading:
                "What this doesn't cover.",

              items: [
                {
                  title:
                    "Paid advertising management.",

                  description:
                    "We can advise on ad strategy. We don't run ad accounts."
                },

                {
                  title:
                    "SEO content production.",

                  description:
                    "We can identify what content needs to exist. Writing it is separate."
                },

                {
                  title:
                    "Website or app builds.",

                  description:
                    "Consulting often recommends a build, but the build itself is a separate service."
                },

                {
                  title:
                    "Sales team hiring and management.",

                  description:
                    "We help design sales processes. Recruiting and managing your team is your job."
                },

                {
                  title:
                    "Generic \"marketing strategy\" decks.",

                  description:
                    "We don't produce 60-page decks that sit on shelves. We produce focused written memos with action items, or we work with you in person."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs.",

              pricingCards: [

                {
                  label:
                    "STRATEGY SPRINT — FOUNDER-LED, 1–2 PERSON COMPANY",

                  value:
                    "₹35,000 – ₹60,000",

                  description:
                    "2-week diagnostic. Written strategic memo. 30 days of follow-up included."
                },

                {
                  label:
                    "STRATEGY SPRINT — SME WITH 5+ TEAM MEMBERS",

                  value:
                    "₹75,000 – ₹1,25,000",

                  description:
                    "For SMEs with active cash flow. EBITDA-negative is fine — we're here to grow you, not judge you."
                },

                {
                  label:
                    "QUARTERLY RETAINER (3 MONTHS TOTAL)",

                  value:
                    "₹1,00,000 – ₹2,50,000",

                  description:
                    "Strategy Sprint plus weekly working sessions and execution support over 3 months."
                },

                {
                  label:
                    "EMBEDDED CONSULTING (6+ MONTHS)",

                  value:
                    "Scoped privately",

                  description:
                    "Engagement scoped specifically — not a fixed package. Pricing discussed during scoping call."
                }
              ],

              amc: {
                title:
                  "Free 30-minute scoping call",

                description:
                  "Every engagement starts with a free conversation to figure out which format (if any) fits. We turn down engagements where consulting isn't the right answer — sometimes the right answer is \"just hire someone full-time\" or \"just go talk to 20 customers.\" We'll tell you."
              }
            }
          },

          // PAST WORK
          {
            type: "portfolioPreview",

            data: {
              heading:
                "Past consulting work.",

              description:
                "AIT has worked with 14–15 startups and SMEs in advisory capacity over the years. The strongest cases for this section need to be selected and described once permissions are confirmed. Available on request during a scoping call."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to figure out what's actually stuck?",

              paragraphs: [
                "Most growth consulting engagements at AIT start the same way: a 30-minute call where we listen to what you think the problem is, ask a few diagnostic questions, and tell you whether consulting is the right fix or whether you need something else entirely.",

                "Sometimes the answer is yes, this is a strategy problem, here's how we'd structure an engagement. Sometimes the answer is no, your problem is execution, you need to ship. Sometimes it's we're not the right consultants for this — here's who is.",

                "Either way, you'll leave the call with more clarity than you came in with."
              ],

              primaryCTA: {
                label:
                  "Book a free scoping call",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or read about how we work",
                target:
                  "/about"
              }
            }
          }
        ]
      }
    ]
  },
  {
    card: 'Web Applications',
    slug: '/services/web-applications',
    sections: [
      {
        card: "Custom Platforms & Web Applications",

        slug: "custom-platforms-web-applications",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "TIER 3 — OPERATE",

              title:
                "Custom platforms for businesses that have outgrown the website.",

              description:
                "Bookings, orders, inventory, team workflows, customer dashboards, internal tools — software that runs your operations, not a site that describes them. Built in phases, integrated with the tools you already use.",

              primaryCTA: {
                label:
                  "Discuss a custom build",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Not sure if a website would do? Run the decision tree",
                target:
                  "/decision-tree"
              }
            }
          },

          // WHAT WE BUILD
          {
            type: "contentBlock",

            data: {
              heading:
                "What we build at this tier.",

              paragraphs: [
                "A Tier 3 web application is custom software, accessed through a browser, built specifically for how your business actually operates.",

                "This is different from a website. A website tells visitors who you are. A web application does work — it processes orders, tracks bookings, runs your inventory, manages your team's tasks, handles customer accounts, integrates with your accounting and payments. It's the operating system your business runs on.",

                "Most Tier 3 clients come to us at a specific moment: when manual operations are breaking. Orders are getting missed because they're tracked across WhatsApp, email, and a spreadsheet. Bookings are double-booked because three people manage the same calendar. The team is spending two hours a day on tasks that should take ten minutes. That's the moment a real platform pays for itself.",

                "We build web-first because that's where our depth is. When a project warrants mobile, we use cross-platform tooling. When it warrants native iOS or Android, we partner with specialists rather than overclaim."
              ]
            }
          },

          // MVP VS WEB APP
          {
            type: "comparisonSection",

            data: {
              heading:
                "Wait — is this a Web Application, an MVP, or a Tier 2 Website?",

              paragraphs: [
                "Most founders we talk to come in calling their project an \"MVP\" when it's actually a Web Application. Or calling it a \"website\" when it's actually a Web Application. The category changes scope, timeline, and cost. Here's how to tell which one yours is."
              ],

              comparisons: [
                {
                  title:
                    "It's a Web Application if:",

                  description:
                    "you have a working business and need software to run it. The thesis is already proven — orders are coming, customers exist, your team is doing work manually that software should automate. The goal is operational reliability."
                },

                {
                  title:
                    "It's an MVP if:",

                  description:
                    "you're testing a thesis. You don't have proven product-market fit yet. The goal is to learn — to see whether real users behave the way you think they will. (See MVP Development.)"
                },

                {
                  title:
                    "It's a Tier 2 Website if:",

                  description:
                    "the build is mostly about presenting your business and capturing leads — even with dynamic features (a blog, a portfolio, a booking form). If a CMS like Statamic or WordPress could handle 80% of it, you're in Website Design territory."
                }
              ],

              conclusion:
                "An e-commerce store could be any of the three depending on size: Shopify or WooCommerce can be Tier 2, custom-coded e-commerce is Tier 3. We'll figure it out together on the call."
            }
          },

          // WHO SHOULD BE HERE
          {
            type: "bulletList",

            data: {
              heading:
                "Who should be at this tier.",

              items: [
                "Businesses managing operations across disconnected tools (WhatsApp + Excel + email + a CRM nobody likes) and watching things slip through the cracks.",

                "Service businesses (clinics, training centers, salons, consultancies) where bookings, customer records, and team scheduling need to live in one system.",

                "Retail and product businesses needing real inventory, order management, and integrated payments — beyond what off-the-shelf e-commerce handles.",

                "Membership-based businesses needing user accounts, role-based access, content gating, or community features.",

                "Founders building a software product (B2B SaaS, marketplace, vertical platform) who need a real engineering team without hiring one full-time.",

                "Businesses on enterprise platforms they've outgrown in the wrong direction — paying for features they don't use, missing features they need."
              ]
            }
          },

          // WHAT YOU'LL RECEIVE
          {
            type: "deliverables",

            data: {
              heading:
                "What you'll receive.",

              items: [
                {
                  title:
                    "A custom-built web application",

                  description:
                    "Designed for your specific business workflow. Not a template, not a configured SaaS. Real software, with architecture decisions made deliberately for what your business does."
                },

                {
                  title:
                    "Phased delivery, not a 6-month black box",

                  description:
                    "We deliver in working milestones, not a monolithic launch. Within the first month, you have a working version of the most critical workflow — usually the one keeping you up at night. Subsequent phases add depth."
                },

                {
                  title:
                    "Integration with your existing tools",

                  description:
                    "Zoho, Tally, payment gateways (Razorpay, Stripe, PayU), WhatsApp Business API, Google Workspace, accounting systems — we integrate with what you already use. The platform connects to your existing operations, not the other way around."
                },

                {
                  title:
                    "Built on the right stack — for the project, not for our developers' comfort",

                  description:
                    "PHP/Laravel, Node.js, Python/Django, modern JavaScript frameworks (React/Next.js), or whatever else fits — we pick the stack based on what your project actually needs and what your team can maintain long-term. Not based on what our developers happen to be comfortable with this quarter, and not based on what's trending. Sometimes the right answer is boring infrastructure that runs for ten years. Sometimes it's modern frameworks that ship faster. We choose deliberately."
                },

                {
                  title:
                    "Database design that holds up",

                  description:
                    "Properly architected data models. Normalized where it should be, denormalized where it makes sense, indexed properly, backed up reliably. Database mistakes are the most expensive thing to fix later — we don't make them."
                },

                {
                  title:
                    "Authentication, roles, and permissions",

                  description:
                    "Real user account systems with role-based access. Owner sees everything. Managers see their domain. Staff see their tasks. Customers see their own records. Built securely from day one."
                },

                {
                  title:
                    "Admin dashboards for your team",

                  description:
                    "Internal admin views designed for the people who'll actually use them — not just for your customers. Most platforms ignore the operator experience. We design admin dashboards as carefully as customer-facing screens."
                },

                {
                  title:
                    "Documentation that doesn't rot",

                  description:
                    "Technical documentation for whoever might work on the platform later — your future developer, your future agency, or us. Written so it stays useful past launch."
                },

                {
                  title:
                    "Trained handover and ongoing AMC",

                  description:
                    "Documented training. Your team gets fluent in running the platform. Ongoing support is covered under AMC. For Tier 3 platforms, AMC is essential — software that runs operations needs ongoing maintenance, security patching, and gradual evolution."
                }
              ]
            }
          },

          // EXCLUSIONS
          {
            type: "exclusions",

            data: {
              heading:
                "What this doesn't cover.",

              items: [
                {
                  title:
                    "Complex native mobile apps.",

                  description:
                    "If your project genuinely needs deep iOS/Android integration, we partner with mobile specialists. We're upfront about that."
                },

                {
                  title:
                    "AI/ML model development.",

                  description:
                    "We integrate with existing AI APIs (OpenAI, Anthropic, Gemini, custom-deployed models). We don't train custom ML models from scratch."
                },

                {
                  title:
                    "Blockchain or crypto-native projects.",

                  description:
                    "Not our space. We'll refer you elsewhere honestly."
                },

                {
                  title:
                    "Hardware-integrated systems.",

                  description:
                    "IoT platforms, embedded software, hardware-tied applications need specialist teams."
                },

                {
                  title:
                    "Marketing site or landing page work.",

                  description:
                    "If your project also needs a marketing site, that's a separate Tier 1 or Tier 2 engagement, often run in parallel."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              investment: {
                label:
                  "INVESTMENT",

                value:
                  "₹2.5L – ₹12L",

                description:
                  "Focused platforms ₹2.5L–₹4L. Operational platforms ₹4L–₹8L. Complex custom builds ₹8L–₹12L, beyond ₹12L scoped as enterprise engagements."
              },

              timeline: {
                label:
                  "TIMELINE",

                value:
                  "8–12+ weeks",

                description:
                  "Minimum 8–12 weeks for the first working version. Larger projects run 4–9 months in phased delivery, each phase shipping a usable improvement."
              },

              amc: {
                title:
                  "AMC after launch — Standard for Tier 3",

                description:
                  "AMC for Tier 3 platforms starts at ₹25,000/month and scales with platform complexity and uptime requirements.",

                note:
                  "As a rule, AMC ranges between 10–15% of project cost per month — occasionally 5% for simpler maintenance scopes. A ₹4L platform typically lands ₹40K–₹50K/month AMC. A ₹10L platform typically lands ₹1L–₹1.25L/month. The rule applies because software that runs your operations needs proportional ongoing care.",

                warning:
                  "Most Tier 3 clients sign on at launch and stay for years. Software that runs operations isn't something you maintain casually."
              }
            }
          },

          // PORTFOLIO
          {
            type: "portfolioPreview",

            data: {
              heading:
                "Tier 3 work.",

              description:
                "SPC and SPUC Puttur are referenceable Tier 3 institutional engagements (4th year). Suprabha Wellness sits between Tier 2 and Tier 3 depending on framing. Both available on the scoping call."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to build software that runs your operations?",

              paragraphs: [
                "Tier 3 projects are real engineering engagements. They take 3–9 months. They cost from ₹2.5L to ₹12L depending on scope. They're not for businesses still figuring out their model — they're for businesses that have a working model and need software to run it.",

                "We typically take on 2 Tier 3 projects at a time — across web apps, MVPs, or mobile apps combined — alongside 3–4 Tier 2 builds and 10–12 Tier 1 engagements. If we're at capacity, we'll be honest about it and either schedule you for the next slot or refer you to teams we trust.",

                "The first step is a 30-minute scoping call. Bring whatever you have — workflow diagrams, current tools you're outgrowing, the spreadsheet that's holding everything together."
              ],

              primaryCTA: {
                label:
                  "Book a Tier 3 scoping call",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or read about our build process",
                target:
                  "/process"
              }
            }
          }
        ]
      }
    ]

  },
  {
    card: 'MVP Development',
    slug: '/services/mvp-development',
    sections: [
      {
        card: "MVP Development",

        slug: "mvp-development",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "TIER 3 — OPERATE",

              title:
                "The cheapest MVP is the one you didn't build.",

              description:
                "We help founders ship the smallest version that proves the bet — usually in 4 to 8 weeks. We'll also tell you which features to cut before we write a line of code, even if it makes the project smaller.",

              primaryCTA: {
                label:
                  "Scope your MVP",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Not sure if you need an MVP yet? Run the decision tree",
                target:
                  "/decision-tree"
              }
            }
          },

          // WHAT WE MEAN
          {
            type: "contentBlock",

            data: {
              heading:
                "What we mean by MVP.",

              paragraphs: [
                "An MVP is the smallest working version of your product that lets real users do the thing your business depends on. Nothing more. The point isn't to build something complete — it's to build something learnable.",

                "Most founders we talk to describe an MVP that's actually a Version 2.0. They've added the dashboard, the analytics, the notifications, the team feature, the billing tier, the admin tools. By the time we cut it down, the real MVP is one screen and a database — and it can ship in six weeks instead of six months.",

                "That's the work we do here. We start by helping you decide what not to build. Then we build what's left, fast, and put it in front of real users. The version one of your platform should feel slightly embarrassing — if you're proud of it, you over-built. If you're embarrassed, you'll learn faster.",

                "We've watched too many founders spend ₹8L building Version 2.0 of an idea nobody wanted, when they could've spent ₹3L building Version 0.5 of the same idea and learned the same thing six months earlier and ₹5L cheaper. That's the calculation this service exists to fix."
              ]
            }
          },

          // MVP VS WEB APP VS WEBSITE
          {
            type: "comparisonSection",

            data: {
              heading:
                "Wait — is this an MVP, a web app, or a website?",

              paragraphs: [
                "Most founders we talk to come in calling their project an \"MVP\" when it's actually one of three things. The name doesn't matter — but the category changes the scope, the timeline, the cost, and what we should build first."
              ],

              comparisons: [
                {
                  title:
                    "It's an MVP if:",

                  description:
                    "you're testing a thesis. You don't have proven product-market fit yet. The goal of the build is to learn — to see whether real users behave the way you think they will. The right scope is small, the right timeline is short, and the right code is throwaway-friendly."
                },

                {
                  title:
                    "It's a Web Application if:",

                  description:
                    "you have a working business and need software to run it. The thesis is already proven. The goal is operational reliability, not learning. (See Web Applications.)"
                },

                {
                  title:
                    "It's a Tier 2 Website if:",

                  description:
                    "the build is mostly about presenting your business and capturing leads — even if it has dynamic features. (See Website Design.)"
                }
              ],

              exampleTitle:
                "A practical example: an e-commerce store could be any of the three.",

              examples: [
                "A founder testing whether people will buy a new product line should build it as an MVP — fast, lean, ready to throw away if the demand isn't there (₹1.5L–₹4L range, 4–8 weeks).",

                "A boutique shop wanting to showcase products and route buyers to WhatsApp can be a Tier 2 website with light ecommerce features, often built on Shopify or WooCommerce (₹80K–₹2L range, 4–8 weeks).",

                "An established retailer building a real online channel with custom workflows, integrations, and inventory logic — that's a Tier 3 Web Application, custom-coded (₹2.5L–₹12L range, 8–16 weeks)."
              ],

              conclusion:
                "If your situation doesn't fit cleanly — for example, you're a mid-sized retailer where Shopify almost works but breaks at one critical point — that's exactly the conversation we have on the scoping call. The platform decision (off-the-shelf vs custom) usually matters more than the tier name."
            }
          },

          // WHO SHOULD BE HERE
          {
            type: "includedExcluded",

            data: {
              heading:
                "Who should be at this tier.",

              included: {
                items: [
                  "Founders with a clear thesis, some validation signal (paying customers, waitlist, design partners, real conversations), and a need to ship working software to test the next layer.",

                  "First-time founders who've never built software before and need a team that won't quietly inflate scope.",

                  "Repeat founders who've been burned by agencies that built bloated MVPs they couldn't iterate on.",

                  "Founders raising or about to raise — where shipping a working prototype unlocks the next conversation with investors, partners, or customers.",

                  "Operating businesses launching a new product line — where the new line is genuinely different from the existing business and needs its own MVP."
                ]
              },

              excluded: {
                title:
                  "Who this is NOT for:",

                items: [
                  {
                    description:
                      "Pre-validation founders who haven't talked to 10 potential customers yet. You don't need an MVP — you need conversations."
                  },

                  {
                    description:
                      "Founders who want a \"polished V1\" that's launch-ready for the world. That's a Web Application, not an MVP."
                  },

                  {
                    description:
                      "Anyone whose plan starts with \"once we raise funding, we'll build...\" — we don't pre-build for hypothetical capital."
                  }
                ]
              }
            }
          },

          // WHAT YOU'LL RECEIVE
          {
            type: "deliverables",

            data: {
              heading:
                "What you'll receive.",

              items: [
                {
                  title:
                    "A working MVP, built and shipped in 4–8 weeks",

                  description:
                    "Real software, deployed, accessible to your real users — not a prototype, not a Figma click-through. Code that runs, data that persists, a URL you can share."
                },

                {
                  title:
                    "Aggressive scope cutting before we start",

                  description:
                    "We spend the first week looking at your feature list and arguing about it. By the end, you'll have fewer features than you came in with. That's a feature, not a bug — every feature we cut now is a feature you don't have to maintain later."
                },

                {
                  title:
                    "Foundation built for iteration, not perfection",

                  description:
                    "We don't optimize for code beauty in an MVP. We optimize for iteration speed — how fast can we change, ship, learn, repeat. The codebase is clean enough to maintain, lean enough to throw away if you pivot."
                },

                {
                  title:
                    "Authentication and a real user system",

                  description:
                    "Even at MVP, your users need accounts. We build a basic auth system that's secure, simple, and extensible — not a half-baked one you'll have to rip out at scale."
                },

                {
                  title:
                    "Core workflows for the bet",

                  description:
                    "Whatever the central thing is — booking, ordering, matching, posting, paying — we build that, end to end, with real data flow. Auxiliary features (admin dashboards, analytics, notifications) get the simplest possible version, or get deferred."
                },

                {
                  title:
                    "Real analytics from day one",

                  description:
                    "Posthog, Mixpanel, or simpler tools — set up before launch, tracking the events that actually answer your validation questions. You'll know within two weeks of launch whether the thesis is working."
                },

                {
                  title:
                    "Deployment, hosting, and basic monitoring",

                  description:
                    "We deploy the MVP to real infrastructure (DigitalOcean, AWS, Hetzner, or similar — picked for cost-to-performance fit), set up basic monitoring, and hand over working credentials. Your MVP runs without us."
                },

                {
                  title:
                    "A 2-week iteration window after launch",

                  description:
                    "Once it's live, we stay close for 2 weeks. Real users surface real problems. We fix what breaks, ship the obvious next iteration, and watch the analytics with you. After that, you decide what comes next."
                }
              ]
            }
          },

          // EXCLUSIONS
          {
            type: "exclusions",

            data: {
              heading:
                "What this doesn't cover.",

              items: [
                {
                  title:
                    "A polished V1 ready for public launch.",

                  description:
                    "MVPs are for testing, not impressing."
                },

                {
                  title:
                    "Native mobile apps.",

                  description:
                    "Cross-platform mobile sometimes fits in MVP scope — native iOS/Android usually doesn't."
                },

                {
                  title:
                    "Compliance-heavy domains",

                  description:
                    "(regulated fintech, full healthcare, formal legal-tech). MVPs in these spaces require specialized handling we don't offer in this tier."
                },

                {
                  title:
                    "Pivot rebuilds.",

                  description:
                    "If your MVP works, you'll probably want to rebuild parts of it for scale. That's a separate engagement."
                },

                {
                  title:
                    "Co-founder-level equity arrangements.",

                  description:
                    "We're a paid service. We don't trade equity for builds. If your business genuinely can't afford an MVP build at our pricing, you probably shouldn't build yet."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              investment: {
                label:
                  "INVESTMENT",

                value:
                  "₹1.5L – ₹6.5L",

                description:
                  "Lean MVPs ₹1.5L–₹3L. Standard MVPs ₹3L–₹4.5L. Heavier MVPs ₹4.5L–₹6.5L. Below ₹1.5L is a Tier 1 build. Above ₹6.5L is Web Applications."
              },

              timeline: {
                label:
                  "TIMELINE",

                value:
                  "4–8 weeks",

                description:
                  "Four weeks if scope is genuinely tight. Most MVPs land at 6–8 weeks. We'd rather extend by two weeks than ship something half-baked. Final timeline depends on the PRD."
              },

              amc: {
                title:
                  "AMC after launch",

                description:
                  "For MVPs, AMC isn't usually the right model immediately. The first 2 weeks of post-launch iteration are included. After that, most founders pause for a month to look at data before deciding next steps.",

                note:
                  "Once direction is clear, the project either moves into AMC (₹15K–₹25K/month, scoped to maintenance + minor iterations), or continues as a phase-2 build engagement priced separately. The 10–15% AMC rule applies the same way it does for full Tier 3 builds."
              }
            }
          },

          // PORTFOLIO
          {
            type: "portfolioPreview",

            data: {
              heading:
                "Founder builds.",

              description:
                "Real MVP work to reference: the admission flow we built on top of Chokkady School's website (Tier 2 site with MVP-scope add-on for digital admissions). An internal reporting tool we're building for AIT itself — our own MVP, replacing manual monthly client reporting with automated generation. Earlier MVP-scope work in real estate (Tavara Projects — old site available as demo on request)."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to ship the smallest version that proves the bet?",

              paragraphs: [
                "Most MVP scoping calls go the same way. The founder shows up with a feature list. We spend 30 minutes asking what each feature is for. By the end, half the list is gone, the other half is sharper, and the project either moves forward at a smaller scope or doesn't move forward at all.",

                "Either outcome is a win. Building the wrong MVP is more expensive than not building one. We'd rather you leave the call with clarity than with a contract.",

                "We typically take on 2 Tier 3 projects at a time — across web apps, MVPs, and mobile apps combined — alongside 3–4 Tier 2 builds and 10–12 Tier 1 engagements. If we're at capacity, we'll be honest about it."
              ],

              primaryCTA: {
                label:
                  "Book an MVP scoping call",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or read about our build process",
                target:
                  "/process"
              }
            }
          }
        ]
      }
    ]
  },
  {
    card: 'Mobile Apps',
    slug: '/services/mobile-apps',
    sections: [
      {
        card: "Cross-Platform Mobile Apps",

        slug: "cross-platform-mobile-apps",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "TIER 3 — OPERATE",

              title:
                "Cross-platform mobile builds, when a web app or PWA isn't enough.",

              description:
                "We build mobile apps using React Native and Flutter — for projects where the user genuinely needs an app, not just a mobile-friendly website. For native iOS and Android with deep platform integrations, we partner with specialists rather than overclaim.",

              primaryCTA: {
                label:
                  "Discuss a mobile build",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Not sure if you need mobile or just mobile-friendly web? Run the decision tree",
                target:
                  "/decision-tree"
              }
            }
          },

          // WHAT WE MEAN
          {
            type: "includedExcluded",

            data: {
              heading:
                "What we mean by mobile.",

              intro:
                "A real mobile app — distributed through the App Store and Play Store, installed on a user's phone, opened with a tap on a home screen icon. Different from a mobile-friendly website, different from a Progressive Web App, different from a responsive web build.",

              included: {
                title:
                  "Mobile apps are the right answer when:",

                items: [
                  "Users will use the app frequently enough that home-screen presence matters (daily, multiple times a week).",

                  "You need push notifications that genuinely reach the user, not browser notifications that get ignored.",

                  "The app needs to work offline or with intermittent connectivity.",

                  "You need access to phone hardware — camera, GPS, contacts, calendar — beyond what a browser permits."
                ]
              },

              excluded: {
                title:
                  "Mobile apps are the wrong answer when:",

                items: [
                  {
                    description:
                      "A mobile-friendly website would do the same job for less time, less money, and easier maintenance."
                  },

                  {
                    description:
                      "Your users will visit once or twice and probably never install an app."
                  },

                  {
                    description:
                      "The \"we should also have an app\" thinking is driven by competitor-watching, not user behaviour."
                  }
                ]
              },

              conclusion:
                "Most agencies will sell you an app whether you need one or not. We'll ask whether you need one before we build, and if the honest answer is \"a mobile-friendly web build is what you actually need\" — we'll route you to Tier 2 Website Design or Web Applications instead."
            }
          },

          // MOBILE APP VS WEB APP VS PWA
          {
            type: "comparisonSection",

            data: {
              heading:
                "Wait — is this a Mobile App, a Web App, or a PWA?",

              paragraphs: [
                "This is one of the most common confusions we untangle on calls. Three different builds, three different cost ranges, three different reasons to pick one over the other."
              ],

              comparisons: [
                {
                  title:
                    "It's a Mobile App if:",

                  description:
                    "users will install it on their phone, use it frequently, and need offline support, push notifications, or hardware access. The home-screen presence matters. (You're on the right page.)"
                },

                {
                  title:
                    "It's a Web App if:",

                  description:
                    "users access it through a browser — usually on desktop, sometimes on mobile — and the value is in the workflow, not in mobile-specific features. (See Web Applications.)"
                },

                {
                  title:
                    "It's a PWA (Progressive Web App) if:",

                  description:
                    "you want app-like behavior — installable from the browser, works on mobile, can send notifications — without the App Store tax, the longer build timeline, or the higher cost. PWAs work for most \"we want an app\" requests at one-third the budget. We'll suggest a PWA when it's the right answer."
                }
              ],

              conclusion:
                "If you're not sure which one you need, we'll figure it out on the scoping call. The build category usually becomes obvious within 15 minutes of conversation about how your users actually behave."
            }
          },

          // WHAT WE BUILD
          {
            type: "serviceBreakdown",

            data: {
              heading:
                "What we build, and what we don't.",

              groups: [

                {
                  title:
                    "Cross-platform mobile (React Native, Flutter) — our depth",

                  items: [
                    {
                      description:
                        "For most mobile projects, we build using React Native or Flutter. These frameworks let us ship to both iOS and Android from one codebase, which means faster delivery, lower cost, and easier maintenance. The trade-off is some platform-native polish — but for 80% of business mobile apps, the trade-off is right."
                    }
                  ]
                },

                {
                  title:
                    "Native iOS or Android — partnership only",

                  items: [
                    {
                      description:
                        "If your app genuinely needs native — heavy hardware integration, performance-critical animations, deep platform-specific features (Apple Watch, Android Auto, ARKit, etc.) — we don't pretend to be native specialists. We'll either route you to mobile-native partners we trust, or join a project as the backend/web team while specialists handle the native build."
                    },

                    {
                      description:
                        "This isn't a weakness we're hiding. It's a deliberate scope choice. AIT is a web-first studio that does mobile when the project fits cross-platform tooling. Above that line, we tell you."
                    }
                  ]
                },

                {
                  title:
                    "PWAs (Progressive Web Apps) — when an app might not be needed",

                  items: [
                    {
                      description:
                        "For some projects, a Progressive Web App is the right answer — installable from the browser, works like an app on the home screen, no App Store gatekeeping, much lower build cost. We'll suggest a PWA when it'll do the job. Not every business needs an app."
                    }
                  ]
                }
              ]
            }
          },

          // WHO SHOULD BE HERE
          {
            type: "includedExcluded",

            data: {
              heading:
                "Who should be at this tier.",

              included: {
                items: [
                  "Founders or businesses with a genuine product-need for daily-use mobile (delivery, field services, on-the-go workflows, real-time tracking).",

                  "Web app clients ready to extend their platform to mobile — where the web product is working and the mobile experience is the obvious next step.",

                  "Service businesses where staff use mobile for in-the-field operations (technicians, drivers, salespeople, on-site teams) and the app is for internal use.",

                  "B2B SaaS founders shipping a companion app to support a primary web product.",

                  "Founders building a mobile-first product where the cross-platform trade-offs are acceptable for the use case."
                ]
              },

              excluded: {
                title:
                  "Who this is NOT for:",

                items: [
                  {
                    description:
                      "Founders who want to \"also have an app\" because their competitor has one."
                  },

                  {
                    description:
                      "Projects requiring deep native integration (Apple HealthKit, ARKit, complex Bluetooth, advanced camera APIs). We'll route you to specialists."
                  },

                  {
                    description:
                      "Apple Watch, Android Auto, smart TV apps, or other platform-specific surfaces. Not our scope."
                  },

                  {
                    description:
                      "Anyone whose plan starts with \"we'll figure out the platform later, just build us an app first\" — we won't."
                  }
                ]
              }
            }
          },

          // WHAT YOU'LL RECEIVE
          {
            type: "deliverables",

            data: {
              heading:
                "What you'll receive.",

              items: [
                {
                  title:
                    "A working cross-platform mobile app",

                  description:
                    "React Native or Flutter, built specifically for your business case. Available for both iOS and Android from the start. Real installable app, ready for App Store and Play Store submission."
                },

                {
                  title:
                    "App Store and Play Store submission, end-to-end",

                  description:
                    "We handle the submission process — developer account setup guidance, store listings, screenshots, descriptions, review responses, rejections and resubmissions. App Store rejections are normal. We expect them and handle them."
                },

                {
                  title:
                    "Backend integration with your web platform",

                  description:
                    "If you already have a web app or website, we connect the mobile app to the same backend. Same database, same APIs, same user accounts. Mobile and web stay in sync because they share infrastructure."
                },

                {
                  title:
                    "Push notifications, properly built",

                  description:
                    "Notification systems that actually work. Targeted, relevant, opt-in/opt-out controllable. We use Firebase Cloud Messaging or similar production-grade tooling."
                },

                {
                  title:
                    "Authentication and account systems",

                  description:
                    "Secure login, social login if needed, biometric login on supported devices."
                },

                {
                  title:
                    "Offline support, where it makes sense",

                  description:
                    "Some apps need to work without internet (field services, content readers, productivity tools). We build offline support when the use case warrants it, not as a default that bloats the project."
                },

                {
                  title:
                    "Documentation, handover, and AMC",

                  description:
                    "Same standard as our other tiers. Mobile apps need ongoing AMC more than web apps do — operating systems update, app stores change policies, dependencies break."
                }
              ]
            }
          },

          // EXCLUSIONS
          {
            type: "exclusions",

            data: {
              heading:
                "What this doesn't cover.",

              items: [
                {
                  title:
                    "Native iOS or Android development.",

                  description:
                    "We partner with specialists, we don't pretend to be one."
                },

                {
                  title:
                    "Apple Watch, Android Auto, smart TV, AR/VR, IoT companion apps.",

                  description:
                    "Specialist territory."
                },

                {
                  title:
                    "Game development.",

                  description:
                    "Whole different stack and skill set."
                },

                {
                  title:
                    "Heavy on-device ML or computer vision.",

                  description:
                    "We integrate with hosted ML APIs."
                },

                {
                  title:
                    "App Store Optimization (ASO) as ongoing service.",

                  description:
                    "We help with launch listings. Long-term ASO is a separate marketing engagement."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              investment: {
                label:
                  "INVESTMENT",

                value:
                  "₹3L – ₹10L",

                description:
                  "Most cross-platform builds land ₹4L–₹7L. Below ₹3L is probably a PWA. Above ₹10L is native specialist territory."
              },

              timeline: {
                label:
                  "TIMELINE",

                value:
                  "8–16 weeks",

                description:
                  "Eight weeks aggressive. Twelve weeks common. Sixteen weeks for projects with significant offline requirements or complex integrations."
              },

              amc: {
                title:
                  "AMC after launch — Standard for mobile",

                description:
                  "Mobile AMC follows the same 10–15% of project cost rule as our other Tier 3 work, with a floor of ₹25,000/month. Mobile apps need more active maintenance than web apps — OS updates, App Store policy changes, library security patches, occasional emergency patches.",

                warning:
                  "Skipping AMC on a mobile app usually means it stops working within 12–18 months. Mobile is one tier where AMC is genuinely essential, not optional."
              }
            }
          },

          // PORTFOLIO
          {
            type: "portfolioPreview",

            data: {
              heading:
                "Mobile work, in build.",

              description:
                "We have two cross-platform mobile apps in active development, shipping July–August 2026: an expense calculator app for personal finance tracking, and a parenting and teaching app focused on early childhood learning support. Both are AIT-owned products we're launching as standalone businesses. Once they ship, this section will showcase real shipped work. Until then, we're transparent: AIT's mobile portfolio is small but actively growing. We're being deliberate about the projects we take on while the team scales mobile depth."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to figure out if mobile is actually the answer?",

              paragraphs: [
                "Most mobile scoping calls at AIT spend more time on \"do you actually need a mobile app?\" than on \"how should we build it?\" That question is usually the more valuable one.",

                "Sometimes the answer is yes — and we move to scoping a cross-platform build. Sometimes the answer is \"a Progressive Web App will get you 80% of what you need at 30% of the cost.\" Sometimes the answer is \"you need true native depth, here's a mobile specialist team we trust.\"",

                "Either way, you'll leave the call with a clearer picture than you came in with.",

                "We typically take on 2 Tier 3 projects at a time across web apps, MVPs, and mobile apps combined, alongside 3–4 Tier 2 builds and 10–12 Tier 1 engagements. If we're at capacity, we'll be honest and either schedule you for the next slot or route you elsewhere."
              ],

              primaryCTA: {
                label:
                  "Book a mobile scoping call",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or read about our build process",
                target:
                  "/process"
              }
            }
          }
        ]
      }
    ]
  },
  {
    card: 'PRD as a Standalone Deliverable',
    slug: '/services/prd-engagements',
    sections: [
      {
        card: "PRD & Product Scoping",

        slug: "prd-product-scoping",

        sections: [

          // HERO
          {
            type: "hero",

            data: {
              tierTag: "STANDALONE — THINKING WORK",

              title:
                "Pay us to think with you. Walk out with a real PRD. Build it later, or build it elsewhere.",

              description:
                "For founders who aren't ready to build, or aren't sure what to build, or want a serious second opinion before committing to a build budget. We'll help you think through your project, then hand you a written PRD you can take anywhere.",

              primaryCTA: {
                label:
                  "Start a PRD engagement",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or book a free 30-min call",
                target:
                  "/contact"
              }
            }
          },

          // WHAT IT DELIVERS
          {
            type: "contentBlock",

            data: {
              heading:
                "What a PRD engagement actually delivers.",

              paragraphs: [
                "A Product Requirements Document — a real one — is a written, structured plan that explains exactly what should be built, why, in what order, and what it would cost. Not a wishlist. Not a brief. A document that any competent developer, agency, or freelancer could pick up and execute against without guessing.",

                "Most founders don't have one. They have a feature list in their head, a Google Doc with bullets, or a Figma file someone made for free. None of those things are PRDs. Without a real PRD, every quote you receive will vary by 3x, every developer you hire will scope it differently, and every meeting will end with \"we'll need to figure that out as we go.\"",

                "We write the document for you. You walk out of the engagement with the PRD. What you do next — build with us, build with someone else, sit on it for six months, scrap it entirely — is your business. We don't lock you in.",

                "This is the most unusual thing we offer. Most agencies wouldn't sell a PRD without a build attached. We do. Sometimes a founder isn't ready to build. Sometimes they're ready but want a second opinion before committing ₹5L–₹50L. Sometimes the right answer after the PRD is \"don't build this, do something else first.\" All of those outcomes are fine with us."
              ]
            }
          },

          // WHO THIS IS FOR
          {
            type: "includedExcluded",

            data: {
              heading:
                "Who this is for.",

              included: {
                items: [
                  "Founders not yet ready to build but who want clarity. Maybe you're pre-revenue, pre-team, pre-funding — but the idea is real and you need to know what building it would actually look like.",

                  "Founders shopping multiple agencies. If you're getting quotes from three different agencies and they're all wildly different, you don't have a quote problem — you have a scope problem. A PRD makes the quotes comparable.",

                  "Founders with technical co-founders who left or aren't engaged. When your tech lead is unavailable, a PRD becomes the document that lets you make decisions and move forward.",

                  "Investors or partners doing diligence. When the founder needs to demonstrate the project is real, scoped, and credible.",

                  "Anyone who's been burned by an \"agile we'll figure it out\" approach. If your last build went off the rails because nobody wrote anything down, a PRD is the antidote."
                ]
              },

              excluded: {
                title:
                  "Who this is NOT for:",

                items: [
                  {
                    description:
                      "Founders who already have product-market fit, an engaged technical team, and a clear scope. You don't need a PRD — you need to ship."
                  },

                  {
                    description:
                      "Founders who want a \"strategy document\" or \"business plan.\" That's different work — see Growth Consulting."
                  },

                  {
                    description:
                      "Anyone who thinks a PRD is a one-page summary. It's not. A real PRD is 20–60 pages of structured detail."
                  }
                ]
              }
            }
          },

          // WHAT'S IN THE PRD
          {
            type: "deliverables",

            data: {
              heading:
                "What's in the PRD we deliver.",

              items: [
                {
                  title:
                    "Project context and goals",

                  description:
                    "Who the business serves, what problem the project solves, what success looks like. The \"why\" — written down so future decisions can reference it."
                },

                {
                  title:
                    "User personas and use cases",

                  description:
                    "Who actually uses what gets built. Not generic personas — the real people, the real workflows, the real edge cases."
                },

                {
                  title:
                    "Feature list, prioritized and scoped",

                  description:
                    "Every feature with a clear description, the user it serves, the reason it exists, and a priority tier (must-have, should-have, nice-to-have, deferred). Most clients are surprised how much gets pushed to \"deferred\" — that's the point."
                },

                {
                  title:
                    "Technical requirements and architecture notes",

                  description:
                    "What stack makes sense, what integrations are needed, what data structure the project requires. Enough technical detail that any competent developer can read it and understand the build."
                },

                {
                  title:
                    "User flows and screen-level requirements",

                  description:
                    "Wireframe-level descriptions of key flows — not pixel-perfect designs, but clear enough that a designer can create real mockups and a developer can build against them."
                },

                {
                  title:
                    "Indicative cost and timeline ranges",

                  description:
                    "Honest ranges, not optimistic ones. We tell you what the project would actually cost — at AIT and at typical market rates — and how long it would take."
                },

                {
                  title:
                    "Risks and unknowns flagged",

                  description:
                    "Things we don't know yet, decisions still pending, technical or business questions that need answering before build can start. Naming the unknowns is the part most agencies skip."
                },

                {
                  title:
                    "Recommended next steps",

                  description:
                    "Whether you should build now, build later, talk to more customers first, or scrap the project entirely. We'll tell you what we'd do in your position."
                }
              ]
            }
          },

          // AFTER DELIVERY
          {
            type: "bulletList",

            data: {
              heading:
                "What happens after the PRD is delivered.",

              intro:
                "The PRD is yours. What you do next is your decision.",

              items: [
                "Take it and build with us — we move into a build engagement, with PRD work credited (see pricing below).",

                "Take it and hire us for consulting on top — we move into a Growth Consulting engagement.",

                "Take it and build with someone else — we wish you well, no hard feelings.",

                "Take it and come back later — most welcome. We'll figure out then whether the PRD still fits or needs a refresh."
              ]
            }
          },

          // WHAT THIS ISN'T
          {
            type: "exclusions",

            data: {
              heading:
                "What this isn't.",

              items: [
                {
                  title:
                    "A pitch deck.",

                  description:
                    "PRDs are for builders. Pitch decks are for investors."
                },

                {
                  title:
                    "A business plan.",

                  description:
                    "PRDs scope projects. Business plans scope companies."
                },

                {
                  title:
                    "Pixel-perfect designs.",

                  description:
                    "PRDs include flow-level descriptions, not finished designs."
                },

                {
                  title:
                    "Production-ready specs.",

                  description:
                    "PRDs are precise enough for a senior developer to estimate and start building. Engineering specifications down to the database column level happen in the build phase."
                }
              ]
            }
          },

          // PRICING
          {
            type: "pricing",

            data: {
              heading:
                "What it costs and how long it takes.",

              investment: {
                label:
                  "INVESTMENT",

                value:
                  "₹15K – ₹75K",

                description:
                  "Lighter PRDs ₹15K–₹30K. Standard PRDs ₹35K–₹55K. Heavier PRDs ₹55K–₹75K. Variance depends on complexity, user types, and depth needed."
              },

              timeline: {
                label:
                  "TIMELINE",

                value:
                  "1–3 weeks",

                description:
                  "One week if scope is clear and you're responsive. Two weeks for most engagements. Three weeks if user interviews or deep competitive analysis are included."
              },

              amc: {
                title:
                  "If you build with us within 6 months — no double-charge for thinking work.",

                description:
                  "If you start building with us within 6 months of receiving the PRD, the build cost goes down by what you already paid for the PRD. We're not redoing thinking that's already done.",

                note:
                  "After 6 months, business contexts shift, scope changes, the market moves. We'd usually need to refresh the PRD before building — in which case the original PRD fee was money well spent on clarity at the time, not an investment toward this build."
              }
            }
          },

          // PORTFOLIO
          {
            type: "portfolioPreview",

            data: {
              heading:
                "PRDs we've written.",

              description:
                "PRDs are confidential by nature — we don't publish them. Categories of recent PRD work include healthcare platforms, retail businesses, edtech founders, marketplace ideas, and internal operations tools. Specific examples available on request during a scoping call."
            }
          },

          // CTA
          {
            type: "cta",

            data: {
              heading:
                "Ready to think before you build?",

              paragraphs: [
                "A PRD engagement is the cheapest way to get serious about a project before committing real build budget. Two weeks of structured thinking, ₹15K–₹75K, and you walk away with a document that makes every subsequent decision sharper.",

                "Most engagements start with a free 30-minute call where we figure out scope, complexity, and whether a PRD is even the right answer. Sometimes it isn't — sometimes the right answer is \"talk to 10 customers first\" or \"this is more of a consulting question than a build question.\" We'll tell you.",

                "If a PRD is the right answer, we'll quote you, scope it, and start within a week of agreement."
              ],

              primaryCTA: {
                label:
                  "Start a PRD engagement",
                target:
                  "/contact"
              },

              secondaryCTA: {
                label:
                  "Or talk it through first",
                target:
                  "/contact"
              }
            }
          }
        ]
      }
    ]
  }
]
