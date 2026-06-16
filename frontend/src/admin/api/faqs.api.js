import api from './axios.instance';

const BASE = '/admin/faqs';

export const getFAQs    = ()          => api.get(BASE).then(r => r.data);
export const createFAQ  = (body)      => api.post(BASE, body).then(r => r.data);
export const updateFAQ  = (id, body)  => api.put(`${BASE}/${id}`, body).then(r => r.data);
export const deleteFAQ  = (id)        => api.delete(`${BASE}/${id}`).then(r => r.data);
