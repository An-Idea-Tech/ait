import api from './axios.instance';

const BASE = '/admin/testimonials';

export const getTestimonials    = ()          => api.get(BASE).then(r => r.data);
export const createTestimonial  = (fd)        => api.post(BASE, fd).then(r => r.data);
export const updateTestimonial  = (id, fd)    => api.put(`${BASE}/${id}`, fd).then(r => r.data);
export const deleteTestimonial  = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
