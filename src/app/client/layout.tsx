"use client";

import { Footer, Navbar } from "@/components";
import { CardData } from "@/components/Engin/data";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<{
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: CardData[];
  setCartItems: React.Dispatch<React.SetStateAction<CardData[]>>;
}>({
  cartCount: 0,
  setCartCount: () => {},
  cartItems: [],
  setCartItems: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartCount, setCartCount] = useState<number>(() => {
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount ? Number(savedCartCount) : 0;
  });

  const [cartItems, setCartItems] = useState<CardData[]>(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartCount", String(cartCount));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartCount, cartItems]);


  return (
    <html lang="en">
      <body className="">
      <CartContext.Provider
          value={{ cartCount, setCartCount, cartItems, setCartItems }}
        >
          <Navbar cartCount={cartCount} cartItems={cartItems} />
          {children}
          <Footer />
        </CartContext.Provider>
      </body>
    </html>
  );
}
