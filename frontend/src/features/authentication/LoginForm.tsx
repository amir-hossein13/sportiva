import { Link } from 'react-router-dom';
import Input from '../../ui/Input';
import { useLogin } from './hooks/useLogin';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('xawoma2686@ahanim.com');
  const [password, setPassword] = useState('12345678910');
  const { login, isPending } = useLogin();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }
  return (
    <form className="mt-5 flex flex-col gap-10" onSubmit={handleSubmit}>
      <Link to='/'>
        <img src="/img/Logo.png" alt="" />
      </Link>
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="ایمیل"
          disabled={isPending}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          placeholder="رمز عبور"
          disabled={isPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        disabled={isPending}
        className="font-farsi rounded-lg bg-blue-400 px-6 py-2 text-center text-sm font-bold text-white"
        type="submit"
      >
        {isPending ? '...در حال ورود' : 'ورود'}
      </button>
      <div className="font-sm text-gray-500">
        اکانت ندارید؟
        <Link to="/register" className="text-liteBule-300">
          ساخت اکانت
        </Link>
      </div>
    </form>
  );
}

export default Login;
