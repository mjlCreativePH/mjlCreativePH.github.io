import Link from "next/link";
import React from "react";
import ButtonPrimary from "../Main/ButtonPrimary";
import banner from '/assets/images/banner.jpg';

const Header = () => {
  return (
    <div className="h-auto object-contain">
      <div className="relative h-full pt-60 pb-60">
        <img
          className="absolute flex-auto w-full h-full left-0 top-0 right-0 bottom-0 max-w-none flex object-cover"
          src={banner.src}
          alt="bg-image"
        />
        <div className="absolute bg-black opacity-30  left-0 top-0 right-0 bottom-0 w-full h-full mr-auto ml-auto" />
        <div className="container relative max-w-full mr-auto ml-auto px-12">
          <div className="grid justify-items-center text-center grid-cols-1 gap-y-2">
            <p className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl text-white">
              Welcome to
            </p>
            <h1 className="font-Oswald font-bold text-4xl tracking-tighter md:text-6xl lg:text-8xl text-white mb-4">
              MJL KITCHEN
            </h1>
            <ButtonPrimary url="#">ORDER ONLINE</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
