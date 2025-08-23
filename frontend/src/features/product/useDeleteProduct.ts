import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct as apiDeleteProduct } from '@/services/apiProduct';
import toast from 'react-hot-toast';
export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isPending: isDeleting } = useMutation({
    mutationFn: (id) => apiDeleteProduct(id),
    onSuccess: () => {
      toast.success('کالا با موفقیت حذف شد');
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
    onError: (err) => {
      toast.error('مشکلی پیش امد' + err);
      console.log(err);
    },
  });
  return {deleteProduct,isDeleting}
}
