import { AuthResponse, LoginResponse } from "../types/User";
import { removeToken, setToken } from "../utils/auth";
const apiUrl = import.meta.env.VITE_BASE_URL;
export async function register(): Promise<AuthResponse> {
  const res = await fetch(`${apiUrl}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "mohammad123",
      email: "test5@example.com",
      phone: "09123456789",
      password: "abc12345",
      address: "Tehran, Iran",
      role: 1,
    }),
  });
  const data: AuthResponse = await res.json();
  setToken(data.token);
  console.log("Token saved to cookie!");
  console.log(data);
  return data
}

export async function login(): Promise<LoginResponse> {
  const res = await fetch(`${apiUrl}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "test3@example.com",
      password: "abc12345",
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw new Error(error?.message || "Login failed");
  }

  const data: LoginResponse = await res.json();
  setToken(data.token); 
  console.log(data);
  return data;
}



export function logout() {
  removeToken();
  console.log("token deleted successfully");
}
