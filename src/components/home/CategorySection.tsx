import { Link } from "react-router-dom";

const categories = [
  { name: "Men", path: "men", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=400&q=80" },
  { name: "Women", path: "women", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80" },
  { name: "Kids", path: "kids", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=400&q=80" },
  { name: "Beauty", path: "beauty", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80" },
];

const CategorySection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <h2 className="mb-6 text-xl font-bold tracking-tight">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products/${cat.path}`}
            className="block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
          >
            {/* IMAGE CONTAINER */}
            <div className="h-64 w-full overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 text-center">
              <p className="text-base font-bold tracking-wide group-hover:text-brand">
                {cat.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Explore {cat.name.toLowerCase()} collection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
