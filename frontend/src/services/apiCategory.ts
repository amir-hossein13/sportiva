import { apiFetch } from "../utils/apiFetch";
interface Category{
    name:string
}
export const addCategory = () => {
  return apiFetch<Category[]>(`/api/categories`,{
    method:"POST"
  });
};

export const deleteCategory = (id: number) => {
  return apiFetch<{ success: boolean }>(`/api/categories/${id}`, {
    method: "DELETE",
  });
}
export const getCategories = () => {
  return apiFetch<Category[]>(`/api/category/list`);
};