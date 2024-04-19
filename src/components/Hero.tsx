"use client";

import Image from "next/image";
import React from "react";
import {CustomButton} from ".";
import { Arrow } from "./icons";

function Hero() {
  const handleScroll = () => {
  
  }
  const heroValue = {
    header : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    paragraph : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autemnecessitatibus explicabo ipsa alias aliquam ipsam dolores! ",
    cta : "Voir nos engins"
  }
  return (
    <>
      <div className=" flex h-[80vh]">
        <div className=" w-1/2 pl-32 pt-32 pr-6">
          <h1 className=" text-6xl">
            {heroValue.header}
          </h1>
          <p className=" text-3xl mt-6 ">
            {heroValue.paragraph}
          </p>
          <CustomButton title={heroValue.cta} iconAfter={<Arrow iconStyle="w-6" />} containerStyles= " bg-primary-400 text-ternary-900 px-4 py-2 rounded-md mt-16 mb-5 text-2xl shadow-md hover:scale-105 hover:shadow-lg transition-all " handleClick={handleScroll}/>
        </div>
        <div className=" w-1/2  bg-slate-400 border border-red-700 mr-28 mt-12 ">
          {/* <Model/> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
