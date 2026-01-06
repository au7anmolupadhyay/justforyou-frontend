import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    brand: "H&M",
    title: "Slim Fit Cotton T-Shirt",
    price: 799,
    originalPrice: 1499,
  },
  {
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    brand: "ZARA",
    title: "Casual Denim Jacket",
    price: 2499,
    originalPrice: 3999,
  },
  {
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
    brand: "Roadster",
    title: "Printed Casual Shirt",
    price: 1199,
    originalPrice: 1999,
  },
  {
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=600&q=80",
    brand: "Nike",
    title: "Running Sneakers",
    price: 3499,
    originalPrice: 5999,
  },
];

const TrendingSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <h2 className="mb-6 text-xl font-bold">Trending For You</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
