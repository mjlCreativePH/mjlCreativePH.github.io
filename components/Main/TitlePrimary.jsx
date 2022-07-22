import React from "react";

const TitlePrimary = (props) => {
  return (
    <span
      title={props.title}
      className="text-3xl md:text-5xl text-personal-neutralDark font-Oswald font-bold"
    >
      {props.title}
    </span>
  );
};

export default TitlePrimary;
