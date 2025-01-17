"use client";
import React, { useEffect, useState, createContext } from "react";
import { motion } from "framer-motion";
import stars from "../../assets/stars.svg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { features } from "../../../constants";

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ initialScroll = 0 }) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className=" w-full px-4 md:px-12  flex flex-col md:flex-row items-center gap-4 md:items-end justify-between">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-sm 2xl:text-sm w-fit font-semibold flex items-center gap-1 inner-shadow-white px-6 py-3 2xl:py-4 rounded-full text-white">
            <img src={stars} alt="stars" className="w-5 h-5" />
            Funded Trader
          </h4>
          <h1 className="text-xl md:text-3xl 2xl:text-4xl font-bold text-white">
            About Syndicate Funded
          </h1>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-12 w-12 rounded-full flex border-2 border-[#ffffff2c] items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <FaArrowLeftLong className="text-white text-lg" />
            {/* <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" /> */}
          </button>
          <button
            className="relative z-40 h-12 w-12 rounded-full bg-gradient-to-b from-[#5B1CD4] to-[#310F73] flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <FaArrowRightLong className="text-white" />
            {/* <IconArrowNarrowRight className="h-6 w-6 text-gray-500" /> */}
          </button>
        </div>
      </div>
      <div
        className="flex  w-full px-10 overflow-x-scroll gap-6 2xl:gap-8 flex-row justify-start overscroll-x-auto  py-10 md:py-14 scroll-smooth [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        {features.map((feature, index) => (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
                once: true,
              },
            }}
            viewport={{
              once: true,
            }} //    md:last:pr-[33%]
            // last:pr-[5%]
            key={"card" + index}
            className=" text-white pb-10 2xl:pb-16  p-7 2xl:p-10 gap-6 min-w-[460px] 2xl:min-w-[700px]  inner-shadow-white-two flex items-start  rounded-2xl"
          >
            <img
              src={feature.img}
              alt={"hehe"}
              className="
                w-9 h-9 2xl:w-12 2xl:h-12 
                 "
            />

            <div className="flex flex-col gap-3   ">
              <h3 className=" text-xl 2xl:text-3xl font-bold ">
                {feature.title}
              </h3>
              <p className=" text-xs 2xl:text-base  tracking-wide  leading-loose text-slate-100">
                {feature.desc}
              </p>
            </div>
          </motion.div>
        ))}
        {/* </div> */}
      </div>
    </CarouselContext.Provider>
  );
};

// export const Card = ({ card, index, layout = false }) => {
//   const [open, setOpen] = useState(false);
//   const containerRef = useRef(null);
//   const { onCardClose, currentIndex } = useContext(CarouselContext);

//   useEffect(() => {
//     function onKeyDown(event) {
//       if (event.key === "Escape") {
//         handleClose();
//       }
//     }

//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [open]);

//   useOutsideClick(containerRef, () => handleClose());

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     onCardClose(index);
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {open && (
//           <div className="fixed inset-0 h-screen z-50 overflow-auto">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
//             />
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               ref={containerRef}
//               layoutId={layout ? `card-${card.title}` : undefined}
//               className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
//             >
//               <button
//                 className="sticky top-4 h-8 w-8 v text-red-500 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
//                 onClick={handleClose}
//               >
//                 dell
//                 {/* <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" /> */}
//               </button>
//               <motion.p
//                 layoutId={layout ? `category-${card.title}` : undefined}
//                 className="text-base font-medium text-black dark:text-white"
//               >
//                 {card.category}
//               </motion.p>
//               <motion.p
//                 layoutId={layout ? `title-${card.title}` : undefined}
//                 className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
//               >
//                 {card.title}
//               </motion.p>
//               <div className="py-10">{card.content}</div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//       <motion.button
//         layoutId={layout ? `card-${card.title}` : undefined}
//         onClick={handleOpen}
//         className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
//       >
//         <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
//         <div className="relative z-40 p-8">
//           <motion.p
//             layoutId={layout ? `category-${card.category}` : undefined}
//             className="text-white text-sm md:text-base font-medium font-sans text-left"
//           >
//             {card.category}
//           </motion.p>
//           <motion.p
//             layoutId={layout ? `title-${card.title}` : undefined}
//             className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
//           >
//             {card.title}
//           </motion.p>
//         </div>
//         <BlurImage
//           src={card.src}
//           alt={card.title}
//           fill
//           className="object-cover absolute z-10 inset-0"
//         />
//       </motion.button>
//     </>
//   );
// };

// export const BlurImage = ({ height, width, src, className, alt, ...rest }) => {
//   const [isLoading, setLoading] = useState(true);
//   return (
//     <img
//       className={cn(
//         "transition duration-300",
//         isLoading ? "blur-sm" : "blur-0",
//         className
//       )}
//       onLoad={() => setLoading(false)}
//       src={src}
//       width={width}
//       height={height}
//       loading="lazy"
//       decoding="async"
//       blurDataURL={typeof src === "string" ? src : undefined}
//       alt={alt ? alt : "Background of a beautiful view"}
//       {...rest}
//     />
//   );
// };
