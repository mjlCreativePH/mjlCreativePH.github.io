import React, { useState, useRef, useEffect } from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => setDropdown(!dropdown);
  const closeNavbarMenu = () => setDropdown(false);

  const handleWidth = () => {
    if (window.innerWidth >= "767px") {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, [dropdown]);

  return (
    <nav className="flex flex-col sticky z-50 bg-white left-0 top-0 right-0 bottom-0 py-6">
      <div className="container flex flex-wrap justify-between items-center max-w-full px-4 md:px-8 lg:px-16">
        <Link href="/">
          <a className="text-personal-neutral font-Oswald text-3xl md:text-4xl lg:text-5xl font-bold">
            MJL KITCHEN
          </a>
        </Link>
        <ul
          onClick={closeNavbarMenu}
          className={
            dropdown
              ? "flex justify-center flex-col bg-gray-200 text-center text-xl font-bold left-0 right-0 mt-64 py-12 absolute duration-700 ease-in-out"
              : "relative -mt-64 md:mt-0 text-lg flex font-bold text-black gap-8 items-center"
          }
        >
          <NavLink url="#">OUR MENU</NavLink>
          <NavLink url="#">CONTACT US</NavLink>
        </ul>
        <div
          className="flex md:hidden justify-center flex-col"
          onClick={handleDropdown}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
  
};

export default Navbar;
