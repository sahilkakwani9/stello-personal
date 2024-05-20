"use client";
import React, { useEffect, useState } from "react";
import { INTRO_ORBS_HEADLINE } from "../constatnts";
import Wallet from "./Wallet";

function IntroToOrbs() {
  const [isSticky, setIsSticky] = useState(false);
  const vh = window.innerHeight;

  const handleScroll = () => {
    console.log(window.scrollY, "her it is");
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
      className={`w-[70%] min-h-[650vh] mx-auto self-center ${
        isSticky ? "sticky top-0" : ""
      }`}
    >
      <section className="bg-introToOrbs relative bg-cover bg-no-repeat w-full ">
        <div className="relative" id="dark_overlay">
          <h1 className="pt-12 pb-8 font-primary-semibold text-[40px] md:text-[52px] text-center text-transparent bg-gradient-to-r bg-clip-text from-start-gradient to-end-gradient leading-tight">
            {INTRO_ORBS_HEADLINE}
          </h1>
        </div>
        <Wallet />
      </section>
    </div>
  );
}

export default IntroToOrbs;
