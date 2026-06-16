import { Router } from "express";
import { protect, authorize } from "../../middlewares/auth.middleware.js";
import { ROLES } from "../../constants/roles.constants.js";

// Controllers
import * as serviceController from "../../controllers/service.controller.js";
import * as projectController from "../../controllers/project.controller.js";
import * as blogController from "../../controllers/blog.controller.js";
import * as feedController from "../../controllers/feed.controller.js";
import * as testimonialController from "../../controllers/testimonial.controller.js";
import * as clientController from "../../controllers/client.controller.js";
import * as faqController from "../../controllers/faq.controller.js";
import * as jobController from "../../controllers/job.controller.js";
import * as applicationController from "../../controllers/application.controller.js";
import * as contactController from "../../controllers/contact.controller.js";
import * as homeController from "../../controllers/home.controller.js";
import * as diagnosisController from "../../controllers/diagnosisController.js";

// Validations
import validate from "../../middlewares/validate.middleware.js";
import { createServiceSchema, updateServiceSchema } from "../../validations/service.validation.js";
import { createProjectSchema, updateProjectSchema } from "../../validations/project.validation.js";
import { createBlogSchema, updateBlogSchema } from "../../validations/blog.validation.js";
import { createFeedSchema, updateFeedSchema } from "../../validations/feed.validation.js";
import { createTestimonialSchema, updateTestimonialSchema } from "../../validations/testimonial.validation.js";
import { createClientSchema, updateClientSchema } from "../../validations/client.validation.js";
import { createFAQSchema, updateFAQSchema } from "../../validations/faq.validation.js";
import { createJobSchema, updateJobSchema } from "../../validations/job.validation.js";
import { updateApplicationStatusSchema } from "../../validations/application.validation.js";
import { updateContactStatusSchema } from "../../validations/contact.validation.js";
import { heroSchema, metricsSchema, aboutSchema, howWeWorkSchema, contactInfoSchema } from "../../validations/homeSection.validation.js";

// Upload middlewares
import { uploadImage, uploadLogo } from "../../middlewares/upload.middleware.js";
import { feedTransformData, transformationJobData, transformBlogData, transformProjectData, transformServiceData, transformTestimonialData } from "../../middlewares/transformation.middleware.js";

const router = Router();

// ── Apply auth guard to ALL admin routes ───────────────────────────
router.use(protect, authorize(ROLES.ADMIN));

// ── Services ──────────────────────────────────────────────────────
router.get("/services", serviceController.adminGetAll);
router.post("/services", uploadImage.single("image"), transformServiceData, validate(createServiceSchema), serviceController.create);
router.put("/services/:id", uploadImage.single("image"), transformServiceData, validate(updateServiceSchema), serviceController.update);
router.delete("/services/:id", serviceController.remove);

// ── Projects ──────────────────────────────────────────────────────
router.get("/projects", projectController.adminGetAll);
router.post("/projects", uploadImage.single("coverImage"),transformProjectData, validate(createProjectSchema), projectController.create);
router.put("/projects/:id", uploadImage.single("coverImage"),transformProjectData, validate(updateProjectSchema), projectController.update);
router.delete("/projects/:id", projectController.remove);

// ── Blogs ─────────────────────────────────────────────────────────
router.get("/blogs", blogController.adminGetAll);
router.post("/blogs", uploadImage.single("coverImage"),transformBlogData, validate(createBlogSchema), blogController.create);
router.put("/blogs/:id", uploadImage.single("coverImage"),transformBlogData, validate(updateBlogSchema), blogController.update);
router.delete("/blogs/:id", blogController.remove);

// ── Feeds ─────────────────────────────────────────────────────────
router.get("/feeds", feedController.adminGetAll);
router.post("/feeds", uploadImage.single("image"),feedTransformData, validate(createFeedSchema), feedController.create);
router.put("/feeds/:id", uploadImage.single("image"),feedTransformData, validate(updateFeedSchema), feedController.update);
router.delete("/feeds/:id", feedController.remove);

// ── Testimonials ──────────────────────────────────────────────────
router.get("/testimonials", testimonialController.adminGetAll);
router.post("/testimonials", uploadImage.single("avatar"),transformTestimonialData, validate(createTestimonialSchema), testimonialController.create);
router.put("/testimonials/:id", uploadImage.single("avatar"),transformTestimonialData, validate(updateTestimonialSchema), testimonialController.update);
router.delete("/testimonials/:id", testimonialController.remove);

// ── Clients (logos) ───────────────────────────────────────────────
router.get("/clients", clientController.adminGetAll);
router.post("/clients", uploadLogo.single("logo"), validate(createClientSchema), clientController.create);
router.put("/clients/:id", uploadLogo.single("logo"), validate(updateClientSchema), clientController.update);
router.delete("/clients/:id", clientController.remove);

// ── FAQs ──────────────────────────────────────────────────────────
router.get("/faqs", faqController.adminGetAll);
router.post("/faqs", validate(createFAQSchema), faqController.create);
router.put("/faqs/:id", validate(updateFAQSchema), faqController.update);
router.delete("/faqs/:id", faqController.remove);

// ── Jobs ──────────────────────────────────────────────────────────
router.get("/jobs", jobController.adminGetAll);
router.post("/jobs",transformationJobData, validate(createJobSchema), jobController.create);
router.put("/jobs/:id",transformationJobData, validate(updateJobSchema), jobController.update);
router.delete("/jobs/:id", jobController.remove);

// ── Applications ──────────────────────────────────────────────────
router.get("/applications", applicationController.adminGetAll);
router.get("/applications/:id", applicationController.adminGetOne);
router.patch("/applications/:id/status", validate(updateApplicationStatusSchema), applicationController.updateStatus);

// ── Contacts / Leads ──────────────────────────────────────────────
router.get("/contacts", contactController.adminGetAll);
router.get("/contacts/:id", contactController.adminGetOne);
router.patch("/contacts/:id/status", validate(updateContactStatusSchema), contactController.updateStatus);

// ── Home Sections ─────────────────────────────────────────────────
const homeSectionValidators = {
  hero: heroSchema,
  metrics: metricsSchema,
  about: aboutSchema,
  howWeWork: howWeWorkSchema,
  contactInfo: contactInfoSchema,
};

router.get("/home/:section", homeController.getSection);
router.put("/home/:section", uploadImage.single("image"), (req, res, next) => {
  const schema = homeSectionValidators[req.params.section];
  if (!schema) return next();
  return validate(schema)(req, res, next);
}, homeController.updateSection);

// ── Diagnosis Analytics ───────────────────────────────────────────
router.get("/diagnosis/analytics", diagnosisController.getAnalytics);

export default router;
