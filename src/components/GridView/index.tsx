import FirstGrid from "./firstGrid";
import SecondGrid from "./secondGrid";
import ThirdGrid from "./thirdGrid";
import FourthGrid from "./fourthGrid";
import FiveGrid from "./fiveGrid";
import SixthGrid from "./sixthGrid";
import SeventhGrid from "./seventhGrid";

function GridSection() {
  return (
    <section className="w-[90%] mx-auto xl:min-h-screen mt-20 md:mt-32 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-hidden">
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
