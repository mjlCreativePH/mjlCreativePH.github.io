import React from "react";

const HeadingPrimary = (props) => {
  return (
    <h1
      heading={props.heading}
      className="font-Oswald font-bold text-6xl md:text-7xl lg:text-8xl text-white mb-4"
    >
      {props.heading}
    </h1>
  );
};

export default HeadingPrimary;
