import stars from "../assets/stars.svg";
import "./slider.css";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/MovingTestimonials";

const Testimonials = () => {
  return (
    <div className=" w-full py-12 flex flex-col items-center gap-4 relative">
      <motion.h4
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="  text-sm 2xl:text-sm font-semibold flex items-center gap-1 inner-shadow-white px-6 py-3 rounded-full text-white"
      >
        <img src={stars} alt="stars" className="w-5 h-5" />
        Testimonials
      </motion.h4>
      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl 2xl:text-4xl text-center leading-loose font-bold text-white"
      >
        What Traders Say About <br />
        Syndicate Funded
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" text-sm  2xl:text-base font-thin text-slate-100 tracking-wide text-center capitalize"
      >
        Real stories from real traders who have found success with <br /> our
        platform.
      </motion.p>

      <div className=" w-full bg-black  upper-shadow mt-20  rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default Testimonials;
