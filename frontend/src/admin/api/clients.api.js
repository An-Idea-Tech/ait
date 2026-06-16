import api from './axios.instance';

const BASE = '/admin/clients';

export const getClients    = ()          => api.get(BASE).then(r => r.data);
export const createClient  = (fd)        => api.post(BASE, fd).then(r => r.data);
export const updateClient  = (id, fd)    => api.put(`${BASE}/${id}`, fd).then(r => r.data);
export const deleteClient  = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
