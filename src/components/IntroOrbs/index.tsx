/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { INTRO_ORBS_HEADLINE } from "../../constants";
import Wallet, { debounce } from "./Wallet";
import AnimatedText from "../Text/Animated";

function IntroToOrbs() {

  useEffect(() => {
    const element = document.getElementById('orbs');

    const handleScroll = () => {
      if (!element) return
      const vh = window.innerHeight;
      if (window.innerWidth < 768) {
        if (window.scrollY < 4.2 * vh) {
          console.log("making position fixed");
          element.classList.add('sticky', 'top-20', 'overflow-hidden', 'bg-none');
          element.classList.remove('absolute', 'bottom-0', 'left-0', 'w-full');
        } else {
          element.classList.remove('sticky', 'top-20');
          element.classList.add('absolute', 'bottom-0', 'left-0', 'w-full', 'overflow-hidden', 'bg-none');
        }
      } else {
        if (window.scrollY < 6 * vh) {
          console.log("making position fixed");
          element.classList.add('sticky', 'top-20', 'overflow-hidden', 'md:overflow-visible', 'md:bg-introToOrbs', 'bg-none');
          element.classList.remove('absolute', 'bottom-0', 'left-0', 'w-full');
        } else {
          element.classList.remove('sticky', 'top-20');
          element.classList.add('absolute', 'bottom-0', 'left-0', 'w-full', 'overflow-hidden', 'md:overflow-visible', 'md:bg-introToOrbs', 'bg-none');
        }
      }
    };

    const debounced=debounce(handleScroll,100);

    window.addEventListener('scroll', debounced);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', debounced);
    };
  }, []);
  return (
    <div className={`min-h-[400vh] md:min-h-[500vh] self-center relative`}>
      <div id="orbs"
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
              src="/bg-blur-middle.webp"
              className="absolute -top-28 md:top-40 md:-z-10 w-screen md:w-full md:hidden"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default IntroToOrbs;
