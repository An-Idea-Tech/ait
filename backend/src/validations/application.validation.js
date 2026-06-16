import Joi from "joi";

export const createApplicationSchema = Joi.object({
  fullName: Joi.string().trim().max(100).required(),
  email: Joi.string().email().lowercase().trim().required(),
  phone: Joi.string().trim().max(20).required(),
  location: Joi.string().trim().optional(),
  portfolioLinks: Joi.array().items(Joi.string().uri()).optional(),
  coverLetter: Joi.string().trim().max(2000).optional(),
  agreementAccepted: Joi.boolean().valid(true).required().messages({
    "any.only": "You must accept the terms to submit an application",
  }),
});

export const updateApplicationStatusSchema = Joi.object({
  status: Joi.string()
    .valid("pending", "reviewing", "shortlisted", "rejected", "hired")
    .required(),
  adminNotes: Joi.string().trim().optional(),
});
