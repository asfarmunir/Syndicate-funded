import React from "react";
import vector1 from "../assets/vector1.svg";
import vector2 from "../assets/vector2.svg";
import hero from "../assets/hero-main.svg";
import { InfiniteMovingCards } from "../components/ui/MovingCards";
import bg from "../assets/starbg.svg";
const Hero = () => {
  return (
    <div
      className=" w-full min-h-screen relative pt-24 flex flex-col items-center gap-4 pb-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={vector1}
        alt="vector1"
        className="absolute bottom-72 left-0 w-24"
      />
      <img
        src={vector2}
        alt="vector1"
        className="absolute top-10 right-0 w-20"
      />

      <h2 className=" text-center text-8xl 2xl:text-[10rem] text-white   font-bold">
        SYNDICATE <br /> FUNDED
      </h2>
      <h4 className=" 2xl:text-xl  text-white">
        Learn to grow with Syndicate Trade Big, Keep 90% of the Profit.
      </h4>

      <img src={hero} alt="hero" className="w-full " />

      <div className=" -mt-16 w-full bg-black  upper-shadow  rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="right" speed="slow" />
      </div>

      {/* <div className="  w-full  mt-auto  bg-black  upper-shadow  rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="right" speed="slow" />
      </div> */}
    </div>
  );
};

export default Hero;
