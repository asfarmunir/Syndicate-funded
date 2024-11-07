import stars from "../assets/stars.svg";
import badge from "../assets/badge.svg";
import bulb from "../assets/bulb.svg";
import rocket from "../assets/rocket.svg";
import master from "../assets/master.svg";
import star from "../assets/star2.svg";
import "../utils/box.scss";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className=" oyo2 -mt-48 md:mt-0  w-full mb-16 py-12 flex flex-col items-center gap-4 relative md:pb-48">
      <motion.h4
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-sm 2xl:text-sm font-semibold flex items-center gap-1 inner-shadow-white px-6 py-3 rounded-full text-white"
      >
        <img src={stars} alt="stars" className="w-5 h-5" />
        Funded Traders
      </motion.h4>
      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[1.5rem] 2xl:text-[2.3rem] font-bold leading-snug tracking-wide text-center text-white"
      >
        How To Become A Syndicate <br /> Funded Trader
      </motion.h1>
      <div className=" max-w-3xl  box2 shadow inner-shadow-white-upper 2xl:max-w-4xl border border-b-0  h-72 2xl:h-96 mt-16 hidden md:flex rounded-[6rem] items-center justify-center relative w-full">
        <img
          src={badge}
          alt="badge"
          className="w-32 z-50 h-32 absolute -top-14 "
        />

        <div className=" p-8   rounded-3xl absolute z-10 -left-44  2xl:-left-48 top-40 2xl:top-48 bg-gradient-to-br from-[#00000000] to-[#5B1CD433] pb-14 gap-4 border flex flex-col items-center border-[#FFFFFF33]">
          <img src={bulb} alt="bulb" className="w-20 h-20 -mt-20" />

          <div className=" w-full flex items-center justify-between">
            <img src={star} alt="star" className="w-4 h-4" />
            <img src={star} alt="star" className="w-4 h-4" />
          </div>
          <h4 className="text-xs 2xl:text-sm font-semibold flex w-fit items-center gap-1 inner-shadow-white px-5 py-2 rounded-full text-white">
            Phase 1
          </h4>
          <h1 className="text-[1.5rem] 2xl:text-[1.9rem] font-bold leading-snug tracking-wide text-center text-white">
            The Syndicate
          </h1>
          <p className=" text-xs 2xl:text-sm text-center font-light max-w-[18rem] 2xl:max-w-xs leading-snug tracking-wide text-white">
            Prove your trading skills to advance. <br /> Show us youre ready for
            bigger opportunities.
          </p>
        </div>
        <div className=" p-8   rounded-3xl absolute z-10 -right-44 2xl:-right-48  top-40 2xl:top-48 bg-gradient-to-br from-[#00000000] to-[#5B1CD433] pb-14 gap-4 border flex flex-col items-center border-[#FFFFFF33]">
          <img src={master} alt="bulb" className="w-20 h-20 -mt-20" />

          <div className=" w-full flex items-center justify-between">
            <img src={star} alt="star" className="w-4 h-4" />
            <img src={star} alt="star" className="w-4 h-4" />
          </div>
          <h4 className="text-xs 2xl:text-sm font-semibold flex w-fit items-center gap-1 inner-shadow-white px-5 py-2 rounded-full text-white">
            Phase 2
          </h4>
          <h1 className="text-[1.5rem] 2xl:text-[1.9rem] font-bold leading-snug tracking-wide text-center text-white">
            The Trade Master
          </h1>
          <p className=" text-xs 2xl:text-sm text-center font-light  max-w-[18rem] 2xl:max-w-xs leading-snug tracking-wide text-white">
            You are almost there. One more step earn full funding and start
            trading for <br /> profit.
          </p>
        </div>
        <div className=" w-[0.5px]  z-10 h-72  shadow shadow-white absolute  top-0"></div>
        <div className=" p-8  z-20 rounded-3xl absolute   top-64 2xl:top-72 bg-gradient-to-br from-[#00000000] to-[#5B1CD433] pb-14 gap-4 border flex flex-col items-center border-[#FFFFFF33]">
          <img src={rocket} alt="bulb" className="w-20 h-20 -mt-20" />

          <div className=" w-full flex items-center justify-between">
            <img src={star} alt="star" className="w-4 h-4" />
            <img src={star} alt="star" className="w-4 h-4" />
          </div>
          <h4 className="text-xs 2xl:text-sm font-semibold flex w-fit items-center gap-1 inner-shadow-white px-5 py-2 rounded-full text-white">
            Trader
          </h4>
          <h1 className="text-[1.5rem] 2xl:text-[1.9rem] font-bold leading-snug tracking-wide text-center text-white">
            Elite Trader
          </h1>
          <p className=" text-xs 2xl:text-sm text-center font-light max-w-[18rem] 2xl:max-w-xs leading-snug tracking-wide text-white">
            You are now a Syndicate Elite Trader. <br /> Trade smart, grow your
            profits, and climb the ranks.
          </p>
        </div>
      </div>
      <div className=" max-w-3xl pb-12 pt-36 box2  shadow inner-shadow-white-upper gap-12 h 2xl:max-w-4xl border border-b-0   mt-16 flex md:hidden rounded-[6rem] items-center justify-center flex-col  relative w-full">
        <img
          src={badge}
          alt="badge"
          className="w-32 z-50 h-32 absolute -top-14 "
        />

        <div className=" p-8   rounded-3xl  bg-gradient-to-br from-[#00000000] to-[#5B1CD433] pb-14 gap-4 border flex flex-col items-center border-[#FFFFFF33]">
          <img src={bulb} alt="bulb" className="w-20 h-20 -mt-20" />

          <div className=" w-full flex items-center justify-between">
            <img src={star} alt="star" className="w-4 h-4" />
            <img src={star} alt="star" className="w-4 h-4" />
          </div>
          <h4 className="text-xs 2xl:text-sm font-semibold flex w-fit items-center gap-1 inner-shadow-white px-5 py-2 rounded-full text-white">
            Phase 1
          </h4>
          <h1 className="text-[1.5rem] 2xl:text-[1.9rem] font-bold leading-snug tracking-wide text-center text-white">
            The Syndicate
          </h1>
          <p className=" text-xs 2xl:text-sm text-center font-light max-w-[18rem] 2xl:max-w-xs leading-snug tracking-wide text-white">
            Prove your trading skills to advance. <br /> Show us youre ready for
            bigger opportunities.
          </p>
        </div>
        <div className=" p-8   rounded-3xl  z-10 bg-gradient-to-br from-[#00000000] to-[#5B1CD433] pb-14 gap-4 border flex flex-col items-center border-[#FFFFFF33]">
          <img src={master} alt="bulb" className="w-20 h-20 -mt-20" />

          <div className=" w-full flex items-center justify-between">
            <img src={star} alt="star" className="w-4 h-4" />
            <img src={star} alt="star" className="w-4 h-4" />
          </div>
          <h4 className="text-xs 2xl:text-sm font-semibold flex w-fit items-center gap-1 inner-shadow-white px-5 py-2 rounded-full text-white">
            Phase 2
          </h4>
          <h1 className="text-[1.5rem] 2xl:text-[1.9rem] font-bold leading-snug tracking-wide text-center text-white">
            The Trade Master
          </h1>
          <p className=" text-xs 2xl:text-sm text-center font-light  max-w-[18rem] 2xl:max-w-xs leading-snug tracking-wide text-white">
            You are almost there. One more step earn full funding and start
            trading for <br /> profit.
          </p>
        </div>
        <div className=" p-8  z-20 rounded-3xl  bg-gradient-to-br from-[#00000000] to-[#5B1CD433] pb-14 gap-4 border flex flex-col items-center border-[#FFFFFF33]">
          <img src={rocket} alt="bulb" className="w-20 h-20 -mt-20" />

          <div className=" w-full flex items-center justify-between">
            <img src={star} alt="star" className="w-4 h-4" />
            <img src={star} alt="star" className="w-4 h-4" />
          </div>
          <h4 className="text-xs 2xl:text-sm font-semibold flex w-fit items-center gap-1 inner-shadow-white px-5 py-2 rounded-full text-white">
            Trader
          </h4>
          <h1 className="text-[1.5rem] 2xl:text-[1.9rem] font-bold leading-snug tracking-wide text-center text-white">
            Elite Trader
          </h1>
          <p className=" text-xs 2xl:text-sm text-center font-light max-w-[18rem] 2xl:max-w-xs leading-snug tracking-wide text-white">
            You are now a Syndicate Elite Trader. <br /> Trade smart, grow your
            profits, and climb the ranks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
