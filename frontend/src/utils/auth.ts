import Cookies from "js-cookie";

const TOKEN_KEY = "jwt_token";

export function setToken(token: string) {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
}

export const getToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};
