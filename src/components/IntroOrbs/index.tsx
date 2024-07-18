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
    if (window.innerWidth < 768) {
      if (window.scrollY < 4.2 * vh) {
        console.log("making postion fixed");
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    } else {
      if (window.scrollY < 6 * vh) {
        console.log("making postion fixed");
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
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
    <div className={`min-h-[400vh] md:min-h-[500vh] self-center relative`}>
      <div
        className={`${
          isSticky
            ? "sticky top-20 overflow-hidden md:overflow-visible md:bg-introToOrbs bg-none"
            : "absolute bottom-0 left-0 w-full overflow-hidden md:overflow-visible md:bg-introToOrbs bg-none"
        }`}
      >
        <div className="md:w-[70%] mx-auto z-10 ">
          <img
            alt="middle-blend-bg"
            src="/hero-bg-blend.webp"
            className="absolute -top-20 md:-top-[30%] opacity-100 md:opacity-100 -z-10 left-0"
          />
          <section className="relative w-full bg-introToOrbsMobile md:bg-none bg-cover  bg-opacity-20 h-[100vh] md:min-h-screen bg-transparent z-10">
            <div className="relative z-10" id="dark_overlay">
              <AnimatedText className="pt-4 md:pt-8 xl:pt-0 pb-8 font-primary-semibold text-[50px] w-[70%] mx-auto md:w-full md:px-0 md:text-[52px] 2xl:text-[80px] text-center text-transparent bg-gradient-to-r bg-clip-text from-start-gradient to-end-gradient leading-tight z-1">
                {INTRO_ORBS_HEADLINE}
              </AnimatedText>
            </div>

            <Wallet />

            <img
              alt="middle-blend-bg"
              src="/bg-blur-middle.svg"
              className="absolute -top-4 md:top-40 md:-z-10 w-screen md:w-full md:hidden"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default IntroToOrbs;
