import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../configs/cloudinary.config.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";

/** Build a Cloudinary-backed multer storage for a given folder */
const buildStorage = (folder, allowedFormats) =>
  new CloudinaryStorage({
    cloudinary,
    params: {
      folder: `anideatech/${folder}`,
      allowed_formats: allowedFormats,
      transformation: [{ quality: "auto", fetch_format: "auto" }],
    },
  });

/** Generic file filter */
const fileFilter = (allowedMimes) => (req, file, cb) => {
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        `Invalid file type: ${file.mimetype}`,
        ERROR_CODES.UPLOAD_ERROR
      ),
      false
    );
  }
};

const IMAGE_MIMES = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/svg+xml"];
const RESUME_MIMES = ["application/pdf", "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

/** Image upload — 5 MB max */
export const uploadImage = multer({
  storage: buildStorage("images", ["jpg", "jpeg", "png", "webp", "gif", "svg"]),
  fileFilter: fileFilter(IMAGE_MIMES),
  limits: { fileSize: 5 * 1024 * 1024 },
});

/** Resume upload — 10 MB max */
export const uploadResume = multer({
  storage: buildStorage("resumes", ["pdf", "doc", "docx"]),
  fileFilter: fileFilter(RESUME_MIMES),
  limits: { fileSize: 10 * 1024 * 1024 },
});

/** Logo upload — 2 MB max */
export const uploadLogo = multer({
  storage: buildStorage("logos", ["jpg", "jpeg", "png", "webp", "svg"]),
  fileFilter: fileFilter(IMAGE_MIMES),
  limits: { fileSize: 2 * 1024 * 1024 },
});
