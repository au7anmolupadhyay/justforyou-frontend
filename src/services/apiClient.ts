import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";

/**
 * Axios instance that talks ONLY to API Gateway
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_GATEWAY_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * REQUEST INTERCEPTOR
 * Attaches JWT token before request goes out
 */
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * RESPONSE INTERCEPTOR
 * Handles global errors (401)
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error("401 Unauthorized - token expired");

      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default apiClient;
