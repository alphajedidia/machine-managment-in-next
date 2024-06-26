"use client";
import React, { Suspense, useContext, useState } from "react";
import { options, cards, CardData } from "./data";
import Card from "./Card";
import DatepickerComponent from "./Datepicker";
import Pagination from "./Pagination";
import { paginate } from "./paginate";
import Filter from "../icons/Filter";
import Engin from "@/app/Engin/page";
import Close from "../icons/Close";
import { CartContext } from "@/app/client/layout";
import { showSuccesToCart } from "@/utils/sweetAlertUtils";


const AllEngin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  // const currentPage = Number(searchParams?.page) || 1;
  const [selectedOption, setSelectedOption] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const { cartCount, setCartCount, cartItems, setCartItems } = useContext(CartContext);

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
  const openModal = (card : CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };
  const incrementCart = (card: CardData) => {
    showSuccesToCart();
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, card]);
  };

  return (
    <div className="  mt-4 mb-8  pb-4">
      <div className="flex mx-28">
        <div className="sidebar bg-white  py-4 rounded-md shadow-xl w-1/6 text-secondary-700 mt-4 px-8 text-lg">
          <div className="flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4 flex self-center items-center">
              <p className="mr-4">Filtrer</p> <Filter />
            </h2>
            {options.map((option) => (
              <div key={option.value} className="flex items-center h-full">
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
            <div className="flex flex-wrap">
              {paginatedPosts.map((card, index) => (
                <Card
                  title={card.title}
                  imgUrl={card.imgUrl}
                  category={card.category}
                  description1={card.description1}
                  prixJournalier={card.prixJournalier}
                  key={index}
                  onClick={() => openModal(card)}
                  onReserve={()=>incrementCart(card)} // Pass increment function
                />
              ))}
            </div>
              <Pagination
                items={displayedCards.length} // 100
                currentPage={currentPage} // 1
                pageSize={pageSize} // 4
                onPageChange={onPageChange}
              />
        </div>
      </div>
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl relative">
            <button
              className="absolute top-0 right-0 m-4 hover:scale-150 transition font-extrabold text-secondary-500 text-2xl"
              onClick={closeModal}
            >
               <Close/>
            </button>
            <Engin
              imgUrl={selectedCard.imgUrl} // Replace with actual image_url if available in card data
              title={selectedCard.title}
              category={selectedCard.category}
              description1={selectedCard.description1}
              prixJournalier={selectedCard.prixJournalier}
              onReserve={()=>incrementCart(selectedCard)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllEngin;
