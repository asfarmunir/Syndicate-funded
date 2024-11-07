import stars from "../assets/stars.svg";
import Slider from "./Slider";
import data from "../../constants";
import "./slider.css";
import { StrictMode } from "react";
import cardBg from "../assets/13.svg";
import { motion } from "framer-motion";
const HowItWorks = () => {
  return (
    <div className=" w-full oyo3 md:py-12 flex flex-col items-center gap-4 relative">
      <img
        src={cardBg}
        alt="cardBg"
        className="absolute  bottom-64 md:bottom-24 w-[1300px] "
      />
      <motion.h4
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-sm 2xl:text-sm font-semibold flex items-center gap-1 inner-shadow-white px-6 py-3 rounded-full text-white"
      >
        <img src={stars} alt="stars" className="w-5 h-5" />
        How It Works
      </motion.h4>
      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl 2xl:text-4xl font-bold text-white"
      >
        Your Journey to Funding
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" text-sm 2xl:text-lg font-thin text-slate-100 text-center capitalize"
      >
        Navigate through our simple three-phase process to <br /> kickstart your
        funded trading career.
      </motion.p>
      <StrictMode>
        <div className="center -mt-48 md:mt-0  z-20">
          <Slider data={data} activeSlide={1} />
        </div>
      </StrictMode>
    </div>
  );
};

export default HowItWorks;
