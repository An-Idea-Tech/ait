import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { loginAdmin, logoutAdmin } from '../api/auth.api';
import { saveTokens, clearTokens, getAccessToken } from '../api/axios.instance';

const AuthContext = createContext(null);

/**
 * Decode the JWT payload without verifying the signature.
 * Used only to read user info (sub, role, etc.) client-side.
 */
const decodeJwt = (token) => {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
  } catch {
    return null;
  }
};

/**
 * Check if a JWT token is still valid (not expired).
 */
const isTokenValid = (token) => {
  if (!token) return false;
  const decoded = decodeJwt(token);
  if (!decoded?.exp) return false;
  // exp is in seconds; add a 10-second buffer
  return decoded.exp * 1000 > Date.now() + 10_000;
};

export const AuthProvider = ({ children }) => {
  const [user,    setUser]    = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session from localStorage on mount (no network request)
  useEffect(() => {
    const token = getAccessToken();
    if (token && isTokenValid(token)) {
      const decoded = decodeJwt(token);
      // Rebuild a minimal user object from the JWT payload
      setUser({ id: decoded.userId, role: decoded.role });
    } else {
      clearTokens();
      setUser(null);
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (credentials) => {
    const data = await loginAdmin(credentials);
    const { accessToken, refreshToken, user: userData } = data?.data ?? data;
    saveTokens(accessToken, refreshToken);
    setUser(userData || decodeJwt(accessToken));
    return data;
  }, []);

  const logout = useCallback(async () => {
    const { getRefreshToken } = await import('../api/axios.instance');
    const rt = getRefreshToken();
    try {
      if (rt) await logoutAdmin(rt);
    } catch {
      // ignore network errors on logout
    } finally {
      clearTokens();
      setUser(null);
    }
  }, []);

  const value = { user, loading, login, logout, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export default AuthContext;
