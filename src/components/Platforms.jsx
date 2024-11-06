import { FaArrowRightLong } from "react-icons/fa6";
// import globe from "../assets/globe.svg";
import globe from "../assets/globee.svg";
import platform1 from "../assets/platform1.svg";
import platform2 from "../assets/platform2.svg";
import platform3 from "../assets/platform3.svg";
import platform4 from "../assets/platform4.svg";
import platform5 from "../assets/platform5.svg";
import platform6 from "../assets/platform6.svg";
import { motion } from "framer-motion";
import lightning1 from "../assets/lightning1.svg";
import lightning2 from "../assets/lightning2.svg";

const Platforms = () => {
  const orbitVariants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 80, // Adjust rotation speed here
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  const textVariants = {
    rotate: {
      rotate: [360, 0],
      transition: {
        duration: 80, // Adjust rotation speed here
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const platforms = [
    {
      src: platform1,
      radius: 600,
      position: { top: "50%", right: "-30%", transform: "translate(-50%, 0)" },
    },
    {
      src: platform2,
      radius: 600,
      position: {
        top: "50%",
        left: "-25%",
        transform: "translate(-100%, -50%)",
      },
    },
    {
      src: platform3,
      radius: 800,
      position: { bottom: "5%", left: "-7%", transform: "translate(-50%, 0)" },
    },
    {
      src: platform4,
      radius: 300,
      position: { top: "0%", right: "0", transform: "translate(0, -50%)" },
    },
    {
      src: platform5,
      radius: 800,
      position: { top: "8%", left: "0%", transform: "translate(0, -50%)" },
    },
    {
      src: platform6,
      radius: 600,
      position: { bottom: "5%", right: "5%", transform: "translate(0, 0)" },
    },
  ];

  return (
    <div className="w-full relative ">
      <img
        src={lightning1}
        alt="lightning1"
        className="absolute top-32 right-0 "
      />
      <img
        src={lightning2}
        alt="lightning1"
        className="absolute bottom-0 left-0 "
      />

      <div className=" oyo flex  py-16 2xl:py-24  flex-col items-center w-full gap-5 relative">
        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[2.3rem] 2xl:text-[3rem] font-semibold text-white capitalize tracking-wide"
        >
          Are you ready to become <br /> syndicate funded trader?
        </motion.h1>
        <button className="font-semibold inline-flex items-center gap-2 px-10 py-4 rounded-full inner-shadow-white text-white">
          Start Challenge
          <FaArrowRightLong className="text-lg" />
        </button>
      </div>
      <div className="w-full mt-12 2xl:-mt-16 relative flex justify-center items-center">
        {/* Globe Image */}
        <img src={globe} className="w-full my-24" alt="Globe " />
        <motion.h2
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="2xl:text-7xl text-white absolute text-center text-5xl font-semibold"
        >
          Our <br /> Platforms
        </motion.h2>
        {/* Orbiting platform Images */}

        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            className={`absolute    w-[700px] h-[800px] rounded-full`}
            style={{ transformOrigin: "center" }}
            variants={orbitVariants}
            animate="rotate"
          >
            <motion.div
              variants={textVariants}
              animate="rotate"
              className="absolute"
              style={{
                top: platform.position.top,
                bottom: platform.position.bottom,
                left: platform.position.left,
                right: platform.position.right,
                transform: platform.position.transform,
                transformOrigin: "center",
              }}
            >
              <motion.img
                src={platform.src}
                className="w-40 2xl:w-52 "
                alt="Platform Logo"
                style={{ rotate: 0 }} // Keeps the image from rotating
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
