/* eslint-disable @next/next/no-img-element */
"use client";
import { INTRO_ORBS_HEADLINE, TxnText } from "../../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Txns() {
  const [coinPositions, setCoinPositions] = useState<
    {
      x: number;
      y: number;
    }[]
  >([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCoinPositions([
          { x: -60, y: 130 },
          { x: -30, y: 80 },
          { x: 30, y: 40 },
          { x: 100, y: 8 },
          { x: 180, y: 0 },
          { x: 260, y: 8 },
          { x: 330, y: 40 },
          { x: 390, y: 80 },
          { x: 430, y: 130 },
        ]);
      } else {
        setCoinPositions([
          { x: 150, y: 260 },
          { x: 210, y: 160 },
          { x: 290, y: 80 },
          { x: 390, y: 16 },
          { x: 490, y: 0 },
          { x: 590, y: 16 },
          { x: 690, y: 80 },
          { x: 770, y: 160 },
          { x: 850, y: 260 },
        ]);
      }
    };

    handleResize(); // Set initial positions
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startPositions = coinPositions.map((pos, index) => {
    if (index === 0) {
      return { x: coinPositions[0]?.x || 0, y: coinPositions[0]?.y || 0 }; // Starting position for the first coin
    }
    return coinPositions[index - 1]; // Previous coin's final position
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main
      ref={ref}
      className="relative md:w-[70%] bg-introToOrbsMobile md:bg-introToOrbs mx-auto self-center md:bg-cover overflow-hidden"
    >
      {coinPositions.map((pos, index) => (
        <motion.img
          key={index}
          src={`/dapps/dapp${index + 1}.svg`}
          alt={`coin${index + 1}`}
          initial={{
            x: startPositions[index]?.x,
            y: startPositions[index]?.y,
            opacity: 0,
          }} // Set initial opacity to 0
          animate={
            inView
              ? { x: pos.x, y: pos.y, opacity: 1 }
              : {
                  x: startPositions[index]?.x,
                  y: startPositions[index]?.y,
                  opacity: 0,
                }
          } // Animate only when inView is true
          transition={{
            delay: index * 0.3,
            duration: 1,
            ease: "backInOut",
          }}
          className="absolute w-[60px] h-[60px] md:w-[70px] md:h-[80px]"
        />
      ))}
      <img
        alt="mockup-with-chains"
        src="/mockup-with-chains.webp"
        className="h-[30%] w-[90%] md:w-[40%] md:mx-auto pt-40 mr-8"
      />
      <img
        alt="middle-blend-bg"
        src="/middle-blend-blur.svg"
        className="absolute bottom-10 md:-bottom-10 left-0 z-1"
      />
      <div className="absolute z-20 bottom-0 left-0 md:left-[27.5%] md:w-[45%]">
        <p className="font-primary-bold text-[32px] md:text-[36px] text-white relative text-center md:ml-8">
          {TxnText.heading}
        </p>
        <p className="font-primary-regular text-[18px] md:text-[18px] text-white text-center md:ml-8 px-12 md:mx-auto ">
          {TxnText.subHeading}
        </p>
      </div>
    </main>
  );
}

export default Txns;
