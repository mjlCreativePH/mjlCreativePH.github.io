import React from "react";

const Heading = (props) => {
  return (
    <div className="flex justify-center flex-col text-center border-y border-y-personal-neutralLight mb-12 py-4">
      <span
        heading1={props.heading1}
        className="text-2xl md:text-4xl text-personal-neutralDark font-semibold"
      >
        {props.heading1}
      </span>
      <span
        heading2={props.heading2}
        className="text-3xl md:text-5xl text-personal-neutralDark font-Oswald font-bold"
      >
        {props.heading2}
      </span>
    </div>
  );
};

export default Heading;
