"use client";
import React, { useContext } from "react";

import Form from "@/components/Cart/Form";
import Element from "@/components/Cart/Element";
import { CartContext } from "../layout";
import { CustomButton } from "@/components";
import { Delete } from "@/components/icons";

const page = () => {
  const { date, cartItems, removeFromCart } = useContext(CartContext);
  console.log(date);

  return (
    <div className="w-11/12 h-[100vh] mx-auto flex space-x-6">
      <div className=" w-1/2  h-full  px-2  pt-32">
        <div className=" bg-white  -my-4 px-12 pb-8 rounded-xl shadow-lg">
          <h3 className=" text-3xl font-black text-secondary-400 mb-6 pt-4">
            Liste des engins Démandé :{" "}
            <span className=" font-light text-xl">
            du {date.startDate} au {date.endDate}
            </span>
          </h3>
          <div className=" max-h-[52vh] overflow-y-auto">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full bg-white border flex justify-between items-center rounded-md overflow-hidden shadow mb-6"
                >
                  <Element
                    key={index}
                    imgUrl={item.imgUrl}
                    category={item.category}
                    title={item.title}
                    description1={item.description1}
                    prixJournalier={item.prixJournalier}
                  />
                  <div className=" flex ">
                    <CustomButton
                      title=""
                      iconAfter={<Delete />}
                      containerStyles=" px-6 py-4 bg-red-200 mr-6 shadow font-bold rounded hover:scale-105 transition-all"
                      handleClick={() => removeFromCart(item)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h3 className="text-3xl mb-8">Pas de reservation</h3>
                <a href="/" className="underline text-blue-700">
                  Reserver des engins
                </a>
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
