import Application from "../models/application.model.js";
import Job from "../models/job.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { paginateCursor } from "../utils/pagination.util.js";
import { buildResumeObject } from "./upload.service.js";

export const applyToJob = async (jobId, data, file) => {
  const job = await Job.findOne({ _id: jobId, isDeleted: false, isOpen: true }).lean();
  if (!job) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Job not found or no longer accepting applications", ERROR_CODES.NOT_FOUND);

  // Prevent duplicate applications from the same email per job
  const duplicate = await Application.findOne({ job: jobId, email: data.email });
  if (duplicate) {
    throw new ApiError(HTTP_STATUS.CONFLICT, "You have already applied for this position", ERROR_CODES.CONFLICT);
  }

  const resume = buildResumeObject(file);
  return Application.create({ job: jobId, ...data, resume });
};

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllApplications = async ({ page = 1, limit = 20, jobId, status } = {}) => {
  const query = {};
  if (jobId) query.job = jobId;
  if (status) query.status = status;
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    Application.find(query)
      .select("fullName email phone location status job createdAt")
      .populate("job", "title department")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Application.countDocuments(query),
  ]);
  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
};

export const adminGetApplicationById = async (id) => {
  const app = await Application.findById(id).populate("job", "title department").select("+adminNotes").lean();
  if (!app) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Application not found", ERROR_CODES.NOT_FOUND);
  return app;
};

export const updateApplicationStatus = async (id, data) => {
  const app = await Application.findById(id);
  if (!app) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Application not found", ERROR_CODES.NOT_FOUND);
  return Application.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};
