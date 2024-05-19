import Image from "next/image";
import { DOWNLOAD_BUTTON, DOWNLOAD_HEADLINE_FIRST, DOWNLOAD_HEADLINE_SECOND } from "../constatnts";
import FirstGrid from "./firstGrid";
import SecondGrid from "./secondGrid";
import ThirdGrid from "./thirdGrid";
import FourthGrid from "./fourthGrid";
import FiveGrid from "./fiveGrid";
import SixthGrid from "./sixthGrid";
import SeventhGrid from "./seventhGrid";

function GridSection() {
    return (
        <section className="w-[90%] mx-auto min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div className="flex rounded col-span-1 md:col-span-3 row-span-1 justify-center items-center text-white text-xl p-4 relative bg-[#141417] overflow-hidden">
      <FirstGrid />
    </div>
    <div className="flex rounded col-span-1 row-span-4 justify-center items-center bg-[#141417] text-white text-xl">
      <SecondGrid />
    </div>
    <div className="flex rounded col-span-1 row-span-5 justify-center bg-gradient-to-b from-[#141417] from-80% to-[#5110107A] text-white text-xl">
      <ThirdGrid />
    </div>
    <div className="rounded col-span-1 md:col-span-2 row-span-6 bg-[#141417] text-white text-xl">
      <FourthGrid />
    </div>
    <div className="flex rounded col-span-1 row-span-5 justify-center bg-[#141417] text-white text-xl">
      <FiveGrid />
    </div>
    <div className="flex rounded col-span-1 row-span-3 justify-center bg-[#141417] text-white text-xl relative h-[40vh]">
      <SixthGrid />
    </div>
    <div className="flex rounded col-span-1 md:col-span-2 row-span-2 justify-center bg-[#141417] text-white text-xl pt-2 pb-12 bg-gradient-to-t from-[#5110107A]">
      <SeventhGrid />
    </div>
  </div>
</section>
    )
}

export default GridSection;