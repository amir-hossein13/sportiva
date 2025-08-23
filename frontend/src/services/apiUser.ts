import { apiFetch } from '@/utils/apiFetch';
type EditUser = {
  username: string;
  address: string;
  profile: string;
};

export function editUser({ username, address, profile }: EditUser) {
  return apiFetch('/api/user/update', {
    method: 'POST',
    auth: true,
    body: { username, address, profile },
  });
}

export function getCurrentUser() {
  return apiFetch('/api/user/get_info', {
    auth: true,
  });
}
