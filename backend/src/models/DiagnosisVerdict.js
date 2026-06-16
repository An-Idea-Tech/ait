import mongoose from "mongoose";

const diagnosisVerdictSchema = new mongoose.Schema(
  {
    verdictId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    explanation: {
      type: String,
      required: true,
    },
    pricing: {
      type: String,
      trim: true,
    },
    timeline: {
      type: String,
      trim: true,
    },
    ctaText: {
      type: String,
      default: "Talk to Us",
      trim: true,
    },
    ctaLink: {
      type: String,
      default: "/contact",
      trim: true,
    },
    secondaryCtaText: {
      type: String,
      trim: true,
    },
    secondaryCtaLink: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


const DiagnosisVerdict = mongoose.model("DiagnosisVerdict", diagnosisVerdictSchema);
export default DiagnosisVerdict;
