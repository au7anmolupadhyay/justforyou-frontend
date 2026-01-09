import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  apiClient from "@/services/apiClient";
import ProductCard from "@/components/product/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  imageUrl: string;
};

const ProductList = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get("/product", {
        params: { category },
        signal: controller.signal,
      })
      .then((res) => setProducts(res.data))
      .catch((err) => {
        if (err.name !== "CanceledError") {
          console.error(err);
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [category]);

  if (loading) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  if (!loading && products.length === 0) {
  return (
    <p className="text-center mt-10 text-gray-500">
      No products found for {category}
    </p>
  );
}


  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-6 text-2xl font-bold capitalize">
        {category} Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.imageUrl}
            price={product.price}
            id={product.id}
            brand={product.brand}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
