import React from "react";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import Footer from "../components/Footer/Footer";
import BannerImage from "../components/Header/BannerImage";
import HeadingPrimary from "../components/Header/HeadingPrimary";
import Overlay from "../components/Header/Overlay";
import menu_banner from "/assets/images/menu_banner.jpg";

const ourMenu = () => {
  return (
    <div>
      <header className="h-auto object-contain">
        <div className="relative h-full py-40">
          <BannerImage url={menu_banner.src} />
          <Overlay />
          <div className="container relative max-w-full mr-auto ml-auto px-12">
            <div className="grid justify-items-center text-center grid-cols-1 gap-y-2">
              <HeadingPrimary heading="MJL KITCHEN MENU" />
              <ButtonPrimary url="#">ORDER ONLINE</ButtonPrimary>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="relative min-h-[50%] overflow-hidden my-20">
          <div className="container max-w-full px-2 md:px-4 lg:12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 px-20">
              <a href="" className="flex flex-col justify-center text-center">
                <img
                  src="https://picsum.photos/200/150"
                  alt=""
                  className="flex-auto w-full h-full left-0 top-0 right-0 bottom-0 max-w-none flex object-cover rounded-lg mb-4"
                />
                <span className="text-white text-lg font-Oswald font-semibold bg-personal-neutralDark py-4 px-8 hover:bg-personal-neutralLight rounded-lg">
                  CHICKEN
                </span>
              </a>
              <a href="" className="flex flex-col justify-center text-center">
                <img
                  src="https://picsum.photos/200/150"
                  alt=""
                  className="flex-auto w-full h-full left-0 top-0 right-0 bottom-0 max-w-none flex object-cover rounded-lg mb-4"
                />
                <span className="text-white text-lg font-Oswald font-semibold bg-personal-neutralDark py-4 px-8 hover:bg-personal-neutralLight rounded-lg">
                  PORK
                </span>
              </a>
              <a href="" className="flex flex-col justify-center text-center">
                <img
                  src="https://picsum.photos/200/150"
                  alt=""
                  className="flex-auto w-full h-full left-0 top-0 right-0 bottom-0 max-w-none flex object-cover rounded-lg mb-4"
                />
                <span className="text-white text-lg font-Oswald font-semibold bg-personal-neutralDark py-4 px-8 hover:bg-personal-neutralLight rounded-lg">
                  BEEF
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ourMenu;
