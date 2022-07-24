import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DotButton from "./DotButton";
import banner from "/assets/images/banner.jpg";
import cook_bg from "/assets/images/cook_bg.jpg";
import chicken_bg from "/assets/images/chicken_bg.jpg";
import BannerImage from "../Header/BannerImage";
import Overlay from "../Header/Overlay";
import HeadingPrimary from "../Header/HeadingPrimary";
import ButtonPrimary from "../Button/ButtonPrimary";

const Carousel = () => {
  const options = { delay: 4000 }; // Options
  const autoplayRoot = (emblaRoot) => emblaRoot.parentElement; // Root node
  const autoplay = Autoplay(options, autoplayRoot);

  const [viewportRef, embla] = useEmblaCarousel(
    { skipSnaps: false, loop: true },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="flex justify-center h-auto">
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="grid grid-flow-col">
          <div className="h-auto w-screen object-contain">
            <div className="relative h-full py-60">
              <BannerImage url={banner.src} />
              <Overlay />
              <div className="container relative max-w-full mr-auto ml-auto px-12">
                <div className="grid justify-items-center text-center grid-cols-1 gap-y-2">
                  <HeadingPrimary heading="MJL KITCHEN" />
                  <ButtonPrimary url="#">ORDER ONLINE</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-screen object-contain">
            <div className="relative h-full py-60">
              <BannerImage url={cook_bg.src} />
              <Overlay />
              <div className="container relative max-w-full mr-auto ml-auto px-12">
                <div className="grid justify-items-center text-center grid-cols-1 gap-y-2">
                  <HeadingPrimary heading="MJL KITCHEN" />
                  <ButtonPrimary url="#">ORDER ONLINE</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-screen object-contain">
            <div className="relative h-full py-60">
              <BannerImage url={chicken_bg.src} />
              <Overlay />
              <div className="container relative max-w-full mr-auto ml-auto px-12">
                <div className="grid justify-items-center text-center grid-cols-1 gap-y-2">
                  <HeadingPrimary heading="MJL KITCHEN" />
                  <ButtonPrimary url="#">ORDER ONLINE</ButtonPrimary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 self-end absolute">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
