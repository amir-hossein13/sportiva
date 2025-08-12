// utils/apiFetch.ts
import Cookies from 'js-cookie';
import { apiUrl } from '../services/config/config';
import { removeToken } from './auth';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface ApiFetchOptions {
  method?: Method;
  body?: unknown;
  auth?: boolean;
}

export async function apiFetch<T>(path: string, options: ApiFetchOptions = {}): Promise<T> {
  const { method = 'GET', body, auth = false } = options;

  // هدرها
  const headers: Record<string, string> = {
    // 'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (body) {
    headers['Content-Type'] = 'application/json';
  }
  if (auth) {
    const token = Cookies.get('jwt_token');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const res = await fetch(`${apiUrl}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    removeToken();
    window.location.href = '/login';
    return Promise.reject(new Error('Unauthorized'));
  }

  

  if (res.status === 204 || res.headers.get('Content-Length') === '0') {
    return null as T;
  }

  const data = res.json()
  return data;
}
