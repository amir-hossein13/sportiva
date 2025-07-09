import { AdminApplyAll, ApplyAdmin } from "../types/Admin";
import { apiFetch, getAuthHeaders } from "../utils/api";

const apiUrl = import.meta.env.VITE_BASE_URL;

export const getIsOwner = () => {
  return apiFetch<{ isOwner: boolean }>(`${apiUrl}/api/is_owner`, {
    headers: getAuthHeaders(),
  });
};
export const getIsCreator = () => {
  return apiFetch<{ isCreator: boolean }>(`${apiUrl}/api/is_creator`, {
    headers: getAuthHeaders(),
  });
};

export const postApply = () => {
  return apiFetch<ApplyAdmin>(`${apiUrl}/api/apply`, {
    method: "POST",
    headers: getAuthHeaders(),
  });
};

export const getAllApply = () => {
  return apiFetch<AdminApplyAll>(`${apiUrl}/api/apply/all`, {
    headers: getAuthHeaders(),
  });
};

export const deleteApplyFail = () => {
  return apiFetch<{ success: boolean }>(`${apiUrl}/api/apply/fail`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
};

export const postApplyVerify = () => {
  return apiFetch<any>(`${apiUrl}/api/apply/all`, {
    method: "POST",
    headers: getAuthHeaders(),
  });
};
