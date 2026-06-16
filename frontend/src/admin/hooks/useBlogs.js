import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBlogs, createBlog, updateBlog, deleteBlog } from '../api/blogs.api';

const KEY = ['blogs'];

export const useBlogList = () =>
  useQuery({ queryKey: KEY, queryFn: getBlogs, select: (d) => d?.data?.data ?? d?.data ?? [] });

export const useCreateBlog = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useUpdateBlog = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, fd }) => updateBlog(id, fd),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useDeleteBlog = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};
