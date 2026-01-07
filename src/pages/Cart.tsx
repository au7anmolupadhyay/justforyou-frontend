import { useState } from "react";
import "./Cart.css";
const initialCart = [
  {
    id: 1,
    name: "Men Solid Round Neck T-shirt",
    brand: "CLAFOUTIS",
    price: 2499,
    discount: 2157,
    size: "M",
    qty: 1,
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/..." // sample image url
  }
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [address, setAddress] = useState("Adarsh Nagar Behind Akansha Garden Moradabad Road Kashipur, Kashipur (Udham Singh Nagar), 244713");
  const [coupon, setCoupon] = useState("");
  const [platformFee] = useState(23);

  const totalMRP = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalDiscount = cart.reduce((sum, item) => sum + item.discount * item.qty, 0);
  const totalAmount = totalMRP - totalDiscount + platformFee;

  const handleRemove = (id: number) => setCart(cart.filter(item => item.id !== id));
  const handleQtyChange = (id: number, qty: number) => setCart(cart.map(item => item.id === id ? { ...item, qty } : item));
  const handleApplyCoupon = () => alert("Coupon applied: " + coupon);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Bag</h2>
        <div>
          <strong>Deliver to:</strong> {address}
          <button onClick={() => alert("Change address")}>Change Address</button>
        </div>
      </div>
      <div className="cart-body">
        <div className="cart-items">
          <h3>{cart.length}/1 ITEMS SELECTED</h3>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width={80} />
              <div>
                <strong>{item.brand}</strong>
                <div>{item.name}</div>
                <div>Size: {item.size}</div>
                <div>
                  Qty:
                  <select value={item.qty} onChange={e => handleQtyChange(item.id, Number(e.target.value))}>
                    {[1,2,3,4,5].map(q => <option key={q} value={q}>{q}</option>)}
                  </select>
                </div>
                <div>
                  ₹{item.price - item.discount} <span style={{ textDecoration: "line-through" }}>₹{item.price}</span>
                </div>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Price Details</h3>
          <div>Total MRP: ₹{totalMRP}</div>
          <div>Discount on MRP: -₹{totalDiscount}</div>
          <div>Platform Fee: ₹{platformFee}</div>
          <div><strong>Total Amount: ₹{totalAmount}</strong></div>
          <input
            type="text"
            placeholder="Apply Coupon"
            value={coupon}
            onChange={e => setCoupon(e.target.value)}
          />
          <button onClick={handleApplyCoupon}>Apply</button>
          <button style={{ marginTop: 16, background: "#ff3f6c", color: "#fff" }}>Place Order</button>
        </div>
      </div>
    </div>
  );
}