import { FaArrowRightLong } from "react-icons/fa6";
import globe from "../assets/globe.svg";
import platform1 from "../assets/platform1.svg";
import platform2 from "../assets/platform2.svg";
import platform3 from "../assets/platform3.svg";
import platform4 from "../assets/platform4.svg";
import platform5 from "../assets/platform5.svg";
import platform6 from "../assets/platform6.svg";
import { motion } from "framer-motion";

const Platforms = () => {
  const orbitVariants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 150, // Adjust rotation speed here
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const platforms = [
    {
      src: platform1,
      radius: 600,
      position: { top: "50%", right: "-60%", transform: "translate(-50%, 0)" },
    },
    {
      src: platform2,
      radius: 600,
      position: {
        top: "60%",
        left: "-15%",
        transform: "translate(-100%, -50%)",
      },
    },
    {
      src: platform3,
      radius: 800,
      position: { bottom: "0", left: "30%", transform: "translate(-50%, 0)" },
    },
    {
      src: platform4,
      radius: 800,
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
      position: { bottom: "-10%", right: "-20%", transform: "translate(0, 0)" },
    },
  ];

  return (
    <div className="w-full py-16 2xl:py-24 oyo">
      <div className="flex flex-col items-center w-full gap-5 relative">
        <h1 className="text-[2.3rem] 2xl:text-[3rem] font-semibold text-white capitalize tracking-wide">
          Are you ready to become <br /> syndicate funded trader?
        </h1>
        <button className="font-semibold inline-flex items-center gap-2 px-10 py-4 rounded-full inner-shadow-white text-white">
          Start Challenge
          <FaArrowRightLong className="text-lg" />
        </button>
      </div>
      <div className="w-full mt-12 2xl:-mt-16 relative flex justify-center items-center">
        {/* Globe Image */}
        <img src={globe} className="w-full" alt="Globe" />

        {/* Orbiting platform Images */}

        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            className={`absolute    w-[${platform.radius}px] h-[${platform.radius}px] rounded-full`}
            style={{ transformOrigin: "center" }}
            variants={orbitVariants}
            animate="rotate"
          >
            <div
              className="absolute"
              style={{
                top: platform.position.top,
                bottom: platform.position.bottom,
                left: platform.position.left,
                right: platform.position.right,
                transform: platform.position.transform,
              }}
            >
              <motion.img
                src={platform.src}
                className="w-40 2xl:w-52 "
                alt="Platform Logo"
                style={{ rotate: 0 }} // Keeps the image from rotating
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
