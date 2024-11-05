import logo from "../assets/logo.svg";
import footerBg from "../assets/footerBg.svg";
import insta from "../assets/insta.svg";
import discord from "../assets/discordFooter.svg";
import x from "../assets/x.svg";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" w-full pb-12">
      <div className="  w-full flex items-start justify-between p-12 ">
        <div className="  space-y-4">
          <img src={logo} alt="logo" className="w-64 pb-4" />
          <p className="text-white text-sm 2xl:text-base pb-3 font-light">
            Monday-Friday 24h
          </p>
          <p className="text-white text-sm 2xl:text-base font-light">
            support@syndicatefunded.com
          </p>
          <p className="text-white text-sm 2xl:text-base font-light pt-6">
            The Meydan Hotel, Grandstand, 6th floor, <br /> Meydan Road, Nad Al
            Sheba, Dubai, U.A.E
          </p>
        </div>
        <div className="flex  gap-10">
          <div className=" space-y-4">
            <h2 className="text-lg font-semibold text-white pb-4">
              Quick Links
            </h2>
            <p className="text-white text-xs 2xl:text-sm pb-3 font-light">
              Home
            </p>
            <p className="text-white text-xs 2xl:text-sm pb-3 font-light">
              Affiliate Portal
            </p>
            <p className="text-white text-xs 2xl:text-sm pb-3 font-light">
              About Us
            </p>
            <p className="text-white text-xs 2xl:text-sm pb-3 font-light">
              Contact Us
            </p>
          </div>
          <div className=" space-y-4">
            <h2 className="text-lg font-semibold text-white pb-4">About Us</h2>
            <p className="text-white text-xs 2xl:text-sm pb-3 font-light">
              Career
            </p>
            <p className="text-white text-xs 2xl:text-sm pb-3 font-light">
              Terms of services
            </p>
            <p className="text-white text-xs 2xl:text-sm pb-3 font-light">
              privacy policy
            </p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          amount: 0.5,
          once: true,
        }}
      >
        <img src={footerBg} alt="footerBg" className="w-full  -mt-12" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          amount: 0.2,
        }}
        className=" w-full flex-col flex items-center gap-8 -mt-64 z-50 "
      >
        <h2 className="text-4xl 2xl:text-5xl font-semibold tracking-wide text-center text-white">
          Join the Syndicate Funded <br /> Community
        </h2>
        <div className=" bg-[#FFFFFF05] border border-[#FFFFFF33] backdrop-blur-sm rounded-full p-1">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter email"
            className="text-sm border-none bg-transparent text-white w-56 2xl:w-72 px-4"
          />
          <button className="  inner-shadow-purple items-center to-[#310F73] px-6 py-3.5 inline-flex gap-3 text-white  rounded-full  ">
            Submit
            <FaArrowRightLong className="text-lg" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <img src={insta} alt="insta" className="w-12" />
          <img src={discord} alt="discord" className="w-12" />
          <img src={x} alt="hehe" className=" w-12   " />
        </div>
        <p className="text-sm text-white capitalize">
          Copyright ©{" "}
          <span className=" px-1 font-semibold">Syndicate Funded.</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
