/* eslint-disable @next/next/no-img-element */
import { ENCRYPTION } from "../constatnts";

function FirstGrid() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row justify-between h-full w-full gap-16">
      <div className="w-full md:w-1/2 h-full flex relative">
        <img
          src={"/vectorLinesLeft.svg"}
          alt="lines-left"
          className="absolute -top-14 -left-8 w-[50%]"
        />
        <img
          src={"/encryption.webp"}
          alt="encryption"
          className="absolute -top-2 left-[15%] w-[20%] z-[15] md:left-28"
        />
        <img
          src={"/vectorLinesRight.svg"}
          alt="lines-right"
          className="absolute -top-10  w-full scale-110 z-[10] -right-40"
        />
      </div>
      <div className="md:w-1/2 z-10">
        <p className="font-primary-regular text-[28px] w-[80%] md:w-full">
          {ENCRYPTION}
        </p>
      </div>
    </section>
  );
}

export default FirstGrid;
