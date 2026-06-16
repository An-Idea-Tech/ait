import { Router } from "express";
import * as projectController from "../controllers/project.controller.js";

const router = Router();

/**
 * @swagger
 * /projects:
 *   get:
 *     tags: [Projects]
 *     summary: Get all published projects (cursor-paginated)
 *     parameters:
 *       - in: query
 *         name: cursor
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 */
router.get("/", projectController.getAll);

/**
 * @swagger
 * /projects/{slug}:
 *   get:
 *     tags: [Projects]
 *     summary: Get a single project by slug
 */
router.get("/:slug", projectController.getOne);

export default router;
