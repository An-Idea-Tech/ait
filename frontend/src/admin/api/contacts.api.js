import api from './axios.instance';

const BASE = '/admin/contacts';

export const getContacts      = ()           => api.get(BASE).then(r => r.data);
export const getContact       = (id)         => api.get(`${BASE}/${id}`).then(r => r.data);
export const updateContactStatus = (id, body) => api.patch(`${BASE}/${id}/status`, body).then(r => r.data);
