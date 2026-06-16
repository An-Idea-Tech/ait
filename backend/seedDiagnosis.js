import mongoose from "mongoose";
import dotenv from "dotenv";
import DiagnosisQuestion from "./src/models/DiagnosisQuestion.js";
import DiagnosisVerdict from "./src/models/DiagnosisVerdict.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/anideatech";

const questions = [
  {
    questionId: "q1",
    text: "Are you already getting customers — through WhatsApp, walk-ins, referrals, or word of mouth?",
    order: 1,
    options: [
      { label: "Yes", value: "yes", nextQuestionId: "q3", verdictId: null },
      { label: "No", value: "no", nextQuestionId: "q2", verdictId: null },
    ],
  },
  {
    questionId: "q2",
    text: "Have you talked to 10 paying customers in the last 30 days?",
    order: 2,
    options: [
      { label: "Yes", value: "yes", nextQuestionId: null, verdictId: "verdictB" },
      { label: "No", value: "no", nextQuestionId: null, verdictId: "verdictA" },
    ],
  },
  {
    questionId: "q3",
    text: "Are you handling more than 50 customers a month, or losing track of orders, leads, or follow-ups?",
    order: 3,
    options: [
      { label: "Yes", value: "yes", nextQuestionId: "q4", verdictId: null },
      { label: "No", value: "no", nextQuestionId: null, verdictId: "verdictB" },
    ],
  },
  {
    questionId: "q4",
    text: "Do you need this to run automatically, or are you fine managing it manually for now?",
    order: 4,
    options: [
      { label: "Manual for now", value: "manual", nextQuestionId: null, verdictId: "verdictC" },
      { label: "Automatic", value: "automatic", nextQuestionId: null, verdictId: "verdictD" },
    ],
  },
];

const verdicts = [
  {
    verdictId: "verdictA",
    title: "You don't need a website yet.",
    explanation:
      "Your business hasn't validated demand yet. Before investing in a website or platform, you need to prove that people will pay for what you offer. Focus on talking to potential customers, running small experiments, and getting your first 10 paying clients. Once you have real traction, come back — we'll build exactly what you need.",
    pricing: null,
    timeline: null,
    ctaText: "Talk to Us Anyway",
    ctaLink: "/contact",
    secondaryCtaText: null,
    secondaryCtaLink: null,
  },
  {
    verdictId: "verdictB",
    title: "You need a landing page + WhatsApp flow.",
    explanation:
      "You have early traction — customers are coming in, but you don't have a system to capture and convert them online. A focused landing page with a WhatsApp integration will let you capture leads, build trust, and convert visitors without the overhead of a full website.",
    pricing: "₹30K – ₹55K",
    timeline: "1–2 weeks",
    ctaText: "Book Strategy Call",
    ctaLink: "/contact",
    secondaryCtaText: "Request Proposal",
    secondaryCtaLink: "/contact",
  },
  {
    verdictId: "verdictC",
    title: "You need a proper website with systems behind it.",
    explanation:
      "Your business is growing and you're starting to feel the operational strain. You need more than a landing page — you need a website with lead capture, CRM integration, analytics, and possibly a booking system. This is the stage where most businesses start losing leads because they don't have proper digital infrastructure.",
    pricing: "₹80K – ₹2L",
    timeline: "4–8 weeks",
    ctaText: "Book Strategy Call",
    ctaLink: "/contact",
    secondaryCtaText: "Request Proposal",
    secondaryCtaLink: "/contact",
  },
  {
    verdictId: "verdictD",
    title: "You need a custom platform.",
    explanation:
      "You've outgrown what a website can do. Your business needs custom workflows — inventory management, automated follow-ups, dashboards, booking engines, or multi-user systems. This is a platform build, not a website build. It requires proper architecture, planning, and engineering.",
    pricing: "₹2.5L – ₹12L",
    timeline: "8–16 weeks",
    ctaText: "Book Strategy Call",
    ctaLink: "/contact",
    secondaryCtaText: "Request Proposal",
    secondaryCtaLink: "/contact",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Clear existing data
    await DiagnosisQuestion.deleteMany({});
    await DiagnosisVerdict.deleteMany({});
    console.log("Cleared existing diagnosis questions and verdicts");

    // Insert questions
    await DiagnosisQuestion.insertMany(questions);
    console.log(`Inserted ${questions.length} diagnosis questions`);

    // Insert verdicts
    await DiagnosisVerdict.insertMany(verdicts);
    console.log(`Inserted ${verdicts.length} diagnosis verdicts`);

    console.log("\nDiagnosis seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();
