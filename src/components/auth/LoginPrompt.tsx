import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const LoginPrompt = () => {
  const { isLoggedIn } = useAuthStore();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      const t = setTimeout(() => setOpen(true), 15000);
      return () => clearTimeout(t);
    }
  }, [isLoggedIn]);

  if (!open || isLoggedIn) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="relative w-[420px] rounded-xl bg-white p-6 shadow-xl">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3"
        >
          <X />
        </button>

        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          className="mb-4 h-40 w-full rounded object-cover"
        />

        <h2 className="text-xl font-bold">Login to JustForYou</h2>
        <p className="mt-1 text-sm text-gray-600">
          Get personalized deals & faster checkout
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-4 w-full rounded bg-black py-2 text-white font-semibold"
        >
          Login / Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPrompt;
