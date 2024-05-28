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
      className="flex col-span-1 row-span-2 justify-center bg-[#141417] text-white text-xl relative h-[40vh] grid-border-gradient-secondary md:h-[286px] md:-mt-14"
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
      <div className="pt-6 flex flex-col justify-between md:gap-4 h-full w-full items-center z-10 overflow-hidden">
        <h1 className="font-primary-regular text-[32px] md:text-[24px] text-center mb-8">
          {SIXTH_GRID_HEADLINE}
        </h1>
        <section className="w-full h-full relative md:py-4">
          <div className="h-full w-full flex gap-4">
            {/* <img
              src={"/sixth_grid_coin.webp"}
              className="absolute bottom-[60%] md:bottom-[55%] left-[30px] h-[20%] w-[80%] md:h-[22%] md:w-full"
              alt="coinbase"
            /> */}
            {/* <img
              src={"/sixth_grid_moonpay.webp"}
              className="absolute bottom-[35%] md:bottom-[30%] md:left-[40px] left-[20%]  h-[20%] w-[80%] md:h-[22%] md:w-full"
              alt="moonpay"
            /> */}
            {/* <img
              src={"/sixth_grid_pancake.webp"}
              className="absolute bottom-[10%] md:bottom-[5%] md:left-[50px] left-[20%] h-[20%] w-[80%]  md:h-[22%]  md:w-full z-20"
              alt="pancake"
            /> */}
            <img src="/sixth_grid_coin.webp" className="absolute bottom-[65%] md:bottom-[54%] left-[21px] h-[30%] w-[80%] md:h-[54%] md:w-full object-contain object-top" alt="coinbase"></img>
            <img src="/sixth_grid_moonpay.webp" className="absolute bottom-[33%] md:bottom-[30%] md:left-[30px] left-[45px] h-[30%] w-[80%] md:h-[54%] md:w-full object-contain" alt="moonpay"></img>
            <img src="/sixth_grid_pancake.webp" className="absolute bottom-[1%] md:bottom-[-4%] md:left-[40px] left-[58px] h-[30%] w-[80%] md:h-[54%]  md:w-full z-20 object-contain object-center" alt="pancake"></img>
            <div className="h-[90%] absolute top-[0] right-0 w-[20%] blur-3xl bg-[#141417] z-30" />
          </div>

          <img
            src={"/sixth_grid_dollar_sign.webp"}
            className="absolute md:bottom-8 bottom-[1.5rem] md:right-[8%] right-[15%] h-[90%] md:h-[87%] w-[62%] md:w-[40%] object-contain object-center z-10"
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
