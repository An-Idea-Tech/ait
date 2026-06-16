import { Router } from "express";
import * as diagnosisController from "../controllers/diagnosisController.js";
import validate from "../middlewares/validate.middleware.js";
import { startSessionSchema, answerSchema, leadSchema } from "../validations/diagnosisValidation.js";
import { diagnosisLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = Router();

/**
 * @swagger
 * /diagnosis:
 *   post:
 *     tags: [Diagnosis]
 *     summary: Start a new diagnosis session
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               metadata:
 *                 type: object
 *                 properties:
 *                   referrer:
 *                     type: string
 */
router.post("/", diagnosisLimiter, validate(startSessionSchema), diagnosisController.start);

/**
 * @swagger
 * /diagnosis/answer:
 *   post:
 *     tags: [Diagnosis]
 *     summary: Submit an answer to a diagnosis question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [sessionId, questionId, selectedOption]
 *             properties:
 *               sessionId:
 *                 type: string
 *               questionId:
 *                 type: string
 *               selectedOption:
 *                 type: string
 */
router.post("/answer", diagnosisLimiter, validate(answerSchema), diagnosisController.answer);

/**
 * @swagger
 * /diagnosis/lead:
 *   post:
 *     tags: [Diagnosis]
 *     summary: Submit lead capture after verdict
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [sessionId, name, businessName, email, phone]
 *             properties:
 *               sessionId:
 *                 type: string
 *               name:
 *                 type: string
 *               businessName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               businessType:
 *                 type: string
 */
router.post("/lead", diagnosisLimiter, validate(leadSchema), diagnosisController.submitLead);

export default router;
