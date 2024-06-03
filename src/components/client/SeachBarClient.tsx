import React from "react";
import { SearchIcon } from "../icons";

const SeachBarClient = () => {
  return (
    <>
    <div className="relative w-80">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <SearchIcon iconStyle="h-4 w-4" />
    </div>
    <input type="text" className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Rechercher..."/>
</div>
    </>
  );
};

export default SeachBarClient;
