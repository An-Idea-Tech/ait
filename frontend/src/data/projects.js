/**
 * Project Case Study Data
 *
 * This data is structured to be DB-ready. When migrating to a backend,
 * each object here maps 1:1 to a project document/record.
 * Helper functions at the bottom act as the data-access layer (mimic API calls).
 */

export const projects = [
  {
    id: 1,
    slug: "philomena-puc",
    tag: "Education",
    title: "Philomena Pre-University College, Puttur",
    tagline: "Rebuilding A Website That Supports The Institution Behind It",
    // Hero image — replace with real project image
    heroImage: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",

    about: {
      paragraphs: [
        "St. Philomena Pre-University College has established itself as a trusted educational institution, with admissions consistently reaching full capacity. As the institution grew, its website became an increasingly important point of interaction for students, parents, and the administration.",
        "Over time, the website struggled to meet those expectations. It wasn't fully responsive, routine updates often depended on external support, and 1st PUC result announcements brought traffic levels that regularly affected reliability.",
        "The institution already had processes that worked well. The website simply needed to support them more effectively.",
      ],
    },

    services: [
      "Website Strategy",
      "UI/UX Design",
      "Data Migration",
      "Performance Optimisation",
      "On-page SEO",
      "Content Management System",
      "Digital Presence",
    ],

    industry: "Education",

    challenge: {
      subtitle: "Designing Around Everyday Operations",
      items: [
        {
          number: "01",
          text: "Create a website that reflected the institution's reputation without disrupting familiar publishing workflows.",
        },
        {
          number: "02",
          text: "Provide a consistent experience for students and parents across every device.",
        },
        {
          number: "03",
          text: "Maintain reliable performance during high-traffic examination result announcements.",
        },
        {
          number: "04",
          text: "Reduce the need for external support when managing routine text and media content updates.",
        },
      ],
    },

    approach: {
      subtitle: "Built Around Familiar Processes",
      paragraphs: [
        "The website was rebuilt from the ground up and Improved CMS as part of its ongoing software maintenance.",
        "Alongside the technical rebuild, the visual identity was refined to better reflect the institution. We introduced a more consistent colour palette inspired by the college's existing brand colours and student uniform, complemented by improved typography and a clearer visual hierarchy. These refinements created a more cohesive experience across the website while preserving the institution's established identity.",
        "The administration was already comfortable working with existing CMS, so there was little value in replacing a system they knew well. Our focus shifted to removing friction from everyday tasks. Navigation was reorganised, admissions and department pages were restructured, staff profiles were redesigned, and website content became easier to manage. Examination results continued to be published through Google Drive, with the website making that process simpler for both the administration and students.",
        "Performance optimisation shaped the project from the beginning. The website was engineered to deliver faster access across a range of network conditions and optimised to meet Core Web Vitals recommendations. This ensured students and parents could access information and examination results more reliably, even during periods of peak traffic. Responsive layouts created a consistent experience across desktops, tablets, and mobile devices.",
        "On-page SEO formed another key part of the rebuild. Beyond improving search visibility, we established the institution's Google Business Profile to strengthen its digital presence, making it easier for prospective students and parents to discover the institution, understand its courses, and move directly into the admissions journey.",
      ],
           image: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",

    },

    digitalExperience: {
      subtitle: "Designed For Everyday Use",
      paragraphs: [
        "Every section of the website was redesigned around the way people actually use it. Prospective students can explore admissions with greater clarity, parents can quickly access important information from any device, and existing students can find examination results without unnecessary effort.",
        "Behind the scenes, the administration continues working with familiar tools, now supported by a website that requires less day-to-day assistance to keep information current.",
      ],
      image: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",

    },

    impact: {
      subtitle: "Reliable When It Matters Most",
      paragraphs: [
        "The website no longer experiences the downtime that previously occurred during 1st PUC result announcements, giving students reliable access to examination results during periods of peak traffic.",
        "Routine website updates can now be handled within the institution, reducing reliance on external support and making day-to-day content updates more straightforward.",
        "The rebuilt website delivers faster access across devices and typical network conditions while meeting Core Web Vitals recommendations. Together with responsive layouts, this creates a more dependable experience for students and parents wherever they access the website.",
        "The institution also strengthened its online presence through on-page SEO and a Google Business Profile integrated with the admissions journey, making it easier for prospective students and parents to discover the institution and take the next step.",
        "The rebuild also introduced a website that better represents the institution while supporting the way it operates every day.",
      ],
      image: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",

    },

    testimonial: {
      quote:
        "Working with An Idea Tech was a seamless experience. They understood our needs, respected our processes, and delivered a website that genuinely reflects who we are as an institution.",
      name: "Fr. Principal",
      designation: "St. Philomena Pre-University College, Puttur",
    },

    // Gallery images — replace with actual project screenshots
    galleryImages: [
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
    ],

    // Ticker strip images — horizontal scrolling showcase
    tickerImages: [
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
    ],

    nextProject: {
      slug: "meet-and-greet",
      title: "Meet And Greet",
    },
  },

  {
    id: 2,
    slug: "meet-and-greet",
    tag: "Community",
    title: "Meet And Greet",
    tagline:
      "Open Conversations About Careers, Coding, and Real-World Engineering",
    heroImage: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",

    about: {
      paragraphs: [
        "Meet and Greet is a recurring community event by An Idea Tech designed to bridge the gap between aspiring developers and working professionals. The event creates an informal space where people at different stages of their career can share experiences, ask questions, and build genuine connections.",
        "The challenge was building a digital presence that captured the warm, open spirit of the in-person events while efficiently handling registrations and post-event content.",
      ],
    },

    services: [
      "Event Landing Page",
      "Registration Flow",
      "Email Automation",
      "Social Media Integration",
      "Post-event Content Hub",
    ],

    industry: "Community & Events",

    challenge: {
      subtitle: "Building Connection at Scale",
      items: [
        {
          number: "01",
          text: "Create a landing page that communicated the informal, approachable nature of the events without looking amateur.",
        },
        {
          number: "02",
          text: "Build a frictionless registration flow that worked seamlessly on mobile devices for last-minute sign-ups.",
        },
        {
          number: "03",
          text: "Maintain consistent post-event engagement with attendees through automated follow-up and content distribution.",
        },
        {
          number: "04",
          text: "Scale the system to support multiple events per year without requiring manual setup each time.",
        },
      ],
    },

    approach: {
      subtitle: "Designed for the Community",
      paragraphs: [
        "We built a reusable event page template that could be updated for each edition of Meet and Greet with minimal effort. The system pulls event details, speakers, and topics from a simple CMS, keeping the team in control without any technical help.",
        "The registration flow was stripped to its essentials — name, email, and a single question about what the attendee hoped to get from the event. This kept drop-off rates low and gave the organising team useful data to shape each edition.",
        "Post-event, a simple content hub on the site housed session summaries, key takeaways, and photos — giving attendees a reason to return and giving new visitors a feel for what the events are like.",
      ],
    },

    digitalExperience: {
      subtitle: "Warm, Approachable, and Purposeful",
      paragraphs: [
        "The visual design leaned into warmth and clarity — a palette that felt human rather than corporate, with strong typographic hierarchy to communicate quickly on a scroll.",
        "Every section of the event page was written and designed with a first-time visitor in mind — someone who has never heard of Meet and Greet and needs to understand it, trust it, and register within a single page visit.",
      ],
    },

    impact: {
      subtitle: "Community Growing Edition by Edition",
      paragraphs: [
        "Registration completion rates improved significantly compared to the previous manual process, with mobile sign-ups accounting for the majority of registrations.",
        "Post-event content engagement increased, with attendees returning to the site for summaries and resources shared after each edition.",
        "The reusable template reduced event launch time from days to hours, freeing the team to focus on the quality of the events themselves rather than the logistics of promoting them.",
      ],
    },

    testimonial: {
      quote:
        "The event page made it so easy for people to find us, sign up, and know what to expect. It genuinely felt like an extension of the conversations we have at the events themselves.",
      name: "Organisers",
      designation: "Meet and Greet, An Idea Tech",
    },

    galleryImages: [
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
    ],

    tickerImages: [
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
    ],

    nextProject: {
      slug: "developer-ecosystem",
      title: "Developer Ecosystem",
    },
  },

  {
    id: 3,
    slug: "developer-ecosystem",
    tag: "Tech Platform",
    title: "Developer Ecosystem",
    tagline:
      "Building a Tight-Knit Community of Innovators, Builders, and Creators",
    heroImage: "https://ik.imagekit.io/anideatech/ait/hero-image.webp",

    about: {
      paragraphs: [
        "The Developer Ecosystem project set out to create a connected space where developers, designers, and founders from Mangaluru and beyond could collaborate, learn, and build together. The goal wasn't just a directory or a forum — it was a living, active community with shared values and real output.",
        "The platform needed to support asynchronous collaboration while keeping the energy of real-time connection — a balance that required careful thinking about both structure and culture.",
      ],
    },

    services: [
      "Platform Strategy",
      "Community Architecture",
      "UI/UX Design",
      "Web Development",
      "Content Strategy",
      "Onboarding Flow",
    ],

    industry: "Technology",

    challenge: {
      subtitle: "Creating Community, Not Just a Platform",
      items: [
        {
          number: "01",
          text: "Design a platform structure that encouraged genuine participation rather than passive consumption.",
        },
        {
          number: "02",
          text: "Build an onboarding experience that quickly oriented new members and connected them to relevant people and projects.",
        },
        {
          number: "03",
          text: "Keep the platform lightweight and fast enough to work well on lower-end devices and slower networks.",
        },
        {
          number: "04",
          text: "Create a content and contribution model that rewarded quality over quantity, keeping the community signal strong.",
        },
      ],
    },

    approach: {
      subtitle: "Structure That Encourages Contribution",
      paragraphs: [
        "We started by mapping how developers actually collaborate — through shared projects, skill exchanges, and conversations around specific problems. The platform structure followed those natural patterns rather than imposing a conventional forum hierarchy.",
        "The onboarding flow was designed to surface the most relevant parts of the community immediately — based on role, skills, and what the new member was looking to build or learn. First impressions were treated as the most important design problem to solve.",
        "Performance was a constraint from the start. Every feature decision was weighed against its impact on load time and responsiveness, keeping the experience smooth across the range of devices in the community.",
      ],
    },

    digitalExperience: {
      subtitle: "Designed for Builders",
      paragraphs: [
        "The interface was built with clarity and speed in mind — a developer-native aesthetic that felt purposeful rather than decorated. Dark mode was a first-class consideration, not an afterthought.",
        "Navigation was kept minimal and contextual, letting the content and connections take centre stage. Every interaction was designed to reduce friction and encourage members to contribute and connect.",
      ],
    },

    impact: {
      subtitle: "A Community That Builds Together",
      paragraphs: [
        "The platform launched with a founding cohort of members who actively shaped its early culture, establishing norms around quality contribution and mutual support.",
        "Collaboration projects started organically within the first weeks, with members pairing on side projects, sharing resources, and introducing each other to opportunities.",
        "The ecosystem continues to grow, with new members citing the quality of existing contributions as the primary reason they joined and stayed.",
      ],
    },

    testimonial: {
      quote:
        "This is the kind of community I wished existed when I was starting out. The platform makes it easy to find people who are serious about building things, and the culture reflects that.",
      name: "Community Member",
      designation: "Developer Ecosystem, An Idea Tech",
    },

    galleryImages: [
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
    ],

    tickerImages: [
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
"https://ik.imagekit.io/anideatech/ait/hero-image.webp",
    ],

    nextProject: {
      slug: "philomena-puc",
      title: "Philomena Pre-University College",
    },
  },
];

/**
 * Get all projects (data-access layer — swap with API call when migrating to backend)
 */
export function getAllProjects() {
  return projects;
}

/**
 * Get a single project by its URL slug
 * @param {string} slug
 */
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
