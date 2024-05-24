/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { SEVENTH_GRID_HEADLINE } from "../constatnts";
import { useInView } from "react-intersection-observer";

function SeventhGrid() {
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
      className="flex col-span-1 md:col-span-2 row-span-2 justify-center bg-[#141417] text-white text-xl pt-2 pb-12 bg-gradient-to-t from-[#5110107A] grid-border-gradient"
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
      <div className="py-6 flex flex-col justify-between h-full w-full  items-center gap-16 md:gap-12">
        <h1 className="font-primary-regular text-[32px] md:text-2xl md:text-start flex md:self-start md:px-8">
          {SEVENTH_GRID_HEADLINE}
        </h1>
        <section className="w-full h-[80%] relative">
          <img src={"/seventh_grid.png"} className="md:w-[95%]" alt="timeline" />
          <img
            src={"/seventh_grid_button.png"}
            className="absolute md:top-[-25px] top-[-35px] md:w-[30%] w-[48%] md:right-10 right-0"
            alt="timeline-btn"
          />
        </section>
        <img
          src={"/grid/orange-grid-blend.svg"}
          className="w-full absolute left-0 bottom-0 rounded-xl"
          alt="muliti-chain-asset"
        />
      </div>
    </motion.div>
  );
}

export default SeventhGrid;
