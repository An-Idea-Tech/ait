import { useQuery } from '@tanstack/react-query';
import publicApi from '../api/publicApi';


export const useHomeData = () =>
  useQuery({
    queryKey: ['home-page-data'],
    queryFn: () => publicApi.get('/home').then((r) => r.data),
    select: (res) => res?.data ?? res,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
