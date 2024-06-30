"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  HERO_GIFT_HEADLINE,
  HERO_HEADLINE_BOTTOM,
  HERO_HEADLINE_TOP,
  HERO_SECONDARY_HEADLINE,
} from "../constants";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import GradientLines from "../../public/gradient-lines";
import GradientLinesPhone from "../../public/gradient-lines-phone";
import AnimatedText from "./Text/Animated";
import { HoverBorderGradient } from "./HoverBorderGradient";

function Hero() {
  const { scrollY } = useScroll();

  const yBitcoin = useTransform(scrollY, [0, 1000], [0, -200]);
  const yStellar = useTransform(scrollY, [0, 1000], [0, -200]);
  const yEthereum = useTransform(scrollY, [0, 1000], [0, -200]);
  const yLitecoin = useTransform(scrollY, [0, 1000], [0, -200]);
  return (
    <>
      <div className="pt-[140px] md:pt-[210px] xl:pt-[140px] min-h-screen md:min-h-full xl:min-h-screen min-w-screen">
        <div className="w-[90%] lg:w-[50%] self-center m-auto">
          <div className="overflow-hidden">
            <AnimatedText className="font-primary-semibold text-[40px] md:text-[56px] text-center text-transparent bg-gradient-radial bg-clip-text from-15% to-90%  from-start-gradient-secondary to-end-gradient-secondary leading-none">
              {HERO_HEADLINE_TOP}
            </AnimatedText>
            <AnimatedText className="font-primary-semibold text-[40px] md:text-[56px] text-center text-transparent bg-gradient-to-r bg-clip-text from-start-gradient to-end-gradient leading-none">
              {HERO_HEADLINE_BOTTOM}
            </AnimatedText>
          </div>
          <div className="flex flex-col gap-[24px] mt-4">
            <AnimatedText className="font-secondary-medium text-[16px] text-center text-secondary-text">
              {HERO_SECONDARY_HEADLINE}
            </AnimatedText>

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

          {/* <div className="card-wrapper h-[48px] w-[320px] md:w-[360px] my-4 m-auto">
            <div className="mx-auto rounded-[32px] card-content px-4 py-[10px] flex gap-2 justify-center items-center bg-black">
              <Image src={"/gift.svg"} height={24} width={24} alt="gift-svg" />
              <span className="text-[#FFFFFFDE] font-secondary-semibold text-[14px] md:text-[16px] tracking-wide">
                {HERO_GIFT_HEADLINE}
              </span>
            </div>
          </div> */}
          <HoverBorderGradient
            containerClassName="rounded-full mt-4"
            as="button"
            className="flex gap-2 items-center bg-black mx-auto px-4 py-[10px]"
          >
            <Image src={"/gift.svg"} height={24} width={24} alt="gift-svg" />
            <span className="text-[#FFFFFFDE] font-secondary-semibold text-[14px] md:text-[16px] tracking-wide">
              {HERO_GIFT_HEADLINE}
            </span>
          </HoverBorderGradient>
        </div>
        <div className="relative z-30 mt-8 min-w-screen">
          <GradientLines />
          <div className="block md:hidden">
            <GradientLinesPhone />
          </div>
          <div className="relative overflow-hidden">
            <div className="relative w-fit mx-auto">
              <motion.img
                alt="iphone-mockup"
                src="/mockup.webp"
                className="h-[80%] hidden md:block md:h-[70%] md:w-[330px] w-[60%] mx-auto z-40"
                initial={{ opacity: 0.3, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.img
                alt="secondary-mockup"
                src="/mockup_secondary.svg"
                className="h-[230px] hidden md:block md:w-[192px] absolute bottom-20 md:bottom-[0px] -left-44 z-[10] bg-[#141417] rounded-2xl"
                initial={{ opacity: 0, y: 200, left: 0 }}
                animate={{ opacity: 1, y: 0, left: "-11rem" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              />
              <motion.div
                className="h-[80%] md:h-[58px] w-[50%] md:w-[292px] absolute bottom-20 md:bottom-80 hidden  -left-[17rem] md:flex bg-cover bg-no-repeat"
                initial={{ opacity: 0, y: 200, left: 0 }}
                animate={{ opacity: 1, y: 0, left: "-17rem" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >
                <img
                  alt="gas-refund"
                  src="/header_gas_refund.webp"
                  className=""
                />
              </motion.div>

              <motion.div
                className="hidden md:block h-[10%] md:h-[73px] w-[40%] md:w-[328px] absolute top-24 -right-60 md:top-40 z-[20] bg-cover bg-no-repeat"
                initial={{ opacity: 0, y: 200, right: 0 }}
                animate={{ opacity: 1, y: 0, right: "-15rem" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >
                <img
                  alt="congrats_text"
                  src="/header_congratulations.webp"
                  className=""
                />
              </motion.div>
            </div>
            <img
              alt="mockup-mobile"
              src="/mockup-mobile.webp"
              className="md:hidden mt-12"
            />

            {/* <img
              alt="secondary-mockup-svg"
              src="/secondary-mockup-phone.webp"
              className="md:hidden absolute left-0 bottom-10 w-[30%]"
            /> */}

            <img
              alt="middle-blend-bg"
              src="/hero-bg-blend.webp"
              className="hidden md:block absolute md:-bottom-80 2xl:-bottom-[26rem] bottom-0 left-0 z-10"
            />
            <img
              alt="middle-blend-bg"
              src="/middle-blend-blur.svg"
              className="absolute md:hidden -bottom-16 left-0 z-10"
            />
          </div>

          <motion.img
            alt="bitcoin"
            src="/coins/bitcoin.webp"
            className="hidden md:block absolute top-0 h-40 w-40 left-20"
            style={{ y: yBitcoin }}
          />
          <motion.img
            alt="stellarcoin"
            src="/coins/stellarcoin.webp"
            className="hidden md:block absolute bottom-10 h-40 w-40 left-44"
            style={{ y: yStellar }}
          />
          <motion.img
            alt="ethereumcoin"
            src="/coins/ethereumcoin.webp"
            className="hidden md:block absolute -top-20 h-40 w-40 right-16"
            style={{ y: yEthereum }}
          />
          <motion.img
            alt="litecoin"
            src="/coins/litecoin.webp"
            className="hidden md:block absolute bottom-16 h-40 w-40 right-32"
            style={{ y: yLitecoin }}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
