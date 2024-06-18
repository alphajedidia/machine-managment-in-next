"use client";

import Image from "next/image";
import React from "react";
import {CustomButton} from ".";
import { Arrow } from "./icons";

function Hero() {
  const handleScroll = () => {
  
  }
  const heroValue = {
    header : "Engins de Qualité",
    paragraph : "Nous sommes une entreprise spécialisée dans la location d'engins. Notre objectif est de fournir les meilleurs services à nos clients.",
    cta : "Voir nos engins"
  }
  return (
    <>
      <div className=" bg-white flex h-[80vh] space-x-16 pb-16 mt-16 pt-12">
        <div className=" w-1/2 pl-32 pt-24 pr-6">
          <h1 className=" text-7xl font-extrabold leading-tight">
            {heroValue.header}
          </h1>
          <p className=" text-4xl mt-12 font-medium">
            {heroValue.paragraph}
          </p>
          <CustomButton title={heroValue.cta} iconAfter={<Arrow iconStyle="w-6" />} containerStyles= " font-bold bg-primary-500 text-secondary-600 px-4 py-2 rounded-md mt-16 mb-5 text-2xl shadow-md hover:scale-105 hover:shadow-lg transition-all " handleClick={handleScroll}/>
        </div>
        <div className=" w-2/5  mr-28 mt-12 mb-4 rounded-md overflow-hidden shadow-md">
          <img src="excavator-digging-ground-day-light.jpg" alt="" className=" h-full"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
