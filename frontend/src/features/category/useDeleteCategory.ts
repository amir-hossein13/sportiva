import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCategory as apiDeleteCategory } from '@/services/apiCategory';
import toast from 'react-hot-toast';
export function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending: isDeleting } = useMutation({
    
    //@ts-expect-error error for the text
    mutationFn: (id) => apiDeleteCategory(id),
    onSuccess: () => {
      toast.success('دسته بندی با موفقیت حذف شد');
      queryClient.invalidateQueries({ queryKey: ['category'] });
    },
    onError: (err) => {
      toast.error('مشکلی پیش امد' + err);
      console.log(err);
    },
  });
  return { deleteCategory, isDeleting };
}
