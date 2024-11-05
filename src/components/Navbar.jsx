import logo from "../../public/logo.svg";
import discord from "../../public/discord.svg";
import bg from "../assets/starbg.svg";

const Navbar = () => {
  return (
    <nav
      className=" px-10 py-7 flex items-center justify-between"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={logo} alt="logo" className="w-52 2xl:w-60  bg" />
      <ul className="flex space-x-4 border rounded-full px-3 py-2 border-[#FFFFFF33]">
        <li className="text-white text-xs 2xl:text-base  inner-shadow px-6  py-2 rounded-full">
          <a href="#">Home</a>
        </li>
        <li className="text-white text-xs 2xl:text-base  inner-shadow px-6  py-2 rounded-full">
          <a href="#">Affiliate Portal</a>
        </li>
        <li className="text-white text-xs 2xl:text-base  inner-shadow px-6  py-2 rounded-full">
          <a href="#">About Us</a>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-2">
          <img src={discord} alt="discord" className="w-5 h-5" />
          <span className="text-white text-xs 2xl:text-base ">
            Join Discord
          </span>
        </button>
        <button className=" px-6 py-3  rounded-full inner-shadow text-white text-xs 2xl:text-base ">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
