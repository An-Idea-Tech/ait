import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["full-time", "part-time", "contract", "internship", "remote"],
      required: true,
    },
    experience: {
      type: String, // e.g. "2-4 years"
    },
    salary: {
      min: Number,
      max: Number,
      currency: { type: String, default: "INR" },
      isVisible: { type: Boolean, default: false },
    },
    description: {
      type: String,
      required: true,
    },
    responsibilities: [String],
    requirements: [String],
    niceToHave: [String],
    benefits: [String],
    applyDeadline: {
      type: Date,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

jobSchema.index({ isOpen: 1, createdAt: -1 });
jobSchema.index({ department: 1 });

const Job = mongoose.model("Job", jobSchema);
export default Job;
