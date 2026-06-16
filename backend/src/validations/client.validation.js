import Joi from "joi";

export const createClientSchema = Joi.object({
  name: Joi.string().trim().max(100).required(),
  website: Joi.string().uri().optional().allow(""),
  order: Joi.number().integer().min(0).optional(),
  isPublished: Joi.boolean().optional(),
});

export const updateClientSchema = createClientSchema.fork(
  ["name"],
  (field) => field.optional()
);
