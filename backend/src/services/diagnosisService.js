import { v4 as uuidv4 } from "uuid";
import DiagnosisQuestion from "../models/DiagnosisQuestion.js";
import DiagnosisVerdict from "../models/DiagnosisVerdict.js";
import DiagnosisSession from "../models/DiagnosisSession.js";
import DiagnosisLead from "../models/DiagnosisLead.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";

/**
 * Start a new diagnosis session.
 * Returns the first question and a unique sessionId.
 */
export const startSession = async (metadata = {}) => {
  const firstQuestion = await DiagnosisQuestion.findOne({ isActive: true })
    .sort({ order: 1 })
    .lean();

  if (!firstQuestion) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "No diagnosis questions configured", ERROR_CODES.NOT_FOUND);
  }

  const sessionId = uuidv4();

  await DiagnosisSession.create({
    sessionId,
    currentQuestionId: firstQuestion.questionId,
    metadata,
  });

  return {
    sessionId,
    question: {
      questionId: firstQuestion.questionId,
      text: firstQuestion.text,
      options: firstQuestion.options.map((o) => ({ label: o.label, value: o.value })),
    },
    totalQuestions: await DiagnosisQuestion.countDocuments({ isActive: true }),
    currentStep: 1,
  };
};

/**
 * Process an answer and return the next question or verdict.
 */
export const answerQuestion = async (sessionId, questionId, selectedOption) => {
  const session = await DiagnosisSession.findOne({ sessionId });
  if (!session) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "Session not found", ERROR_CODES.NOT_FOUND);
  }

  if (session.status === "completed") {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Session already completed", ERROR_CODES.VALIDATION_ERROR);
  }

  if (session.currentQuestionId !== questionId) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid question for current session state", ERROR_CODES.VALIDATION_ERROR);
  }

  const question = await DiagnosisQuestion.findOne({ questionId, isActive: true }).lean();
  if (!question) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "Question not found", ERROR_CODES.NOT_FOUND);
  }

  const option = question.options.find((o) => o.value === selectedOption);
  if (!option) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Invalid option selected", ERROR_CODES.VALIDATION_ERROR);
  }

  // Record the answer
  session.answers.push({
    questionId,
    selectedOption,
    answeredAt: new Date(),
  });

  // Determine next step
  if (option.verdictId) {
    // Flow leads to a verdict
    const verdict = await DiagnosisVerdict.findOne({ verdictId: option.verdictId, isActive: true }).lean();
    if (!verdict) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Verdict not found", ERROR_CODES.NOT_FOUND);
    }

    session.verdictId = option.verdictId;
    session.status = "completed";
    session.completedAt = new Date();
    await session.save();

    return {
      type: "verdict",
      verdict: {
        verdictId: verdict.verdictId,
        title: verdict.title,
        explanation: verdict.explanation,
        pricing: verdict.pricing,
        timeline: verdict.timeline,
        ctaText: verdict.ctaText,
        ctaLink: verdict.ctaLink,
        secondaryCtaText: verdict.secondaryCtaText,
        secondaryCtaLink: verdict.secondaryCtaLink,
      },
      answersCount: session.answers.length,
    };
  } else if (option.nextQuestionId) {
    // Flow leads to next question
    const nextQuestion = await DiagnosisQuestion.findOne({ questionId: option.nextQuestionId, isActive: true }).lean();
    if (!nextQuestion) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, "Next question not found", ERROR_CODES.NOT_FOUND);
    }

    session.currentQuestionId = option.nextQuestionId;
    await session.save();

    // Calculate step number based on answers given
    const currentStep = session.answers.length + 1;
    const totalQuestions = await DiagnosisQuestion.countDocuments({ isActive: true });

    return {
      type: "question",
      question: {
        questionId: nextQuestion.questionId,
        text: nextQuestion.text,
        options: nextQuestion.options.map((o) => ({ label: o.label, value: o.value })),
      },
      totalQuestions,
      currentStep,
    };
  } else {
    throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, "Question option has no next step configured", ERROR_CODES.INTERNAL_ERROR);
  }
};

/**
 * Submit lead capture data after verdict.
 */
export const submitLead = async (sessionId, leadData) => {
  const session = await DiagnosisSession.findOne({ sessionId }).lean();
  if (!session) {
    throw new ApiError(HTTP_STATUS.NOT_FOUND, "Session not found", ERROR_CODES.NOT_FOUND);
  }

  if (session.status !== "completed") {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Session is not completed yet", ERROR_CODES.VALIDATION_ERROR);
  }

  // Check if lead already submitted for this session
  const existingLead = await DiagnosisLead.findOne({ sessionId }).lean();
  if (existingLead) {
    throw new ApiError(HTTP_STATUS.CONFLICT, "Lead already submitted for this session", ERROR_CODES.CONFLICT);
  }

  const lead = await DiagnosisLead.create({
    sessionId,
    verdictId: session.verdictId,
    ...leadData,
  });

  return lead;
};

/**
 * Get diagnosis analytics for admin dashboard.
 */
export const getAnalytics = async () => {
  const [
    totalSessions,
    completedSessions,
    totalLeads,
    verdictDistribution,
    recentLeads,
  ] = await Promise.all([
    DiagnosisSession.countDocuments(),
    DiagnosisSession.countDocuments({ status: "completed" }),
    DiagnosisLead.countDocuments(),
    DiagnosisSession.aggregate([
      { $match: { status: "completed", verdictId: { $ne: null } } },
      { $group: { _id: "$verdictId", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]),
    DiagnosisLead.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .lean(),
  ]);

  const completionRate = totalSessions > 0
    ? Math.round((completedSessions / totalSessions) * 100)
    : 0;

  const leadConversionRate = completedSessions > 0
    ? Math.round((totalLeads / completedSessions) * 100)
    : 0;

  return {
    totalSessions,
    completedSessions,
    completionRate,
    totalLeads,
    leadConversionRate,
    verdictDistribution,
    recentLeads,
  };
};
