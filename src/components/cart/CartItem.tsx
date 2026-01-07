import { useCart, CartProduct } from "@/context/CartContext";

const CartItem: React.FC<{ product: CartProduct }> = ({ product }) => {
  const { updateQty, removeFromCart } = useCart();

  return (
    <div className="flex gap-3 p-3 border rounded-lg items-center">
      <img
        src={product.image}
        className="w-20 h-20 object-cover rounded"
        alt={product.title}
      />

      <div className="flex-1">
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-sm">₹{product.price}</p>

        <select
          className="mt-2 border p-1 rounded text-sm"
          value={product.qty}
          onChange={e => updateQty(product.id, Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>
              Qty: {n}
            </option>
          ))}
        </select>

        <button
          className="ml-3 text-red-500 text-sm"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
