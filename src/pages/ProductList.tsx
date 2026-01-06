import { useParams } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";

const allProducts = [
  {
    id: "1",
    category: "men",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    brand: "H&M",
    title: "Slim Fit Cotton T-Shirt",
    price: 799,
    originalPrice: 1499,
  },
  {
    id: "2",
    category: "men",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    brand: "ZARA",
    title: "Casual Denim Jacket",
    price: 2499,
    originalPrice: 3999,
  },
  {
    id: "3",
    category: "women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    brand: "ONLY",
    title: "Floral Summer Dress",
    price: 1899,
    originalPrice: 2999,
  },
];

const ProductList = () => {
  const { category } = useParams();

  const products = allProducts.filter(
    (p) => p.category === category
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold capitalize">
          {category} Collection
        </h1>

        <select className="rounded border px-3 py-2 text-sm">
          <option>Sort by: Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      {products.length === 0 && (
        <p className="mt-8 text-textMuted">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
