import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockProduct = {
  id: "1",
  brand: "Puma",
  title: "Men Skyrocket Lite Running Shoes",
  price: 2999,
  originalPrice: 4999,
  rating: "4.1",
  reviews: "1.8k",
  image:
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
};

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT – IMAGE */}
      <div className="rounded-lg overflow-hidden border">
        <img
          src={mockProduct.image}
          alt={mockProduct.title}
          className="w-full object-cover"
        />
      </div>

      {/* RIGHT – DETAILS */}
      <div>
        <h1 className="text-2xl font-bold">{mockProduct.brand}</h1>
        <p className="mt-1 text-gray-600">{mockProduct.title}</p>

        <div className="mt-3 flex items-center gap-3 text-sm">
          <span className="rounded bg-green-600 px-2 py-1 text-white">
            {mockProduct.rating} ★
          </span>
          <span className="text-gray-500">
            {mockProduct.reviews} Ratings
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold">
            ₹{mockProduct.price}
          </span>
          <span className="line-through text-gray-400">
            ₹{mockProduct.originalPrice}
          </span>
          <span className="text-brand font-semibold">
            {Math.round(
              ((mockProduct.originalPrice - mockProduct.price) /
                mockProduct.originalPrice) *
                100
            )}
            % OFF
          </span>
        </div>

        {/* SIZE */}
        <div className="mt-6">
          <p className="mb-2 font-semibold">Select Size</p>
          <div className="flex gap-3">
            {["6", "7", "8", "9", "10"].map((size) => (
              <button
                key={size}
                className="h-10 w-10 rounded-full border hover:border-brand"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
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
