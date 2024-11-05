"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logoIcon.svg";
import star from "../../assets/star.svg";
export const InfiniteMovingCards = ({
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
        "scroller relative z-20  max-w-5xl bg-black  2xl:max-w-[100rem] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_100%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full bg-black shrink-0 gap-8 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className=" p-7 2xl:p-8 pb-10 2xl:pb-10  space-y-8 rounded-2xl inner-shadow-white-three"
          >
            <div className="flex items-center justify-between">
              <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={star} alt="star" className="w-4 h-4" />
                ))}
              </div>
            </div>
            <p className="text-sm 2xl:text-base text-white text-center leading-loose max-w-md 2xl:max-w-lg font-thin">
              Joined today, reviewed their website and its been very refreshing
              to have some new features that no one has thought of after so long
              of being in the end of the line.
            </p>
            <h2 className="text-2xl  glassCard pt-4 2xl:text-3xl font-bold text-white  mx-auto  w-fit text-center">
              Byeon Wo Soek
            </h2>
          </div>
        ))}
      </ul>
    </div>
  );
};
