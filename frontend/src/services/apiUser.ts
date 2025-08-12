import { apiFetch } from '@/utils/apiFetch';
import { apiUrl } from './config/config';
import { getToken } from '@/utils/auth';

export function updateUser({ username, address, profile }) {
  return apiFetch('/api/user/update', {
    method: 'POST',
    auth: true,
    body: { username, address, profile },
  });
}

export async function getCurrentUser() {
  const res = await fetch(`${apiUrl}/api/user/get_info`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const data = await res.json();
  return data
}
