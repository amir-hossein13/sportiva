// useAddCart.ts
import { addNewCartItem } from '@/services/apiCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

type CartItem = { id: number; quantity: number };

export function useAddCart() {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
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

  const addCart = async ({ id, quantity }: { id: number; quantity: number }) => {
    const carts = queryClient.getQueryData<CartItem[]>(['basket']);
    const exists = carts?.some((item) => item.id === id);

    if (exists) {
      toast('کالا قبلاً اضافه شده؛ مقدار را به‌روزرسانی کنید.');
      return;
    }

    await mutateAsync({ id, quantity });
  };

  return { addCart, isPending };
}
