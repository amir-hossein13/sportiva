import { ProductData } from "../types/Product";
import { apiFetch } from "../utils/apiFetch";

export const searchProducts = () => {
  return apiFetch<ProductData>("/api/search");
};
export const notConfirmedSearchProducts = () => {
  return apiFetch<ProductData>("/api/search/not-confirmed");
};
export const searchAllProducts = () => {
  return apiFetch<ProductData>("/api/search/all");
};
export const searchUsers = () => {
  return apiFetch<ProductData>("/api/search/users");
};
export const searchCreator = () => {
  return apiFetch<ProductData>("/api/search/creators");
};
