import rateLimit from "express-rate-limit";
import { HTTP_STATUS } from "../constants/http.constants.js";

const buildLimiter = (windowMs, max, message) =>
  rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      message,
      error: { code: "TOO_MANY_REQUESTS" },
    },
    statusCode: HTTP_STATUS.TOO_MANY_REQUESTS,
  });

/** General API limiter — 100 req / 15 min */
export const generalLimiter = buildLimiter(
  15 * 60 * 1000,
  100,
  "Too many requests, please try again after 15 minutes."
);

/** Auth endpoints — 10 req / 15 min to prevent brute force */
export const authLimiter = buildLimiter(
  15 * 60 * 1000,
  10,
  "Too many login attempts, please try again after 15 minutes."
);

/** Contact form — 5 req / hour */
export const contactLimiter = buildLimiter(
  60 * 60 * 1000,
  5,
  "Too many contact requests, please try again later."
);

/** Diagnosis engine — 500 req / hour */
export const diagnosisLimiter = buildLimiter(
  60 * 60 * 1000,
  500,
  "Too many diagnosis requests, please try again later."
);
