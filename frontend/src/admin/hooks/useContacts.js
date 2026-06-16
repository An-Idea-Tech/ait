import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getContacts, getContact, updateContactStatus } from '../api/contacts.api';

const LIST_KEY = ['contacts'];
const detailKey = (id) => ['contacts', id];

export const useContactList = () =>
  useQuery({ queryKey: LIST_KEY, queryFn: getContacts, select: (d) => d?.data?.data ?? d?.data ?? [] });

export const useContactDetail = (id) =>
  useQuery({ queryKey: detailKey(id), queryFn: () => getContact(id), enabled: !!id, select: (d) => d?.data ?? d });

export const useUpdateContactStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }) => updateContactStatus(id, body),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: LIST_KEY });
      qc.invalidateQueries({ queryKey: detailKey(id) });
    },
  });
};
