import { AuthResponse, LoginResponse } from "../types/User";
import { removeToken, setToken } from "../utils/auth";

export async function register() {
  const res = await fetch("http://127.0.0.1:8000/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "mohammad123",
      email: "test3@example.com",
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
}

export async function login() {
  const res = await fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "test3@example.com",
      password: "abc12345",
    }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Login failed");
  }
  const data: LoginResponse = await res.json();
  console.log(data);
}

export function logout(){
  removeToken()
  console.log('token deleted successfully');
}