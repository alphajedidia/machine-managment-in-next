"use client";

import React, { useEffect, useState } from "react";
import { Back } from "@/components/icons";
import DescriEngin from "@/components/description/DescriEngin";
;
interface EnginListProps {
  params: {
    title: string;
  };
}

const EnginList: React.FC<EnginListProps> = ({ params }) => {
  const { title } = params;

  return (
    <div>
      <div className="hover:cursor-pointer">
        <Back iconStyle="w-20 h-20 " />
      </div>
      <div className=" flex justify-center flex-grow h-full w-full  items-center ">
        <DescriEngin title={title} />
      </div>
      <div className="h-2/3 w-1/4 border">
        <EnginForm />
      </div>
    </div>
    </div>
   
  );
};
export default EnginList;
