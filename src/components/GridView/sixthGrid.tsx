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
      className="flex col-span-1 row-span-2 justify-center bg-[#141417] text-white text-xl relative pb-6 md:pb-0 grid-border-gradient-secondary md:h-[140px] xl:h-[300px] xl:-mt-10"
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
      <div className="pt-6 flex flex-col justify-between md:gap-4 h-full w-full items-center z-10 overflow-hidden">
        <h1 className="font-primary-regular text-[32px] md:text-[14px] xl:text-[24px] text-center px-6 xl:px-8 md:leading-4 leading-10 xl:leading-6">
          {SIXTH_GRID_HEADLINE}
        </h1>
        <section className="w-full h-full relative md:py-4">
          <div className="h-full w-full flex flex-col gap-4 md:gap-2 mt-[10%] ">
            <img
              src={"/sixth_grid_coin.webp"}
              className=" ml-[73px] md:ml-[47px] 2xl:ml-[67px] h-[42px] w-[234px] md:h-[42px] xl:h-[42px] md:w-[258px]"
              alt="coinbase"
            />
            <img
              src={"/sixth_grid_moonpay.webp"}
              className="md:left-[40px] ml-[103px] md:ml-[60px] 2xl:ml-[80px]  h-[42px] w-[234px] md:h-[42px] xl:h-[42px] md:w-[258px]"
              alt="moonpay"
            />
            <img
              src={"/sixth_grid_pancake.webp"}
              className="md:left-[50px] ml-[103px] md:ml-[82px] 2xl:ml-[102px] h-[42px] w-[234px]  md:h-[42px] xl:h-[42px] md:w-[258px] z-20 md:hidden xl:block"
              alt="pancake"
            />
            <div className="h-[90%] absolute top-[0] right-0 w-[20%] blur-3xl bg-[#141417] z-30" />
          </div>

          <img
            src={"/sixth_grid_dollar_sign.webp"}
            className="absolute hidden md:block bottom-8 md:bottom-4 xl:bottom-8 right-10 h-[138px] md:h-[147px] w-[72px] md:w-[87px] object-center z-10 left-[50%]"
            alt="dollar-sign"
          />
          <img
            src={"/sixth_grid_dollar_sign_mobile.webp"}
            className="absolute top-[12%]  right-10 w-[35%] z-10 left-[50%] md:hidden"
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
