import React from "react";

const CarouselButton = (props) => {
  return (
    <label
      htmlFor={props.for}
      className="h-4 w-4 rounded-full border-solid border-2 cursor-pointer transition-all ease-in-out border-black mx-2"
    ></label>
  );
};

export default CarouselButton;
