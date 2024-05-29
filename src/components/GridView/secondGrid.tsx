/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { SECOND_GRID_HEADLINE } from "../../constants";
import { useInView } from "react-intersection-observer";

function SecondGrid() {
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
      className="flex col-span-1 row-span-2 h-[320px] md:h-[350px] justify-center grid-border-gradient-secondary items-center bg-[#141417] text-white"
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
      <div className="flex flex-col justify-between gap-4 h-full w-full z-20 overflow-hidden">
        <section className="md:px-4 pt-8 py-4 md:pb-2 md:pt-4">
          <h1 className="font-secondary-regular text-center md:text-start md:w-[80%] text-[30px] leading-tight">
            {SECOND_GRID_HEADLINE}
          </h1>
        </section>
        <section className="">
          <img
            src={"grid/grid2/gradient-ellipse.webp"}
            alt="grid-ellipse"
            className="hidden md:block object-cover object-center absolute z-10 -bottom-16 md:bottom-0 left-16 md:left-0"
          />
          <img
            src={"grid/grid2/gradient-ellipse-mobile.png"}
            alt="grid-ellipse"
            className="md:hidden absolute z-10 bottom-0 md:bottom-0 left-[15%] md:left-0"
          />
          <img
            src={"/grid/grid2/card1-mobile.png"}
            alt="grid-card"
            className="md:hidden absolute z-20 bottom-0 -right-4 h-[60%]"
          />
          <img
            src={"/grid/grid2/card1.png"}
            alt="grid-card"
            className="hidden md:block absolute z-20 right-0 bottom-0 h-[60%] w-[45%]"
          />
          <img
            src={"/grid/grid2/card2.svg"}
            alt="grid-card"
            className="absolute z-20 right-10 md:right-0 bottom-0"
          />
          <img
            src={"/grid/grid2/card3.svg"}
            alt="grid-card"
            className="absolute z-20 right-10 md:right-0 bottom-0 "
          />
        </section>
      </div>
    </motion.div>
  );
}

export default SecondGrid;
