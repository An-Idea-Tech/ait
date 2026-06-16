import api from './axios.instance';

const BASE = '/admin/blogs';

export const getBlogs    = ()          => api.get(BASE).then(r => r.data);
export const createBlog  = (fd)        => api.post(BASE, fd).then(r => r.data);
export const updateBlog  = (id, fd)    => api.put(`${BASE}/${id}`, fd).then(r => r.data);
export const deleteBlog  = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
