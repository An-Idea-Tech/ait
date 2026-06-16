import Service from "../models/service.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { generateSlug, generateUniqueSlug } from "../utils/slug.util.js";
import { deleteFromCloudinary, buildImageObject } from "./upload.service.js";

const BASE_FILTER = { isDeleted: false };

export const getAllServices = async () => {
  return Service.find({ ...BASE_FILTER, isPublished: true })
    .select("-isDeleted")
    .sort({ order: 1, createdAt: -1 })
    .lean();
};

export const getServiceBySlug = async (slug) => {
  const service = await Service.findOne({ slug, ...BASE_FILTER, isPublished: true })
    .select("-isDeleted")
    .lean();
  if (!service) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Service not found", ERROR_CODES.NOT_FOUND);
  return service;
};

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllServices = async () => {
  return Service.find(BASE_FILTER).select("-isDeleted").sort({ order: 1 }).lean();
};

export const createService = async (data, file) => {
  let slug = generateSlug(data.title);
  const exists = await Service.findOne({ slug });
  if (exists) slug = generateUniqueSlug(data.title);

  const image = file ? buildImageObject(file) : undefined;

  return Service.create({ ...data, slug, ...(image && { image }) });
};

export const updateService = async (id, data, file) => {
  const service = await Service.findOne({ _id: id, ...BASE_FILTER });
  if (!service) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Service not found", ERROR_CODES.NOT_FOUND);

  if (data.title && data.title !== service.title) {
    let slug = generateSlug(data.title);
    const exists = await Service.findOne({ slug, _id: { $ne: id } });
    if (exists) slug = generateUniqueSlug(data.title);
    data.slug = slug;
  }

  if (file) {
    if (service.image?.publicId) await deleteFromCloudinary(service.image.publicId);
    data.image = buildImageObject(file);
  }

  return Service.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteService = async (id) => {
  const service = await Service.findOne({ _id: id, ...BASE_FILTER });
  if (!service) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Service not found", ERROR_CODES.NOT_FOUND);
  service.isDeleted = true;
  await service.save();
};
