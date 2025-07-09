import { CartData } from "../types/Cart";
import { apiFetch } from "../utils/apiFetch";

export const getCartList = () => {
  apiFetch<CartData>(`/api/cart/list`, {
    auth: true,
  });
};
export const getCartItem = (id: number) => {
  apiFetch<CartData>(`/api/cart/${id}`, {
    auth: true,
  });
};
export const addNewCartItem = () => {
  apiFetch<CartData>(`/api/cart/create`, {
    method: "POST",
    auth: true,
  });
};
export const deleteCartItem = (id: number) => {
  apiFetch<CartData>(`/api/cart/delete/${id}`, {
    method: "DELETE",
    auth: true,
  });
};
export const updateCartItem = (id: number) => {
  apiFetch<CartData>(`/api/cart/update`, {
    method: "PUT",
    auth: true,
  });
};