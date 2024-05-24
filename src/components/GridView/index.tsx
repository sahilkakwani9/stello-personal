import Image from "next/image";
import {
  DOWNLOAD_BUTTON,
  DOWNLOAD_HEADLINE_FIRST,
  DOWNLOAD_HEADLINE_SECOND,
} from "../constatnts";
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        <FirstGrid />

        <SecondGrid />

        <ThirdGrid />

        <FourthGrid />

        <FiveGrid />

        <SixthGrid />

        <SeventhGrid />
      </div>
    </section>
  );
}

export default GridSection;
