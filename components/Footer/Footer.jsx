import FooterLink from "./FooterLink";
import FooterImage from "./FooterImage";
import React, { useState } from "react";

const Footer = () => {
  const [builtBy, setBuiltBy] = useState(true);
  return (
    <div>
      {builtBy && (
        <div className="hidden sm:flex justify-center items-center bg-gradient-to-r from-personal-secondary to-personal-primary h-2/4 max-h-64">
          <div className="container flex justify-center flex-row items-center">
            <div className="flex items-center">
              <p className="text-sm text-white font-semibold pr-2">
                This website is built with love by,
              </p>
              <a
                href="#!"
                className="text-sm text-white underline mr-4 font-semibold"
              >
                MJLDev
              </a>
            </div>
            <button
              onClick={() => setBuiltBy(false)}
              className="text-white font-mono font-semibold text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="grid grid-flow-row justify-center gap-y-8 text-center h-auto w-full py-10 md:py-20">
        <p className="font-Oswald font-bold text-5xl lg:text-6xl text-black tracking-tighter">
          MJL KITCHEN
        </p>
        <div className="grid grid-flow-col justify-center">
          <FooterLink url="#">
            <FooterImage url="/mjl_fb.png" alt="fb" />
          </FooterLink>
          <FooterLink url="#">
            <FooterImage url="/mjl_insta.png" alt="instagram" />
          </FooterLink>
          <FooterLink url="#">
            <FooterImage url="/mjl_twit.png" alt="twitter" />
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
    </div>
  );
};

export default Footer;
