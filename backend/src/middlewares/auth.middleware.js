import jwt from "jsonwebtoken";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import User from "../models/user.model.js";

/**
 * Protect routes — verifies the JWT access token from Authorization header.
 */
export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHORIZED,
        "Access token is required",
        ERROR_CODES.AUTH_ERROR
      );
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch (err) {
      const message =
        err.name === "TokenExpiredError"
          ? "Access token has expired"
          : "Invalid access token";
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, message, ERROR_CODES.AUTH_ERROR);
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user || !user.isActive) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHORIZED,
        "User not found or deactivated",
        ERROR_CODES.AUTH_ERROR
      );
    }

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

/**
 * Authorize by roles — must come after `protect`.
 * @param {...string} roles
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          HTTP_STATUS.FORBIDDEN,
          "You do not have permission to perform this action",
          ERROR_CODES.FORBIDDEN
        )
      );
    }
    next();
  };
};
