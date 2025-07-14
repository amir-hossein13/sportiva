import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../../services/apiProduct';
import { ProductData } from '../../types/Product';

export function useProduct() {
  const {
    isLoading,
    data: products = [],
    error,
  } = useQuery<ProductData[]>({
    queryKey: ['product'],
    queryFn: getAllProduct,
  });
  return { isLoading, error, products };
}
