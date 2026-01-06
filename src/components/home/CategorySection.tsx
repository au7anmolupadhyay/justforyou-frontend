import { Link } from "react-router-dom";

const categories = [
  { name: "Men", path: "men" },
  { name: "Women", path: "women" },
  { name: "Kids", path: "kids" },
  { name: "Beauty", path: "beauty" },
];

const CategorySection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <h2 className="mb-6 text-xl font-bold tracking-tight">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products/${cat.path}`}
            className="group rounded-lg border border-softBorder bg-white p-6 text-center transition hover:shadow-md"
          >
            <div className="mb-4 h-32 rounded bg-mutedBg" />
            <p className="font-semibold group-hover:text-brand">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
