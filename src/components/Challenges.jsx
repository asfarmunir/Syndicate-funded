import stars from "../assets/stars.svg";
import question from "../assets/question.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import moon from "../assets/moon.svg";
import { useState } from "react";

const fundedData = [
  {
    key: "5k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "N/A",
      maxDrawdown: "8% ($16,000)",
      maxDailyDrawdown: "4%",
      maxGrowth: "$5,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
    reward: 57,
  },
  {
    key: "10k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "N/A",
      maxDrawdown: "8% ($16,000)",
      maxDailyDrawdown: "4%",
      maxGrowth: "$2,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
    reward: 107,
  },
  {
    key: "25k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "N/A",
      maxDrawdown: "8% ($2,000)",
      maxDailyDrawdown: "4%",
      maxGrowth: "$2,500,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
    reward: 207,
  },
  {
    key: "50k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "N/A",
      maxDrawdown: "10% ($5,000)",
      maxDailyDrawdown: "4%",
      maxGrowth: "$3,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
    reward: 307,
  },
  {
    key: "100k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "N/A",
      maxDrawdown: "10% ($10,000)",
      maxDailyDrawdown: "4%",
      maxGrowth: "$4,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
    reward: 507,
  },
  {
    key: "200k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "N/A",
      maxDrawdown: "10% ($20,000)",
      maxDailyDrawdown: "4%",
      maxGrowth: "$5,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
    reward: 997,
  },
];

