import api from './axios.instance';

const BASE = '/admin/diagnosis';

export const getDiagnosisAnalytics = () => api.get(`${BASE}/analytics`).then(r => r.data);
