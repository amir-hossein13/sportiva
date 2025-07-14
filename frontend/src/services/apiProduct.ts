// api/productApi.ts
import { apiFetch } from "../utils/apiFetch";
import { ProductData } from "../types/Product";

// features/product/useProduct.ts

export async function getAllProduct(): Promise<ProductData[]> {

  const data = await apiFetch<{ products: ProductData[] }>('/api/product');
  return Array.isArray(data.products) ? data.products : [];
}

export function getTopSalesProduct(): Promise<ProductData[]> {
  return apiFetch<ProductData[]>("/api/product/top-sales");
}

export function getSingleProduct(id: number): Promise<ProductData[]> {
  return apiFetch<ProductData[]>(`/api/product/${id}`);
}

/////// crud product

export function addProduct(): Promise<ProductData[]> {
  return apiFetch<ProductData[]>(`/api/product/create`, {
    method: "POST",
    auth: true,
  });
}
export function DeleteProduct(): Promise<ProductData[]> {
  return apiFetch<ProductData[]>(`/api/product/delete`, {
    method: "DELETE",
    auth: true,
  });
}
export function updateProduct(): Promise<ProductData[]> {
  return apiFetch<ProductData[]>(`/api/product-update`, {
    method: "POST",
    auth: true,
  });
}
export function confirmedProduct(): Promise<ProductData[]> {
  return apiFetch<ProductData[]>(`/api/confirm-product`, {
    method: "POST",
    auth: true,
  });
}
export function notConfirmedProduct(): Promise<ProductData[]> {
  return apiFetch<ProductData[]>(`/api/not-confirm`, {
    auth: true,
  });
}

