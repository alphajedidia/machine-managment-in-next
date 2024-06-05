import React, { useState } from "react";

interface CarouselProps {
  StatChart: React.ReactNode;
  StatChartTitle: string;
}

interface CarouselComponentProps {
  slides: CarouselProps[];
}

const Carousel: React.FC<CarouselComponentProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full shadow-lg p-2 ">
      <div className="overflow-hidden relative h-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((item, index) => (
            <div
              key={index}
              className="w-full h-full transition-all duration-300 ease-in-out"
            >
              {item.StatChart}
              <div className="text-center text-xl">
                <span>{item.StatChartTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
