import discordBg from "../assets/discordBg.svg";
const Discord = () => {
  return (
    <div className=" inner-shadow-white-three py-24 rounded-2xl overflow-hidden  relative max-w-6xl flex flex-col items-center gap-6 2xl:max-w-7xl mx-auto my-12">
      <img
        src={discordBg}
        alt="discordBg"
        className=" 
        absolute top-0  w-full h-full object-contain opacity-5"
      />
      <h1 className="text-4xl 2xl:text-6xl font-semibold text-white tracking-wide">
        Discord Our Community
      </h1>
      <p className="text-sm 2xl:text-base font-thin text-white tracking-wide">
        Talk with thousands of other like minded individuals all looking to
        succeed.
      </p>
      <button className=" font-semibold px-10 py-4 rounded-full inner-shadow-white text-white">
        Join Our Discord
      </button>
    </div>
  );
};

export default Discord;
