import React from "react";

export const confusionData = {
  id: "want-to-know-fit",
  title: "Want to know if we'd be a fit?",
  description: (
    <>
      Most people don't land on this page knowing exactly what they need. They have a rough idea of a problem and want to figure out which service solves it. We built a short diagnostic for exactly that.
      <br /><br />
      Run the decision tree on our homepage. Five questions, one verdict, plain English. By the end, you'll know which tier fits and which service to start with — even if the answer is don't hire us yet.
    </>
  ),
  buttons: [
    {
      id: 1,
      text: "Run the Decision Tree",
      link: "/",
      variant: "light",
    },
    {
      id: 2,
      text: "Talk to Us",
      link: "/contact",
      variant: "light",
    },
  ],
};

export const whatWeNotData = {
  titlePrefix: "What we're",
  highlightWord: "not",
  titleSuffix: ".",
  points: [
    {
      id: 1,
      text: "We're not a digital marketing agency. We don't run ad campaigns, manage social media accounts, or do influencer marketing. We can advise on strategy. We don't execute paid media.",
    },
    {
      id: 2,
      text: "We're not a SaaS product company. We build for clients. We have two AIT-owned mobile products in development (launching mid-2026), but we're a studio first.",
    },
    {
      id: 3,
      text: "We're not a consultancy that doesn't build. Aneesh runs growth consulting engagements, but most of our work is hands-on building — code shipped, websites launched, platforms running.",
    },
    {
      id: 4,
      text: "We're not a freelancer collective. Some agencies are loose collections of contractors who come together per project. We're not. We have a stable main team that works together every day, knows the same clients, and has shared operating habits. That continuity is the work.",
    },
    {
      id: 5,
      text: 'We\'re not a code-shop that takes any spec. If you walk in with a spec sheet and ask us to "just build this," we\'ll usually push back. We have opinions. We\'d rather work with founders who want a thinking partner than ones who want a vendor.',
    },
    {
      id: 6,
      text: "We're not a hyperlocal-only studio. We're based in Mangaluru, but we work with clients across India and beyond. Geography isn't a constraint on the work — it's a base from which we operate. We travel when needed.",
    },
    {
      id: 7,
      text: "We're not trying to be the biggest. We're trying to be the most useful, for the clients who fit how we work.",
    },
  ],
};

