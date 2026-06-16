import Joi from "joi";

const featureSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
});

export const createServiceSchema = Joi.object({
  title: Joi.string().trim().max(120).required(),
  shortDescription: Joi.string().trim().max(300).required(),
  description: Joi.string().trim().required(),
  icon: Joi.string().trim().optional(),
  features: Joi.array().items(featureSchema).optional(),
  order: Joi.number().integer().min(0).optional(),
  isPublished: Joi.boolean().optional(),
});

export const updateServiceSchema = createServiceSchema.fork(
  ["title", "shortDescription", "description"],
  (field) => field.optional()
);
