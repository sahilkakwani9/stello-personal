/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { ENCRYPTION } from "../../constants";
import { useInView } from "react-intersection-observer";

function FirstGrid() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      className="flex col-span-1 md:col-span-3 row-span-1 justify-center items-center text-white text-xl p-8 relative grid-bg overflow-hidden grid-border-gradient"
      style={{
        background:
          "linear-gradient(0deg, rgba(8, 8, 8, 0.3), rgba(8, 8, 8, 0.3)), linear-gradient(168.09deg, rgba(255, 255, 255, 0.05) 0.56%, rgba(255, 255, 255, 0.01) 101.66%)",
      }}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay: 0.2 },
        },
      }}
    >
      <section className="relative flex flex-col-reverse md:flex-row justify-between h-full w-full gap-32 md:gap-16">
        <div className="w-full md:w-1/2 h-full flex relative">
          <img
            src={"/grid/grid1/vectorLinesLeft.svg"}
            alt="lines-left"
            className="absolute -top-24 -left-28 md:-top-14 md:-left-8 w-[40%] md:w-[50%]"
          />
          <img
            src={"/grid/grid1/encryption.webp"}
            alt="encryption"
            className="absolute -top-20 md:-top-2 left-0 w-[30%] md:w-[20%] z-[15] md:left-28"
          />
          <img
            src={"grid/grid1/vectorLinesRight.svg"}
            alt="lines-right"
            className="absolute -top-20 md:-top-10 w-[80%]  md:w-full scale-110 z-[10] -right-10 md:-right-40"
          />
        </div>
        <div className="md:w-1/2 z-10">
          <p className="font-primary-regular text-[30px] md:text-[28px] w-full text-center leading-snug">
            {ENCRYPTION}
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default FirstGrid;
