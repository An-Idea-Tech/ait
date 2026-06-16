import api from './axios.instance';

const BASE = '/admin/feeds';

export const getFeeds    = ()          => api.get(BASE).then(r => r.data);
export const createFeed  = (fd)        => api.post(BASE, fd).then(r => r.data);
export const updateFeed  = (id, fd)    => api.put(`${BASE}/${id}`, fd).then(r => r.data);
export const deleteFeed  = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
