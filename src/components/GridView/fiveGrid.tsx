/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { FIFTH_GRID_HEADLINE } from "../../constants";
import { useInView } from "react-intersection-observer";

function FiveGrid() {
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
      className="flex col-span-1 md:row-span-3 justify-between items-center bg-[#141417] text-white text-xl grid-border-gradient md:h-[354px] xl:h-[520px] md:-mt-12 xl:-mt-16 overflow-hidden"
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
      <div className="pt-8 md:pt-4 flex flex-col justify-between h-full w-full items-center">
        <img
          src={"/fifth_grid_earn.webp"}
          alt="earn-coins"
          className="hidden md:block w-[35%] object-contain rounded-16px"
        />
        <h1 className="font-primary-medium text-[32px] md:text-[20px] lg:text-[22px] xl:text-[32px] text-center xl:px-2 mb-8 w-[80%]">
          Spin and win
          <br /> rewards, every day
        </h1>

        <img
          src={"/fifth_grid_spin.webp"}
          alt="spin"
          className="hidden md:block object-cover rounded-[16px]"
        />
        <img
          src={"/fifth_grid_spin_phone.webp"}
          alt="spin-mobile"
          className="md:hidden object-cover rounded-[16px]"
        />
      </div>
    </motion.div>
  );
}

export default FiveGrid;
