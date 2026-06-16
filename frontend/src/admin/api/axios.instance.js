import axios from 'axios';

const TOKEN_KEY   = 'at_admin';
const REFRESH_KEY = 'rt_admin';

export const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem(TOKEN_KEY,   accessToken);
  if (refreshToken) localStorage.setItem(REFRESH_KEY, refreshToken);
};

export const getAccessToken  = () => localStorage.getItem(TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_KEY);

export const clearTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_KEY);
};

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  timeout: 15000,
});

// Attach Bearer token to every request
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

// On 401 — clear tokens and redirect to login
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       clearTokens();
//       window.location.href = '/admin/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
