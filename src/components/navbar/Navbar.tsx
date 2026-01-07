import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/authStore";

const Navbar = () => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-softBorder bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">

        {/* LEFT: BRAND */}
        <Link
          to="/"
          className="mr-8 text-2xl font-extrabold tracking-tight text-brand"
        >
          JustForYou
        </Link>

        {/* CATEGORIES */}
        <nav className="hidden md:flex gap-6 text-sm font-bold text-gray-900">
          {["Men", "Women", "Kids", "Beauty"].map((item) => (
            <Link
              key={item}
              to={`/products/${item.toLowerCase()}`}
              className="relative py-6 after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* SEARCH BAR */}
        <div className="flex flex-1 justify-center px-10 ">
          <Input
            placeholder="Search for products, brands and more"
            className="h-10 rounded-full border border-softBorder bg-gray-200 px-4 text-sm focus-visible:ring-brand"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-8">

          {/* LOGIN / PROFILE */}
          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/login")}
              className="flex flex-col items-center text-xs font-medium text-gray-800 hover:text-brand"
            >
              <User className="mb-1 h-5 w-5" />
              <span>Login</span>
            </button>
          ) : (
            <NavIcon icon={<User />} label="Profile" />
          )}

          <NavIcon icon={<Heart />} label="Wishlist" />
          <NavIcon icon={<ShoppingBag />} label="Bag" />
        </div>
      </div>
    </header>
  );
};

const NavIcon = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <Link
    to={`/${label.toLowerCase()}`}
    className="flex flex-col items-center text-xs font-medium text-gray-800 hover:text-brand"
  >
    <div className="mb-1 h-5 w-5">{icon}</div>
    <span>{label}</span>
  </Link>
);

export default Navbar;
