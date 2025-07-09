// utils/apiFetch.ts
import Cookies from "js-cookie";
import { apiUrl } from "../services/config/config";


type Method = "GET" | "POST" | "PUT" | "DELETE";

interface ApiFetchOptions {
  method?: Method;
  body?: any;
  auth?: boolean;
}

export async function apiFetch<T>(
  path: string,
  options: ApiFetchOptions = {}
): Promise<T> {
  const { method = "GET", body, auth = false } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (auth) {
    const token = Cookies.get("jwt_token");
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${apiUrl}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message = errorData?.message || `Request failed: ${res.status}`;
    throw new Error(message);
  }
  const data:T = await res.json()
  // console.log(data);
  return data
}
