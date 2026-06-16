import { Router } from "express";
import * as feedController from "../controllers/feed.controller.js";

const router = Router();

router.get("/", feedController.getAll);

router.get("/:id", feedController.getOne);

export default router;
