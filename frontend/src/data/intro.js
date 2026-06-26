import { FaArrowTrendUp } from "react-icons/fa6";

export const introSection = {
  heading: {
    title: "Think Bigger",
    subtitlePrefix: "and ",
    subtitleHighlight: "Creatively",
  },
  statsRow: [
    {
      icon: FaArrowTrendUp,
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
