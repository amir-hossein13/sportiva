import { getCartList } from '@/services/apiCart';
import { CartData } from '@/types/Cart';
import { useQuery } from '@tanstack/react-query';

export function useBasket() {
  const { isLoading, data, error } = useQuery<CartData>({
    queryKey: ['basket'],
    queryFn: getCartList,
  });

  return {
    isLoading,
    cartList: data?.carts ?? [],
    error,
  };
}
