"use client";
import React, { Suspense, useState } from "react";
import { options, cards } from "./data";
import Card from "./Card";
import DatepickerComponent from "./Datepicker";

const AllEngin = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const [selectedOption, setSelectedOption] = useState("all");

  const displayedCards =
    selectedOption === "all"
      ? Object.values(cards).flat() // Flatten all cards for "All" option
      : cards[selectedOption] || []; // Display cards for specific option

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="  mt-4">
      <div className="flex mx-28">
        <div className="sidebar bg-white py-4 rounded-md shadow w-1/6 text-secondary-700 mt-4 px-8 text-lg h-fit">
          <div className="flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4">Filtrer</h2>
            {options.map((option) => (
              <div key={option.value} className="flex items-center mb-5">
                <input
                  type="radio"
                  id={option.value}
                  name="options"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                  className="mr-2 h-4 w-4 rounded-full border-gray-300"
                />
                <label htmlFor={option.value} className="text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-xl shadow-xl w-full ml-4  mt-4 bg-white">
          <div className=" ml-4 mr-6 mt-4">
            <h3 className=" text-3xl font-bold ml-6 mb-4">
              Date de location <span className=" text-red-600">*</span>
            </h3>
            <DatepickerComponent />
          </div>
          <Suspense key={query+currentPage} >
          <div className="flex flex-wrap">
            {displayedCards.map((card, index) => (
              <Card
                title={card.title}
                description1={card.description1}
                prixJournalier={card.prixJournalier}
                key={index}
              />
            ))}
          </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AllEngin;
