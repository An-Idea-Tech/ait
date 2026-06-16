import Project from "../models/project.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { generateSlug, generateUniqueSlug } from "../utils/slug.util.js";
import { paginateCursor } from "../utils/pagination.util.js";
import { deleteFromCloudinary, buildImageObject } from "./upload.service.js";

const BASE_FILTER = { isDeleted: false };

export const getAllProjects = async ({ cursor, limit, category } = {}) => {
  const query = { ...BASE_FILTER, isPublished: true };
  if (category) query.category = category;
  return paginateCursor(Project, query, {
    limit,
    cursor,
    select: "title slug shortDescription coverImage category tags isFeatured createdAt",
  });
};

export const getProjectBySlug = async (slug) => {
  const project = await Project.findOne({ slug, ...BASE_FILTER, isPublished: true })
    .select("-isDeleted")
    .lean();
  if (!project) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Project not found", ERROR_CODES.NOT_FOUND);
  return project;
};

export const getFeaturedProjects = async (limit = 3) => {
  return await Project.find({ ...BASE_FILTER, isPublished: true, isFeatured: true })
    .select("title slug shortDescription results coverImage category")
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
};



// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllProjects = async ({ page = 1, limit = 20 } = {}) => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    Project.find(BASE_FILTER)
      // .select("title slug category client isFeatured isPublished createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Project.countDocuments(BASE_FILTER),
  ]);
  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
};

export const createProject = async (data, file) => {
  let slug = generateSlug(data.title);
  const exists = await Project.findOne({ slug });
  if (exists) slug = generateUniqueSlug(data.title);

  const coverImage = file ? buildImageObject(file) : undefined;

  return Project.create({ ...data, slug, ...(coverImage && { coverImage }) });
};

export const updateProject = async (id, data, file) => {
  const project = await Project.findOne({ _id: id, ...BASE_FILTER });
  if (!project) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Project not found", ERROR_CODES.NOT_FOUND);

  if (data.title && data.title !== project.title) {
    let slug = generateSlug(data.title);
    const conflict = await Project.findOne({ slug, _id: { $ne: id } });
    if (conflict) slug = generateUniqueSlug(data.title);
    data.slug = slug;
  }

  if (file) {
    if (project.coverImage?.publicId) await deleteFromCloudinary(project.coverImage.publicId);
    data.coverImage = buildImageObject(file);
  }

  return Project.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteProject = async (id) => {
  const project = await Project.findOne({ _id: id, ...BASE_FILTER });
  if (!project) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Project not found", ERROR_CODES.NOT_FOUND);
  project.isDeleted = true;
  await project.save();
};
