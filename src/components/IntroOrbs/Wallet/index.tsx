/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { WalletText } from "@/components/constatnts";

function Wallet() {
  const walletRef = useRef<HTMLDivElement>(null);
  const firstDivControls = useAnimation();
  const secondDivControls = useAnimation();
  const thirdDivControls = useAnimation();
  const leftCoinControls = useAnimation();
  const rightCoinControls = useAnimation();
  const pControls = useAnimation();
  const [inView, setInView] = useState(0);

  const handleScroll = () => {
    const vh = window.innerHeight;

    if (walletRef.current) {
      const scrollY = window.scrollY;

      if (scrollY > 2 * vh && scrollY < 3 * vh) {
        setInView(1);
      } else if (scrollY >= 3 * vh && scrollY < 4 * vh) {
        setInView(2);
      } else if (scrollY >= 4 * vh && scrollY < 5 * vh) {
        setInView(3);
      } else if (scrollY >= 5 * vh && scrollY < 6 * vh) {
        setInView(4);
      } else if (scrollY >= 6 * vh && scrollY < 7 * vh) {
        setInView(5);
      } else {
        setInView(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    switch (inView) {
      case 1:
        firstDivControls.start({
          maxHeight: "250px",
          top: -180,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        pControls.start({
          opacity: 1,
          transition: {
            opacity: { duration: 0.5, ease: "easeOut", delay: 0.1 },
          },
        });

        leftCoinControls.start({
          top: "10%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        rightCoinControls.start({
          top: "-10%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });

        break;
      case 2:
        firstDivControls.start({
          maxHeight: "60px",
          top: 0,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        leftCoinControls.start({
          top: "20%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        pControls.start({
          opacity: 0,
          transition: {
            opacity: { duration: 0.3, ease: "easeOut", delay: 0 },
          },
        });
        secondDivControls.start({
          maxHeight: "60px",
          top: 0,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });

        rightCoinControls.start({
          top: "0%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        break;
      case 3:
        secondDivControls.start({
          maxHeight: "250px",
          top: -170,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        leftCoinControls.start({
          top: "10%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        rightCoinControls.start({
          top: "-10%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        break;
      case 4:
        secondDivControls.start({
          maxHeight: "60px",
          top: 0,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        thirdDivControls.start({
          maxHeight: "60px",
          top: 0,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        leftCoinControls.start({
          top: "20%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        rightCoinControls.start({
          top: "0%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });

        break;
      case 5:
        thirdDivControls.start({
          maxHeight: "250px",
          top: -170,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        leftCoinControls.start({
          top: "10%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        rightCoinControls.start({
          top: "-10%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        break;
      default:
        firstDivControls.start({
          maxHeight: "60px",
          top: 0,
          transition: {
            maxHeight: { duration: 0.5, ease: "easeOut" },
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        pControls.start({
          opacity: 0,
          transition: {
            opacity: { duration: 0.3, ease: "easeOut", delay: 0 },
          },
        });
        leftCoinControls.start({
          top: "20%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
        rightCoinControls.start({
          top: "0%",
          transition: {
            top: { duration: 0.5, ease: "easeOut" },
          },
        });
    }
  }, [
    inView,
    firstDivControls,
    secondDivControls,
    pControls,
    thirdDivControls,
    leftCoinControls,
    rightCoinControls,
  ]);

  return (
    <div className="w-[100%] relative min-h-screen" ref={walletRef}>
      <motion.img
        alt="stello-coin"
        src="/coins/stellocoin.svg"
        className="hidden md:block absolute -left-[5%] top-[10%] h-[150px] w-[146px]"
        animate={leftCoinControls}
        initial={{
          top: "20%",
        }}
      />
      <motion.img
        alt="stello-coin"
        src="/coins/stellocoin.svg"
        className="absolute right-0 top-[20%] h-[150px] w-[146px] -rotate-90"
        animate={rightCoinControls}
        initial={{
          top: "0%",
        }}
      />

      <div className="absolute left-[24%] top-[20%] z-0">
        <img
          alt="wallet-bg"
          src="/wallet-bg.webp"
          className="w-[80%] absolute -top-[16%]  -z-10"
        />
        <motion.div
          className="absolute border-gradient mx-auto left-[5%] w-[70%] bg-gradient-to-r from-wallet-card-start-gradient to-wallet-card-end-gradient backdrop-blur-lg p-4 -z-10"
          animate={thirdDivControls}
          initial={{
            maxHeight: "60px",
            top: 0,
          }}
        >
          <p className="font-primary-bold text-white text-center text-[36px] leading-tight">
            {WalletText.topCard.heading}
          </p>
          <p className="font-primary-regular text-[18px] text-white text-center">
            {WalletText.topCard.subHeading}
          </p>
          <img
            alt="top-card-banner"
            src="/top-card-banner.webp"
            className="mx-auto"
          />
        </motion.div>
        <img
          src="/top_pocket.svg"
          alt="top-pocket-image"
          className="w-[80%]  z-0"
        />
      </div>

      <div className="absolute left-[24%] top-[30%]">
        <motion.div
          className="absolute border-gradient mx-auto left-[5%] w-[70%] bg-gradient-to-r from-wallet-card-start-gradient to-wallet-card-end-gradient backdrop-blur-lg p-4"
          animate={secondDivControls}
          initial={{
            maxHeight: "60px",
            top: 0,
          }}
        >
          <p className="font-primary-bold text-white text-center text-[36px] leading-tight">
            {WalletText.middleCard.heading}
          </p>
          <p className="font-primary-regular text-[18px] text-white px-10 text-center">
            {WalletText.middleCard.subHeading}
          </p>
          <img
            alt="middle-card-banner"
            src="/middle-card-banner.webp"
            className="w-[80%] mx-auto my-4"
          />
        </motion.div>
        <img
          src="/middle_pocket.svg"
          alt="middle-pocket-image"
          className="relative z-10 w-[80%]"
        />
      </div>
      <div className="absolute left-[24%] top-[40%] z-30">
        <motion.div
          className="absolute border-gradient mx-auto left-[5%] w-[70%] z-30 bg-gradient-to-r from-wallet-card-start-gradient to-wallet-card-end-gradient backdrop-blur-lg"
          animate={firstDivControls}
          initial={{
            maxHeight: "50px",
            top: 0,
          }}
        >
          <div className="h-full flex-col justify-center items-center p-4">
            <img src="/star.svg" alt="star-image" className="mx-auto" />
            <motion.img
              src="/coins/stellocoin.svg"
              alt="stello-coin"
              animate={pControls}
              className="h-[40%] w-[40%] absolute -left-[12%] bottom-4"
              initial={{
                opacity: 0,
              }}
            />
            <motion.p
              className="font-primary-semibold text-[34px] mt-2 text-center leading-snug"
              animate={pControls}
              initial={{
                opacity: 0,
              }}
            >
              Orbs are exclusive <br />
              rewards created for <br />
              Stello users.
            </motion.p>
          </div>
        </motion.div>
        <div className="relative z-40">
          <img
            src="/logo-text.png"
            alt="logo"
            className="h-[30%] w-[20%] absolute bottom-8 left-[30%] z-30"
          />
          <img
            src="/end_pocket.svg"
            alt="end-pocket-image"
            className="z-40 w-[80%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
