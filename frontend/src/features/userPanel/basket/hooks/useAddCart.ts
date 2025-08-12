// useAddCart.ts
import { addNewCartItem } from '@/services/apiCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';


export function useAddCart() {
  const queryClient = useQueryClient();

  const { mutate: addCart, isPending } = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      addNewCartItem(id, quantity),
    onSuccess: () => {
      toast.success('کالای مورد نظر به سبد خرید اضافه شد');
      queryClient.invalidateQueries({ queryKey: ['basket'] });
    },
    onError: () => {
      toast.error('خطا در افزودن به سبد خرید');
    },
  });

  return { addCart, isPending };
}
