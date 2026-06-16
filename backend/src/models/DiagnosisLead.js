import mongoose from "mongoose";

const diagnosisLeadSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    businessName: {
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
    businessType: {
      type: String,
      trim: true,
    },
    verdictId: {
      type: String,
    },
  },
  { timestamps: true }
);

diagnosisLeadSchema.index({ sessionId: 1 });
diagnosisLeadSchema.index({ email: 1 });
diagnosisLeadSchema.index({ createdAt: -1 });

const DiagnosisLead = mongoose.model("DiagnosisLead", diagnosisLeadSchema);
export default DiagnosisLead;