const phaseData = [
  {
    step: 1,
    phase: "5k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "8%",
      maxDrawdown: "10% ($1,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$5,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
  },
  {
    step: 2,
    phase: "5k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "4%",
      maxDrawdown: "10% ($20,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$5,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "NO",
      holdOverTheWeekend: "NO",
    },
  },
  {
    step: 1,
    phase: "10k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "8%",
      maxDrawdown: "10% ($1,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$2,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },

  {
    step: 2,
    phase: "10k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "4%",
      maxDrawdown: "10% ($20,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$2,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 1,
    phase: "25k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "8%",
      maxDrawdown: "10% ($2,500)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$2,500,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 2,
    phase: "25k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "4%",
      maxDrawdown: "10% ($2,500)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$2,500,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 1,
    phase: "50k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "8%",
      maxDrawdown: "10% ($5,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$3,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 2,
    phase: "50k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "4%",
      maxDrawdown: "10% ($5,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$3,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 1,
    phase: "100k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "8%",
      maxDrawdown: "10% ($10,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$4,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 2,
    phase: "100k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "4%",
      maxDrawdown: "10% ($10,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$4,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 1,
    phase: "200k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "8%",
      maxDrawdown: "10% ($20,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$5,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
  {
    step: 2,
    phase: "200k",
    data: {
      maxTradingDays: "N/A",
      virtualProfitTarget: "4%",
      maxDrawdown: "10% ($20,000)",
      maxDailyDrawdown: "5%",
      maxGrowth: "$5,000,000",
      minTradingDays: "5",
      zeroCommission: "YES",
      tradeThroughNews: "YES",
      holdOverTheWeekend: "YES",
    },
  },
];

const Challenges = () => {
  const [step, setStep] = useState(1);
  const [fundedStates, setFundedStates] = useState("5k");

  return (
    <div
      className=" w-full py-12 rounded-[5rem] flex flex-col items-center relative px-12 gap-8 bg-gradient-to-b from-[#00000000] to-[#5B1CD433]"
      //   style={{
      //     backgroundImage: `url(${moon})`,
      //     backgroundSize: "contain",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //     backgroundBlendMode: "color",
      //   }}
    >
      <img
        src={moon}
        alt="moon"
        className="absolute  w-full h-full object-center object-contain   "
      />
      <div className=" w-full  flex items-end justify-between">
        <div className="flex flex-col gap-4">
          <h4 className="text-sm 2xl:text-sm w-fit font-semibold flex items-center gap-1 inner-shadow-white px-6 py-3 2xl:py-4 rounded-full text-white">
            <img src={stars} alt="stars" className="w-5 h-5" />
            Challenges
          </h4>
          <h1 className="text-3xl 2xl:text-5xl font-semibold text-white">
            Test Your Skill-Set with <br /> syndicate funded
          </h1>
          <p className="text-sm 2xl:text-base font-thin text-white">
            Prop trading brought to you by professional traders.
          </p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <div className="flex w-fit bg-[#FFFFFF0A] p-1.5 gap-1.5 border border-[#FFFFFF1A] rounded-xl">
            <button
              onClick={() => setStep(1)}
              className={`
                ${
                  step === 1
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              1 Step
            </button>
            <button
              onClick={() => setStep(2)}
              className={`
                ${
                  step === 2
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              2 Step
            </button>
          </div>
          <div className="flex bg-[#FFFFFF0A] p-1.5 gap-1.5 border border-[#FFFFFF1A] rounded-xl">
            <button
              onClick={() => setFundedStates("5k")}
              className={`
                ${
                  fundedStates === "5k"
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              $5K
            </button>
            <button
              onClick={() => setFundedStates("10k")}
              className={`
                ${
                  fundedStates === "10k"
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              $10K
            </button>
            <button
              onClick={() => setFundedStates("25k")}
              className={`
                ${
                  fundedStates === "25k"
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              $25K
            </button>
            <button
              onClick={() => setFundedStates("50k")}
              className={`
                ${
                  fundedStates === "50k"
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              $50k
            </button>
            <button
              onClick={() => setFundedStates("100k")}
              className={`
                ${
                  fundedStates === "100k"
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              $100K
            </button>
            <button
              onClick={() => setFundedStates("200k")}
              className={`
                ${
                  fundedStates === "200k"
                    ? "bg-gradient-to-b from-[#5B1CD4] to-[#310F73] border border-[#310F73] text-white"
                    : " text-[#FFFFFF66] border border-gray-800 "
                }
                px-6 py-3 rounded-xl z-50 tracking-wide`}
            >
              $200K
            </button>
          </div>
        </div>
      </div>
      <div className="flex  flex-col md:flex-row gap-8  w-full">
        <div className="inner-shadow-white-two p-10 space-y-5 rounded-2xl w-full backdrop-blur">
          <h2 className="text-xl 2xl:text-2xl text-white font-bold ">
            Phase {step}
          </h2>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Trading Days
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.maxTradingDays
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Virtual Profit Target
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.virtualProfitTarget
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Drawdown
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.maxDrawdown
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Daily Drawdown
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.maxDailyDrawdown
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Growth
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.maxGrowth
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Minimum Trading Days
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.minTradingDays
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              0% Commission
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.zeroCommission
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Trade Through News
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.tradeThroughNews
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Hold Over The Weekend
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                phaseData.find(
                  (data) => data.step === step && data.phase === fundedStates
                ).data.holdOverTheWeekend
              }
            </p>
          </div>
        </div>
        <div className="inner-shadow-white-two p-10 space-y-5 rounded-2xl w-full backdrop-blur">
          <h2 className="text-xl 2xl:text-2xl text-white font-bold ">Funded</h2>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Trading Days
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .maxTradingDays
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Virtual Profit Target
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .virtualProfitTarget
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Drawdown
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .maxDrawdown
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Daily Drawdown
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .maxDailyDrawdown
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Max Growth
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .maxGrowth
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Minimum Trading Days
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .minTradingDays
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              0% Commission
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .zeroCommission
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Trade Through News
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .tradeThroughNews
              }
            </p>
          </div>
          <div className=" w-full flex items-center justify-between">
            <h2 className="text-white text-sm 2xl:text-base inline-flex items-center gap-1">
              Hold Over The Weekend
              <img
                src={question}
                alt="question"
                className="w-5 h-5 text-[#FFFFFF66]"
              />
            </h2>
            <p className="font-semibold text-white text-sm 2xl:text-base">
              {
                fundedData.find((data) => data.key === fundedStates).data
                  .holdOverTheWeekend
              }
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-2xl 2xl:text-4xl text-white font-bold  tracking-wide py-4">
        ${fundedData.find((data) => data.key === fundedStates).reward} For{" "}
        {fundedStates} Account
      </h1>
      <button className=" bg-gradient-to-b from-[#5B1CD4] items-center to-[#310F73] px-10 py-4 inline-flex gap-3 text-white font-semibold rounded-full shadow-inner shadow-[#FFFFFF66] ">
        Start a Challenge
        <FaArrowRightLong className="text-lg" />
      </button>
    </div>
  );
};

export default Challenges;
