import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login as apiLogin } from '../../../services/apiAuth';
import toast from 'react-hot-toast';

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      apiLogin(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      toast.success('login Successful!');
      navigate('/', { replace: true });
    },
    onError: (error) => {
      toast.error(`Login failed: ${error.message}`);
    },
  });
  return { login, isPending };
}
export { useLogin };
