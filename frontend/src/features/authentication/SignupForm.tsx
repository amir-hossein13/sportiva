import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import { RegisterData } from '../../types/User';
import { useSignup } from './hooks/useSignup';

function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>();
  const { signup, isPending } = useSignup();
  const onSubmit = (data: RegisterData) => {
    signup(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return (
    <form className="mt-5 flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <img src="/public/img/Logo.png" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <Input
          {...register('username', { required: true })}
          type="text"
          placeholder="نام و نام خانوادگی"
        />
        <Input {...register('phone', { required: true })} type="number" placeholder="شماره" />
        {errors.username && <span className="text-liteBule-300 text-sm">Name is required</span>}
        <Input {...register('email', { required: true })} type="email" placeholder="ایمیل" />
        {errors.email && <span className="text-liteBule-300 text-sm">email is required</span>}

        <Input
          {...register('address', { required: true })}
          type="text"
          placeholder="ادرس محل زندگی"
        />
        {errors.address && <span className="text-liteBule-300 text-sm">address is required</span>}

        <Input
          {...register('password', { required: true })}
          type="password"
          placeholder="رمز عبور"
        />
        {errors.password && <span className="text-liteBule-300 text-sm">password is required</span>}
      </div>
      <button
        className="font-farsi rounded-lg bg-blue-400 px-6 py-2 text-center text-sm font-bold text-white"
        type="submit"
      >
        {isPending ? 'در حال ارسال...' : 'ورود'}
      </button>
      <div className="font-sm text-gray-500">
        اکانت دارید؟
        <Link to="/login" className="text-liteBule-300">
          وارد شوید
        </Link>
      </div>
    </form>
  );
}

export default SignupForm;
