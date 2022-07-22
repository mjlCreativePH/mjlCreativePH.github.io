import React from "react";

const CarouselItem = (props) => {
  return (
    <div>
      <input className="opacity-0" type="radio" id={props.id} />
      <div
        alt={props.alt}
        className="snap-start shrink-0 w-[300px] h-[300px] bg-gray-400 origin-center scale-1 transform-[0.5s] relative flex justify-center items-center text-md"
      >
        {props.children}
      </div>
    </div>
  );
};

export default CarouselItem;
