import { Router } from "express";
import * as serviceController from "../controllers/service.controller.js";

const router = Router();

/**
 * @swagger
 * /services:
 *   get:
 *     tags: [Services]
 *     summary: Get all published services
 */
router.get("/", serviceController.getAll);

/**
 * @swagger
 * /services/{slug}:
 *   get:
 *     tags: [Services]
 *     summary: Get a single service by slug
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 */
router.get("/:slug", serviceController.getOne);

export default router;
