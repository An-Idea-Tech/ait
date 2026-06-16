import Joi from "joi";

export const heroSchema = Joi.object({
  headline: Joi.string().trim().required(),
  subheadline: Joi.string().trim().optional(),
  ctaText: Joi.string().trim().optional(),
  ctaLink: Joi.string().trim().optional(),
  badgeText: Joi.string().trim().optional(),
  isActive: Joi.boolean().optional(),
});

const metricItemSchema = Joi.object({
  label: Joi.string().trim().required(),
  value: Joi.string().trim().required(),
  suffix: Joi.string().trim().optional(),
  order: Joi.number().integer().min(0).optional(),
});

export const metricsSchema = Joi.object({
  sectionTitle: Joi.string().trim().optional(),
  metrics: Joi.array().items(metricItemSchema).min(1).required(),
  isActive: Joi.boolean().optional(),
});

export const aboutSchema = Joi.object({
  heading: Joi.string().trim().required(),
  subheading: Joi.string().trim().optional(),
  description: Joi.string().trim().required(),
  highlights: Joi.array().items(Joi.string().trim()).optional(),
  ctaText: Joi.string().trim().optional(),
  ctaLink: Joi.string().trim().optional(),
  isActive: Joi.boolean().optional(),
});

const stepSchema = Joi.object({
  step: Joi.number().integer().min(1).required(),
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  icon: Joi.string().trim().optional(),
});

export const howWeWorkSchema = Joi.object({
  sectionTitle: Joi.string().trim().optional(),
  sectionSubtitle: Joi.string().trim().optional(),
  steps: Joi.array().items(stepSchema).min(1).required(),
  isActive: Joi.boolean().optional(),
});

export const contactInfoSchema = Joi.object({
  email: Joi.string().email().optional(),
  phone: Joi.string().trim().optional(),
  address: Joi.string().trim().optional(),
  mapEmbedUrl: Joi.string().uri().optional().allow(""),
  socialLinks: Joi.object({
    linkedin: Joi.string().uri().optional().allow(""),
    twitter: Joi.string().uri().optional().allow(""),
    instagram: Joi.string().uri().optional().allow(""),
    facebook: Joi.string().uri().optional().allow(""),
    github: Joi.string().uri().optional().allow(""),
  }).optional(),
  isActive: Joi.boolean().optional(),
});
