import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getFAQs, createFAQ, updateFAQ, deleteFAQ } from '../api/faqs.api';

const KEY = ['faqs'];

export const useFAQList = () =>
  useQuery({ queryKey: KEY, queryFn: getFAQs, select: (d) => d?.data ?? d });

export const useCreateFAQ = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createFAQ,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useUpdateFAQ = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => updateFAQ(id, body),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useDeleteFAQ = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteFAQ,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};
