import React from "react";
import NavLink from "./NavLink";

const NavbarItem = (props) => {
  return (
    <ul
      className={props.className}
    >
      <NavLink url="#">OUR MENU</NavLink>
      <NavLink url="#">ABOUT US</NavLink>
      <NavLink url="#">CONTACT US</NavLink>
    </ul>
  );
};

export default NavbarItem;
