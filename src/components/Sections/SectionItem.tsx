/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionItem() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
      }}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   gap: "6rem",
      //   marginLeft: "auto",
      //   marginRight: "auto",
      //   flexDirection: index % 2 === 1 ? "row-reverse" : "row",
      // }}
      className="flex flex-col md:flex-row justify-center items-center gap-24 mx-auto"
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

        <img src={"/sections_img_1.png"} alt="phone-1" className="w-[50%]" />
      </main>
      <div className="w-[50%] flex flex-col justify-center gap-3">
        <h1
          className="font-primary-medium text-[40px] leading-[2rem]"
          style={{ lineHeight: "3rem", fontSize: "40px" }}
        >
          Seamless Cashback Across Multiple Chains!
        </h1>
        <p
          className="font-secondary-regular text-[14px] text-white opacity-70 text-justify"
          style={{ opacity: "70%", fontSize: "16px" }}
        >
          Earn orbs effortlessly and watch your cashback soar! The more orbs you hold, the higher your cashback percentage. It's that simple, that exciting!
        </p>
        <div className="flex items-center gap-2">
          <img src={"/sections_universal.png"} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
          Universal Cashback
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={"/sections_universal_link.png"} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
          Cross-Chain Benefits
          </span>
        </div>
      </div>
    </motion.div>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
      }}
      className="flex flex-col md:flex-row-reverse justify-center items-center gap-24 mx-auto"
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

        <img src={"/sections_img_2.png"} alt="phone-1" className="w-[50%]" />
      </main>
      <div className="w-[50%] flex flex-col justify-center gap-3">
        <h1
          className="font-primary-medium text-[40px] leading-[2rem]"
          style={{ lineHeight: "3rem", fontSize: "40px" }}
        >
          Empowers Privacy, Ensures Authority
        </h1>
        <p
          className="font-secondary-regular text-[14px] text-white opacity-70 text-justify"
          style={{ opacity: "70%", fontSize: "16px" }}
        >
          Discover the power of privacy and authority with our platform. Take control of your data and decisions, navigating the digital world with confidence. With us, your privacy is protected, your authority respected. Embrace empowerment in the digital age.
        </p>
        <div className="flex items-center gap-2">
          <img src={"/sections_empowers_lock.png"} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
          Privacy Empowerment
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={"/sections_empowers_privacy.png"} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
          Authority Assurance
          </span>
        </div>
      </div>
    </motion.div>
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
      }}
      className="flex flex-col md:flex-row justify-center items-center gap-24 mx-auto"
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

        <img src={"/sections_img_3.png"} alt="phone-1" className="w-[50%]" />
      </main>
      <div className="w-[50%] flex flex-col justify-center gap-3">
        <h1
          className="font-primary-medium text-[40px] leading-[2rem]"
          style={{ lineHeight: "3rem", fontSize: "40px" }}
        >
          Swap Crypto With Zero Fees
        </h1>
        <p
          className="font-secondary-regular text-[14px] text-white opacity-70 text-justify"
          style={{ opacity: "70%", fontSize: "16px" }}
        >
          Swap cryptocurrencies effortlessly, without any fees. Enjoy seamless transactions and maximize your assets without worrying about extra charges. Experience the freedom of fee-free crypto swapping today!
        </p>
        <div className="flex items-center gap-2">
          <img src={"/sections_crypto_swap.png"} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
          Fee-Free Swapping
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img src={"/sections_crypto_wallet.png"} alt="" style={{ width: "6%" }} />
          <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
          Maximize Your Assets
          </span>
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default SectionItem;
