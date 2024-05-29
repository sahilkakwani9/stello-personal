/* eslint-disable @next/next/no-img-element */
"use client";
import { useAnimation, motion } from "framer-motion";
import { FOURTH_GRID_HEADLINE } from "../../constants";
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
      className="col-span-1 md:col-span-2 row-span-2 bg-[#141417] text-white text-xl grid-border-gradient-secondary md:h-[380px]"
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
      <div className="flex flex-col justify-between gap-4 md:gap-0 h-full w-full items-center">
        <h1 className="font-primary-regular md:self-start self-center text-center text-[32px]  md:text-2xl leading-8 tracking-wide md:text-start md:w-[55%] px-6 pt-6">
          {FOURTH_GRID_HEADLINE}
        </h1>
        {/* <section className="md:w-[75%] w-[90%]">
          <img
            src={"/fourth_grid_card.webp"}
            className="h-full object-fill object-center"
            alt="grid-card"
          />
        </section> */}
        <div className="border-gradient-light w-[90%] md:w-[80%] bg-cardBg mt-8 md:mt-0">
          <div className="p-4">
            <p className="text-[16px] font-secondary-regular text-white opacity-70">
              This Month
            </p>
            <p className="text-[30px] font-secondary-medium text-white">
              $82.80 saved
            </p>
            <motion.p
              className="text-[18px] font-secondary-medium text-transparent bg-clip-text animated-gradient-text"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              28 free transactions
            </motion.p>
            <img
              src="/grid-card-footer.webp"
              alt="card-footer"
              className="mt-4"
            />
          </div>
        </div>
        <motion.img
          src="/grid/animated-gradient-bg.svg"
          alt="bg-gradient"
          className="absolute bottom-0 right-0  rounded-xl"
          // initial={{ right: 0 }}
          // animate={{
          //   right: [0,160,0]
          // }}
          // transition={{
          //   duration: 8,
          //   ease: "linear",
          //   repeat: Infinity,
          // }}
        />
      </div>
    </motion.div>
  );
}

export default FourthGrid;
