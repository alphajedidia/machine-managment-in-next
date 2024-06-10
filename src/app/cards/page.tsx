"use client";
import React, { useState } from "react";

export interface CardData {
  title: string;
  description1: string;
  prixJournalier: string;
}

interface Cards {
  [option: string]: CardData[]; // Index signature for string-based indexing
}

const options: { value: string; label: string }[] = [
  { value: "all", label: "Tout Afficher" }, // "All" option
  { value: "option1", label: "Type 1" },
  { value: "option2", label: "Type 2" },
  { value: "option3", label: "Type 3" },
  { value: "option4", label: "Type 4" },
  { value: "option5", label: "Type 5" },
  { value: "option6", label: "Type 6" },
  { value: "option7", label: "Type 7" },
  { value: "option8", label: "Type 8" },
  { value: "option9", label: "Type 9" },
  { value: "option10", label: "Type 10" },
  { value: "option11", label: "Type 11" },
  { value: "option13", label: "Type 12" },
];

const cards: Cards = {
  option1: [
    {
      prixJournalier: "25 000 AR",
      title: "Tracteur",
      description1: "1500 Kg-130 Ch",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Mini-tracteur",
      description1: "Description1 de la carte 2 Option 1",
    },
  ],
  option2: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 2",
      description1: "Description1 de la carte 1 Option 2",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 2",
      description1: "Description1 de la carte 2 Option 2",
    },
  ],
  option3: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option4: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option5: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option6: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option7: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option8: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option9: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option10: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option11: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
  option12: [
    {
      prixJournalier: "25 000 AR",
      title: "Card 1 Option 3",
      description1: "Description1 de la carte 1 Option 3",
    },
    {
      prixJournalier: "25 000 AR",
      title: "Card 2 Option 3",
      description1: "Description1 de la carte 2 Option 3",
    },
  ],
};

const App1 = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const displayedCards =
    selectedOption === "all"
      ? Object.values(cards).flat() // Flatten all cards for "All" option
      : cards[selectedOption] || []; // Display cards for specific option

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container flex flex-row ">
      <div className="sidebar bg-white p-4 rounded-md shadow-md w-1/8 text-black">
        <div className="flex flex-col h-full">
          <h2 className="text-lg font-semibold mb-4">Filtres</h2>
          {options.map((option) => (
            <div key={option.value} className="flex items-center mb-2">
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
        className="cards bg-gray-100 p-4 rounded-md shadow-md w-full ml-4 text-black flex flex-wrap justify-left gap-4"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 20px)" }}
      >
        {displayedCards.map((card, index) => (
          <div
            className="card flex flex-wrap w-1/5 mb-4 border-grey border-2 rounded-md relative  h-106"
            key={index}
            style={{ marginLeft: "10px" }}
          >
            <div className="flex flex-col w-full">
              <img
                className="rounded"
                src="images/Capture.png"
                alt="Card Image"
              />
              <div className="text-gray-700 p-4 flex-grow bg-white">
                <h6 className="text-2xl">
                  <b>{card.title}</b>
                </h6>
                <p className="text-gray-400 ">Moteur:</p>
                <p className="text-xs">{card.description1}</p>
                <p className="text-gray-400">Prix Journalier:</p>
                <p> {card.prixJournalier}</p>
              </div>
              <div className="absolute bottom-0 right-0 mb-4 mr-4 md:mb-2 md:mr-2 lg:mb-1 lg:mr-2">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-8 rounded">
                  voir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App1;
