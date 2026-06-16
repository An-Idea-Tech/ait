import { Router } from "express";
import * as contactController from "../controllers/contact.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { createContactSchema } from "../validations/contact.validation.js";
import { contactLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = Router();

/**
 * @swagger
 * /contact:
 *   post:
 *     tags: [Contact]
 *     summary: Submit a contact / lead form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, phone, message]
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               companyName:
 *                 type: string
 *               message:
 *                 type: string
 *               bookingDate:
 *                 type: string
 *                 format: date
 */
router.post("/", contactLimiter, validate(createContactSchema), contactController.submit);

export default router;
