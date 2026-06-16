import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string().trim().max(100).required(),
  email: Joi.string().email().lowercase().trim().required(),
  phone: Joi.string().trim().max(20).required(),
  companyName: Joi.string().trim().max(150).optional().allow(""),
  message: Joi.string().trim().min(10).max(2000).required(),
  bookingDate: Joi.date().iso().min("now").optional(),
});

export const updateContactStatusSchema = Joi.object({
  status: Joi.string().valid("new", "contacted", "in-progress", "closed").required(),
  adminNotes: Joi.string().trim().optional(),
});
