/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { FOURTH_GRID_HEADLINE } from "../constatnts";
import { useInView } from "react-intersection-observer";

function FourthGrid() {
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
      className="col-span-1 md:col-span-2 row-span-6 bg-[#141417] text-white text-xl grid-border-gradient"
      style={{
        background:
          "linear-gradient(0deg, rgba(8, 8, 8, 0.3), rgba(8, 8, 8, 0.3)), linear-gradient(168.09deg, rgba(255, 255, 255, 0.05) 0.56%, rgba(255, 255, 255, 0.01) 101.66%)",
      }}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
      }}
    >
      <div className="flex flex-col justify-between gap-12 md:gap-0 h-full w-full items-center">
        <h1 className="font-primary-medium md:self-start self-center text-center text-[32px]  md:text-2xl leading-snug md:text-start md:w-[55%] px-6 pt-6">
          {FOURTH_GRID_HEADLINE}
        </h1>
        <section className="md:w-[75%] w-[90%] h-[65%]">
          <img
            src={"/fourth_grid_card.png"}
            className="h-full object-fill object-center"
            alt="grid-card"
          />
        </section>
      </div>
    </motion.div>
  );
}

export default FourthGrid;
