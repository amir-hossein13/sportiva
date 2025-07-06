import { ProductData } from "../types/Product";
const apiUrl = import.meta.env.VITE_BASE_URL;

export async function getAllProduct(): Promise<ProductData> {
  const res = await fetch(`${apiUrl}/api/product`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to delete comment: ${res.status}`;
    throw new Error(message);
  }
  const data: ProductData = await res.json();
  console.log(data);
  return data;
}
export async function getTopSalesProduct(): Promise<ProductData> {
  const res = await fetch(`${apiUrl}/api/product/top-sales`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to delete comment: ${res.status}`;
    throw new Error(message);
  }
  const data: ProductData = await res.json();
  console.log(data);
  return data;
}

export async function getSingleProduct(id: number): Promise<ProductData> {
  const res = await fetch(`${apiUrl}/api/product/${id}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to delete comment: ${res.status}`;
    throw new Error(message);
  }
  const data: ProductData = await res.json();
  console.log(data);
  return data;
}
