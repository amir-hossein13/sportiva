import { getCategories } from '@/services/apiCategory';
import { useQuery } from '@tanstack/react-query';

export function useCategory() {
  const { isLoading, data: categories } = useQuery({
    queryKey: ['category'],
    queryFn: getCategories,
  });
  return { isLoading, categories };
}
