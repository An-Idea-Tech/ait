import { Router } from "express";
import * as jobController from "../controllers/job.controller.js";
import * as applicationController from "../controllers/application.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { uploadResume } from "../middlewares/upload.middleware.js";
import { createApplicationSchema } from "../validations/application.validation.js";

const router = Router();

/**
 * @swagger
 * /jobs:
 *   get:
 *     tags: [Careers]
 *     summary: Get all open job postings (cursor-paginated)
 */
router.get("/", jobController.getAll);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     tags: [Careers]
 *     summary: Get a single job by ID
 */
router.get("/:id", jobController.getOne);

/**
 * @swagger
 * /jobs/{id}/apply:
 *   post:
 *     tags: [Careers]
 *     summary: Apply to a job (multipart/form-data with resume)
 */
router.post(
  "/:id/apply",
  uploadResume.single("resume"),
  validate(createApplicationSchema),
  applicationController.apply
);

export default router;
