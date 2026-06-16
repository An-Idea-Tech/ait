import Joi from "joi";

export const createTestimonialSchema = Joi.object({
  name: Joi.string().trim().max(100).required(),
  designation: Joi.string().trim().optional(),
  company: Joi.string().trim().optional(),
  rating: Joi.number().integer().min(1).max(5).optional(),
  testimonial: Joi.string().trim().required(),
  order: Joi.number().integer().min(0).optional(),
  isPublished: Joi.boolean().optional(),
});

export const updateTestimonialSchema = createTestimonialSchema.fork(
  ["name", "testimonial"],
  (field) => field.optional()
);
