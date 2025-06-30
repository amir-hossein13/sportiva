export interface RegisterData {
  username: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  role: number;
}

export interface AuthResponse {
  token: string;
}
export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    password: string;
  };
}
