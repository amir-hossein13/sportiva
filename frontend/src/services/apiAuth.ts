import { useAuthStore } from '@/store/authStore';
import { AuthResponse, LoginResponse, RegisterData } from '../types/User';
import { removeToken, setToken } from '../utils/auth';
import { apiUrl } from './config/config';

export async function register(data: RegisterData): Promise<AuthResponse> {
  const res = await fetch(`${apiUrl}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Register failed:', res.status, errorText);
    throw new Error(`Failed to register user: ${res.status}`);
  }

  const json: AuthResponse = await res.json();

  setToken(json.token);
  const store = useAuthStore.getState();
  store.login(json.token);

  await store.checkOwner();
  return json;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await fetch(`${apiUrl}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Register failed:', res.status, errorText);
    throw new Error(`Failed to register user: ${res.status}`);
  }

  const json: LoginResponse = await res.json();

  setToken(json.token);

  return json;
}

export function logout() {
  removeToken();
  console.log('Token deleted successfully');
}

export async function refreshToken() {
  const res = await fetch(`${apiUrl}/api/refresh`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Failed to refresh token');
  const data: AuthResponse = await res.json();
  setToken(data.token);

  return data;
}
