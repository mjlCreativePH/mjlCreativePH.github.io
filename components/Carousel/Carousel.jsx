import React from "react";
import Header from "../Header/Header";
import CarouselButton from "./CarouselButton";
import CarouselItem from "./CarouselItem";
const Carousel = () => {
  return (
    <div className="w-[300px] text-center overflow-hidden ">
      <div className="flex  snap-mandatory scroll-smooth touch-auto overflow-x-hidden">
        <CarouselItem id="slide-1" alt="slide-1">
          1
        </CarouselItem>
        <CarouselItem id="slide-2" alt="slide-2">
          2
        </CarouselItem>
        <CarouselItem id="slide-3" alt="slide-3">
          3
        </CarouselItem>
      </div>
      <div className="container relative max-w-full mr-auto ml-auto">
        <div className="flex justify-items-center text-center">
          <CarouselButton for="slide-1" />
          <CarouselButton for="slide-2" />
          <CarouselButton for="slide-3" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
