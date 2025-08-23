import Cookies from 'js-cookie';

const TOKEN_KEY = 'jwt_token';

// user auth

// setCookie
export function setToken(token: string) {
  Cookies.set(TOKEN_KEY, token, {
    expires: 7,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}

export const getToken = (): string | null => {
  const token = Cookies.get(TOKEN_KEY);
  return token ?? null;
};
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY);
};
