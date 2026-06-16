import * as faqService from "../services/faq.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

export const getAll = asyncHandler(async (req, res) => {
  const data = await faqService.getAllFAQs(req.query.category);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "FAQs fetched successfully", data));
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const data = await faqService.adminGetAllFAQs();
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "FAQs fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await faqService.createFAQ(req.body);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "FAQ created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await faqService.updateFAQ(req.params.id, req.body);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "FAQ updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await faqService.deleteFAQ(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "FAQ deleted successfully"));
});
