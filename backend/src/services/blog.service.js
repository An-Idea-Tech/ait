import Blog from "../models/blog.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { generateSlug, generateUniqueSlug } from "../utils/slug.util.js";
import { paginateCursor } from "../utils/pagination.util.js";
import { deleteFromCloudinary, buildImageObject } from "./upload.service.js";

const BASE_FILTER = { isDeleted: false };

export const getAllBlogs = async ({ cursor, limit, category } = {}) => {
  const query = { ...BASE_FILTER, isPublished: true };
  if (category) query.category = category;
  return paginateCursor(Blog, query, {
    limit,
    cursor,
    select: "title slug excerpt coverImage author category tags readTime publishedAt createdAt",
    sort: { publishedAt: -1, _id: -1 },
  });
};

export const getBlogBySlug = async (slug) => {
  const blog = await Blog.findOne({ slug, ...BASE_FILTER, isPublished: true })
    .select("-isDeleted")
    .lean();
  if (!blog) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Blog post not found", ERROR_CODES.NOT_FOUND);
  return blog;
};

export const getLatestBlogs = async (limit = 3) => {
  return Blog.find({ ...BASE_FILTER, isPublished: true })
    .select("title slug excerpt coverImage author publishedAt createdAt")
    .sort({ publishedAt: -1 })
    .limit(limit)
    .lean();
};

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllBlogs = async ({ page = 1, limit = 20 } = {}) => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    Blog.find(BASE_FILTER)
      .select("title coverImage slug excerpt content author category isPublished publishedAt createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Blog.countDocuments(BASE_FILTER),
  ]);
  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
};

export const createBlog = async (data, file) => {
  let slug = generateSlug(data.title);
  const exists = await Blog.findOne({ slug });
  if (exists) slug = generateUniqueSlug(data.title);

  const coverImage = file ? buildImageObject(file) : undefined;

  return Blog.create({ ...data, slug, ...(coverImage && { coverImage }) });
};

export const updateBlog = async (id, data, file) => {
  const blog = await Blog.findOne({ _id: id, ...BASE_FILTER });
  if (!blog) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Blog post not found", ERROR_CODES.NOT_FOUND);

  if (data.title && data.title !== blog.title) {
    let slug = generateSlug(data.title);
    const conflict = await Blog.findOne({ slug, _id: { $ne: id } });
    if (conflict) slug = generateUniqueSlug(data.title);
    data.slug = slug;
  }

  if (file) {
    if (blog.coverImage?.publicId) await deleteFromCloudinary(blog.coverImage.publicId);
    data.coverImage = buildImageObject(file);
  }

  return Blog.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteBlog = async (id) => {
  const blog = await Blog.findOne({ _id: id, ...BASE_FILTER });
  if (!blog) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Blog post not found", ERROR_CODES.NOT_FOUND);
  blog.isDeleted = true;
  await blog.save();
};
