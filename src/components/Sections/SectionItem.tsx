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
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 mx-auto mt-28">
      <motion.main
        className="border-gradient-light bg-[#141417] w-full md:w-[45%] md:h-[68%] rounded-xl flex justify-center relative"
        style={{ paddingTop: "60px" }}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
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

        <img src={"/sections_img_1.webp"} alt="phone-1" className="w-[60%]" />
      </motion.main>
      <div className="md:w-[50%] flex flex-col justify-center gap-3">
        <AnimatedText className="font-primary-semibold text-[24px] md:text-[40px] md:leading-[3rem]">
          Seamless Cashback Across Multiple Chains!
        </AnimatedText>
        <AnimatedText className="font-secondary-regular text-[14px] md:text-[16px] text-white opacity-70">
          Earn orbs effortlessly and watch your cashback soar! The more orbs you
          hold, the higher your cashback percentage. Its that simple, that
          exciting!
        </AnimatedText>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_universal.webp"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Universal Cashback
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_universal_link.webp"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Cross-Chain Benefits
          </span>
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
        className="border-gradient-light bg-[#141417] w-full md:w-[45%] h-10vh md:h-[68%] rounded-xl flex justify-center relative"
        style={{ paddingTop: "60px" }}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <img
          src={"/gradient-ellipse.svg"}
          alt="gradient-ellipse"
          className="absolute bottom-60 right-0 rotate-180"
        />
        <img
          src={"/gradient-ellipse-vertical.svg"}
          alt="gradient-ellipse-vertical"
          className="absolute top-0 left-16 "
        />
        <img
          src={"/section-bottom-blend.svg"}
          alt="section-bottom-blend"
          className="absolute bottom-0 left-0"
        />

        <img src={"/sections_img_2.webp"} alt="phone-1" className="w-[60%]" />
      </motion.main>
      <div className="md:w-[50%] flex flex-col justify-center gap-3">
        <AnimatedText className="font-primary-medium text-[24px] md:text-[40px] md:leading-[3rem]">
          Empowers Privacy, Ensures Authority
        </AnimatedText>
        <AnimatedText className="font-secondary-regular text-[14px] md:text-[16px] text-white opacity-70">
          Discover the power of privacy and authority with our platform. Take
          control of your data and decisions, navigating the digital world with
          confidence. With us, your privacy is protected, your authority
          respected. Embrace empowerment in the digital age.
        </AnimatedText>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_empowers_lock.webp"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-regular">
            Privacy Empowerment
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_empowers_privacy.webp"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Authority Assurance
          </span>
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
        className="border-gradient-light bg-[#141417] w-full md:w-[45%]  h-[70vh] md:h-[80vh] rounded-xl flex justify-center relative"
        // style={{ paddingTop: "60px" }}
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
        />
       

        <img src={"/sections_img_3.webp"} alt="phone-1" className="w-[60%]" /> */}
        <img
          src={"/section-bottom-blend.svg"}
          alt="section-bottom-blend"
          className="absolute bottom-0 left-0"
        />

        <video
          poster=""
          width="100%"
          height="100%"
          id="showReelVid"
          muted
          autoPlay
          loop
          preload=""
          className="h-full w-full object-cover"
        >
          <source
            src="/section/section1.mp4"
            type="video/mp4"
            className="h-full w-full"
          />
          Your browser does not support HTML5 video.
        </video>
      </motion.main>
      <div className="md:w-[50%] flex flex-col justify-center gap-3">
        <AnimatedText className="font-primary-medium text-[24px] md:text-[40px] md:leading-[3rem]">
          Swap Crypto With Zero Fees
        </AnimatedText>
        <AnimatedText className="font-secondary-regular text-[14px] md:text-[16px] text-white opacity-70 md:text-justify">
          Swap cryptocurrencies effortlessly, without any fees. Enjoy seamless
          transactions and maximize your assets without worrying about extra
          charges. Experience the freedom of fee-free crypto swapping today!
        </AnimatedText>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_crypto_swap.webp"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Fee-Free Swapping
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_crypto_wallet.webp"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Maximize Your Assets
          </span>
        </div>
      </div>
    </div>
  );
};
