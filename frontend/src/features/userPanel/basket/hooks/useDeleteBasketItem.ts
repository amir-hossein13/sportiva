import { deleteCartItem } from '@/services/apiCart';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useDeleteBasketItem() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteItem } = useMutation({
    mutationFn: (id: number) => deleteCartItem(id),
    onSuccess: () => {
      toast.success('کالا با موفقیت از سبد خرید حذف شد');
      queryClient.invalidateQueries({ queryKey: ['basket'], exact: false });
      queryClient.refetchQueries({ queryKey: ['basket'], exact: false });
    },
    onError: (err: Error) => {
      console.error('Delete error:', err);
      toast.error(err.message || 'خطا در حذف کالا از سبد خرید');
    },
  });

  return { isDeleting, deleteItem };
}
