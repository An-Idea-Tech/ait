import Joi from "joi";

export const createFeedSchema = Joi.object({
  title: Joi.string().trim().max(200).required(),
  content: Joi.string().trim().required(),
  type: Joi.string().valid("update", "announcement", "news", "milestone").optional(),
  link: Joi.string().uri().optional(),
  isPublished: Joi.boolean().optional(),
});

export const updateFeedSchema = createFeedSchema.fork(
  ["title", "content"],
  (field) => field.optional()
);
