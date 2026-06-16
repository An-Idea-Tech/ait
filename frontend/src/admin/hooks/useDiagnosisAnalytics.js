import { useQuery } from '@tanstack/react-query';
import { getDiagnosisAnalytics } from '../api/diagnosis.api';

export const useDiagnosisAnalytics = () =>
  useQuery({
    queryKey: ['diagnosis-analytics'],
    queryFn: getDiagnosisAnalytics,
    select: (d) => d?.data ?? d,
    staleTime: 2 * 60 * 1000, // 2 minutes
    retry: 2,
  });
