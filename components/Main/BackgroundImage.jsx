import React from "react";

const BackgroundImage = (props) => {
  return (
    <div className="flex justify-center w-full h-full left-0 top-0 right-0 bottom-0 px-4 mb-4">
      <img src={props.url} alt={props.url} className="rounded-xl"/>
    </div>
  );
};

export default BackgroundImage;
