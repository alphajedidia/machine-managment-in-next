"use client";
import React, { useState, ChangeEvent } from "react";
import { Download } from "../icons";
import Location from "./Location";
import { locationData } from "@/app/utils/data";

interface TableLocationProps {
  Title: string;
}

const TableLocation: React.FC<TableLocationProps> = ({ Title }) => {
  const [etat, setEtat] = useState(true);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEtat(event.target.value === "tous");
  };

  return (
    <div className="flex rounded-lg flex-col items-stretch">
      <div className="flex justify-between items-center bg-secondary-400 px-4 py-2">
        <div className="text-3xl text-tertiary-300">{Title}</div>
        <div>
          <div className="flex flex-grow items-center space-x-4">
            <div className="flex items-center space-x-2 text-xl">
              <input
                defaultChecked
                id="filter-tous"
                type="radio"
                name="filter"
                value="tous"
                onChange={handleRadioChange}
                className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 focus:ring-primary-400 focus:ring-primary-500 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="filter-tous"
                className="font-medium text-2xl text-gray-900 dark:text-gray-300"
              >
                Tous
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                id="filter-enCours"
                type="radio"
                name="filter"
                value="enCours"
                onChange={handleRadioChange}
                className="w-4 h-4 text-primary-500 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="filter-enCours"
                className="font-medium text-2xl text-gray-900 dark:text-gray-300"
              >
                En cours
              </label>
            </div>
            <button className="text-primary-500 p-2 rounded">
              <Download iconStyle="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[500px] border shadow-lg overflow-y-auto ">
        <Location location={locationData} showAll={etat} />
      </div>
    </div>
  );
};

export default TableLocation;
