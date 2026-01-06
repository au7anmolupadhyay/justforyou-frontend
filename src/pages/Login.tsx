import { useState } from "react";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

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

          <div className="mt-6 space-y-4">
            {mode === "signup" && <Input placeholder="Full Name" />}
            <Input placeholder="Email address" />
            <Input type="password" placeholder="Password" />

            <Button className="w-full bg-black hover:bg-gray-900">
              {mode === "login" ? "Sign In" : "Sign Up"}
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
