/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { INTRO_ORBS_HEADLINE } from "../../constants";
import Wallet from "./Wallet";
import AnimatedText from "../Text/Animated";

function IntroToOrbs() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const vh = window.innerHeight;
    if (window.scrollY < 4.2 * vh) {
      console.log("making postion fixed");
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    const handleScrollY = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);
  return (
    <div className={`md:w-[70%] mx-auto min-h-[400vh] self-center relative`}>
      <div
        className={`${
          isSticky
            ? "sticky top-20 overflow-hidden md:overflow-visible"
            : "absolute bottom-0 left-0 w-full overflow-hidden md:overflow-visible"
        }`}
      >
        <img
          alt="middle-blend-bg"
          src="/middle-blend-blur.svg"
          className="md:hidden absolute -top-40 opacity-30 z-10 left-0"
        />
        <section className="bg-introToOrbsMobile md:bg-introToOrbs relative w-full bg-contain md:bg-cover  bg-opacity-20 h-[100vh] md:min-h-screen">
          <div className="relative" id="dark_overlay">
            <AnimatedText className="pt-12 pb-8 font-primary-semibold text-[50px] w-[70%] mx-auto md:w-full md:px-0 md:text-[52px] text-center text-transparent bg-gradient-to-r bg-clip-text from-start-gradient to-end-gradient leading-tight">
              {INTRO_ORBS_HEADLINE}
            </AnimatedText>
          </div>

          <Wallet />

          <img
            alt="middle-blend-bg"
            src="/middle-blend-blur.svg"
            className="hidden md:block absolute bottom-0"
          />
        </section>
      </div>
      <img
        alt="middle-blend-bg"
        src="/middle-blend-blur.svg"
        className="hidden md:block absolute -top-[6%] -z-10"
      />
    </div>
  );
}

export default IntroToOrbs;
