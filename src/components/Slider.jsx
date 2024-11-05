import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import arrow from "../assets/arrow.svg";
import cardVector from "../assets/card-vector.svg";
const Slider = (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      {/* carousel */}

      <div className="slideC ">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide bg-[#5B1CD4] rounded-3xl"
              style={{
                boxShadow: `0 5px 20px #5B1CD430`,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, #5B1CD440, transparent)`,
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className="btns">
        <FontAwesomeIcon
          className="btn"
          onClick={prev}
          icon={faChevronLeft}
          color="#fff"
          size="2x"
        />
        <FontAwesomeIcon
          className="btn"
          onClick={next}
          icon={faChevronRight}
          color="#fff"
          size="2x"
        />
      </div>
    </>
  );
};

export default Slider;

const SliderContent = (props) => {
  return (
    <div className="sliderContent relative">
      <img
        src={cardVector}
        alt="cardVector"
        className="absolute -bottom-28 -right-28 "
      />
      <img
        src={cardVector}
        alt="cardVector"
        className="absolute -top-32 -left-28 "
      />
      {props.icon}
      <h2 className=" text-3xl  2xl:text-5xl font-bold text-white">
        {props.title}
      </h2>
      <p className=" 2xl:text-lg leading-relaxed">{props.desc}</p>
      <button className="bg-[#10101033] px-6 rounded-full py-2.5 border ">
        Learn More
        <img src={arrow} alt="arrow" className="w-9 h-8 ml-3 inline-block  " />
      </button>
    </div>
  );
};
