"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import partner1 from "../../assets/partner1.svg";
import partner2 from "../../assets/partner2.svg";
import partner3 from "../../assets/partner3.svg";
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-5xl bg-black  2xl:max-w-[90rem] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full bg-black shrink-0 gap-14 2xl:gap-16 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <img src={partner1} alt="partner" className="w-32 2xl:w-36 " />
        <img src={partner2} alt="partner" className="w-32 2xl:w-36 " />
        <img src={partner3} alt="partner" className="w-32 2xl:w-36 " />
        <img src={partner1} alt="partner" className="w-32 2xl:w-36 " />
        <img src={partner2} alt="partner" className="w-32 2xl:w-36 " />
        <img src={partner3} alt="partner" className="w-32 2xl:w-36 " />
      </ul>
    </div>
  );
};
