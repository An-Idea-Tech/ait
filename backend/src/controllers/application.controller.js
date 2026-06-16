import * as applicationService from "../services/application.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

/**
 * @route   POST /api/v1/jobs/:id/apply
 * @access  Public
 */
export const apply = asyncHandler(async (req, res) => {
  const data = await applicationService.applyToJob(req.params.id, req.body, req.file);
  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(true, "Application submitted successfully. We will get in touch with you soon!", data)
  );
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const { page, limit, jobId, status } = req.query;
  const data = await applicationService.adminGetAllApplications({
    page: Number(page) || 1,
    limit: Number(limit) || 20,
    jobId,
    status,
  });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Applications fetched", data));
});

export const adminGetOne = asyncHandler(async (req, res) => {
  const data = await applicationService.adminGetApplicationById(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Application fetched", data));
});

export const updateStatus = asyncHandler(async (req, res) => {
  const data = await applicationService.updateApplicationStatus(req.params.id, req.body);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Application status updated", data));
});
