import { useState } from "react";
import "./Cart.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialCart = [
  {
    id: 1,
    name: "Men Solid Round Neck T-shirt",
    brand: "CLAFOUTIS",
    price: 2499,
    discount: 2157,
    size: "M",
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [address] = useState(
    "Adarsh Nagar Behind Akansha Garden Moradabad Road Kashipur, 244713"
  );
  const [coupon, setCoupon] = useState("");
  const [platformFee] = useState(23);

  const totalMRP = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalDiscount = cart.reduce((s, i) => s + i.discount * i.qty, 0);
  const totalAmount = totalMRP - totalDiscount + platformFee;

  const handleRemove = (id: number) =>
    setCart(cart.filter(i => i.id !== id));

  const handleQtyChange = (id: number, qty: number) =>
    setCart(cart.map(i => (i.id === id ? { ...i, qty } : i)));

  const handleApplyCoupon = () =>
    alert("Coupon applied: " + coupon);

  return (
    <div className="max-w-[1100px] mx-auto p-5">

      {/* HEADER */}
      <div className="border rounded-2xl p-4 mb-4 flex justify-between">
        <div className="flex flex-col gap-1 w-full">
          <div className="font-semibold text-sm uppercase">
            Deliver to:
          </div>
          <div className="text-xs text-muted-foreground">
            {address}
          </div>
        </div>

        <Button
          variant="outline"
          className="uppercase text-xs"
          onClick={() => alert("Change address")}
        >
          Change Address
        </Button>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-[65%_35%] gap-6">

        {/* LEFT – ITEMS VERTICAL */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xs uppercase">
            {cart.length} Items Selected
          </h3>

          {cart.map(item => (
            <div
              key={item.id}
              className="border rounded-2xl p-4 flex gap-5"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[160px] h-[190px] object-cover rounded-xl"
              />

              <div className="flex flex-col gap-2 w-full">

                <div className="font-bold text-sm">
                  {item.brand}
                </div>

                <div className="text-sm">
                  {item.name}
                </div>

                <div className="text-xs">
                  Size: {item.size}
                </div>

                {/* QTY – HTML SELECT */}
                <div className="flex items-center gap-2 text-xs">
                  Qty:
                  <select
                    className="border rounded-xl p-1 text-xs w-[80px]"
                    value={item.qty}
                    onChange={e =>
                      handleQtyChange(item.id, Number(e.target.value))
                    }
                  >
                    {[1,2,3,4,5].map(q => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                </div>

                {/* PRICE */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-semibold text-sm">
                    ₹{item.price - item.discount}
                  </span>

                  <span className="line-through text-xs">
                    ₹{item.price}
                  </span>

                  <span className="text-primary text-xs">
                    ₹{item.discount} OFF
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-3 mt-2">

                  <Button
                    variant="ghost"
                    className="uppercase text-xs"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </Button>

                  <Button
                    variant="ghost"
                    className="uppercase text-xs"
                  >
                    Move to Wishlist
                  </Button>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – SUMMARY */}
        <div className="border rounded-2xl p-4 flex flex-col gap-2">

          <h3 className="font-bold text-xs uppercase mb-2">
            Price Details
          </h3>

          <div className="flex justify-between text-xs">
            <span>Total MRP</span>
            <span>₹{totalMRP}</span>
          </div>

          <div className="flex justify-between text-xs">
            <span>Discount on MRP</span>
            <span className="text-green-600">
              -₹{totalDiscount}
            </span>
          </div>

          <div className="flex justify-between text-xs">
            <span>Platform Fee</span>
            <span>₹{platformFee}</span>
          </div>

          <div className="flex justify-between font-semibold text-sm mt-1">
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
          </div>

          <Input
            className="mt-3 text-xs"
            placeholder="Apply Coupon"
            value={coupon}
            // onChange={e => setCoupon(e.target.value)}
          />

          <Button
            className="mt-3 w-full uppercase text-sm"
            onClick={handleApplyCoupon}
          >
            Place Order
          </Button>

        </div>

      </div>
    </div>
  );
}
