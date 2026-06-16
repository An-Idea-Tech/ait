import Testimonial from "../models/testimonial.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { deleteFromCloudinary, buildImageObject } from "./upload.service.js";

const BASE_FILTER = { isDeleted: false };

export const getAllTestimonials = async () => {
  return Testimonial.find({ ...BASE_FILTER, isPublished: true })
    .select("-isDeleted")
    .sort({ order: 1, createdAt: -1 })
    .lean();
};

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllTestimonials = async () => {
  return Testimonial.find(BASE_FILTER).select("-isDeleted").sort({ order: 1 }).lean();
};

export const createTestimonial = async (data, file) => {
  const avatar = file ? buildImageObject(file) : undefined;
  console.log("data:",data,"file:",file)
  return Testimonial.create({ ...data, ...(avatar && { avatar }) });
};

export const updateTestimonial = async (id, data, file) => {
  const testimonial = await Testimonial.findOne({ _id: id, ...BASE_FILTER });
  if (!testimonial) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Testimonial not found", ERROR_CODES.NOT_FOUND);

  if (file) {
    if (testimonial.avatar?.publicId) await deleteFromCloudinary(testimonial.avatar.publicId);
    data.avatar = buildImageObject(file);
  }

  return Testimonial.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteTestimonial = async (id) => {
  const testimonial = await Testimonial.findOne({ _id: id, ...BASE_FILTER });
  if (!testimonial) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Testimonial not found", ERROR_CODES.NOT_FOUND);
  testimonial.isDeleted = true;
  await testimonial.save();
};
