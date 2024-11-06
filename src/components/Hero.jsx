import React from "react";
import vector1 from "../assets/vector1.svg";
import vector2 from "../assets/vector2.svg";
import hero from "../assets/hero-main.svg";
import { InfiniteMovingCards } from "../components/ui/MovingCards";
import bg from "../assets/starbg.svg";
import heroBg from "../assets/heroBg.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      className=" w-full md:min-h-screen relative pt-24 flex flex-col items-center gap-4 mb-24"
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
        className="absolute bottom-32 md:bottom-72 left-0 w-12  md:w-24"
      />
      <img
        src={vector2}
        alt="vector1"
        className="absolute top-5 md:top-10 right-0  w-10 md:w-20"
      />

      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" text-center text-6xl md:text-8xl 2xl:text-[10rem] text-white   font-bold"
      >
        SYNDICATE <br /> FUNDED
      </motion.h1>
      <motion.h4
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" text-sm md:text-base max-w-xs md:max-w-3xl text-center 2xl:text-xl  text-white"
      >
        Learn to grow with Syndicate Trade Big, Keep 90% of the Profit.
      </motion.h4>
      <motion.div
        className="flex"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <img src={heroBg} alt="hero" className="w-full " />
      </motion.div>

      <div className=" -mt-16 w-full bg-black  upper-shadow  rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default Hero;
