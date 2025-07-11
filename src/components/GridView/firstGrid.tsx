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
      className="flex col-span-1 md:col-span-3 row-span-1 md:h-[153px] xl:h-[216px] justify-center items-center text-white text-xl p-8 relative grid-bg overflow-hidden grid-border-gradient"
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
          transition: { duration: 0.8 },
        },
      }}
    >
      <section className="relative flex flex-col-reverse md:flex-row justify-between h-full w-full items-center gap-28 md:gap-0">
        <div className="w-full md:w-1/2 h-full flex relative">
          <img
            src={"/grid/grid1/vectorLinesLeft.svg"}
            alt="lines-left"
            className="absolute md:hidden xl:block -top-24 -left-28 md:top-0 lg:-top-4 xl:top-0 md:left-0 xl:-left-8 2xl:-left-16 w-[40%] md:w-[80%] xl:w-[40%] scale-[1.3]"
          />
          <img
            src={"/grid/grid1/encryption.webp"}
            alt="encryption"
            className="absolute md:hidden xl:block -top-24 md:top-6 xl:top-10 left-0 w-[40%] md:w-[40%] xl:w-[20%] z-[15] md:left-28 lg:left-32 xl:left-28"
          />
          <img
            src={"grid/grid1/vectorLinesRight.webp"}
            alt="lines-right"
            className="absolute md:hidden xl:block -top-24 md:top-6 xl:top-0 w-full  md:w-full z-[10] -right-10 md:-right-36 xl:-right-48 2xl:-right-64 md:scale-[1.3]"
          />
          <img
            src={"/grid/grid1/grid1-bg.svg"}
            alt="lines-left"
            className="absolute hidden md:block xl:hidden w-full h-full scale-[2.5] -right-1/2 top-[10%]"
          />
        </div>
        <div className="xl:w-[40%] z-10">
          <p className="font-primary-regular text-[30px] md:text-[28px]  xl:text-[38px] w-full text-center md:text-right xl:text-center leading-10">
            {ENCRYPTION}
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default FirstGrid;
