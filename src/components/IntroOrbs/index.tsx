/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { INTRO_ORBS_HEADLINE } from "../constatnts";
import Wallet from "./Wallet";

function IntroToOrbs() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const vh = window.innerHeight;
    if (window.scrollY < 3.2 * vh) {
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
    <div className={`md:w-[70%] mx-auto min-h-[300vh] self-center relative`}>
      <div
        className={`${
          isSticky ? "sticky top-0" : "absolute bottom-0 left-0 w-full"
        }`}
      >
        <img
          alt="middle-blend-bg"
          src="/middle-blend-blur.svg"
          className="md:hidden absolute -top-36 z-10 left-0"
        />
        <section className="bg-introToOrbs relative w-full md:bg-cover bg-opacity-20 h-[100vh] md:min-h-screen">
          <div className="relative" id="dark_overlay">
            <h1 className="pt-12 pb-8 font-primary-semibold text-[48px] px-24 md:px-0 md:text-[52px] text-center text-transparent bg-gradient-to-r bg-clip-text from-start-gradient to-end-gradient leading-tight">
              {INTRO_ORBS_HEADLINE}
            </h1>
          </div>
          <Wallet />
          <img
            alt="middle-blend-bg"
            src="/middle-blend-blur.svg"
            className="hidden md:block absolute bottom-0"
          />
        </section>
      </div>
    </div>
  );
}

export default IntroToOrbs;
