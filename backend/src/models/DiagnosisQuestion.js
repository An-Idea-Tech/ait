import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
    nextQuestionId: {
      type: String,
      default: null,
    },
    verdictId: {
      type: String,
      default: null,
    },
  },
  { _id: false }
);

const diagnosisQuestionSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
      type: [optionSchema],
      required: true,
      validate: [(v) => v.length >= 2, "At least 2 options required"],
    },
    order: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


diagnosisQuestionSchema.index({ order: 1 });

const DiagnosisQuestion = mongoose.model("DiagnosisQuestion", diagnosisQuestionSchema);
export default DiagnosisQuestion;
