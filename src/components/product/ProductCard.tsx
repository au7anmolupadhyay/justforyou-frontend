import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: string;
  image: string;
  brand: string;
  title: string;
  price: number;
  originalPrice?: number;
};

const ProductCard = ({
  id,
  image,
  brand,
  title,
  price,
  originalPrice,
}: ProductCardProps) => {
  return (
    <div className="group relative rounded-lg border bg-white p-3 hover:shadow-lg">

      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-72 w-full rounded object-cover"
        />

        <p className="mt-2 text-sm font-semibold">{brand}</p>
        <p className="text-sm text-gray-500 truncate">{title}</p>

        <div className="mt-1 flex gap-2">
          <span className="font-bold">₹{price}</span>
          {originalPrice && (
            <span className="text-sm line-through text-gray-400">
              ₹{originalPrice}
            </span>
          )}
        </div>
      </Link>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-3 top-3 bg-white"
      >
        <Heart className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ProductCard;
