"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import LinkNav from "./LinkNav";
import CustomButton from "../CustomButton";
import { Cart, PhoneIcon, SearchIcon } from "../icons";
import { CardData } from "../Engin/data";

function Navbar({ cartCount, cartItems }: { cartCount: number; cartItems: CardData[] }) {
  

  const handleCartClick = () => {
    window.location.href = "/client/Cart"; // Replace with actual path
  };

  const navItem = [
    {
      link: "/",
      title: "Accueil",
      isActive : true,
    },
    {
      link: "/test",
      title: "A propos de Nous",
    },
    {
      link: "#engin",
      title: "Nos Engins",
    },
    {
      link: "/test",
      title: "Nos entrepôt",
    },
  ];
  return (
    <div className=" h-[72px]  flex justify-between items-center px-32 bg-tertiary-500 shadow fixed w-full">
      <Logo logoWidth={200} logoHeight={20} />
      <div className="h-8  flex items-center justify-between space-x-8">
        {navItem &&
          navItem.map((item, key) => (
            <LinkNav key={key} link={item.link} title={item.title} isActive={item.isActive}/>
          ))}
        {/* <CustomButton
          iconAfter={<SearchIcon iconStyle="w-6 " />}
          title="Recherche"
          containerStyles=" py-[5px] border rounded-xl border-gray-400 text-secondary-400  font-light px-4 text-xl"
        /> */}
      </div>
      <div className=" flex items-center space-x-2">
        <CustomButton
          iconBefore={<PhoneIcon iconStyle=" w-6 " />}
          // title="+261 34 76 566 73"
          title=" Contactez nous"
          containerStyles=" py-[5px] bg-primary-500 text-secondary-600 rounded font-light px-4 text-xl border border-primary-400 hover:scale-105 transition-all"
        />
        <CustomButton
          iconBefore={<Cart iconStyle="w-6" />}
          title={cartCount}
          containerStyles=" py-[5px] border border-primary-500 text-secondary-600 rounded font-light text-xl px-4 bg-primary-500 font-black hover:scale-105 transition-all"
          handleClick={handleCartClick}
        />
      </div>
    </div>
  );
}

export default Navbar;
