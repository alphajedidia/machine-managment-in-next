"use client";
import React, { Suspense, useState } from "react";
import { options, cards } from "./data";
import Card from "./Card";
import DatepickerComponent from "./Datepicker";
import Pagination from "./Pagination";
import { paginate } from "./paginate";
import Filter from "../icons/Filter";

const AllEngin = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  const query = searchParams?.query || "";
  // const currentPage = Number(searchParams?.page) || 1;
  const [selectedOption, setSelectedOption] = useState("all");

  const displayedCards =
    selectedOption === "all"
      ? Object.values(cards).flat() // Flatten all cards for "All" option
      : cards[selectedOption] || []; // Display cards for specific option

  const paginatedPosts = paginate(displayedCards, currentPage, pageSize);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    setCurrentPage(1); // Reset currentPage to 1 when changing the option

  };
  return (
    <div className="  mt-4 mb-8">
      <div className="flex mx-28">
        <div className="sidebar bg-white py-4 rounded-md shadow-xl w-1/6 text-secondary-700 mt-4 px-8 text-lg h-fit">
          <div className="flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4 flex self-center items-center">
              <p className="mr-4">Filtrer</p> <Filter />
            </h2>
            {options.map((option) => (
              <div key={option.value} className="flex items-center ">
                <input
                  type="radio"
                  id={option.value}
                  name="options"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={handleOptionChange}
                  className="mr-2 h-4 w-4 rounded-full border-gray-300 hidden"
                />
                <label
                  htmlFor={option.value}
                  className={`text-secondary-400 font-bold w-full py-2  pl-4 rounded-md ${
                    selectedOption === option.value ? "bg-primary-400 my-1 transition" : ""
                  }`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded-xl shadow-xl w-full ml-4  mt-4 bg-white">
          <div className=" ml-4 mr-6 ">
            <h3 className=" text-3xl font-bold ml-6 mb-2">
              Date de location <span className=" text-red-600">*</span>
            </h3>
            <DatepickerComponent />
          </div>
          <Suspense key={query + currentPage}>
            <div className="flex flex-wrap">
              {paginatedPosts.map((card, index) => (
                <Card
                  title={card.title}
                  description1={card.description1}
                  prixJournalier={card.prixJournalier}
                  key={index}
                />
              ))}
            </div>
              <Pagination
                items={displayedCards.length} // 100
                currentPage={currentPage} // 1
                pageSize={pageSize} // 4
                onPageChange={onPageChange}
              />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AllEngin;
