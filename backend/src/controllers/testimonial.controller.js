import * as testimonialService from "../services/testimonial.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

export const getAll = asyncHandler(async (req, res) => {
  const data = await testimonialService.getAllTestimonials();
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Testimonials fetched successfully", data));
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const data = await testimonialService.adminGetAllTestimonials();
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Testimonials fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await testimonialService.createTestimonial(req.body, req.file);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "Testimonial created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await testimonialService.updateTestimonial(req.params.id, req.body, req.file);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Testimonial updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await testimonialService.deleteTestimonial(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Testimonial deleted successfully"));
});
