import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getHomeSection, updateHomeSection } from '../api/home.api';

const sectionKey = (section) => ['home', section];

export const useHomeSection = (section) =>
  useQuery({
    queryKey: sectionKey(section),
    queryFn: () => getHomeSection(section),
    enabled: !!section,
    select: (d) => d?.data ?? d,
  });

export const useUpdateHomeSection = (section) => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateHomeSection(section, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: sectionKey(section) }),
  });
};
