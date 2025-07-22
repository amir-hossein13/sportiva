import { AuthResponse, LoginResponse, RegisterData } from '../types/User';
import { removeToken, setToken } from '../utils/auth';
const apiUrl = import.meta.env.VITE_BASE_URL;
export async function register(data: RegisterData): Promise<AuthResponse> {
  const res = await fetch(`${apiUrl}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, role: 1 }),
  });
  const result: AuthResponse = await res.json();
  setToken(result.token);

  console.log('Token saved to cookie!');
  console.log(result);
  return result;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${apiUrl}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw new Error(error?.message || 'Login failed');
  }

  const data: LoginResponse = await res.json();
  setToken(data.token);

  console.log(data);
  return data;
}

export function logout() {
  removeToken();
  console.log('token deleted successfully');
}
