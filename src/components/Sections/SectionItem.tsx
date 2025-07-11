/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../Text/Animated";
import { ISectionData } from "@/constants/sections";

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } },
};

function SectionItem({
  index,
  sectionData,
}: {
  index: number;
  sectionData: ISectionData;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } justify-center items-center gap-4 md:gap-12 lg:gap-24  mx-auto mt-28 md:mt-16`}
    >
      <motion.div
        className="border-gradient-light bg-sectionBg object-cover bg-cover bg-no-repeat w-full md:w-[50%] xl:w-[45%] md:h-full 2xl:h-[670px] 2xl:w-[632px] rounded-xl flex justify-center relative overflow-hidden z-10 !pt-16"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        {/* <img
          src={"/gradient-ellipse.svg"}
          alt="gradient-ellipse"
          className="absolute bottom-20 left-0"
        />
        <img
          src={"/gradient-ellipse-vertical.svg"}
          alt="gradient-ellipse-vertical"
          className="absolute top-0 right-16 "
        /> */}
        <img
          src={"/section-bottom-blend.svg"}
          alt="section-bottom-blend"
          className="absolute bottom-0 left-0 2xl:rounded-xl"
        />

        <img
          src={sectionData.mainImageSrc}
          alt="phone-1"
          className="w-[55%] md:w-[50%] xl:w-[58%] h-full object-contain"
        />
      </motion.div>
      <div className="md:w-[50%] flex flex-col justify-center gap-4">
        <AnimatedText className="font-primary-medium text-[24px] md:text-[30px] lg:text-[34px] xl:text-[48px] md:leading-[2rem] xl:leading-[3rem] text-white tracking-wide">
          {sectionData.title}
        </AnimatedText>
        <AnimatedText className="font-secondary-regular text-[14px] md:text-[14px] xl:text-[19px] text-[#b3b3b2] leading-6">
          {sectionData.description}
        </AnimatedText>
        <div className="gap-6 flex flex-col">
          <div className="flex items-center gap-2">
            <img
              src={sectionData.pointsOneImageSrc}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white  font-secondary-light 2xl:text-[20px]">
              {sectionData.pointsOneText}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={sectionData.pointsTwoImageSrc}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white font-secondary-light 2xl:text-[20px]">
              {sectionData.pointsTwoText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionItem;
