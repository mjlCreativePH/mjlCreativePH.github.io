import Link from "next/link";
import React from "react";

const ButtonPrimary = (props) => {
  return (
    <Link href={props.url}>
      <a className="text-white font-Oswald font-semibold bg-personal-primary hover:bg-personal-buttonHover block py-4 px-8">
        {props.children}
      </a>
    </Link>
  );
};

export default ButtonPrimary;
