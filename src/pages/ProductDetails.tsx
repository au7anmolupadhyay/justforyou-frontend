import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import apiClient from "@/services/apiClient";

type Product = {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get(`/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <div className="rounded-lg overflow-hidden border">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full object-cover"
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-2xl font-bold">{product.brand}</h1>
        <p className="mt-1 text-gray-600">{product.title}</p>

        <div className="mt-4 text-2xl font-bold">
          ₹{product.price}
        </div>

        <p className="mt-4 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="mt-6 flex gap-4">
          <Button className="flex-1 bg-brand text-white">
            ADD TO BAG
          </Button>
          <Button variant="outline" className="flex gap-2">
            <Heart className="h-4 w-4" />
            WISHLIST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
