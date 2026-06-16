import User from "../models/user.model.js";
import ApiError from "../utils/apiError.util.js";
import { HTTP_STATUS, ERROR_CODES } from "../constants/http.constants.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  rotateRefreshToken,
  revokeSingleToken,
} from "./token.service.js";

/**
 * Authenticate admin credentials and issue token pair.
 */
export const login = async (email, password, meta = {}) => {
  const user = await User.findOne({ email, isActive: true }).select("+password");
  if (!user) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid email or password", ERROR_CODES.AUTH_ERROR);
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "Invalid email or password", ERROR_CODES.AUTH_ERROR);
  }

  const accessToken = generateAccessToken(user._id, user.role);
  const refreshToken = await generateRefreshToken(user._id, meta);

  return {
    user: user.toJSON(),
    accessToken,
    refreshToken,
  };
};

/**
 * Issue a new access token using a valid refresh token (with rotation).
 */
export const refreshAccessToken = async (token, meta = {}) => {
  const record = await verifyRefreshToken(token);
  
  if (!record) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,
      "Invalid or expired refresh token",
      ERROR_CODES.AUTH_ERROR
    );
  }

  const user = await User.findById(record.userId);
  if (!user || !user.isActive) {
    throw new ApiError(HTTP_STATUS.UNAUTHORIZED, "User not found", ERROR_CODES.AUTH_ERROR);
  }

  const accessToken = generateAccessToken(user._id, user.role);
  const newRefreshToken = await rotateRefreshToken(record, user._id, meta);

  return { accessToken, refreshToken: newRefreshToken };
};

/**
 * Invalidate a refresh token (logout).
 */
export const logout = async (token) => {
  await revokeSingleToken(token);
};
