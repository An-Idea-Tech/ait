import Contact from "../models/contact.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { paginateCursor } from "../utils/pagination.util.js";

export const submitContact = async (data) => {
  return Contact.create(data);
};

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllContacts = async ({ page = 1, limit = 20, status } = {}) => {
  const query = {};
  if (status) query.status = status;
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    Contact.find(query)
      .select("name email phone companyName status bookingDate createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Contact.countDocuments(query),
  ]);
  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
};

export const adminGetContactById = async (id) => {
  const contact = await Contact.findById(id).lean();
  if (!contact) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Contact not found", ERROR_CODES.NOT_FOUND);
  return contact;
};

export const updateContactStatus = async (id, data) => {
  const contact = await Contact.findById(id);
  if (!contact) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Contact not found", ERROR_CODES.NOT_FOUND);
  return Contact.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};
