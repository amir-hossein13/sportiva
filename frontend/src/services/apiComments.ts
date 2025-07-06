import { CommentData } from "../types/Comment";
import Cookies from "js-cookie";

const apiUrl = import.meta.env.VITE_BASE_URL;
const token = Cookies.get("jwt_token");

export async function getProductComments(
  id: number
): Promise<CommentData | { error: string }> {
  const res = await fetch(`${apiUrl}/api/comments/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to fetch comments: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}

export async function checkCommentOwner(id: number): Promise<any> {
  const res = await fetch(`${apiUrl}/api/comments/check-owner`, {
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
      errorData?.message || `Failed to fetch comments: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}

export async function addComments(
  id: number,
  content: string
): Promise<CommentData> {
  const res = await fetch(`${apiUrl}/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to fetch comments: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}

export async function editComments(
  id: number,
  content: string
): Promise<CommentData> {
  const res = await fetch(`${apiUrl}/api/comments`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify({ id, content }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const message =
      errorData?.message || `Failed to fetch comments: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
}

export async function deleteComment(id: number): Promise<any> {

  const res = await fetch(`${apiUrl}/api/comments/delete`, {
    method: "DELETE",
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
