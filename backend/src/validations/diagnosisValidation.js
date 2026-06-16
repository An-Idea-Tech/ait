import Joi from "joi";

export const startSessionSchema = Joi.object({
  metadata: Joi.object({
    referrer: Joi.string().trim().max(500).optional().allow(""),
  }).optional(),
});

export const answerSchema = Joi.object({
  sessionId: Joi.string().trim().required(),
  questionId: Joi.string().trim().required(),
  selectedOption: Joi.string().trim().required(),
});

export const leadSchema = Joi.object({
  sessionId: Joi.string().trim().required(),
  name: Joi.string().trim().max(100).required(),
  businessName: Joi.string().trim().max(150).required(),
  email: Joi.string().email().lowercase().trim().required(),
  phone: Joi.string().trim().max(20).required(),
  businessType: Joi.string().trim().max(100).optional().allow(""),
});
