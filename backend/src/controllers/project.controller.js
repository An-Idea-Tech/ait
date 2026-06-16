import * as projectService from "../services/project.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

// ── Public ─────────────────────────────────────────────────────────

export const getAll = asyncHandler(async (req, res) => {
  const { cursor, limit, category } = req.query;
  const data = await projectService.getAllProjects({ cursor, limit: Number(limit) || 9, category });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Projects fetched successfully", data));
});

export const getOne = asyncHandler(async (req, res) => {
  const data = await projectService.getProjectBySlug(req.params.slug);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Project fetched successfully", data));
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const data = await projectService.adminGetAllProjects({ page: Number(page) || 1, limit: Number(limit) || 20 });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Projects fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await projectService.createProject(req.body, req.file);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "Project created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await projectService.updateProject(req.params.id, req.body, req.file);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Project updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await projectService.deleteProject(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Project deleted successfully"));
});
