import FAQ from "../models/faq.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";

const BASE_FILTER = { isDeleted: false };

export const getAllFAQs = async (category) => {
  const query = { ...BASE_FILTER, isPublished: true };
  if (category) query.category = category;
  return FAQ.find(query).select("-isDeleted").sort({ order: 1 }).lean();
};

export const adminGetAllFAQs = async () => {
  return FAQ.find(BASE_FILTER).sort({ order: 1 }).lean();
};

export const createFAQ = async (data) => {
  return FAQ.create(data);
};

export const updateFAQ = async (id, data) => {
  const faq = await FAQ.findOne({ _id: id, ...BASE_FILTER });
  if (!faq) throw new ApiError(HTTP_STATUS.NOT_FOUND, "FAQ not found", ERROR_CODES.NOT_FOUND);
  return FAQ.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteFAQ = async (id) => {
  const faq = await FAQ.findOne({ _id: id, ...BASE_FILTER });
  if (!faq) throw new ApiError(HTTP_STATUS.NOT_FOUND, "FAQ not found", ERROR_CODES.NOT_FOUND);
  faq.isDeleted = true;
  await faq.save();
};
