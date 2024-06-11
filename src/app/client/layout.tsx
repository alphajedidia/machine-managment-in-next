"use client";

import { Footer, Navbar } from "@/components";
import { CardData } from "@/components/Engin/data";
import { showSuccesToCart } from "@/utils/sweetAlertUtils";
import { createContext, useEffect, useState } from "react";
import { DateType } from "react-tailwindcss-datepicker";
import Swal from "sweetalert2";

export const CartContext = createContext<{
  date: { startDate: null; endDate: null };
  setDate: React.Dispatch<React.SetStateAction<{ startDate: null; endDate: null }>>;
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
  cartItems: CardData[];
  setCartItems: React.Dispatch<React.SetStateAction<CardData[]>>;
  removeFromCart: (item: CardData) => void;
}>({
  date: { startDate: null, endDate: null },
  setDate: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartItems: [],
  setCartItems: () => {},
  removeFromCart: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [date, setDate] = useState<{ startDate: null; endDate: null }>(() => {
    const savedDate = localStorage.getItem("date");
    return savedDate ? JSON.parse(savedDate) : { startDate: null, endDate: null };
  });
  
  const [cartCount, setCartCount] = useState<number>(() => {
    const savedCartCount = localStorage.getItem("cartCount");
    return savedCartCount ? Number(savedCartCount) : 0;
  });

  const [cartItems, setCartItems] = useState<CardData[]>(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(date));
    localStorage.setItem("cartCount", String(cartCount));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [date, cartCount, cartItems]);

  const removeFromCart = (item: CardData) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    Swal.fire({
      title: "Supprimer l'engin de la liste",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e7473c",
      cancelButtonColor: "#c8c8c8",
      confirmButtonText: "Supprimer",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Supprimer de la liste avec succès",
          text: "",
          icon: "success",
          timer : 1000,
          showConfirmButton: false,
        });
        setCartItems(updatedCartItems);
        setCartCount(updatedCartItems.length);
      }
    });
  };

  return (
    <html lang="en">
      <body className="">
        <CartContext.Provider
          value={{
            date,
            setDate,
            cartCount,
            setCartCount,
            cartItems,
            setCartItems,
            removeFromCart,
          }}
        >
          <Navbar cartCount={cartCount} />
          {children}
          <Footer />
        </CartContext.Provider>
      </body>
    </html>
  );
}
