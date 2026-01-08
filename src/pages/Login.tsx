import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import authService from "@/services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    try {
      if (mode === "login") {
        // LOGIN FLOW
        const res = await authService.login({
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);

        navigate("/");
      } else {
        // SIGNUP FLOW
        await authService.register({
          email: form.email,
          password: form.password,
          name: form.name,
          role: "USER", // default role
        });

        // after signup → switch to login
        setMode("login");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">

      {/* LEFT – FORM */}
      <div className="flex items-center justify-center px-8">
        <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

          {/* CLOSE */}
          <Link
            to="/"
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
          >
            <X />
          </Link>

          <h1 className="text-3xl font-extrabold text-gray-900">
            {mode === "login" ? "Welcome Back 👋" : "Create Account ✨"}
          </h1>

          <p className="mt-2 text-sm text-gray-600">
            Fashion curated just for you
          </p>

          {error && (
            <p className="mt-4 text-sm text-red-500 text-center">
              {error}
            </p>
          )}

          <div className="mt-6 space-y-4">
            {mode === "signup" && (
              <Input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
            )}

            <Input
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />

            <Button
              className="w-full bg-black hover:bg-gray-900"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Sign In"
                : "Sign Up"}
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            {mode === "login" ? "New here?" : "Already have an account?"}{" "}
            <button
              onClick={() =>
                setMode(mode === "login" ? "signup" : "login")
              }
              className="font-semibold text-brand hover:underline"
            >
              {mode === "login" ? "Create account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="relative hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80"
          alt="Shopping lifestyle"
          className="
            h-full w-full object-cover
            [mask-image:linear-gradient(to_left,black_70%,transparent_100%)]
          "
        />
      </div>
    </div>
  );
};

export default Login;
