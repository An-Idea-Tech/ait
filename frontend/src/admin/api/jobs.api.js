import api from './axios.instance';

const BASE = '/admin/jobs';

export const getJobs    = ()          => api.get(BASE).then(r => r.data);
export const createJob  = (body)      => api.post(BASE, body).then(r => r.data);
export const updateJob  = (id, body)  => api.put(`${BASE}/${id}`, body).then(r => r.data);
export const deleteJob  = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
