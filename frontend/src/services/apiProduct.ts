import { ProductData } from "../types/Product";
const apiUrl = import.meta.env.VITE_BASE_URL;

export async function getProduct(): Promise<ProductData> {

  const res = await fetch(`${apiUrl}/api/product`, {
    headers: { "Content-Type": "application/json" },
  });
  const data: ProductData = await res.json();
  console.log(data);
  return data;
}
