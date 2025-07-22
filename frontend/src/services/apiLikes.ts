import Cookies from 'js-cookie';
import { apiUrl } from './config/config';


interface Likes {
  id: number;
}
const token = Cookies.get('jwt_token');

export async function getUserLikes(id: number): Promise<Likes> {
  const res = await fetch(`${apiUrl}/api/likes/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message = errorData?.message || `Failed to delete comment: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}

export async function doLike(product_id: number): Promise<void> {

  const res = await fetch(`${apiUrl}/api/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify({ product_id }),
  });

  if (!res.ok) {
    throw new Error('Failed to like');
  }
  console.log('Like', res);
}
