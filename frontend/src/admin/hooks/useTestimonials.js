import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../api/testimonials.api';

const KEY = ['testimonials'];

export const useTestimonialList = () =>
  useQuery({ queryKey: KEY, queryFn: getTestimonials, select: (d) => d?.data ?? d });

export const useCreateTestimonial = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createTestimonial,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useUpdateTestimonial = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, fd }) => updateTestimonial(id, fd),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useDeleteTestimonial = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteTestimonial,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};
