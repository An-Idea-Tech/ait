import * as feedService from "../services/feed.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

export const getAll = asyncHandler(async (req, res) => {
  const { cursor, limit, type } = req.query;
  const data = await feedService.getAllFeeds({ cursor, limit: Number(limit) || 10, type });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Feeds fetched successfully", data));   
});

export const getOne = asyncHandler(async (req, res) => {
  const data = await feedService.getFeedById(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Feed fetched successfully", data));
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const { page, limit } = req.query;
  const data = await feedService.adminGetAllFeeds({ page: Number(page) || 1, limit: Number(limit) || 20 });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Feeds fetched", data));
});

export const create = asyncHandler(async (req, res) => {
  const data = await feedService.createFeed(req.body, req.file);
  res.status(HTTP_STATUS.CREATED).json(new ApiResponse(true, "Feed created successfully", data));
});

export const update = asyncHandler(async (req, res) => {
  const data = await feedService.updateFeed(req.params.id, req.body, req.file);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Feed updated successfully", data));
});

export const remove = asyncHandler(async (req, res) => {
  await feedService.deleteFeed(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Feed deleted successfully"));
});
