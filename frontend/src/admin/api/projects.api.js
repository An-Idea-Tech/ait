import api from './axios.instance';

const BASE = '/admin/projects';

export const getProjects    = ()          => api.get(BASE).then(r => r.data);
export const createProject  = (fd)        => api.post(BASE, fd).then(r => r.data);
export const updateProject  = (id, fd)    => api.put(`${BASE}/${id}`, fd).then(r => r.data);
export const deleteProject  = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
