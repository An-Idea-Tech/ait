import Joi from "joi";

const metricSchema = Joi.object({
  label: Joi.string().trim().required(),
  value: Joi.string().trim().required(),
});

export const createProjectSchema = Joi.object({
  title: Joi.string().trim().max(150).required(),

  client: Joi.string().trim().allow('').optional(),
  category: Joi.string().trim().allow('').optional(),

  tags: Joi.array().items(Joi.string().trim()).optional(),

  shortDescription: Joi.string().trim().max(500).required(),
  problem: Joi.string().trim().required(),
  solution: Joi.string().trim().required(),

  results: Joi.string().trim().allow('').optional(),

  metrics: Joi.array().items(metricSchema).optional(),

  isFeatured: Joi.boolean().optional(),
  isPublished: Joi.boolean().optional(),
});

export const updateProjectSchema = createProjectSchema.fork(
  ["title", "shortDescription", "problem", "solution"],
  (field) => field.optional()
);
