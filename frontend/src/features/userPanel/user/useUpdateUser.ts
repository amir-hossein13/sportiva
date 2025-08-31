import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editUser as apiUser } from '@/services/apiUser';
import toast from 'react-hot-toast';
export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: apiUser,
    onSuccess: () => {
      toast.success('پروفایل شما با موفقیت ابدیت شد');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateUser, isUpdating };
}
