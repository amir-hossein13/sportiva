import { RegisterData } from "../types/User";
import { apiFetch } from "../utils/apiFetch";

export const deleteUser = (id: number) => {
  return apiFetch<{ success: boolean }>(`/api/user/${id}`,{
    method: "DELETE",
  });
};
export const getUser = () => {
  return apiFetch<RegisterData[]>(`/api/users`);
};
