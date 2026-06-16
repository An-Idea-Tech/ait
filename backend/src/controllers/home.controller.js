import * as homeService from "../services/home.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

/**
 * @route   GET /api/v1/home
 * @access  Public
 */
export const getHome = asyncHandler(async (req, res) => {
  const data = await homeService.getHomeData();
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Home data fetched successfully", data));
});

/**
 * @route   GET /api/v1/admin/home/:section
 * @access  Admin
 */
export const getSection = asyncHandler(async (req, res) => {
  const data = await homeService.getSection(req.params.section);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Section fetched successfully", data));
});

/**
 * @route   PUT /api/v1/admin/home/:section
 * @access  Admin
 */
export const updateSection = asyncHandler(async (req, res) => {
  const data = await homeService.updateSection(req.params.section, req.body, req.file);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Section updated successfully", data));
});
