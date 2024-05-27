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

function Hero() {
  const { scrollY } = useScroll();

  const yBitcoin = useTransform(scrollY, [0, 1000], [0, -200]);
  const yStellar = useTransform(scrollY, [0, 1000], [0, -200]);
  const yEthereum = useTransform(scrollY, [0, 1000], [0, -200]);
  const yLitecoin = useTransform(scrollY, [0, 1000], [0, -200]);
  return (
    <>
      <div className="pt-[140px] min-h-screen">
        <div className="w-[90%] lg:w-[50%] self-center m-auto">
          <div className="overflow-hidden">
            <AnimatedText className="font-primary-semibold text-[40px] md:text-[56px] text-center text-transparent bg-gradient-radial bg-clip-text from-start-gradient-secondary to-end-gradient-secondary leading-none">
              {HERO_HEADLINE_TOP}
            </AnimatedText>
            <AnimatedText className="font-primary-semibold text-[40px] md:text-[56px] text-center text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient leading-none">
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
          <div className="w-max mt-4 mx-auto rounded-[32px] border border-[#FFFFFF1D] px-4 py-[10px] flex gap-2 justify-center items-center bg-[#141417]">
            <Image src={"/gift.svg"} height={24} width={24} alt="gift-svg" />
            <p className="text-[#FFFFFFDE] font-primary-regular text-[16px]">
              {HERO_GIFT_HEADLINE}
            </p>
          </div>
        </div>
        <div className="md:-mt-40 relative">
          <GradientLines />
          <div className="block md:hidden">
            <GradientLinesPhone />
          </div>
          <img
            alt="iphone-mockup"
            src="/mockup.webp"
            className="h-[80%] hidden md:block md:h-[70%] w-[60%] md:w-[24%] absolute top-0 md:top-52 left-[20%] md:left-[38.5%]"
          />
          <img
            alt="mockup-mobile"
            src="/mockup-mobile.webp"
            className="md:hidden top-10 left-0 absolute"
          />
          <img
            alt="secondary-mockup"
            src="/mockup_secondary.svg"
            className="h-[30%] sm:h-[30%] hidden md:block md:w-fit absolute bottom-20 md:bottom-[0px] left-0 sm:left-[26.5%] z-[10] bg-[#141417] rounded-2xl"
          />
          <img
            alt="secondary-mockup-svg"
            src="/secondary-mockup-phone.webp"
            className="md:hidden absolute left-0 bottom-20 w-[30%]"
          />

          <div className="h-[80%] md:h-[10%] w-[50%] md:w-[24%] absolute bottom-20 md:bottom-80 hidden  md:left-[15%] md:flex left-0 bg-cover bg-no-repeat">
            <img alt="gas-refund" src="/header_gas_refund.webp" className="" />
          </div>

          <div className="hidden md:block h-[10%] md:h-[10%] w-[40%] md:w-[24%] absolute top-24 right-2 md:top-[23rem] md:left-[56.75%] z-[20] bg-cover bg-no-repeat">
            <img
              alt="congrats_text"
              src="/header_congratulations.webp"
              className=""
            />
          </div>
          <img
            alt="middle-blend-bg"
            src="/middle-blend-blur.svg"
            className="absolute bottom-0 md:hidden left-0 z-10"
          />
          <motion.img
            alt="bitcoin"
            src="/coins/bitcoin.png"
            className="hidden md:block absolute top-48 h-40 w-40 left-20"
            style={{ y: yBitcoin }}
          />
          <motion.img
            alt="stellarcoin"
            src="/coins/stellarcoin.png"
            className="hidden md:block absolute bottom-10 h-40 w-40 left-44"
            style={{ y: yStellar }}
          />
          <motion.img
            alt="ethereumcoin"
            src="/coins/ethereumcoin.png"
            className="hidden md:block absolute top-36 h-40 w-40 right-16"
            style={{ y: yEthereum }}
          />
          <motion.img
            alt="litecoin"
            src="/coins/litecoin.png"
            className="hidden md:block absolute bottom-16 h-40 w-40 right-32"
            style={{ y: yLitecoin }}
          />
        </div>
       
      </div>
    </>
  );
}

export default Hero;
