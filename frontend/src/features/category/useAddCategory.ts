import { addCategory as apiAddCategory } from '@/services/apiCategory';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
export function useAddCategory() {
  const queryClient = useQueryClient();
  const { isPending, mutate: addCategory } = useMutation({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    mutationFn: (name) => apiAddCategory(name),
    onSuccess: () => {
      toast.success('دسته بندی جدید با موفقیت اضافه شد');
      queryClient.invalidateQueries({ queryKey: ['category'] });
    },
    onError: (error) => {
      toast.error('error' + error);
    },
  });
  return { isPending, addCategory };
}
