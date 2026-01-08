import apiClient from "./apiClient";

/* =====================
   DTOs (mirror backend)
===================== */

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
  role: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};

/* =====================
   AUTH APIs
===================== */
const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(
    "/auth/login",
    data
  );

  return response.data;
};

const register = async (data: RegisterRequest): Promise<void> => {
  await apiClient.post("/auth/register", data);
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const authService = {
  login,
  register,
  logout,
};

export default authService;
