/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { THIRD_GRID_HEADLINE } from "../../constants";
import { useMobileAnimation } from "@/hooks/useMobileAnimation";
import { slideInWithAngleLeft } from "@/constants/variants";

function ThirdGrid() {
  const { ref, controls, isMobile } = useMobileAnimation();
  return (
    <motion.div
      className="flex col-span-1 row-span-3 justify-center bg-gradient-to-b from-[#141417] from-80% to-[#5110107A] text-white text-xl grid-border-gradient"
      style={{
        background:
          "linear-gradient(0deg, rgba(8, 8, 8, 0.3), rgba(8, 8, 8, 0.3)), linear-gradient(168.09deg, rgba(255, 255, 255, 0.05) 0.56%, rgba(255, 255, 255, 0.01) 101.66%)",
      }}
      ref={ref}
      animate={controls}
      initial={isMobile ? "hidden" : "desktop"}
      variants={slideInWithAngleLeft}
    >
      <div className="pt-8 flex flex-col justify-between gap-8 md:gap-4 text-2xl ">
        <h1 className="font-primary-regular text-[34px] w-[70%] mx-auto md:w-full md:text-2xl text-center leading-snug">
          {THIRD_GRID_HEADLINE}
        </h1>
        <section className="h-full px-12 max-h-56 md:max-h-full overflow-hidden">
          <img
            src={"/grid/grid3/card.webp"}
            className="md:w-full mx-auto my-0 w-[90%] md:h-full"
            alt="muliti-chain-asset"
          />
          <img
            src={"/grid/orange-grid-blend.svg"}
            className="w-full absolute left-0 bottom-0 rounded-xl"
            alt="muliti-chain-asset"
          />
        </section>
      </div>
    </motion.div>
  );
}

export default ThirdGrid;
