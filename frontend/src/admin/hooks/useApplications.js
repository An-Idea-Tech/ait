import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getApplications, getApplication, updateAppStatus } from '../api/applications.api';

const LIST_KEY = ['applications'];
const detailKey = (id) => ['applications', id];

export const useApplicationList = () =>
  useQuery({ queryKey: LIST_KEY, queryFn: getApplications, select: (d) => d?.data?.data ?? d?.data ?? [] });

export const useApplicationDetail = (id) =>
  useQuery({ queryKey: detailKey(id), queryFn: () => getApplication(id), enabled: !!id, select: (d) => d?.data ?? d });

export const useUpdateApplicationStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => updateAppStatus(id, body),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: LIST_KEY });
      qc.invalidateQueries({ queryKey: detailKey(id) });
    },
  });
};
