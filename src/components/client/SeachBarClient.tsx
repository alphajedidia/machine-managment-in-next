import React, { ChangeEvent } from "react";
import { SearchIcon } from "../icons";

interface SearchBarClientProps {
  setSearchTerm: (term: string) => void;
}

const SearchBarClient: React.FC<SearchBarClientProps> = ({ setSearchTerm }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    
  };

  return (
    <div className="relative w-80">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon iconStyle="h-4 w-4 text-gray-500" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Rechercher..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBarClient;
