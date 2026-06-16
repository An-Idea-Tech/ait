import * as blogService from "../services/blog.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

export const getAll = asyncHandler(async (req, res) => {
  const { cursor, limit, category } = req.query;
  const data = await blogService.getAllBlogs({ cursor, limit: Number(limit) || 9, category });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Blogs fetched successfully", data));
});

export const getOne = asyncHandler(async (req, res) => {
  const data = await blogService.getBlogBySlug(req.params.slug);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Blog fetched successfully", data));
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const data = await blogService.adminGetAllBlogs({ page: Number(page) || 1, limit: Number(limit) || 20 });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Blogs fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await blogService.createBlog(req.body, req.file);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "Blog created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await blogService.updateBlog(req.params.id, req.body, req.file);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Blog updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await blogService.deleteBlog(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Blog deleted successfully"));
});
