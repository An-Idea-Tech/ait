import { Router } from "express";
import * as homeController from "../controllers/home.controller.js";

const router = Router();

/**
 * @swagger
 * /home:
 *   get:
 *     tags: [Home]
 *     summary: Get full home page data (all sections aggregated)
 *     responses:
 *       200:
 *         description: Home data fetched successfully
 */
router.get("/", homeController.getHome);

export default router;
