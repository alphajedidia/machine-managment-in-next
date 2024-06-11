"use client";
import React, { useContext, useEffect, useState } from "react";

import Form from "@/components/Cart/Form";
import Element from "@/components/Cart/Element";
import { CartContext } from "../layout";
import { CustomButton } from "@/components";
import { Add, Delete } from "@/components/icons";

const page = () => {
  const { date, cartItems, removeFromCart } = useContext(CartContext);
  const [totalPrix, setTotalPrix] = useState(0);
  const [nbrJour, setNbrJour] = useState(0);
  const [formattedTotal, setFormattedTotal] = useState("0");

  useEffect(() => {
    let total = 0;
    const startDate = date.startDate ? new Date(date.startDate) : null;
    const endDate = date.endDate ? new Date(date.endDate) : null;

    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const nbrJours = timeDiff / (1000 * 3600 * 24);
      setNbrJour(nbrJours);
      cartItems.forEach(item => {
        const dailyPrice = parseInt(item.prixJournalier.replace(/[^\d]/g, ''), 10);
        total += dailyPrice * nbrJours;
      });
    }
    
    setTotalPrix(total);
    setFormattedTotal(new Intl.NumberFormat('fr-FR').format(total));
  }, [date, cartItems]);


  return (
    <div className="w-11/12 h-[90vh] mx-auto flex space-x-6">
      <div className=" w-1/2  h-full  px-2  pt-32">
        <div className=" bg-white  -my-4 px-12 pb-8 rounded-xl shadow-lg">
          <h3 className=" text-2xl font-black text-secondary-400 mb-6 pt-4">
            Liste des engins Démandé :{" "}
            <span className=" font-light text-xl">
            du {date.startDate} au {date.endDate} <span className=" text-primary-600 text-2xl font-bold ml-2">{nbrJour} jours</span>
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
                <h3 className="text-3xl mb-2">Pas de reservation</h3>
                
              </div>
            )}
          </div>
          <a href="/" className=" text-primary-900 bg-primary-300 py-2 px-4 text-xl rounded-md flex w-fit items-center">
                  <p className=" font-semibold">Reserver des engins</p> <Add iconStyle=" ml-4 w-12 "/>
                </a>
          <h2 className=" mt-5 font-extrabold text-2xl">Total: <span className=" font-medium border border-primary-800 py-1 px-2 rounded-md">{formattedTotal} ariary</span></h2>
        </div>
      </div>
      <div className=" w-1/2 h-full mr-12 pt-32">
        <Form />
      </div>
    </div>
  );
};

export default page;
