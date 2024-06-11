"use client";
import AddForm from "@/components/Form/AddForm";
import ButtonAdd from "@/components/button.Add/buttonAdd";
import AllEnginCard from "@/components/cardEngin/AllEnginCard";
import ModalForm from "@/components/modal/EnginModal";
import SearchBarEngin from "@/components/searchBarEngin/SearchBarEngin";
import React, { useState } from "react";
const page = () => {
  const [isOpen,setIsOpen]= useState(false)
  const onRequestOpen = ()=>{
    setIsOpen(true);
  }
  const onRequestClose = ()=>{
    setIsOpen(false);
  }
  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <div className="flex py-2 justify-center items-center px-6">
        <SearchBarEngin />
        <ButtonAdd setIsOpen={onRequestOpen} />
      </div>
      <div className="flex flex-wrap overflow-y-auto border w-full h-full">
        <AllEnginCard />
      </div>
      <ModalForm isOpen={isOpen} onRequestClose={onRequestClose}>
    <AddForm />
      </ModalForm>
    </div>
  );
};

export default page;
