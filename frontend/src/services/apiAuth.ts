import { AuthResponse } from "../../../types/User";
import { setToken } from "../../../utils/auth";

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
