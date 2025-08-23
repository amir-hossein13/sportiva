import { AuthResponse, LoginResponse, RegisterData } from '../types/User';
import { removeToken, setToken } from '../utils/auth';
import { apiUrl } from './config/config';

export async function register(data: RegisterData): Promise<AuthResponse> {
  const res = await fetch(`${apiUrl}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data, role: 1 }),
  });

  if (!res.ok) {
    throw new Error('Failed to register user');
  }

  const json: AuthResponse = await res.json();

  setToken(json.token);

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
    throw new Error('Failed to login');
  }

  const json: LoginResponse = await res.json();

  setToken(json.token);

  return json;
}

export function logout() {
  removeToken();
  console.log('Token deleted successfully');
}
