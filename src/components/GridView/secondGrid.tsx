/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { SECOND_GRID_HEADLINE } from "../constatnts";
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
      className="flex col-span-1 row-span-4 justify-center grid-border-gradient items-center bg-[#141417] text-white"
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
      <div className="flex flex-col justify-between gap-8 md:gap-4 h-full w-full z-20 overflow-hidden">
        <section className="p-4 py-4 md:pb-2">
          <h1 className="font-secondary-regular text-center md:text-start md:w-[80%] text-[30px] md:text-[20px]">
            {SECOND_GRID_HEADLINE}
          </h1>
        </section>
        <section className="relative flex h-[20vh] mr-4 md:mr-0">
          <img
            src={"/gradient-ellipse.webp"}
            alt="grid-ellipse"
            className="object-cover object-center absolute z-10 -bottom-16 md:bottom-0 left-16 md:left-0 -rotate-[20deg] md:rotate-0"
          />
          <img
            src={"/second_grid_card.svg"}
            alt="grid-card"
            className="absolute z-20 right-0 bottom-0"
          />
          <img
            src={"/second_grid_card_2.svg"}
            alt="grid-card"
            className="absolute z-20 right-0 bottom-0"
          />
          <img
            src={"/second_grid_card_3.svg"}
            alt="grid-card"
            className="absolute z-20 right-0 bottom-0"
          />
          <div className="h-[90%] absolute top-[0] right-0 w-[20%] blur-xl bg-[#141417] z-10" />
        </section>
      </div>
    </motion.div>
  );
}

export default SecondGrid;
