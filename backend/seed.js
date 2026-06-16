/**
 * Seed Script — An Idea Tech Backend
 * Run with: node seed.js
 *
 * Seeds:
 *  - Admin user
 *  - Services (3)
 *  - Projects (3)
 *  - Blogs (2)
 *  - Testimonials (2)
 *  - FAQs (3)
 *  - Jobs (2)
 *  - Home sections (Hero, Metrics, About, HowWeWork, ContactInfo)
 */

import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./src/configs/db.js";

import User from "./src/models/user.model.js";
import Service from "./src/models/service.model.js";
import Project from "./src/models/project.model.js";
import Blog from "./src/models/blog.model.js";
import Testimonial from "./src/models/testimonial.model.js";
import FAQ from "./src/models/faq.model.js";
import Job from "./src/models/job.model.js";
import { Hero, Metrics, About, HowWeWork, ContactInfo } from "./src/models/homeSection.model.js";

import { generateSlug } from "./src/utils/slug.util.js";

const seed = async () => {
  await connectDB();
  console.log("🌱 Starting seed...\n");

  // ── Cleanup ──────────────────────────────────────────────────────
  await Promise.all([
    User.deleteMany({}),
    Service.deleteMany({}),
    Project.deleteMany({}),
    Blog.deleteMany({}),
    Testimonial.deleteMany({}),
    FAQ.deleteMany({}),
    Job.deleteMany({}),
    Hero.deleteMany({}),
    Metrics.deleteMany({}),
    About.deleteMany({}),
    HowWeWork.deleteMany({}),
    ContactInfo.deleteMany({}),
  ]);
  console.log("✅ Cleared existing data");

  // ── Admin User ───────────────────────────────────────────────────
  await User.create({
    name: "An Idea Tech Admin",
    email: "admin@anideatech.com",
    password: "Admin@1234",
    role: "admin",
  });
  console.log("✅ Admin user: admin@anideatech.com / Admin@1234");

  // ── Services ─────────────────────────────────────────────────────
  const servicesData = [
    {
      title: "Web Development",
      shortDescription: "Cutting-edge websites and web applications tailored to your business.",
      description: "We build scalable, performant, and beautiful web applications using modern technologies like React, Next.js, and Node.js.",
      icon: "code",
      features: [
        { title: "Custom Design", description: "Pixel-perfect UI tailored to your brand" },
        { title: "Fast Performance", description: "Optimized for speed and Core Web Vitals" },
        { title: "SEO Ready", description: "Built with search engines in mind" },
      ],
      order: 1,
    },
    {
      title: "Mobile App Development",
      shortDescription: "Native and cross-platform mobile apps for iOS and Android.",
      description: "From concept to App Store, we build beautiful mobile apps using React Native and Flutter.",
      icon: "smartphone",
      order: 2,
    },
    {
      title: "UI/UX Design",
      shortDescription: "Design that converts visitors into customers.",
      description: "Our design team creates stunning interfaces backed by solid UX research, wireframing, and user testing.",
      icon: "palette",
      order: 3,
    },
  ];
  await Service.insertMany(
    servicesData.map((s) => ({ ...s, slug: generateSlug(s.title) }))
  );
  console.log("✅ 3 Services seeded");

  // ── Projects ─────────────────────────────────────────────────────
  await Project.insertMany([
    {
      title: "EduLearn Platform",
      slug: generateSlug("EduLearn Platform"),
      client: "EduLearn Inc.",
      category: "EdTech",
      shortDescription: "A full-featured LMS for online education.",
      problem: "The client needed a scalable LMS to serve 50,000+ students with real-time collaboration.",
      solution: "Built a microservices-based platform with live classes, quizzes, and progress tracking.",
      results: "Reduced dropout rates by 35% and increased course completion by 60%.",
      metrics: [
        { label: "Students Onboarded", value: "50K+" },
        { label: "Course Completion Rate", value: "60%" },
        { label: "NPS Score", value: "78" },
      ],
      isFeatured: true,
      isPublished: true,
    },
    {
      title: "FinTrack Dashboard",
      slug: generateSlug("FinTrack Dashboard"),
      client: "FinTrack Ltd.",
      category: "FinTech",
      shortDescription: "Real-time financial analytics dashboard.",
      problem: "Finance teams were using siloed spreadsheets causing costly delays in reporting.",
      solution: "Built a unified dashboard aggregating data from 10+ sources with real-time charts.",
      results: "Saved 20 hours/week per analyst and reduced reporting errors by 90%.",
      metrics: [
        { label: "Time Saved Weekly", value: "20hrs" },
        { label: "Error Reduction", value: "90%" },
      ],
      isFeatured: true,
      isPublished: true,
    },
    {
      title: "GreenMart E-commerce",
      slug: generateSlug("GreenMart E-commerce"),
      client: "GreenMart",
      category: "E-commerce",
      shortDescription: "Sustainable products marketplace with 10K+ SKUs.",
      problem: "Legacy e-commerce platform couldn't handle flash sales causing 30% revenue loss.",
      solution: "Re-platformed to a headless architecture with Redis caching and CDN delivery.",
      results: "Handled 5x traffic spikes, 0 downtime during peak sales.",
      metrics: [
        { label: "Uptime During Sales", value: "99.99%" },
        { label: "Revenue Increase", value: "42%" },
      ],
      isFeatured: true,
      isPublished: true,
    },
  ]);
  console.log("✅ 3 Projects seeded");

  // ── Blogs ────────────────────────────────────────────────────────
  await Blog.insertMany([
    {
      title: "10 Web Development Trends to Watch in 2025",
      slug: generateSlug("10 Web Development Trends to Watch in 2025"),
      excerpt: "From AI-driven UIs to edge computing — here are the trends shaping the web in 2025.",
      content: "Full article content goes here...",
      author: "An Idea Tech Team",
      category: "Technology",
      tags: ["web", "trends", "2025"],
      readTime: 6,
      isPublished: true,
      publishedAt: new Date(),
    },
    {
      title: "Why Clean Architecture Matters for Startups",
      slug: generateSlug("Why Clean Architecture Matters for Startups"),
      excerpt: "Skip the technical debt trap by adopting clean architecture from day one.",
      content: "Full article content goes here...",
      author: "An Idea Tech Team",
      category: "Engineering",
      tags: ["architecture", "startups", "backend"],
      readTime: 8,
      isPublished: true,
      publishedAt: new Date(),
    },
  ]);
  console.log("✅ 2 Blogs seeded");

  // ── Testimonials ─────────────────────────────────────────────────
  await Testimonial.insertMany([
    {
      name: "Priya Sharma",
      designation: "CTO",
      company: "EduLearn Inc.",
      rating: 5,
      testimonial: "An Idea Tech delivered our platform on time and beyond expectations. The team's technical depth is unmatched.",
      order: 1,
    },
    {
      name: "Rahul Mehta",
      designation: "Founder",
      company: "GreenMart",
      rating: 5,
      testimonial: "They didn't just build a website — they built our business. Sales increased 42% after the relaunch.",
      order: 2,
    },
  ]);
  console.log("✅ 2 Testimonials seeded");

  // ── FAQs ─────────────────────────────────────────────────────────
  await FAQ.insertMany([
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in React, Next.js, Node.js, MongoDB, React Native, and Flutter — covering the full product lifecycle.",
      category: "Services",
      order: 1,
    },
    {
      question: "How long does a typical project take?",
      answer: "Simple websites take 2–4 weeks. Complex web apps take 2–6 months depending on requirements and scope.",
      category: "Process",
      order: 2,
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes. We offer monthly retainer plans for ongoing maintenance, feature additions, and 24/7 monitoring.",
      category: "Support",
      order: 3,
    },
  ]);
  console.log("✅ 3 FAQs seeded");

  // ── Jobs ─────────────────────────────────────────────────────────
  await Job.insertMany([
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote / Bengaluru",
      type: "full-time",
      experience: "3–5 years",
      description: "We are looking for a Senior React Developer to build world-class frontend experiences.",
      responsibilities: ["Build reusable component libraries", "Optimize for performance", "Collaborate with design team"],
      requirements: ["3+ years React experience", "TypeScript proficiency", "Strong CSS/Tailwind skills"],
      benefits: ["Competitive salary", "Flexible hours", "ESOP options"],
      isOpen: true,
    },
    {
      title: "Node.js Backend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "full-time",
      experience: "2–4 years",
      description: "Join our backend team to build APIs that power digital products for global clients.",
      responsibilities: ["Design REST APIs", "Optimize MongoDB queries", "Write unit & integration tests"],
      requirements: ["Strong Node.js/Express", "MongoDB expertise", "Understanding of clean architecture"],
      benefits: ["100% remote", "Learning budget", "Health insurance"],
      isOpen: true,
    },
  ]);
  console.log("✅ 2 Jobs seeded");

  // ── Home Sections ─────────────────────────────────────────────────
  await Hero.create({
    headline: "We Build Digital Products That Drive Growth",
    subheadline: "Full-stack agency specializing in web apps, mobile, and design — from MVP to scale.",
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    badgeText: "🚀 Trusted by 50+ Startups",
  });

  await Metrics.create({
    sectionTitle: "Numbers That Speak",
    metrics: [
      { label: "Projects Delivered", value: "120", suffix: "+", order: 1 },
      { label: "Happy Clients", value: "80",  suffix: "+", order: 2 },
      { label: "Team Members",  value: "25",  suffix: "+", order: 3 },
      { label: "Years of Experience", value: "5", suffix: "+", order: 4 },
    ],
  });

  await About.create({
    heading: "We Are An Idea Tech",
    subheading: "Your growth is our mission",
    description: "An Idea Tech is a full-service digital agency that transforms ideas into high-performing digital products. From strategy to launch — and beyond.",
    highlights: ["Product-first mindset", "Agile delivery", "Post-launch support"],
    ctaText: "Meet the Team",
    ctaLink: "/about",
  });

  await HowWeWork.create({
    sectionTitle: "Our Process",
    sectionSubtitle: "Simple, transparent, and effective",
    steps: [
      { step: 1, title: "Discovery", description: "We deep-dive into your business goals, users, and technical needs.", icon: "search" },
      { step: 2, title: "Design",    description: "We create wireframes and high-fidelity designs aligned with your brand.", icon: "figma" },
      { step: 3, title: "Build",     description: "Our engineers build clean, scalable code with daily progress updates.", icon: "code" },
      { step: 4, title: "Launch",    description: "We deploy, test, and hand over — with full documentation.", icon: "rocket" },
    ],
  });

  await ContactInfo.create({
    email: "hello@anideatech.com",
    phone: "+91 98765 43210",
    address: "Suite 101, Tech Park, Bengaluru, Karnataka 560001, India",
    socialLinks: {
      linkedin:  "https://linkedin.com/company/anideatech",
      twitter:   "https://twitter.com/anideatech",
      instagram: "https://instagram.com/anideatech",
    },
  });

  console.log("✅ Home sections seeded");
  console.log("\n🎉 Seed complete! Admin: admin@anideatech.com / Admin@1234");

  await mongoose.connection.close();
  process.exit(0);
};

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  mongoose.connection.close();
  process.exit(1);
});
