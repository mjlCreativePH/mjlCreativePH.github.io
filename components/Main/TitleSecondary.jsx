import React from "react";

const TitleSecondary = (props) => {
  return (
    <span
      title={props.title}
      className="text-2xl md:text-4xl text-personal-neutralDark font-semibold"
    >
      {props.title}
    </span>
  );
};

export default TitleSecondary;
