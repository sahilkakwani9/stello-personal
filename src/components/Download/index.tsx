/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { DOWNLOAD_BUTTON, DOWNLOAD_HEADLINE_FIRST } from "../../constants";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DownloadSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.section
      className="w-[90%] mt-16 md:mt-0 mx-auto"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 1, delay: 0.2 },
        },
      }}
    >
      <div className="md:flex justify-between items-center bg-gradient-to-b from-[#D2D2D214] to-[#08080800] rounded-[32px] md:max-h-[350px] border-gradient-light">
        <section className="flex flex-col items-start justify-center gap-4 md:pl-20 p-4 md:p-0">
          <div className="">
            <h1 className="font-secondary-medium text-white text-[34px] md:text-4xl leading-none md:w-[70%]">
              {DOWNLOAD_HEADLINE_FIRST}
            </h1>
          </div>
          <div className="flex gap-1 items-center">
            <p
              className="py-3 w-[70vw] md:w-full md:px-20 cursor-pointer text-sm text-center rounded-[33px] bg-white text-black leading-5 font-secondary-medium"
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/drive/u/2/folders/1ZZTj-ZkiE4RH1zJQgMONOkYpIzd4TH5q")
              }
            >
              {DOWNLOAD_BUTTON}
            </p>
            <a
              href=""
              className="p-3 rounded-full bg-white text-black leading-5 cursor-pointer"
            >
              <img src={"/arrow-right.svg"} alt="arrow-right" />
            </a>
          </div>
        </section>
        <section className="relative">
          <img
            src={"/cta-banner.webp"}
            alt="download-icon"
            className="hidden md:block md:h-[350px] md:object-cover rounded-[28px]"
          />
          <img
            src={"/cta-banner-mobile.webp"}
            alt="download-icon"
            className="md:hidden rounded-[28px] -mt-12"
          />
          <Image
            src="/stello_plain.svg"
            width={180}
            height={180}
            alt="Stello"
            className="hidden md:block absolute top-[-25px] right-12 my-14 h-16 w-16 object-contain lg:my-36 lg:w-84 lg:h-28 "
          />
        </section>
      </div>
    </motion.section>
  );
}

export default DownloadSection;
