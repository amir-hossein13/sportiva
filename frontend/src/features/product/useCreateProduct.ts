import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addProduct as apiProduct } from '@/services/apiProduct';
import toast from 'react-hot-toast';
export function useCreateProduct() {
  const queryClient = useQueryClient();
  const { isPending, mutate: addProduct } = useMutation({
    mutationFn: apiProduct,
    onSuccess: () => {
      toast.success('کالای جدید با موفقیت اضافه شد');
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
    onError: (error) => {
      toast.error('error' + error);
    },
  });
  return { isPending, addProduct };
}
