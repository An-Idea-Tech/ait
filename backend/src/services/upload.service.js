import cloudinary from "../configs/cloudinary.config.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";

/**
 * Delete a file from Cloudinary by its public ID.
 * Used when replacing or deleting images/resumes.
 */
export const deleteFromCloudinary = async (publicId, resourceType = "image") => {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
  } catch (err) {
    // Non-fatal — log and continue
    console.error(`[Cloudinary] Failed to delete ${publicId}:`, err.message);
  }
};

/**
 * Build a uniform image object from a multer-cloudinary uploaded file.
 * @param {Express.Multer.File} file
 * @returns {{ url: string, publicId: string }}
 */
export const buildImageObject = (file) => {
  if (!file) throw new ApiError(HTTP_STATUS.BAD_REQUEST, "File is required", ERROR_CODES.UPLOAD_ERROR);
  return {
    url: file.path,        // multer-storage-cloudinary sets path = secure_url
    publicId: file.filename, // sets filename = public_id
  };
};

/**
 * Build a resume object from an uploaded file.
 */
export const buildResumeObject = (file) => {
  if (!file) throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Resume file is required", ERROR_CODES.UPLOAD_ERROR);
  return {
    url: file.path,
    publicId: file.filename,
    originalName: file.originalname,
  };
};
