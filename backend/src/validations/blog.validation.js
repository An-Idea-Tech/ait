import Joi from "joi";

export const createBlogSchema = Joi.object({
  title: Joi.string().trim().max(200).required(),
  excerpt: Joi.string().trim().max(500).required(),
  content: Joi.string().trim().required(),
  author: Joi.string().trim().optional(),
  category: Joi.string().trim().optional(),
  tags: Joi.array().items(Joi.string().trim()).optional(),
  isPublished: Joi.boolean().optional(),
});

export const updateBlogSchema = createBlogSchema.fork(
  ["title", "excerpt", "content"],
  (field) => field.optional()
);
