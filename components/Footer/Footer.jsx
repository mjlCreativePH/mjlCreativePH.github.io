import FooterLink from "./FooterLink";
import FooterImage from "./FooterImage";
import React, { useState } from "react";
import mjl_fb from "/assets/images/mjl_fb.png";
import mjl_insta from "/assets/images/mjl_insta.png";
import mjl_twit from "/assets/images/mjl_twit.png";

const Footer = () => {
  const [builtBy, setBuiltBy] = useState(true);
  return (
    <div className="grid grid-flow-row justify-center gap-y-8 bg-gray-200 text-center h-auto w-full py-10 md:py-20">
      <p className="font-Oswald font-bold text-5xl lg:text-6xl text-black tracking-tighter">
        MJL KITCHEN
      </p>
      <div className="grid grid-flow-col justify-center">
        <FooterLink url="#">
          <FooterImage url={mjl_fb.src} alt="fb" />
        </FooterLink>
        <FooterLink url="#">
          <FooterImage url={mjl_insta.src} alt="instagram" />
        </FooterLink>
        <FooterLink url="#">
          <FooterImage url={mjl_twit.src} alt="twitter" />
        </FooterLink>
      </div>
      <ul className="grid grid-flow-col justify-center">
        <li>
          <FooterLink url="#">ABOUT US</FooterLink>
        </li>
        <li className="border-x border-x-personal-neutralLight">
          <FooterLink url="#">MENU</FooterLink>
        </li>
        <li>
          <FooterLink url="#">CONTACT US</FooterLink>
        </li>
      </ul>
      <p className="text-sm text-personal-neutralLight">
        ©2022 MJL Kitchen. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
