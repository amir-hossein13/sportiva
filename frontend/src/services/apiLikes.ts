import Cookies from "js-cookie";

const apiUrl = import.meta.env.VITE_BASE_URL;
const token = Cookies.get("jwt_token");

export async function getUserLikes(id: string): Promise<any> {
  const res = await fetch(`${apiUrl}/api/likes/${id}`, {
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to delete comment: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}

export async function like(id: number): Promise<any> {
  const res = await fetch(`${apiUrl}/api/like`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify({ id }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to delete comment: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}
