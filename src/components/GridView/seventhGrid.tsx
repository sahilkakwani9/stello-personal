/* eslint-disable @next/next/no-img-element */
import { FIFTH_GRID_HEADLINE, SEVENTH_GRID_HEADLINE } from "../constatnts";

function SeventhGrid() {
  return (
    <div className="pt-2 flex flex-col justify-between h-full w-full text-2xl items-center gap-12">
      <h1 className="font-primary-medium text-2xl text-start flex w-full self-start px-8">
        {SEVENTH_GRID_HEADLINE}
      </h1>
      <section className="w-full h-[80%] relative">
        <img src={"/seventh_grid.png"} className="w-[95%]" alt="timeline" />
        <img
          src={"/seventh_grid_button.png"}
          className="absolute md:top-[-25px] top-[-35px] md:w-[30%] w-[48%] md:right-10 right-10"
          alt="timeline-btn"
        />
      </section>
    </div>
  );
}

export default SeventhGrid;
