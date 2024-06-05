import { EnginCardData } from "@/app/utils/data";
import AllEnginCard from "@/components/cardEngin/AllEnginCard";
import CardEngin from "@/components/cardEngin/CardEngin";
import SearchBar from "@/components/navbar/SearchBar";
import SearchBarEngin from "@/components/searchBarEngin/SearchBarEngin";
import React from "react";
const page = () => {
  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <SearchBarEngin />
      <div className="flex flex-wrap overflow-y-auto border w-full h-full">
        <AllEnginCard />
      </div>
    </div>
  );
};

export default page;
