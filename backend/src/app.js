import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import expressMongoSanitize from "@exortek/express-mongo-sanitize";

import apiRoutes from "./routes/index.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import { generalLimiter } from "./middlewares/rateLimiter.middleware.js";
import { swaggerSpec } from "./configs/swagger.config.js";

const app = express();
const ENVIRONMENT = process.env.ENVIRONMENT || "development";

// ── Security ───────────────────────────────────────────────────────
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",") || "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
}));
app.set("trust proxy", 1); 

// ── Body Parsing ───────────────────────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// ── Data Sanitization ─────────────────────────────────────────────
app.use(expressMongoSanitize());


// ── Logging ────────────────────────────────────────────────────────
if (ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}

// ── Global rate limit ──────────────────────────────────────────────
app.use("/api", generalLimiter);

// ── Health check ──────────────────────────────────────────────────
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    mode: ENVIRONMENT,
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

app.get("/hello",(req,res)=> console.log("hello") )

// ── API Docs (Swagger UI) ─────────────────────────────────────────
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customSiteTitle: "An Idea Tech API Docs",
  customCss: ".swagger-ui .topbar { display: none }",
}));

// ── API Routes ────────────────────────────────────────────────────
app.use("/api/v1", apiRoutes);

// ── Global Error Handler ──────────────────────────────────────────
app.use(errorHandler);

export default app;
