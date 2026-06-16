import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    resume: {
      url: { type: String, required: true },
      publicId: String,
      originalName: String,
    },
    portfolioLinks: [String],
    coverLetter: {
      type: String,
    },
    agreementAccepted: {
      type: Boolean,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "reviewing", "shortlisted", "rejected", "hired"],
      default: "pending",
    },
    adminNotes: {
      type: String,
      select: false, // hidden from public responses
    },
  },
  { timestamps: true }
);

applicationSchema.index({ job: 1, createdAt: -1 });
applicationSchema.index({ email: 1 });
applicationSchema.index({ status: 1 });

const Application = mongoose.model("Application", applicationSchema);
export default Application;
