import { getCategories, getCategoriesById } from '@/services/apiCategory';
import { useQuery } from '@tanstack/react-query';

export function useCategory() {
  const { isLoading, data: categories } = useQuery({
    queryKey: ['category'],
    queryFn: getCategories,
  });
  return { isLoading, categories };
}

export function useCategoryById(id: number) {
  const { isLoading, data: category } = useQuery({
    queryKey: ['singleProduct'],
    queryFn: () => getCategoriesById(id),
  });
  return { isLoading, category };
}
