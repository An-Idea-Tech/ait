import * as jobService from "../services/job.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

export const getAll = asyncHandler(async (req, res) => {
  const { cursor, limit, department, type } = req.query;
  const data = await jobService.getAllJobs({ cursor, limit: Number(limit) || 10, department, type });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Jobs fetched successfully", data));
});

export const getOne = asyncHandler(async (req, res) => {
  const data = await jobService.getJobById(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Job fetched successfully", data));
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const data = await jobService.adminGetAllJobs({ page: Number(page) || 1, limit: Number(limit) || 20 });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Jobs fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await jobService.createJob(req.body);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "Job created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await jobService.updateJob(req.params.id, req.body);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Job updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await jobService.deleteJob(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Job deleted successfully"));
});
