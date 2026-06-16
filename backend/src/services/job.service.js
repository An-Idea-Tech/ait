import Job from "../models/job.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import { paginateCursor } from "../utils/pagination.util.js";

const BASE_FILTER = { isDeleted: false };

export const getAllJobs = async ({ cursor, limit, department, type } = {}) => {
  const query = { ...BASE_FILTER, isOpen: true };
  if (department) query.department = department;
  if (type) query.type = type;
  return paginateCursor(Job, query, {
    limit,
    cursor,
    select: "title department location type experience salary.isVisible applyDeadline createdAt",
  });
};

export const getJobById = async (id) => {
  const job = await Job.findOne({ _id: id, ...BASE_FILTER, isOpen: true }).lean();
  if (!job) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Job not found or no longer open", ERROR_CODES.NOT_FOUND);
  return job;
};

// ── Admin ──────────────────────────────────────────────────────────

export const adminGetAllJobs = async ({ page = 1, limit = 20 } = {}) => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    Job.find(BASE_FILTER)
      // .select("title department location type isOpen applyDeadline createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Job.countDocuments(BASE_FILTER),
  ]);
  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
};

export const createJob = async (data) => {
  return Job.create(data);
};

export const updateJob = async (id, data) => {
  const job = await Job.findOne({ _id: id, ...BASE_FILTER });
  if (!job) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Job not found", ERROR_CODES.NOT_FOUND);
  return Job.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteJob = async (id) => {
  const job = await Job.findOne({ _id: id, ...BASE_FILTER });
  if (!job) throw new ApiError(HTTP_STATUS.NOT_FOUND, "Job not found", ERROR_CODES.NOT_FOUND);
  job.isDeleted = true;
  await job.save();
};
