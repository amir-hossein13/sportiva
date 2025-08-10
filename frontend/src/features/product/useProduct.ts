import { useQuery } from '@tanstack/react-query';
import { getAllProduct, getSingleProduct } from '@/services/apiProduct';
import { ProductData } from '@/types/Product';

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

export function useProductById(id:number) {
  const { isLoading, data: singleProduct,error } = useQuery<ProductData>({
    queryKey: ['singleProduct'],
    queryFn: () => getSingleProduct(id),
  });
  return {isLoading,singleProduct,error}
}
