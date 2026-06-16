import api from './axios.instance';

const BASE = '/admin/home';

export const getHomeSection    = (section)        => api.get(`${BASE}/${section}`).then(r => r.data);
export const updateHomeSection = (section, data)  => api.put(`${BASE}/${section}`, data).then(r => r.data);
