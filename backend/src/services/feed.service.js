import Feed from "../models/feed.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { paginateCursor } from "../utils/pagination.util.js";
import { deleteFromCloudinary, buildImageObject } from "./upload.service.js";

const BASE_FILTER = { isDeleted: false };

export const getAllFeeds = async ({ cursor, limit, type } = {}) => {
  const query = { ...BASE_FILTER, isPublished: true };
  if (type) query.type = type;
  return paginateCursor(Feed, query, { limit, cursor });
};

export const getFeedById = async (id) => {
  const feed = await Feed.findOne({ _id: id, ...BASE_FILTER, isPublished: true }).lean();
  if (!feed) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Feed not found", ERROR_CODES.NOT_FOUND);
  return feed;
};

export const getLatestFeeds = async (limit = 3) => {
  return Feed.find({ ...BASE_FILTER, isPublished: true })
    .select("title content type image createdAt")
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
};

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllFeeds = async ({ page = 1, limit = 20 } = {}) => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    Feed.find(BASE_FILTER)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Feed.countDocuments(BASE_FILTER),
  ]);
  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
};

export const createFeed = async (data, file) => {
  const image = file ? buildImageObject(file) : undefined;
  return Feed.create({ ...data, ...(image && { image }) });
};

export const updateFeed = async (id, data, file) => {
  const feed = await Feed.findOne({ _id: id, ...BASE_FILTER });
  if (!feed) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Feed not found", ERROR_CODES.NOT_FOUND);

  if (file) {
    if (feed.image?.publicId) await deleteFromCloudinary(feed.image.publicId);
    data.image = buildImageObject(file);
  }

  return Feed.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteFeed = async (id) => {
  const feed = await Feed.findOne({ _id: id, ...BASE_FILTER });
  if (!feed) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Feed not found", ERROR_CODES.NOT_FOUND);
  feed.isDeleted = true;
  await feed.save();
};
