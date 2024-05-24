/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
      }}
      className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 mx-auto"
    >
      <main
        className="border-gradient-light bg-[#141417] w-full md:w-[45%] md:h-[68vh] rounded-xl flex justify-center relative"
        style={{ paddingTop: "60px" }}
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

        <img src={"/sections_img_1.png"} alt="phone-1" className="w-[60%]" />
      </main>
      <div className="md:w-[50%] flex flex-col justify-center gap-3">
        <h1 className="font-primary-medium text-[24px] md:text-[40px] md:leading-[3rem]">
          Seamless Cashback Across Multiple Chains!
        </h1>
        <p className="font-secondary-regular text-[14px] md:text-[16px] text-white opacity-70 text-justify">
          Earn orbs effortlessly and watch your cashback soar! The more orbs you
          hold, the higher your cashback percentage. Its that simple, that
          exciting!
        </p>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_universal.png"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Universal Cashback
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_universal_link.png"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Cross-Chain Benefits
          </span>
        </div>
      </div>
    </motion.div>
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
      }}
      className="flex flex-col md:flex-row-reverse justify-center items-center gap-4 md:gap-24 mx-auto"
    >
      <main
        className="border-gradient-light bg-[#141417] w-full md:w-[45%] h-10vh md:h-[68vh] rounded-xl flex justify-center relative"
        style={{ paddingTop: "60px" }}
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

        <img src={"/sections_img_2.png"} alt="phone-1" className="w-[60%]" />
      </main>
      <div className="md:w-[50%] flex flex-col justify-center gap-3">
        <h1 className="font-primary-medium text-[24px] md:text-[40px] md:leading-[3rem]">
          Empowers Privacy, Ensures Authority
        </h1>
        <p className="font-secondary-regular text-[14px] md:text-[16px] text-white opacity-70 text-justify">
          Discover the power of privacy and authority with our platform. Take
          control of your data and decisions, navigating the digital world with
          confidence. With us, your privacy is protected, your authority
          respected. Embrace empowerment in the digital age.
        </p>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_empowers_lock.png"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Privacy Empowerment
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_empowers_privacy.png"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Authority Assurance
          </span>
        </div>
      </div>
    </motion.div>
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
      }}
      className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-24 mx-auto"
    >
      <main
        className="border-gradient-light bg-[#141417] w-full md:w-[45%]  h-10vh md:h-[68vh] rounded-xl flex justify-center relative"
        style={{ paddingTop: "60px" }}
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

        <img src={"/sections_img_3.png"} alt="phone-1" className="w-[60%]" />
      </main>
      <div className="md:w-[50%] flex flex-col justify-center gap-3">
        <h1 className="font-primary-medium text-[24px] md:text-[40px] md:leading-[3rem]">
          Swap Crypto With Zero Fees
        </h1>
        <p className="font-secondary-regular text-[14px] md:text-[16px] text-white opacity-70 md:text-justify">
          Swap cryptocurrencies effortlessly, without any fees. Enjoy seamless
          transactions and maximize your assets without worrying about extra
          charges. Experience the freedom of fee-free crypto swapping today!
        </p>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_crypto_swap.png"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Fee-Free Swapping
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={"/sections_crypto_wallet.png"}
            alt=""
            className="w-[10%] md:w-[6%]"
          />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
            Maximize Your Assets
          </span>
        </div>
      </div>
    </motion.div>
  );
};
