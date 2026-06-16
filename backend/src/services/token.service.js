import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import RefreshToken from "../models/refreshToken.model.js";

const ACCESS_EXPIRY = process.env.JWT_ACCESS_EXPIRY || "15m";
const REFRESH_EXPIRY = process.env.JWT_REFRESH_EXPIRY || "7d";
const REFRESH_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in ms

/**
 * Generate a signed JWT access token.
 */
export const generateAccessToken = (userId, role) => {
  return jwt.sign({ userId, role }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: ACCESS_EXPIRY,
  });
};

/**
 * Generate a refresh token, persist it in DB, and return the raw token string.
 */
export const generateRefreshToken = async (userId, meta = {}) => {
  const token = uuidv4();
  const expiresAt = new Date(Date.now() + REFRESH_EXPIRY_MS);

  await RefreshToken.create({
    token,
    userId,
    expiresAt,
    userAgent: meta.userAgent,
    ipAddress: meta.ipAddress,
  });

  return token;
};

/**
 * Verify a refresh token from the DB (checks revoked & expiry).
 * Returns the RefreshToken document if valid.
 */
export const verifyRefreshToken = async (token) => {
  const record = await RefreshToken.findOne({ token });
  if (!record) return null;
  if (record.isRevoked) return null;
  if (record.expiresAt < new Date()) return null;
  return record;
};

/**
 * Rotate a refresh token — revokes old one and issues a new one.
 */
export const rotateRefreshToken = async (oldRecord, userId, meta = {}) => {
  await RefreshToken.findByIdAndUpdate(oldRecord._id, { isRevoked: true });
  return generateRefreshToken(userId, meta);
};

/**
 * Revoke all refresh tokens for a user (logout all devices).
 */
export const revokeAllUserTokens = async (userId) => {
  await RefreshToken.updateMany({ userId, isRevoked: false }, { isRevoked: true });
};

/**
 * Revoke a single refresh token by value.
 */
export const revokeSingleToken = async (token) => {
  await RefreshToken.findOneAndUpdate({ token }, { isRevoked: true });
};
