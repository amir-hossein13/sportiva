import { getToken } from '@/utils/auth';
import { ProductData } from '../types/Product';
import { apiUrl } from './config/config';

export async function getAllProduct(): Promise<ProductData[]> {
  const res = await fetch(`${apiUrl}/api/product`, {
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return Array.isArray(data.products) ? data.products : [];
}

export async function getTopSalesProduct(): Promise<ProductData[]> {
  const res = await fetch(`${apiUrl}/api/product/top-sales`, {
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
}

export async function getSingleProduct(id: number): Promise<ProductData> {
  const res = await fetch(`${apiUrl}/api/product/${id}`, {
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
}

export async function addProduct(formData: ProductData): Promise<ProductData[]> {
  const res = await fetch(`${apiUrl}/api/product/create`, {
    method: 'POST',
    headers: { Authorization: `bearer ${getToken()}` },
    body: formData,
  });
  const result = await res.json();
  console.log(result);
  return result;
}

export async function deleteProduct(id: number) {
  const res = await fetch(`${apiUrl}/api/product/delete`, {
    method: 'DELETE',
    headers: { Authorization: `bearer ${getToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  return res;
}

export async function updateProduct(formData: ProductData): Promise<ProductData[]> {
  const res = await fetch(`${apiUrl}/api/product-update`, {
    method: 'POST',
    headers: { Authorization: `bearer ${getToken()}` },
    body: formData,
  });

  return res;
}

export async function confirmedProduct(): Promise<ProductData[]> {
  const res = await fetch(`${apiUrl}/api/confirm-product`, {
    method: 'POST',
    headers: { Authorization: `bearer ${getToken()}`, 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
}

export async function notConfirmedProduct(): Promise<ProductData[]> {
  const res = await fetch(`${apiUrl}/api/not-confirm`, {
    headers: { Authorization: `bearer ${getToken()}`, 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  return data;
}
