import mongoose from "mongoose";

/* ─── Hero Section ─────────────────────────────────────────────── */
const heroSchema = new mongoose.Schema({
  headline: { type: String, required: true },
  subheadline: { type: String },
  ctaText: { type: String },
  ctaLink: { type: String },
  backgroundImage: {
    url: String,
    publicId: String,
  },
  badgeText: { type: String },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

/* ─── Metrics/Stats Section ────────────────────────────────────── */
const metricSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
  suffix: { type: String }, // e.g. "+", "%"
  order: { type: Number, default: 0 },
}, { _id: false });

const metricsSchema = new mongoose.Schema({
  sectionTitle: { type: String },
  metrics: [metricSchema],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

/* ─── About Section ────────────────────────────────────────────── */
const aboutSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  subheading: { type: String },
  description: { type: String, required: true },
  image: { url: String, publicId: String },
  highlights: [String],
  ctaText: { type: String },
  ctaLink: { type: String },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

/* ─── How We Work Section ──────────────────────────────────────── */
const stepSchema = new mongoose.Schema({
  step: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
}, { _id: false });

const howWeWorkSchema = new mongoose.Schema({
  sectionTitle: { type: String },
  sectionSubtitle: { type: String },
  steps: [stepSchema],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

/* ─── Contact Info Section ─────────────────────────────────────── */
const contactInfoSchema = new mongoose.Schema({
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  mapEmbedUrl: { type: String },
  socialLinks: {
    linkedin: String,
    twitter: String,
    instagram: String,
    facebook: String,
    github: String,
  },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const Hero          = mongoose.model("Hero", heroSchema);
export const Metrics       = mongoose.model("Metrics", metricsSchema);
export const About         = mongoose.model("About", aboutSchema);
export const HowWeWork     = mongoose.model("HowWeWork", howWeWorkSchema);
export const ContactInfo   = mongoose.model("ContactInfo", contactInfoSchema);
