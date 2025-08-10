import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { register as apiRegister } from '../../../services/apiAuth';
import toast from 'react-hot-toast';

function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: apiRegister,
    onSuccess: () => {
      toast.success(
        'account successFully created Please verify the new account from the user email address'
      );
      navigate('/login', { replace: true });
    },
    onError: () => {
      toast.error('مشکلی در ثبت‌نام به وجود آمد');
    },
  });
  return { signup, isPending };
}
export { useSignup };
