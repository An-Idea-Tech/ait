import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
    answeredAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const diagnosisSessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },
    answers: {
      type: [answerSchema],
      default: [],
    },
    currentQuestionId: {
      type: String,
      required: true,
    },
    verdictId: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["in_progress", "completed", "abandoned"],
      default: "in_progress",
    },
    completedAt: {
      type: Date,
      default: null,
    },
    metadata: {
      userAgent: String,
      ip: String,
      referrer: String,
    },
  },
  { timestamps: true }
);

diagnosisSessionSchema.index({ sessionId: 1 });
diagnosisSessionSchema.index({ status: 1, createdAt: -1 });
diagnosisSessionSchema.index({ verdictId: 1 });

const DiagnosisSession = mongoose.model("DiagnosisSession", diagnosisSessionSchema);
export default DiagnosisSession;
