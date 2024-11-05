import stars from "../assets/stars.svg";
import Slider from "./Slider";
import data from "../../constants";
import "./slider.css";
import { StrictMode } from "react";
import cardBg from "../assets/13.svg";

const HowItWorks = () => {
  return (
    <div className=" w-full py-12 flex flex-col items-center gap-4 relative">
      <img
        src={cardBg}
        alt="cardBg"
        className="absolute  bottom-24 w-[1300px] "
      />
      <h4 className="text-sm 2xl:text-sm font-semibold flex items-center gap-1 inner-shadow-white px-6 py-3 rounded-full text-white">
        <img src={stars} alt="stars" className="w-5 h-5" />
        How It Works
      </h4>
      <h1 className="text-2xl 2xl:text-4xl font-bold text-white">
        Your Journey to Funding
      </h1>
      <p className=" text-sm 2xl:text-lg font-thin text-slate-100 text-center capitalize">
        Navigate through our simple three-phase process to <br /> kickstart your
        funded trading career.
      </p>
      <StrictMode>
        <div className="center  z-20">
          <Slider data={data} activeSlide={1} />
        </div>
      </StrictMode>
    </div>
  );
};

export default HowItWorks;
