// useAddCart.ts
import { updateCartItem } from '@/services/apiCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useUpdateQuntity() {
  const queryClient = useQueryClient();

  const { mutate: updateQuntity, isPending } = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      updateCartItem(id, quantity),
    onSuccess: () => {
      // toast.success('کالای مورد نظر به سبد خرید اضافه شد');
      queryClient.invalidateQueries({ queryKey: ['basket'] });
    },
    onError: (e) => {
      toast.error('خطا در افزایش تعداد ')
      console.log(e);
    },
  });

  return { updateQuntity, isPending };
}
