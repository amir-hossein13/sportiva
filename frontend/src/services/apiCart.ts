
import { CartData } from '@/types/Cart';
import { apiUrl } from './config/config';
import { getToken, removeToken } from '@/utils/auth';

// 📥 دریافت کل لیست سبد
export const getCartList = async (): Promise<CartData> => {
  const res = await fetch(`${apiUrl}/api/cart/list`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (res.status === 401) {
    removeToken();
    window.location.href = '/login';
    return Promise.reject(new Error('Unauthorized'));
  }
  if (!res.ok) throw new Error('Failed to fetch cart list');
  return res.json();
};

// 📦 دریافت یک آیتم خاص از سبد
export const getCartItem = async (id: number): Promise<CartData> => {
  const res = await fetch(`${apiUrl}/api/cart/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (res.status === 401) {
    removeToken();
    window.location.href = '/login';
    return Promise.reject(new Error('Unauthorized'));
  }
  if (!res.ok) throw new Error('Failed to fetch cart item');
  return res.json();
};

// ➕ افزودن آیتم جدید به سبد
export const addNewCartItem = async (id: number, quantity: number): Promise<CartData | null> => {
  const res = await fetch(`${apiUrl}/api/cart/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ id, quantity }),
  });

  if (!res.ok) throw new Error('Failed to add item');

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return null;
  }
  if (res.status === 401) {
    removeToken();
    window.location.href = '/login';
    return Promise.reject(new Error('Unauthorized'));
  }
  const text = await res.text();
  if (!text) return null;

  return JSON.parse(text);
};

// 🔄 بروزرسانی آیتم موجود در سبد
export const updateCartItem = async (id: number, quantity: number): Promise<CartData> => {
  const res = await fetch(`${apiUrl}/api/cart/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ id, quantity }),
  });
  if (res.status === 401) {
    removeToken();
    window.location.href = '/login';
    return Promise.reject(new Error('Unauthorized'));
  }
  if (!res.ok) throw new Error('Failed to update item');
  //@ts-expect-error idk
  return res
};

// 🗑️ حذف آیتم از سبد خرید
export const deleteCartItem = async (id: number): Promise<CartData | null> => {
  const res = await fetch(`${apiUrl}/api/cart/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to delete item');

  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return null;
  }
  if (res.status === 401) {
    removeToken();

    window.location.href = '/login';
    return Promise.reject(new Error('Unauthorized'));
  }
  const text = await res.text();
  if (!text) return null;

  return JSON.parse(text);
};
