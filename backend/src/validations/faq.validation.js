import Joi from "joi";

export const createFAQSchema = Joi.object({
  question: Joi.string().trim().max(300).required(),
  answer: Joi.string().trim().required(),
  category: Joi.string().empty("").trim().default("General").optional(),
  order: Joi.number().integer().min(0).optional(),
  isPublished: Joi.boolean().default(false).optional(),
});

export const updateFAQSchema = createFAQSchema.fork(
  ["question", "answer"],
  (field) => field.optional()
);
