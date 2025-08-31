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
  username:AuthUser;
}
export interface LoginResponse {
  user(arg0: string[], user: any): unknown;
  token: string;
  username:AuthUser; 
}

export interface AuthUser {
  username: string;
  email: string;
  role: number;
}