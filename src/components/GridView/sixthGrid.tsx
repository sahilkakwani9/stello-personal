/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { SIXTH_GRID_HEADLINE } from "../../constants";
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
      className="flex col-span-1 row-span-2 justify-center bg-[#141417] text-white text-xl relative h-[40vh] grid-border-gradient"
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
      <div className="pt-6 flex flex-col justify-between gap-8 md:gap-4 h-full w-full items-center z-10 overflow-hidden">
        <h1 className="font-primary-regular text-[32px] md:text-2xl text-center px-4">
          {SIXTH_GRID_HEADLINE}
        </h1>
        <section className="w-full h-full relative py-4">
          <div className="h-full w-full">
            <img
              src={"/sixth_grid_coin.webp"}
              className="absolute bottom-[70%] md:bottom-[55%] left-[30px] h-[22%] w-full"
              alt="coinbase"
            />
            <img
              src={"/sixth_grid_moonpay.webp"}
              className="absolute bottom-[40%] md:bottom-[30%] left-[40px] h-[22%] w-full"
              alt="moonpay"
            />
            <img
              src={"/sixth_grid_pancake.webp"}
              className="absolute bottom-[10%] md:bottom-[5%] left-[50px] h-[22%]  w-full z-20"
              alt="pancake"
            />
            <div className="h-[90%] absolute top-[0] right-0 w-[20%] blur-3xl bg-[#141417] z-30" />
          </div>

          <img
            src={"/sixth_grid_dollar_sign.png"}
            className="absolute bottom-8 right-10 h-[80%] w-[35%] object-center z-10"
            alt="dollar-sign"
          />
        </section>
      </div>

      <img
        src={"/grid/orange-grid-blend.svg"}
        className="w-full absolute left-0 bottom-0 rounded-xl"
        alt="middle-orange-blend"
      />
      <img
        src={"/grid/middle-orange-blend.svg"}
        className="w-full absolute left-0 bottom-0 rounded-xl"
        alt="middle-orange-blend"
      />
    </motion.div>
  );
}

export default SixthGrid;
