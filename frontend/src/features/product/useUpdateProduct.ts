import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct as apiUpdateProduct } from '@/services/apiProduct';
import toast from 'react-hot-toast';
export function useUpdateProduct() {
  const queryClient = useQueryClient();
  const { isPending, mutate: updateProduct } = useMutation({
    mutationFn: apiUpdateProduct,
    onSuccess: () => {
      toast.success('کالا با موفقیت ابدیت شد');
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
    onError: (error) => {
      toast.error('error' + error);
    },
  });
  return { isPending, updateProduct };
}
