"use client"
import React, { useContext } from "react";

import Form from "@/components/Cart/Form";
import Element from "@/components/Cart/Element";
import { CartContext } from "../layout";

const page = () => {

  const { cartItems } = useContext(CartContext);

  return (
    <div className="w-11/12 h-[100vh] mx-auto flex space-x-6">
      <div className=" w-1/2  h-full  px-2  pt-32">
        <div className=" bg-white  -my-4 px-12 pb-8 rounded-xl shadow-lg">
          <h3 className=" text-3xl font-black text-secondary-400 mb-6 pt-4">
            Liste des engins Démandé :{" "}
            <span className=" font-light text-xl">
              du 21/05/2024 au 28/05/2024
            </span>
          </h3>
          <div className=" max-h-[52vh] overflow-y-auto">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <Element
                key={index}
                title={item.title}
                description1={item.description1}
                prixJournalier={item.prixJournalier}
              />
            ))
          ) : (
            <div>
              <h3 className="text-3xl mb-8">Pas de reservation</h3>
              <a href="/" className="underline text-blue-700">Reserver des engins</a>
            </div>
          )} 
          </div>
        </div>
      </div>
      <div className=" w-1/2 h-full mr-12 pt-32">
        <Form />
      </div>
    </div>
  );
};

export default page;
