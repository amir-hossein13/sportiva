import { AuthResponse, LoginResponse, RegisterData } from '../types/User';
import { removeToken, setToken, setUser } from '../utils/auth';
import { apiFetch } from '../utils/apiFetch';

// const apiUrl = import.meta.env.VITE_BASE_URL;

// ثبت‌نام
export async function register(data: RegisterData): Promise<AuthResponse> {
  const res = await apiFetch<AuthResponse>(`/api/register`, {
    method: 'POST',
    body: { ...data, role: 1 },
  });

  setToken(res.token);
  setUser(res.username);
  console.log('Token saved to cookie!');
  console.log(res.username);
  console.log(res);

  return res;
}

// ورود
export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await apiFetch<LoginResponse>(`/api/login`, {
    method: 'POST',
    body: { email, password },
  });

  setToken(res.token);
  setUser(res.username);
  console.log('Token saved to cookie!');
  console.log(res.username);
  console.log(res);


  return res;
}

// خروج
export function logout() {
  removeToken();
  console.log('Token deleted successfully');
}
