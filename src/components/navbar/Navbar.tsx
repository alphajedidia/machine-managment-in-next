import React from "react";
import Logo from "./Logo";
import LinkNav from "./LinkNav";
import CustomButton from "../CustomButton";
import { Cart, PhoneIcon, SearchIcon } from "../icons";

function Navbar() {
  const navItem = [{
    link : "/",
    title : "Accueil"
  },
  {
    link : "/test",
    title : "à propos de Nous"
  },
  {
    link : "/test",
    title : "Nos Engins"
  },
  {
    link : "/test",
    title : "Nos entrepôt"
  },
];
  return (
    <div className=" h-[72px]  flex justify-between items-center px-32 bg-tertiary-500 shadow ">
      <Logo logoWidth={200} logoHeight={20}/>
      <div className="h-8  flex items-center justify-between space-x-8">
        {
          navItem.map((item,key)=>(
            <LinkNav key={key} link={item.link} title={item.title} />
          ))
        }
        <CustomButton iconAfter={<SearchIcon iconStyle="w-6 "/>} title="Recherche" containerStyles=" py-[5px] border rounded-xl border-gray-400 text-secondary-400  font-light px-4 text-xl"/>
      </div>
      <div className=" flex items-center space-x-2">
        <CustomButton iconBefore={<PhoneIcon iconStyle=" w-6 " />} title="+261 34 76 566 73" containerStyles=" py-[5px] bg-primary-400 text-secondary-400 rounded-lg font-light px-4 text-xl border border-primary-600 "/>
        <CustomButton iconBefore={<Cart iconStyle="w-6" />} title="0" containerStyles=" py-[5px] border border-primary-500 text-secondary-600 rounded font-light text-xl px-4 bg-primary-400 font-black hover:scale-110 transition-all"/>
      </div>
    </div>
  );
}

export default Navbar;
