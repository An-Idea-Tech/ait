import publicApi from '../../api/publicApi';

export const startDiagnosis = () =>
  publicApi.post('/diagnosis').then((r) => r.data);

export const submitAnswer = (sessionId, questionId, selectedOption) =>
  publicApi.post('/diagnosis/answer', { sessionId, questionId, selectedOption }).then((r) => r.data);

export const submitDiagnosisLead = (sessionId, leadData) =>
  publicApi.post('/diagnosis/lead', { sessionId, ...leadData }).then((r) => r.data);
