import { Router } from "express";
import * as testimonialController from "../controllers/testimonial.controller.js";

const router = Router();

router.get("/", testimonialController.getAll);

export default router;
