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
        const screenWidth = window.innerWidth;
        setCoinPositions([
          { x: -0.145 * screenWidth, y: 130 },
          { x: -0.072 * screenWidth, y: 80 },
          { x: 0.072 * screenWidth, y: 40 },
          { x: 0.241 * screenWidth, y: 8 },
          { x: 0.435 * screenWidth, y: 0 },
          { x: 0.628 * screenWidth, y: 8 },
          { x: 0.797 * screenWidth, y: 40 },
          { x: 0.942 * screenWidth, y: 80 },
          { x: 1.039 * screenWidth, y: 130 },
        ]);
      } else if (window.innerWidth > 1536) {
        const screenWidth = window.innerWidth;
        setCoinPositions([
          { x: 0.1 * screenWidth, y: 260 }, // 5% of screen width
          { x: 0.13 * screenWidth, y: 160 }, // 20% of screen width
          { x: 0.18 * screenWidth, y: 80 }, // 40% of screen width
          { x: 0.25 * screenWidth, y: 16 }, // 65% of screen width
          { x: 0.33 * screenWidth, y: 0 }, // 90% of screen width
          { x: 0.42 * screenWidth, y: 16 }, // 115% of screen width (may need to adjust)
          { x: 0.48 * screenWidth, y: 80 }, // 140% of screen width (may need to adjust)
          { x: 0.52 * screenWidth, y: 160 }, // 160% of screen width (may need to adjust)
          { x: 0.55 * screenWidth, y: 260 },
        ]);
      } else if (window.innerWidth > 1280) {
        const screenWidth = window.innerWidth;
        setCoinPositions([
          { x: 0.1 * screenWidth, y: 260 }, // 5% of screen width
          { x: 0.13 * screenWidth, y: 160 }, // 20% of screen width
          { x: 0.18 * screenWidth, y: 80 }, // 40% of screen width
          { x: 0.25 * screenWidth, y: 16 }, // 65% of screen width
          { x: 0.33 * screenWidth, y: 0 }, // 90% of screen width
          { x: 0.42 * screenWidth, y: 16 }, // 115% of screen width (may need to adjust)
          { x: 0.48 * screenWidth, y: 80 }, // 140% of screen width (may need to adjust)
          { x: 0.52 * screenWidth, y: 160 }, // 160% of screen width (may need to adjust)
          { x: 0.55 * screenWidth, y: 260 },
        ]);
      } else if (window.innerWidth >= 1024) {
        const screenWidth = window.innerWidth;
        setCoinPositions([
          { x: 0.1 * screenWidth, y: 260 }, // 5% of screen width
          { x: 0.15 * screenWidth, y: 160 }, // 20% of screen width
          { x: 0.25 * screenWidth, y: 80 }, // 40% of screen width
          { x: 0.35 * screenWidth, y: 16 }, // 65% of screen width
          { x: 0.5 * screenWidth, y: 0 }, // 90% of screen width
          { x: 0.6 * screenWidth, y: 16 }, // 115% of screen width (may need to adjust)
          { x: 0.7 * screenWidth, y: 80 }, // 140% of screen width (may need to adjust)
          { x: 0.8 * screenWidth, y: 160 }, // 160% of screen width (may need to adjust)
          { x: 0.85 * screenWidth, y: 260 },
        ]);
      } else {
        const screenWidth = window.innerWidth;
        setCoinPositions([
          { x: 0.1 * screenWidth, y: 260 }, // 5% of screen width
          { x: 0.15 * screenWidth, y: 160 }, // 20% of screen width
          { x: 0.25 * screenWidth, y: 80 }, // 40% of screen width
          { x: 0.35 * screenWidth, y: 16 }, // 65% of screen width
          { x: 0.5 * screenWidth, y: 0 }, // 90% of screen width
          { x: 0.6 * screenWidth, y: 16 }, // 115% of screen width (may need to adjust)
          { x: 0.7 * screenWidth, y: 80 }, // 140% of screen width (may need to adjust)
          { x: 0.8 * screenWidth, y: 160 }, // 160% of screen width (may need to adjust)
          { x: 0.85 * screenWidth, y: 260 },
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
    <div className="md:bg-introToOrbs md:bg-cover relative pb-20 -mt-24 md:mt-0 bg-black">
      <main
        ref={ref}
        className="relative xl:w-[70%] bg-introToOrbsMobile md:bg-none mx-auto self-center md:bg-cover overflow-hidden z-10 md:-mt-12"
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
            className="absolute w-[60px] h-[60px] lg:w-[10%] lg:h-[10%]"
          />
        ))}
        <img
          alt="mockup-with-chains"
          src="/txns/mockup-with-chains.webp"
          className="h-[30%] w-[90%] md:h-[700px] md:w-[420px] md:mx-auto pt-40 mr-8 z-20 md:-mb-10"
        />

        <img
          alt="bottom-blend-bg"
          src="/txns/bg-blend.svg"
          className="hidden absolute md:block -bottom-0 md:-bottom-0 left-0 z-20 2xl:bottom-0"
        />

        <img
          alt="middle-blend-bg"
          src="/txns/footer-blend.svg"
          className="absolute -bottom-0 md:hidden left-0 z-1"
        />

        <div className="absolute z-20 bottom-0 left-0 md:w-[80%] md:left-[10%] xl:left-[27.5%] xl:w-[45%]">
          <p className="font-primary-bold text-[32px] md:text-[44px] text-white relative text-center md:ml-8 tracking-wide">
            {TxnText.heading}
          </p>
          <p className="font-primary-regular text-[18px] md:text-[22px] text-white text-center md:ml-8 px-12 md:px-4 lg:px-40 xl:px-4 md:mx-auto ">
            {TxnText.subHeading}
          </p>
        </div>
      </main>
      <img
        alt="middle-blend-bg-extended"
        src="/footer-blend-extended.svg"
        className="absolute hidden bottom-0 md:block left-0 z-1"
      />
    </div>
  );
}

export default Txns;
