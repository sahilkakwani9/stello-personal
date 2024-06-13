/* eslint-disable @next/next/no-img-element */
"use client";
import { TxnText } from "../../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Txns() {
  const [coinPositions, setCoinPositions] = useState<
    { x: number; y: number }[]
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
      } else if (window.innerWidth > 1536) {
        setCoinPositions([
          { x: 220, y: 260 },
          { x: 280, y: 160 },
          { x: 360, y: 80 },
          { x: 460, y: 16 },
          { x: 560, y: 0 },
          { x: 660, y: 16 },
          { x: 760, y: 80 },
          { x: 830, y: 160 },
          { x: 920, y: 260 },
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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getMobileAnimation = (index: number) => {
    const positions = [
      ...coinPositions.slice(index),
      ...coinPositions.slice(0, index + 1),
    ];

    const keyframesX = positions.map((pos) => pos.x);
    const keyframesY = positions.map((pos) => pos.y);
    const keyframesOpacity = keyframesX.map((x) =>
      x === coinPositions[0].x || x === coinPositions[8].x ? 0 : 1
    );

    return {
      x: keyframesX,
      y: keyframesY,
      opacity: keyframesOpacity,
      transition: {
        duration: positions.length * 1, // Adjust the speed of the animation
        ease: "linear",
        repeat: Infinity,
      },
    };
  };

  const startPositions = coinPositions.map((pos, index) => {
    if (index === 0) {
      return { x: coinPositions[0]?.x || 0, y: coinPositions[0]?.y || 0 }; // Starting position for the first coin
    }
    return coinPositions[index - 1]; // Previous coin's final position
  });

  return (
    <main
      ref={ref}
      className="relative md:w-[70%] bg-introToOrbsMobile md:bg-introToOrbs mx-auto self-center md:bg-cover overflow-hidden md:-mt-8"
    >
      {coinPositions.map((pos, index) => (
        <motion.img
          key={index}
          src={`/dapps/dapp${index + 1}.svg`}
          alt={`coin${index + 1}`}
          initial={
            window.innerWidth < 768
              ? {
                  x: pos.x,
                  y: pos.y,
                  opacity: 1,
                }
              : {
                  x: startPositions[index]?.x,
                  y: startPositions[index]?.y,
                  opacity: 0,
                }
          }
          animate={
            window.innerWidth < 768 && inView
              ? getMobileAnimation(index)
              : inView
              ? { x: pos.x, y: pos.y, opacity: 1 }
              : undefined
          }
          transition={{
            delay: index * 0.3,
            duration: 1,
            ease: "backInOut",
          }}
          className="absolute w-[60px] h-[60px] md:w-[10%] md:h-[10%]"
        />
      ))}
      <img
        alt="mockup-with-chains"
        src="/txns/mockup-with-chains.png"
        className="h-[30%] w-[90%] md:h-[700px] md:w-[420px] md:mx-auto pt-40 mr-8"
      />
      <img
        alt="middle-blend-bg"
        src="/txn-bg-blend.png"
        className="hidden absolute md:block -bottom-0 md:-bottom-0 left-0 z-20"
      />

      <img
        alt="middle-blend-bg"
        src="/txns/footer-blend.webp"
        className="absolute -bottom-20 md:hidden left-0 z-1"
      />

      <div className="absolute z-20 bottom-0 left-0 md:left-[27.5%] md:w-[45%]">
        <p className="font-primary-bold text-[32px] md:text-[44px] text-white relative text-center md:ml-8 tracking-wide">
          {TxnText.heading}
        </p>
        <p className="font-primary-regular text-[18px] md:text-[22px] text-white text-center md:ml-8 px-12 md:px-4 md:mx-auto ">
          {TxnText.subHeading}
        </p>
      </div>
    </main>
  );
}

export default Txns;
``;
