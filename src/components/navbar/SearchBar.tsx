"use client";

import React from "react";
import { SearchIcon } from "../icons";
import { useSearchParams ,usePathname, useRouter} from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams?searchParams:"");
    (term)?params.set("query",term):params.delete("query");
    replace(`${pathname}?${params.toString()}`);
    console.log(term);
  }
  return (
    <div id="engin" className=" flex border border-secondary-200 w-fit m-auto rounded-lg shadow-lg bg-white">
      <input
        type="search"
        name="test"
        id="test"
        onChange={(e)=>{
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams?.get("query")?.toString()}
        className="m-1 px-4 py-2 outline-none ml-4 bg-transparent"
        placeholder="Ex : Tracteur, ...."
      />
      <button className=" bg-primary-500 rounded-tr-lg rounded-br-lg">
        <SearchIcon iconStyle=" w-8 m-2 mx-6 text-primary-900" />
      </button>
    </div>
  );
};

export default SearchBar;