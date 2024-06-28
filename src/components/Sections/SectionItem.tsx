/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../Text/Animated";

function SectionItem() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default SectionItem;

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.2 } },
};

const Section1 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 mx-auto mt-28 md:mt-16">
      <motion.main
        className="border-gradient-light bg-sectionBg object-cover bg-cover bg-no-repeat w-full md:w-[45%] md:h-full 2xl:h-[670px] 2xl:w-[632px] rounded-xl flex justify-center relative overflow-hidden z-10"
        style={{ paddingTop: "60px" }}
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
          src={"/sections_img_1.webp"}
          alt="phone-1"
          className="w-[55%] md:w-[50%] xl:w-[58%] h-full object-contain"
        />
      </motion.main>
      <div className="md:w-[50%] flex flex-col justify-center gap-4">
        <AnimatedText className="font-primary-medium text-[24px] md:text-[30px] lg:text-[42px] xl:text-[48px] md:leading-[2rem] lg:leading-[3rem] text-white tracking-wide">
          Seamless Cashback Across Multiple Chains!
        </AnimatedText>
        <AnimatedText className="font-secondary-regular text-[14px] md:text-[16px] xl:text-[19px] text-[#b3b3b2] leading-6">
          Earn orbs effortlessly and watch your cashback soar! The more orbs you
          hold, the higher your cashback percentage. Its that simple, that
          exciting!
        </AnimatedText>
        <div className="gap-6 flex flex-col">
          <div className="flex items-center gap-2">
            <img
              src={"/sections_universal.webp"}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white  font-secondary-light 2xl:text-[20px]">
              Universal Cashback
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={"/sections_universal_link.webp"}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white font-secondary-light 2xl:text-[20px]">
              Cross-Chain Benefits
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
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
      ref={ref}
      className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-24 mx-auto mt-12"
    >
      <motion.main
        className="border-gradient-light bg-sectionBg object-cover bg-cover bg-no-repeat w-full md:w-[45%] h-10vh md:h-[68%] 2xl:h-[670px] 2xl:w-[632px] rounded-xl flex justify-center relative overflow-hidden z-10"
        style={{ paddingTop: "60px" }}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        {/* <img
          src={"/gradient-ellipse.svg"}
          alt="gradient-ellipse"
          className="absolute bottom-60 right-0 rotate-180"
        />
        <img
          src={"/gradient-ellipse-vertical.svg"}
          alt="gradient-ellipse-vertical"
          className="absolute top-0 left-16 "
        /> */}
        <img
          src={"/section-bottom-blend.svg"}
          alt="section-bottom-blend"
          className="absolute bottom-0 left-0 2xl:rounded-xl"
        />

        <img
          src={"/sections_img_2.webp"}
          alt="phone-1"
          className="w-[55%] md:[50%] xl:w-[58%] h-full object-contain"
        />
      </motion.main>
      <div className="md:w-[50%] flex flex-col justify-center gap-4">
        <AnimatedText className="font-primary-medium text-[24px] md:text-[30px] lg:text-[42px] xl:text-[48px] md:leading-[2rem] lg:leading-[3rem] text-white xl:w-[80%] tracking-wide">
          Empowers Privacy, Ensures Authority
        </AnimatedText>
        <AnimatedText className="font-secondary-regular text-[14px] md:text-[16px] xl:text-[19px] text-[#b3b3b2]">
          Discover the power of privacy and authority with our platform. Take
          control of your data and decisions, navigating the digital world with
          confidence. With us, your privacy is protected, your authority
          respected. Embrace empowerment in the digital age.
        </AnimatedText>
        <div className="gap-6 flex flex-col">
          <div className="flex items-center gap-2">
            <img
              src={"/sections_empowers_lock.webp"}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white font-secondary-regular 2xl:text-[20px]">
              Privacy Empowerment
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={"/sections_empowers_privacy.webp"}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white  font-secondary-light 2xl:text-[20px]">
              Authority Assurance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section3 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 mx-auto mt-12">
      <motion.main
        className="border-gradient-light bg-sectionBg object-fill bg-cover bg-no-repeat w-full md:w-[45%] md:h-[68%] 2xl:h-[670px] 2xl:w-[632px] rounded-xl flex justify-center relative overflow-hidden z-10"
        style={{ paddingTop: "60px" }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        {/* <img
          src={"/gradient-ellipse.svg"}
          alt="gradient-ellipse"
          className="absolute top-20 left-0"
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
          src={"/sections_img_3.webp"}
          alt="phone-1"
          className="w-[55%] md:w-[50%] xl:w-[58%] object-contain overflow-hidden"
        />
      </motion.main>
      <div className="md:w-[50%] flex flex-col justify-center gap-4">
        <AnimatedText className="font-primary-medium text-[24px] md:text-[30px] lg:text-[42px] xl:text-[48px]   md:leading-[2rem] lg:leading-[3rem] text-white xl:w-[70%] tracking-wide">
          Swap Crypto With Zero Fees
        </AnimatedText>
        <AnimatedText className="font-secondary-regular text-[14px] md:text-[16px] xl:text-[19px] text-[#b3b3b2] opacity-70">
          Swap cryptocurrencies effortlessly, without any fees. Enjoy seamless
          transactions and maximize your assets without worrying about extra
          charges. Experience the freedom of fee-free crypto swapping today!
        </AnimatedText>
        <div className="gap-6 flex flex-col">
          <div className="flex items-center gap-2">
            <img
              src={"/sections_crypto_swap.webp"}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white  font-secondary-light 2xl:text-[20px]">
              Fee-Free Swapping
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={"/sections_crypto_wallet.webp"}
              alt=""
              className="w-[10%] md:w-[6%]"
            />
            <span className="text-white font-secondary-light 2xl:text-[20px]">
              Maximize Your Assets
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
