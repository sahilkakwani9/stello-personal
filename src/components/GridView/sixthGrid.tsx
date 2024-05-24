/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { SIXTH_GRID_HEADLINE } from "../constatnts";
import { useInView } from "react-intersection-observer";

function SixthGrid() {
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
      className="flex col-span-1 row-span-3 justify-center bg-[#141417] text-white text-xl relative h-[40vh] grid-border-gradient"
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
      <div className="pt-4 flex flex-col justify-between bg-gradient-to-t from-[#5110107A] gap-4 h-full w-full text-2xl items-center">
        <h1 className="font-primary-medium text-center px-4">
          {SIXTH_GRID_HEADLINE}
        </h1>
        <section className="w-full h-full relative overflow-hidden py-4">
          <div className="overflow-hidden h-full w-full ">
            <img
              src={"/sixth_grid_coin.png"}
              className="absolute top-[10px] left-[30px] h-[6vh] object-cover w-full"
              alt="coinbase"
            />
            <img
              src={"/sixth_grid_moonpay.png"}
              className="absolute top-[53px] left-[40px] h-[6vh] object-cover w-full"
              alt="moonpay"
            />
            <img
              src={"/sixth_grid_pancake.png"}
              className="absolute top-[95px] left-[50px] h-[6vh] object-cover w-full z-[20]"
              alt="pancake"
            />
          </div>

          <img
            src={"/sixth_grid_dollar_sign.png"}
            className="absolute top-[-30px] left-[54px] bottom-0 h-[30vh] w-full object-center object-scale-down -scale-75 z-[10]"
            alt="dollar-sign"
          />
        </section>
      </div>
    </motion.div>
  );
}

export default SixthGrid;
