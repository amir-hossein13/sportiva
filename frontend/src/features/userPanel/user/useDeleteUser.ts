import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser as deleteUserApi } from '@/services/apiUserManagement';
import toast from 'react-hot-toast';
export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteUserApi(id),
    onSuccess: () => {
      toast.success('کاربر با موفقیت حذف شد');
      queryClient.invalidateQueries({ queryKey: ['userList'] });
    },
    onError: (err) => {
      toast.error('کاربر حذف نشد' + err);
    },
  });
  return {deleteUser,isDeleting}
}
