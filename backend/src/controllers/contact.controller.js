import * as contactService from "../services/contact.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

/**
 * @route   POST /api/v1/contact
 * @access  Public
 */
export const submit = asyncHandler(async (req, res) => {
  const data = await contactService.submitContact(req.body);
  res.status(HTTP_STATUS.CREATED).json(
    new ApiResponse(true, "Thank you for reaching out! We will get back to you within 24 hours.", data)
  );
});

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAll = asyncHandler(async (req, res) => {
  const { page, limit, status } = req.query;
  const data = await contactService.adminGetAllContacts({ page: Number(page) || 1, limit: Number(limit) || 20, status });
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Contacts fetched", data));
});

export const adminGetOne = asyncHandler(async (req, res) => {
  const data = await contactService.adminGetContactById(req.params.id);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Contact fetched", data));
});

export const updateStatus = asyncHandler(async (req, res) => {
  const data = await contactService.updateContactStatus(req.params.id, req.body);
  res.status(HTTP_STATUS.OK).json(new ApiResponse(true, "Contact status updated", data));
});
