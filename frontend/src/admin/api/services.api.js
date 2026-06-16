import api from './axios.instance';

const BASE = '/admin/services';

export const getServices     = ()          => api.get(BASE).then(r => r.data);
export const createService   = (fd)        => api.post(BASE, fd).then(r => r.data);
export const updateService   = (id, fd)    => api.put(`${BASE}/${id}`, fd).then(r => r.data);
export const deleteService   = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
