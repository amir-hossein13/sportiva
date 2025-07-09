// api/commentApi.ts
import { apiFetch } from "../utils/apiFetch";
import { CommentData } from "../types/Comment";

export function getProductComments(id: number): Promise<CommentData> {
  return apiFetch<CommentData>(`/api/comments/${id}`);
}

export function checkCommentOwner(): Promise<{ isOwner: boolean }> {
  return apiFetch<{ isOwner: boolean }>(`/api/comments/check-owner`, {
    method: "POST",
    auth: true,
  });
}

export function addComments(content: string): Promise<CommentData> {
  return apiFetch<CommentData>(`/api/comments`, {
    method: "POST",
    body: { content },
    auth: true,
  });
}

export function editComments(content: string): Promise<CommentData> {
  return apiFetch<CommentData>(`/api/comments`, {
    method: "PUT",
    body: { content },
    auth: true,
  });
}

export function deleteComment(): Promise<{ success: boolean }> {
  return apiFetch<{ success: boolean }>(`/api/comments/delete`, {
    method: "DELETE",
    auth: true,
  });
}
