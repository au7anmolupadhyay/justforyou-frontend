import React, { createContext, useContext, useState } from "react";

export type CartProduct = {
  id: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextType = {
  cart: CartProduct[];
  addToCart: (p: CartProduct) => void;
  updateQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (p: CartProduct) => {
    setCart(c => {
      const ex = c.find(i => i.id === p.id);
      if (ex) {
        return c.map(i =>
          i.id === p.id ? { ...i, qty: i.qty + p.qty } : i
        );
      }
      return [...c, p];
    });
  };

  const updateQty = (id: string, qty: number) => {
    setCart(c => c.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeFromCart = (id: string) => {
    setCart(c => c.filter(i => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("Cart not wrapped with provider");
  return ctx;
};
