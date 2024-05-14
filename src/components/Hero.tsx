import React from "react";
import {
  HERO_GIFT_HEADLINE,
  HERO_HEADLINE_BOTTOM,
  HERO_HEADLINE_TOP,
  HERO_SECONDARY_HEADLINE,
} from "./constatnts";
import Image from "next/image";

function Hero() {
  return (
    <>
      <div className="min-h-[90vh] mt-[60px]">
        <div className="w-[40%] self-center m-auto">
          <div>
            <p className="font-primary-semibold text-[56px] text-center text-transparent bg-gradient-radial bg-clip-text from-start-gradient-secondary to-end-gradient-secondary leading-tight">
              {HERO_HEADLINE_TOP}
            </p>
            <p className="font-primary-semibold text-[56px] text-center text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient leading-tight mt-[-16px]">
              {HERO_HEADLINE_BOTTOM}
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <p className="font-secondary-medium text-[16px] text-center text-secondary-text">
              {HERO_SECONDARY_HEADLINE}
            </p>
            <div className="flex flex-row justify-center items-center gap-[15px]">
              <Image
                src={"/googleplay-cta.webp"}
                alt="playstore-cta"
                height={48}
                width={160}
              />
              <Image
                src={"/appstore-cta.webp"}
                alt="appstore-cta"
                height={48}
                width={160}
              />
            </div>
          </div>
          <div className="w-max mt-4 mx-auto rounded-[32px] border border-[#FFFFFF1D] px-4 py-[10px] flex gap-2 justify-center items-center bg-[#141417]">
            <Image src={"/gift.png"} height={19} width={22} alt="gift-png" />
            <p className="text-[#FFFFFFDE] font-primary-regular">{HERO_GIFT_HEADLINE}</p>
          </div>
          
        </div>
        <div className="my-8">
            <section className="flex justify-center items-center gap-3 relative">
              <Image src={"/VectorL.svg"} width={600} height={599} alt="left-vector" />
              <Image src={"/VectorR.svg"} width={600} height={599} alt="left-vector" />
            </section>
            <section>

            </section>
          </div>
      </div>


    </>
  );
}

export default Hero;
