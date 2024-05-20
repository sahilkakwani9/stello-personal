/* eslint-disable @next/next/no-img-element */
"use client";
import { INTRO_ORBS_HEADLINE, TxnText } from "../constatnts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Txns() {
  const coinPositions = [
    { x: 150, y: 260 },
    { x: 210, y: 160 },
    { x: 290, y: 80 },
    { x: 390, y: 16 },
    { x: 490, y: 0 },
    { x: 590, y: 16 },
    { x: 690, y: 80 },
    { x: 770, y: 160 },
    { x: 850, y: 260 },
  ];

  const startPositions = coinPositions.map((pos, index) => {
    if (index === 0) {
      return { x: 150, y: 260 }; // Starting position for the first coin
    }
    return coinPositions[index - 1]; // Previous coin's final position
  });

  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation is triggered only once
    threshold: 0.5, // Determines how much of the component should be visible before triggering
  });

  return (
    <main
      ref={ref}
      className="relative w-[70%] bg-introToOrbs mx-auto self-center bg-cover -mt-4"
    >
      {coinPositions.map((pos, index) => (
        <motion.img
          key={index}
          src={`/dapps/dapp${index + 1}.svg`}
          alt={`coin${index + 1}`}
          initial={{
            x: startPositions[index].x,
            y: startPositions[index].y,
            opacity: 0,
          }} // Set initial opacity to 0
          animate={
            inView
              ? { x: pos.x, y: pos.y, opacity: 1 }
              : {
                  x: startPositions[index].x,
                  y: startPositions[index].y,
                  opacity: 0,
                }
          } // Animate only when inView is true
          transition={{
            delay: index * 0.3,
            duration: 1,
            ease: "backInOut",
          }}
          className="absolute w-[70px] h-[80px]"
        />
      ))}
      <img
        alt="mockup-with-chains"
        src="/mockup-with-chains.webp"
        className="h-[30%] w-[40%] mx-auto pt-40"
      />
      <img
        alt="middle-blend-bg"
        src="/middle-blend-blur.svg"
        className="absolute -bottom-10 left-0 z-1"
      />
      <div className="absolute bottom-16 z-20 left-[27.5%] w-[45%]">
        <p className="font-primary-bold text-[36px] text-white relative text-center ml-8">
          {TxnText.heading}
        </p>
        <p className="font-primary-regular text-[18px] text-white text-center ml-8 mx-auto">
          {TxnText.subHeading}
        </p>
      </div>
    </main>
  );
}

export default Txns;
