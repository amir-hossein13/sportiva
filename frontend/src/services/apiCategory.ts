import { getToken } from '@/utils/auth';
import { apiFetch } from '../utils/apiFetch';
import { apiUrl } from './config/config';

export interface Category {
  id?: number;
  name: string;
}


export const addCategory = async (category: Pick<Category, 'name'>): Promise<Category> => {
  const res = await fetch(`${apiUrl}/api/category/create`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category), 
  });

  if (!res.ok) {
    throw new Error(`Failed to add category: ${res.status}`);
  }

  return res
};


export const deleteCategory = async (id: number): Promise<void> => {
  const res = await fetch(`${apiUrl}/api/category/delete/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete category: ${res.status}`);
  }
};


export const getCategories = (): Promise<Category[]> => {
  return apiFetch<Category[]>(`/api/category/list`, {
    auth: true,
  });
};
