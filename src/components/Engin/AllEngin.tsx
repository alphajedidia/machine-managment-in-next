"use client";
import React, { useState } from "react";
import { options, cards } from "./data";
import Card from "./Card";

const AllEngin = () => {
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
              <div key={option.value} className="flex items-center mb-3">
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
        <div
          className="p-4 rounded-xl shadow-xl w-full ml-4 flex flex-wrap mt-4 bg-white"
        >
          {displayedCards.map((card, index) => (
            <Card
              title={card.title}
              description1={card.description1}
              prixJournalier={card.prixJournalier}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEngin;
