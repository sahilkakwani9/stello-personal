/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { INTRO_ORBS_HEADLINE } from "../constatnts";
import Wallet from "./Wallet";

function IntroToOrbs() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY, "her it is");
    const vh = window.innerHeight;
    if (window.scrollY > 0.9 * vh && window.scrollY < 6.9 * vh) {
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
    <div
      className={`w-[70%] min-h-[650vh] mx-auto self-center relative ${
        isSticky ? "sticky top-0" : ""
      }`}
    >
      <section className=" bg-introToOrbs relative w-full bg-cover">
        <div className="relative" id="dark_overlay">
          <h1 className="pt-12 pb-8 font-primary-semibold text-[40px] md:text-[52px] text-center text-transparent bg-gradient-to-r bg-clip-text from-start-gradient to-end-gradient leading-tight">
            {INTRO_ORBS_HEADLINE}
          </h1>
        </div>
        <Wallet />
        <img
          alt="middle-blend-bg"
          src="/middle-blend-blur.svg"
          className="absolute bottom-0"
        />
      </section>
    </div>
  );
}

export default IntroToOrbs;
