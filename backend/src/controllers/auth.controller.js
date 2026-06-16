import * as authService from "../services/auth.service.js";
import ApiResponse from "../utils/apiResponse.util.js";
import asyncHandler from "../utils/asyncHandler.util.js";
import { HTTP_STATUS } from "../constants/http.constants.js";

/**
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
export const login = asyncHandler(async (req, res) => {
  const meta = {
    userAgent: req.headers["user-agent"],
    ipAddress: req.ip,
  };
  const result = await authService.login(req.body.email, req.body.password, meta);
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(true, "Login successful", result)
  );
});

/**
 * @route   POST /api/v1/auth/refresh-token
 * @access  Public
 */
export const refreshToken = asyncHandler(async (req, res) => {
  const meta = {
    userAgent: req.headers["user-agent"],
    ipAddress: req.ip,
  };
  const result = await authService.refreshAccessToken(req.body.refreshToken, meta);
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(true, "Token refreshed successfully", result)
  );
});

/**
 * @route   POST /api/v1/auth/logout
 * @access  Public
 */
export const logout = asyncHandler(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(true, "Logged out successfully")
  );
});
