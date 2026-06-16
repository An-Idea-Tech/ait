import * as diagnosisService from "../services/diagnosisService.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

/**
 * @route   POST /api/v1/diagnosis
 * @access  Public
 */
export const start = asyncHandler(async (req, res) => {
  const metadata = {
    userAgent: req.headers["user-agent"],
    ip: req.ip,
    referrer: req.body?.metadata?.referrer || req.headers.referer || "",
  };
  const data = await diagnosisService.startSession(metadata);
  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(true, "Diagnosis session started", data)
  );
});

/**
 * @route   POST /api/v1/diagnosis/answer
 * @access  Public
 */
export const answer = asyncHandler(async (req, res) => {
  const { sessionId, questionId, selectedOption } = req.body;
  const data = await diagnosisService.answerQuestion(sessionId, questionId, selectedOption);
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(true, "Answer processed", data)
  );
});

/**
 * @route   POST /api/v1/diagnosis/lead
 * @access  Public
 */
export const submitLead = asyncHandler(async (req, res) => {
  const { sessionId, ...leadData } = req.body;
  const data = await diagnosisService.submitLead(sessionId, leadData);
  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(true, "Thank you! We will reach out to you shortly.", data)
  );
});

/**
 * @route   GET /api/v1/admin/diagnosis/analytics
 * @access  Admin
 */
export const getAnalytics = asyncHandler(async (req, res) => {
  const data = await diagnosisService.getAnalytics();
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(true, "Diagnosis analytics fetched", data)
  );
});
