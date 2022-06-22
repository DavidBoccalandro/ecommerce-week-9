export interface LoginRequest {
  data?: User;
}

export interface User {
  email: string;
  password: string;
}
