export interface RegisterData {
  username: string;
  email: string;
  phone: string;
  password: number;
  address: string;
  role?: number;
}

export interface AuthResponse {
  token: string;
  user:AuthUser;
}
export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    password: string;
  };
}

export interface AuthUser {
  username: string;
  email: string;
  role: number;
}