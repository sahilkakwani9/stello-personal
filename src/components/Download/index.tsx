/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  DOWNLOAD_BUTTON,
  DOWNLOAD_HEADLINE_FIRST,
  DOWNLOAD_HEADLINE_SECOND,
} from "../constatnts";

function DownloadSection() {
  return (
    <section className="hidden md:block w-[90%] mx-auto">
      <div className="flex justify-between items-center bg-gradient-to-b from-[#D2D2D214] to-[#08080800] rounded-[32px] max-h-[350px] border-gradient-light">
        <section className="flex flex-col items-start justify-center gap-4 pl-20">
          <div className="">
            <h1 className="font-secondary-medium text-4xl">
              {DOWNLOAD_HEADLINE_FIRST}
            </h1>
            <h1 className="font-secondary-medium text-4xl">
              {DOWNLOAD_HEADLINE_SECOND}
            </h1>
          </div>
          <div className="flex gap-1 items-center">
            <p className="py-3 px-20 cursor-pointer text-sm rounded-[33px] bg-white text-black leading-5 font-secondary-medium">
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
            className="h-[350px] object-cover rounded-[28px]"
          />
          <Image
            src="/stello_plain.svg"
            width={180}
            height={180}
            alt="Stello"
            className="absolute top-[-25px] right-12 my-14 h-16 w-16 object-contain lg:my-36 lg:w-84 lg:h-28 "
          />
        </section>
      </div>
    </section>
  );
}

export default DownloadSection;
