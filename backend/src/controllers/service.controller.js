import * as serviceService from "../services/service.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

// ── Public ─────────────────────────────────────────────────────────

/**
 * @route   GET /api/v1/services
 */
export const getAll = asyncHandler(async (req, res) => {
  const data = await serviceService.getAllServices();
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Services fetched successfully", data));
});

/**
 * @route   GET /api/v1/services/:slug
 */
export const getOne = asyncHandler(async (req, res) => {
  const data = await serviceService.getServiceBySlug(req.params.slug);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Service fetched successfully", data));
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const data = await serviceService.adminGetAllServices();
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Services fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await serviceService.createService(req.body, req.file);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "Service created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await serviceService.updateService(req.params.id, req.body, req.file);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Service updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await serviceService.deleteService(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Service deleted successfully"));
});
