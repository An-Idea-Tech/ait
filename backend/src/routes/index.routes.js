import { Router } from "express";

// Public routes
import authRoutes        from "./auth.routes.js";
import homeRoutes        from "./home.routes.js";
import serviceRoutes     from "./service.routes.js";
import projectRoutes     from "./project.routes.js";
import blogRoutes        from "./blog.routes.js";
import feedRoutes        from "./feed.routes.js";
import testimonialRoutes from "./testimonial.routes.js";
import jobRoutes         from "./job.routes.js";
import contactRoutes     from "./contact.routes.js";
import diagnosisRoutes   from "./diagnosisRoutes.js";

// Admin routes
import adminRoutes from "./admin/admin.routes.js";

const router = Router();

// ── Public ─────────────────────────────────────────────────────────
router.use("/auth",         authRoutes);
router.use("/home",         homeRoutes);
router.use("/services",     serviceRoutes);
router.use("/projects",     projectRoutes);
router.use("/blogs",        blogRoutes);
router.use("/feeds",        feedRoutes);
router.use("/testimonials", testimonialRoutes);
router.use("/jobs",         jobRoutes);
router.use("/contact",      contactRoutes);
router.use("/diagnosis",    diagnosisRoutes);

// ── Admin (all protected internally) ───────────────────────────────
router.use("/admin", adminRoutes);

// ── 404 catch-all for /api/v1/* ────────────────────────────────────
router.use((req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
});

export default router;