"use client";
import React, { useState, ChangeEvent } from "react";
import ListClient from "./ListClient";
import SeachBarClient from "./SeachBarClient";
interface TableClientProps {
  Title: string;
}

const TableLocation: React.FC<TableClientProps> = ({ Title }) => {
  const [searchTerm, setSearchTerm] = useState("");
{console.log(searchTerm)};
  return (
    <div className="flex rounded-lg flex-col items-stretch">
      <div className="flex justify-between items-center bg-secondary-400 px-4 py-2">
        <div className="text-3xl text-center w-full text-tertiary-300">{Title}</div>
        <div>
          <div>
            <SeachBarClient setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </div>
      <div className="h-[500px] border shadow-lg overflow-y-auto ">
        <ListClient searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default TableLocation;
