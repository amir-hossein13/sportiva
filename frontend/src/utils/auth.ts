import Cookies from 'js-cookie';
import { AuthUser } from '../types/User';

const TOKEN_KEY = 'jwt_token';

const USER_KEY = 'user';
// user auth
export function setUser(username: object) {
  Cookies.set(USER_KEY, JSON.stringify(username), {
    expires: 10,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}

export function getUser(): AuthUser | null {
  const userCookie = Cookies.get(USER_KEY);
  return userCookie ? (JSON.parse(userCookie) as AuthUser) : null;
}

export function removeUser() {
  Cookies.remove(USER_KEY);
}
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
  removeUser();
};
