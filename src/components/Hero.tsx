"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  HERO_GIFT_HEADLINE,
  HERO_HEADLINE_BOTTOM,
  HERO_HEADLINE_TOP,
  HERO_SECONDARY_HEADLINE,
} from "./constatnts";
import Image from "next/image";
import { motion } from "framer-motion";
import GradientLines from "../../public/gradient-lines";
import GradientLinesPhone from "../../public/gradient-lines-phone";

function Hero() {
  return (
    <>
      <div className="mt-[60px]">
        <div className="w-[90%] lg:w-[50%] self-center m-auto  ">
          <div>
            <p className="font-primary-semibold text-[40px] md:text-[56px] text-center text-transparent bg-gradient-radial bg-clip-text from-start-gradient-secondary to-end-gradient-secondary leading-tight">
              {HERO_HEADLINE_TOP}
            </p>
            <p className="font-primary-semibold text-[40px] md:text-[56px] text-center text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient leading-tight mt-[-16px]">
              {HERO_HEADLINE_BOTTOM}
            </p>
          </div>
          <div className="flex flex-col gap-[24px] mt-4">
            <p className="font-secondary-medium text-[16px] text-center text-secondary-text">
              {HERO_SECONDARY_HEADLINE}
            </p>
            <div className="flex flex-row justify-center items-center gap-[15px]">
              <img
                src={"/googleplay-cta.webp"}
                alt="playstore-cta"
                className="sm:h-[32px] w-[102px] md:h-[48px] md:w-[160px]"
              />
              <img
                src={"/appstore-cta.webp"}
                alt="appstore-cta"
                className="sm:h-[32px] w-[102px] md:h-[48px] md:w-[160px]"
              />
            </div>
          </div>
          <div className="w-max mt-4 mx-auto rounded-[32px] border border-[#FFFFFF1D] px-4 py-[10px] flex gap-2 justify-center items-center bg-[#141417]">
            <Image src={"/gift.svg"} height={24} width={24} alt="gift-svg" />
            <p className="text-[#FFFFFFDE] font-primary-regular">
              {HERO_GIFT_HEADLINE}
            </p>
          </div>
        </div>
        <div className="md:-mt-40 relative">
          <GradientLines />
          <GradientLinesPhone />
          <img
            alt="iphone-mockup"
            src="/mockup.png"
            className="h-[80%] md:h-[70%] w-[50%] md:w-[24%] absolute top-20 md:top-52 left-[24%] md:left-[38.5%]"
          />
          <img
            alt="secondary-mockup"
            src="/mockup_secondary.svg"
            className="h-[50%] md:h-[30%] md:w-fit absolute bottom-0 md:bottom-[0px] left-[24%] md:left-[28%] z-[10] bg-[#141417] rounded-2xl"
          />
          <div className="h-[80%] md:h-[10%] w-[50%] md:w-[20%] absolute bottom-20 md:bottom-80 md:left-[20%] -z-10">
            <img alt="gas-refund" src="/header_gas_refund.png" />
          </div>

          <div className="h-[80%] md:h-[10%] w-[50%] md:w-[18%] absolute bottom-20 md:bottom-72 left-[24%] md:left-[56.75%] z-[20] bg-cover bg-no-repeat">
            <img
              alt="congrats_text"
              src="/header_congratulations.png"
              className=""
            />
          </div>
          <motion.img
            alt="bitcoin"
            src="/bitcoin.svg"
            className="hidden md:block absolute top-48 left-20"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            alt="stellarcoin"
            src="/stellarcoin.svg"
            className="hidden md:block absolute bottom-10 left-44"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            alt="ethereumcoin"
            src="/ethereumcoin.svg"
            className="hidden md:block absolute top-36 right-16"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.img
            alt="litecoin"
            src="/litecoin.svg"
            className="hidden md:block absolute bottom-16 right-32"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
