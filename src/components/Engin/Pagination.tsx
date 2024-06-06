import React from "react";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

type PaginationProps = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-8 mx-auto">
      <ul className="flex list-none p-0">
        <li
          onClick={handlePrevious}
          className={`mx-1 px-2 py-2 border rounded flex self-center ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-primary-500 border-primary-500 cursor-pointer hover:bg-primary-500 hover:text-secondary-600 transition-all"
          }`}
        >
          <a className="text-xl"><LeftArrow/></a>
        </li>
        {pages.map((page) => (
          <li
            onClick={() => onPageChange(page)}
            key={page}
            className={`mx-1 px-5 py-2 border rounded ${
              page === currentPage
                ? "bg-primary-400 text-secondary-700 font-bold"
                : "bg-white text-primary-500 border-primary-500 font-semibold"
            } cursor-pointer`}
          >
            <a className="text-xl">{page}</a>
          </li>
        ))}
        <li
          onClick={handleNext}
          className={`mx-1 px-2 py-2 border rounded flex self-center ${
            currentPage === pagesCount
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white text-primary-500 border-primary-500 cursor-pointer hover:bg-primary-500 hover:text-secondary-600 transition-all"
          }`}
        >
          <a className="text-xl"><RightArrow/></a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
