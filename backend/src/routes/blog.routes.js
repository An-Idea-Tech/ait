import { Router } from "express";
import * as blogController from "../controllers/blog.controller.js";

const router = Router();

router.get("/", blogController.getAll);

router.get("/:slug", blogController.getOne);

export default router;
