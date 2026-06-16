import api from './axios.instance';

export const loginAdmin  = (credentials) => api.post('/auth/login', credentials).then(r => r.data);
export const logoutAdmin = (refreshToken) => api.post('/auth/logout', { refreshToken }).then(r => r.data);
