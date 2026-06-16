import api from './axios.instance';

const BASE = '/admin/applications';

export const getApplications   = ()           => api.get(BASE).then(r => r.data);
export const getApplication    = (id)         => api.get(`${BASE}/${id}`).then(r => r.data);
export const updateAppStatus   = (id, body)   => api.patch(`${BASE}/${id}/status`, body).then(r => r.data);
