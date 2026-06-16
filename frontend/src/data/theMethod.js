export const theMethodData = {
  seo: {
    title: "The Method | An Idea Tech",
    description: "A long-form essay on how SME software should actually be built — and how AIT has come to work over nine years. 10–12 minutes to read."
  },
  hero: {
    topTag: "A LONG-FORM ESSAY ON HOW WE BUILD, WHY WE BUILD THAT WAY, AND WHAT WE'VE LEARNED DOING IT FOR A DECADE.",
    title: "The thinking happens before the code.",
    intro: "Most software built for Indian SMEs gets built wrong — not because the engineering is bad, but because the scoping is. This is an essay about that, and about the way we've come to work because of it. It will take 10-12 minutes to read seriously. We wrote it for the founders and operators who'd actually want to."
  },
  sections: [
    {
      type: "content",
      title: "Most SME software is broken before the first commit.",
      paragraphs: [
        "We've sat through hundreds of scoping calls with SME founders over the past ten years. The pattern is remarkably consistent.",
        "A founder walks in with a feature list. The list is usually long — sometimes 30 or 40 features described across a Google Doc, a Figma file, and a WhatsApp conversation. The founder is enthusiastic. They've thought about the project for months. They've watched competitors. They have a vision.",
        "The founder is not asking us whether to build. They're asking us *how much* and *how long*.",
        "This is the first place most software for Indian SMEs goes wrong — and it goes wrong before any engineer writes any code.",
        "The mistake isn't in the code. It's in the assumption that the feature list represents what the business actually needs. In our experience, it almost never does. The feature list represents what the founder *thinks* they need, filtered through whatever they've recently seen, whoever they've recently spoken to, and whatever competitor anxiety is most active that month.",
        "Take that list at face value, build against it, and you'll ship working software that solves the wrong problem. The founder will be polite about it. The agency will get paid. Six months later the project will be quietly rebuilt by someone else, or quietly abandoned, or — most commonly — sitting unused while the founder moves on to the next idea.",
        "The fix isn't to be a better engineer. The fix is to be a better thinker with the founder, before any code gets written.",
        "This essay is about how we've learned to do that."
      ]
    },
    {
      type: "contentWithSubsections",
      title: "Three ways most SME software gets built wrong.",
      intro: "After ten years of watching this pattern repeat — sometimes in our own early projects, sometimes in projects we inherited after another agency abandoned them — we can name three specific failure modes. Most failed SME software projects are some combination of these three.",
      subsections: [
        {
          subtitle: "Failure mode 1: Scope inflation.",
          paragraphs: [
            "The founder walks in describing what they call \"a simple website\" or \"a basic MVP.\" By the third meeting, the project has grown three customer dashboards, an admin panel, an analytics suite, a notification system, a payment integration, a referral program, and a mobile app companion. Each individual addition is justifiable. The cumulative weight is fatal.",
            "This happens because every feature looks like \"just one more small thing\" until they're stacked together into a six-month build that costs three times the original quote. The agency rarely says no — additions mean more revenue. The founder rarely says no — they want everything to work perfectly at launch.",
            "Six months later, the project ships late, costs more than expected, and uses 30% of what was built. The other 70% sits there, accumulating maintenance debt."
          ]
        },
        {
          subtitle: "Failure mode 2: Agency abandonment.",
          paragraphs: [
            "The agency builds the thing. They charge, they deliver, they invoice the final tranche, and then they disappear. AMC is technically offered but rarely used. The relationship effectively ends at handover.",
            "Six months later, something breaks. A plugin update causes an issue. The hosting provider migrates. The form integration stops working. The founder calls the agency. Sometimes the agency answers. Often they don't, or they answer slowly, or they quote a fresh project rate to fix what should have been a maintenance issue.",
            "The founder ends up paying someone else — usually a freelancer, often more expensive than AMC would have been — to figure out how the agency built it. Some of that work is genuinely opaque. Code without documentation. Architecture decisions nobody recorded. Database schemas that only made sense to the original developer.",
            "This is the failure mode we see most often in clients who come to us after working with someone else. It's almost always recoverable, but it shouldn't have happened in the first place."
          ]
        },
        {
          subtitle: "Failure mode 3: Technology-first thinking.",
          paragraphs: [
            "The agency picks a stack first, then forces the project to fit it. Sometimes this is because the agency's developers are most comfortable with a particular framework. Sometimes it's because something is trending in the technology press. Sometimes it's because a single Stack Overflow post made the choice for them.",
            "The result: a business problem that wanted a simple WordPress site gets built as a custom React application, because the agency wanted to demonstrate React skills. Or a custom platform gets shoehorned into a SaaS product because the agency had a partner program with that vendor. Or a project that needed boring infrastructure gets architected for theoretical scale that will never arrive.",
            "In each case, the technology decision wasn't a *project* decision. It was a *vendor* decision masquerading as a project one.",
            "The cost is felt later — in maintenance, in hiring developers who can take over the project, in adapting the system as the business grows. The founder usually doesn't realize they paid for this until two years in, when they try to add a feature and discover their platform was built in a way that makes the feature five times more expensive than it should have been."
          ]
        }
      ],
      outro: "*These three failure modes are not exotic. They are the default outcome of how SME software gets built in India today. Avoiding them isn't a matter of better engineering. It's a matter of slower, more deliberate thinking before engineering starts.*"
    },
    {
      type: "content",
      title: "The most valuable hour of any project is the first one.",
      paragraphs: [
        "There's a question we've come to ask in every scoping call, and it's the most useful question we know how to ask. It is not *\"what do you want to build?\"* It is not *\"what's your budget?\"* It is not *\"what's your timeline?\"*",
        "The question is: **\"What's the smallest thing we could build that would let you learn whether this project is worth building at all?\"**",
        "Most founders react to this question the same way. They pause. They re-read their feature list. They start crossing things off — sometimes silently, sometimes out loud. By the end of a single 30-minute conversation, the project has usually shrunk by 40 to 60 percent.",
        "This is the entire premise of our PRD-as-standalone offering, our MVP service, and our homepage Decision Tree. The single highest-leverage hour in any software project is the hour that happens *before* the project starts — the hour where someone helps the founder figure out what *not* to build.",
        "Why does this hour matter so much?",
        "Because every feature you don't build is a feature you don't have to design, write, test, deploy, document, train your team on, support after launch, debug when something breaks, update when dependencies change, or migrate when you eventually rebuild. The cost of a feature isn't the cost of building it. It's the cost of *carrying* it for the lifetime of the platform.",
        "A feature that costs ₹40,000 to build often costs ₹4,00,000 to live with over five years. The founder rarely sees this math. The agency, if it's honest, knows it.",
        "We've learned to make the math visible. When a founder describes a feature, we don't just ask \"how should we build this?\" We ask \"what does this feature cost over five years if we build it, and what does it cost if we don't?\" Sometimes the answer is \"build it.\" More often, the answer is \"defer it. See if it's still on the list six months from now.\"",
        "This is what we mean by the thinking phase. It's not strategy in the consulting sense — it's not whiteboards and frameworks and 60-page decks. It's the unglamorous work of asking a founder uncomfortable questions about whether they actually need what they think they need, and being patient enough to wait for honest answers.",
        "Most founders, after going through this, describe it the same way: *\"I came in wanting to build twelve things. I left understanding that I should build three things, well, and see what happens.\"*",
        "That's the thinking phase doing its job."
      ]
    },
    {
      type: "content",
      title: "Saying no is the most important thing we do.",
      paragraphs: [
        "Saying no is harder than it sounds. It's harder for the founder, who feels like they're losing features. It's harder for the agency, which feels like it's losing revenue. It's harder for everyone in the room, who has been culturally trained to associate yes with collaboration and no with conflict.",
        "We've gotten reasonably good at it over ten years, and we've come to believe it is the single most important discipline in our work.",
        "Here's what saying no looks like in practice.",
        "A founder describes their need. We ask diagnostic questions until we understand what they're actually trying to solve — which is almost always something different from what they're describing. Then we identify which of their proposed features genuinely solve that underlying problem, and which are aspirational additions, competitor mimicry, or future-proofing for scenarios that won't arrive.",
        "We tell the founder honestly which features fall in which category.",
        "Sometimes the founder agrees and we cut scope together. Sometimes they push back. Sometimes they're right and we revise our view. Sometimes we're right and we hold our position. The conversation is a real one, not a sales one.",
        "If a founder insists on a feature we genuinely think is the wrong call, we have three options: build it anyway, decline the project, or build a smaller version with the agreement that we'll revisit after launch. Which option we pick depends on the situation. We're not religious about this — we're not above building features we'd have argued against. But we always make sure the founder *knows* we'd have argued against it, in writing, before we start.",
        "Saying no extends to the projects we take on at all. We turn down a meaningful number of leads — usually because the project isn't ready (the founder hasn't validated demand), or because the project doesn't fit how we work (the founder wants a vendor, not a partner), or because we don't have the right capacity at the right time.",
        "Refusing wrong-fit projects is one of the most underrated competitive advantages a small studio can build. Every wrong-fit project drains team morale, slows down right-fit projects, and creates client relationships that don't compound. Every wrong-fit project we refuse is a right-fit project we have capacity for instead.",
        "The math of saying no is harder to see than the math of saying yes. The yes shows up in revenue. The no shows up only in the absence of disasters that would have happened. It takes a few years of operating to see this clearly. Once you see it, you can't unsee it."
      ]
    },
    {
      type: "contentWithSubsections",
      title: "Once thinking is done, building should be boring.",
      intro: "If the thinking phase has done its job, the build phase should feel almost anticlimactic. The decisions that matter have already been made. The team's job is to execute against a clear scope, with a clear timeline, and clear feedback loops.\n\nThis is how we run the build phase, in operational detail.",
      subsections: [
        {
          subtitle: "Phases with clear endings.",
          paragraphs: [
            "We split every build into milestones, each milestone with a defined deliverable and a defined date. The founder always knows what phase they're in, what's coming next, and what they're meant to review at each handoff. We don't disappear for two months and surface with a finished product. We ship in stages and let the founder shape direction as it unfolds."
          ]
        },
        {
          subtitle: "A working version, early.",
          paragraphs: [
            "Within the first month of any project, the founder should have a working version of the most critical workflow. Not a Figma click-through. Real software, in a browser, that does the most important thing the platform is meant to do. This forces the team to focus on the spine of the project before adding any leaves. It also gives the founder real feedback months before launch."
          ]
        },
        {
          subtitle: "Demos every two weeks.",
          paragraphs: [
            "We show progress in actual working software, every two weeks. We don't run open-ended status calls — we run structured 20-minute demos that follow a fixed agenda: what's working since last demo, what's not yet working, decisions you need to make, open questions, what's coming in the next two weeks. The structure prevents the meeting from drifting into theatre."
          ]
        },
        {
          subtitle: "A shared dashboard.",
          paragraphs: [
            "The founder and the build team work off the same project dashboard. Same tasks, same blockers, same status. We don't email weekly status updates because the dashboard *is* the status update. If the founder logs in on a Tuesday and wants to know what's happening, the answer is on the screen — not in someone's inbox waiting for a reply."
          ]
        },
        {
          subtitle: "Beta testing with the founder's team, not the public.",
          paragraphs: [
            "Before any public launch, we run a closed beta with the founder's internal team — admin, sales, ops, whoever will use the platform. They surface real issues. We fix them. By the time the platform goes public, the obvious problems have already been caught."
          ]
        },
        {
          subtitle: "A real launch, then real iteration.",
          paragraphs: [
            "We treat launch as the start of phase 3, not the end of phase 2. The first 60 to 90 days after launch are when the real signal arrives — what users actually do, what's converting, what's confusing. We stay close, we adjust, and we ship the iterations the data calls for."
          ]
        }
      ],
      outro: "*None of this is novel. None of it is exotic. What's unusual is doing it consistently, on every project, even when the founder doesn't ask for it. Most of these practices look like overhead until you've seen what happens when they're missing. Then they look like the only sensible way to work.*"
    },
    {
      type: "content",
      title: "Most agency relationships should outlast most agency projects.",
      paragraphs: [
        "The build is the loud part. The maintenance is the quiet part. Most agencies are good at the loud part and terrible at the quiet part. We've come to believe the quiet part matters more.",
        "Here's the math, simplified.",
        "A typical Tier 2 website project at AIT costs ₹1L to ₹2L and ships in 6 to 10 weeks. That's the loud part.",
        "The same project, maintained well over five years, will need: hosting, security patching, plugin updates, broken link fixes, occasional content changes, occasional new pages, periodic redesigns, integration with new tools as the business grows, and emergency support when something inevitably breaks. That's the quiet part.",
        "Most clients will spend more on the quiet part over five years than they spent on the loud part. Most agencies don't structure their business around this — they treat the project as the asset and the maintenance as a side service. We've structured ours the opposite way. The project earns the relationship. The relationship earns the long-term revenue.",
        "This sounds obvious when written. It is not how most Indian agencies operate. Most still think of AMC as an upsell, a line item on an invoice, a thing offered after the project but never really staffed for or planned around. We staff for it. We plan around it. Our oldest clients have been with us four to five years, and they're our biggest accounts not by project size but by relationship duration.",
        "The discipline this requires is real. AMC clients deserve service that's actually valuable, not auto-renewed boilerplate. They deserve monthly reports that tell them what was done. They deserve real responsiveness when something breaks. They deserve to hear from us when there's a real growth question to discuss, and not to hear from us when there isn't.",
        "We don't always get this right. There are months when AMC reports go out late, or when a maintenance task takes longer than it should, or when we forget to flag something the client should have said no to. We're a small team, we're not perfect at it. But we treat AMC as a discipline rather than an afterthought, and that single distinction explains most of the difference between us and the agencies our clients used before us.",
        "**If you remember nothing else from this essay, remember this: the project is the introduction. The relationship is the work.**"
      ]
    },
    {
      type: "content",
      title: "Why we've stayed small, and intend to.",
      paragraphs: [
        "There's a default growth path for Indian software agencies. Build a successful small team. Take on more projects than you can handle. Hire fast to absorb the load. Add a layer of project managers between founders and the work. Add another layer of account managers between clients and the team. Add sales people who don't build, and engineers who don't talk to clients. Reach 50 employees, then 100, then keep going.",
        "By the time the agency has 100 people, the founder no longer touches the work, the engineers no longer talk to clients, the clients no longer recognize the people building their software, and the quality has quietly degraded across every project. This is well-documented. It's not controversial. Anyone who's worked in or around Indian agencies has seen it happen.",
        "We chose, deliberately, not to walk that path.",
        "The math of staying small is uncomfortable but real. A small studio, run well, can be more profitable per person than a large agency. It can deliver higher-quality work because every senior person is involved in every project. It can keep clients longer because the relationships are real. It can maintain a culture because the team is small enough to actually have one.",
        "The ceiling on this model is real too. There is a maximum number of clients a small studio can serve well. Beyond that ceiling, you either have to grow into a larger agency (and accept the trade-offs that come with it) or stop accepting new work. We've decided we'd rather stop accepting new work than grow past the ceiling.",
        "In practice, this means our capacity is finite and we communicate that openly. We typically take on 2 Tier 3 projects at a time, alongside 3 to 4 Tier 2 builds and 10 to 12 Tier 1 engagements. When we're at capacity, we're at capacity. We schedule new clients for the next available slot, or refer them to teams we trust.",
        "Some founders read this as a limitation. We read it as the entire point.",
        "The studios we admire — Basecamp, the early Stripe team, several quiet Indian software studios that don't market themselves loudly — all share this property. They are small, they intend to stay small, and they're good at what they do precisely because they've refused to scale past their natural capacity.",
        "We want to be one of those studios. We don't have a 5-year plan to be 50 people. We have a 5-year plan to keep doing this work, well, with the same core team and a few junior additions as we grow developers from within.",
        "If that shape appeals to you as a client, you'll probably enjoy working with us. If you wanted a larger agency with more bench depth, we're not it."
      ]
    },
    {
      type: "contentWithSubsections",
      title: "The honest part — what we're still figuring out.",
      intro: "Most agency operating-philosophy pages pretend to have everything figured out. We don't. Here's a partial list of things we're still working through, written honestly so you know what you're getting.",
      subsections: [
        {
          subtitle: "How to scale consulting without diluting it.",
          paragraphs: [
            "Growth consulting at AIT is currently led by the founder, working with 2–3 SMEs at a time. The math of this is fine for now. As demand grows, we'll need senior associates who can lead engagements at the same level — and senior consultants are hard to hire, hard to train, and easy to lose. We don't yet have a solid answer for how to scale consulting beyond the founder's bandwidth without losing the depth that makes it work."
          ]
        },
        {
          subtitle: "Mobile development, honestly.",
          paragraphs: [
            "We've publicly committed to building cross-platform mobile when projects fit and partnering for native when they don't. We have two AIT-owned mobile apps in build, shipping mid-2026. Until those ship, our public mobile portfolio is small. We're being deliberate about the mobile projects we take on — but we're aware that until we have shipped mobile work to point to, this part of our service line is more aspiration than proof."
          ]
        },
        {
          subtitle: "Pricing for inflation.",
          paragraphs: [
            "Our pricing has held steady for several years. Mangaluru's cost base hasn't risen at Bangalore rates, which has helped. But our talent costs are rising, our infrastructure costs are rising, and at some point we'll need to raise prices. We haven't yet. We will. We're trying to figure out how to do it without breaking the trust we've built with long-term clients."
          ]
        },
        {
          subtitle: "The product-vs-services balance.",
          paragraphs: [
            "We've started building AIT-owned products alongside our services work — the two mobile apps shipping mid-2026, an internal reporting tool, possibly more after that. Splitting attention between client work and product work is harder than we expected. Most studios that try this either drift back into pure services or pivot into product and shut the agency. We're trying to do both deliberately. We don't yet know if it'll work."
          ]
        },
        {
          subtitle: "Hiring at junior levels.",
          paragraphs: [
            "We've been good at hiring juniors and growing them — Deepak's path is the clearest example. We've been less good at hiring laterally at senior levels. Senior people who fit how we work are rare, and the ones we'd want to hire are usually already running their own studios. This is a real constraint on our capacity to grow even modestly."
          ]
        },
        {
          subtitle: "Saying no, when revenue is tight.",
          paragraphs: [
            "We've said no to a meaningful number of projects over the years, and we believe in the discipline. But there have been months when revenue was tight and we said yes to projects we should have said no to. Not many. But more than zero. We're still learning what good looks like under pressure."
          ]
        }
      ],
      outro: "*If any of this resonates — if you're a founder who's been on the wrong end of one of those failure modes, or you're an operator thinking about how SME software should actually be built, or you're a fellow studio operator working through similar questions — we'd genuinely like to hear from you. Some of our best learning has come from conversations with people working on the same problems from different angles.*"
    }
  ],
  cta: {
    heading: "Want to work this way?",
    paragraphs: [
      "If The Method described how you'd want a software project to feel — slower thinking, smaller scope, real relationships, honest pricing — the next step is a 30-minute call. We'll find out whether your project fits how we work, and you'll find out whether we fit how you want to work.",
      "*If we're not a fit, we'll usually be able to point you toward someone who is.*"
    ],
    buttons: {
      primary: { text: "Talk to us →", href: "/contact" },
      secondary: { text: "Or browse what we offer", href: "/services" }
    },
    footerLinks: [
      { text: "← Back to homepage", href: "/" },
      { text: "← How we work (operational)", href: "/how-we-work" },
      { text: "← About AIT", href: "/about" }
    ]
  }
};
