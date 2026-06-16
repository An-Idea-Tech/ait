import Joi from "joi";

const salarySchema = Joi.object({
  min: Joi.number().optional(),
  max: Joi.number().optional(),
  currency: Joi.string().trim().optional(),
  isVisible: Joi.boolean().optional(),
});

export const createJobSchema = Joi.object({
  title: Joi.string().trim().max(150).required(),
  department: Joi.string().trim().optional(),
  location: Joi.string().trim().required(),
  type: Joi.string().valid("full-time", "part-time", "contract", "internship", "remote").required(),
  experience: Joi.string().trim().optional(),
  salary: salarySchema.optional(),
  description: Joi.string().trim().required(),
  responsibilities: Joi.array().items(Joi.string().trim()).optional(),
  requirements: Joi.array().items(Joi.string().trim()).optional(),
  niceToHave: Joi.array().items(Joi.string().trim()).optional(),
  benefits: Joi.array().items(Joi.string().trim()).optional(),
  applyDeadline: Joi.date().iso().optional(),
  isOpen: Joi.boolean().optional(),
});

export const updateJobSchema = createJobSchema.fork(
  ["title", "location", "type", "description"],
  (field) => field.optional()
);
