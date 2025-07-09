import Cookies from "js-cookie";

export function getAuthHeaders(includeToken = true): HeadersInit {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (includeToken) {
    const token = Cookies.get("jwt_token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message = errorData?.message || `Request failed: ${res.status}`;
    throw new Error(message);
  }
  const data: T = await res.json();
  return data;
}
