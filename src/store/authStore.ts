import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  initAuth: () => void;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,

  // called once on app start
  initAuth: () => {
    const token = localStorage.getItem("accessToken");
    set({ isLoggedIn: !!token });
  },

  login: () => {
    set({ isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    set({ isLoggedIn: false });
  },
}));
