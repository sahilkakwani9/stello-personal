/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionItem({ section, index }: { section: any; index: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      key={index}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6rem",
        marginLeft: "auto",
        marginRight: "auto",
        flexDirection: index % 2 === 1 ? "row-reverse" : "row",
      }}
    >
      <main
        className="border-gradient-light bg-[#141417] w-[45%] h-[10vh] rounded-xl flex justify-center relative"
        style={{ paddingTop: "60px", height: "68vh" }}
      >
        <img
          src={"/gradient-ellipse.svg"}
          alt="gradient-ellipse"
          className="absolute bottom-20 left-0"
        />
        <img
          src={"/gradient-ellipse-vertical.svg"}
          alt="gradient-ellipse-vertical"
          className="absolute top-0 right-16 "
        />
        <img
          src={"/section-bottom-blend.svg"}
          alt="section-bottom-blend"
          className="absolute bottom-0 left-0"
        />

        <img src={section.mainImageSrc} alt="phone-1" className="w-[50%]" />
      </main>
      <div className="w-[50%] flex flex-col justify-center gap-3">
        <h1
          className="font-primary-medium text-[40px] leading-[2rem]"
          style={{ lineHeight: "3rem", fontSize: "40px" }}
        >
          {section.title}
        </h1>
        <p
          className="font-secondary-regular text-[14px] text-white opacity-70 text-justify"
          style={{ opacity: "70%", fontSize: "16px" }}
        >
          {section.description}
        </p>
        <div className="flex items-center gap-2">
          <img src={section.pointsOneImageSrc} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            {section.universalCashbackText}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={section.pointsTwoImageSrc} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            {section.crossChainBenefitsText}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default SectionItem;
