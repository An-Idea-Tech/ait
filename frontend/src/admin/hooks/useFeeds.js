import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getFeeds, createFeed, updateFeed, deleteFeed } from '../api/feeds.api';

const KEY = ['feeds'];

export const useFeedList = () =>
  useQuery({ queryKey: KEY, queryFn: getFeeds, select: (d) => d?.data?.data ?? d?.data ?? [] });

export const useCreateFeed = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createFeed,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useUpdateFeed = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, fd }) => updateFeed(id, fd),
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};

export const useDeleteFeed = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteFeed,
    onSuccess: () => qc.invalidateQueries({ queryKey: KEY }),
  });
};
