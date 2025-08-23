import { apiFetch } from '@/utils/apiFetch';

// interface Likes {
//   id: number;
// }

export function getUserLikes() {
  return apiFetch('/api/likes', {
    auth: true,
  });
}

export async function doLike(product_id: number): Promise<void> {
  // const res = await fetch(`${apiUrl}/api/like`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: token ? `Bearer ${token}` : '',
  //   },
  //   body: JSON.stringify({ product_id }),
  // });

  // if (!res.ok) {
  //   throw new Error('Failed to like');
  // }
  // console.log('Like', res);
  return apiFetch('/api/like', {
    method: 'POST',
    auth: true,
    body: { product_id },
  });
}
