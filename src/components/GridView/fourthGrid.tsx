/* eslint-disable @next/next/no-img-element */
import { FOURTH_GRID_HEADLINE } from "../constatnts";

function FourthGrid() {
  return (
    <div className="flex flex-col justify-between gap-12 md:gap-0 h-full w-full items-center">
      <h1 className="font-primary-medium md:self-start self-center text-center text-[32px]  md:text-2xl leading-snug md:text-start md:w-[55%] px-6 pt-6">
        {FOURTH_GRID_HEADLINE}
      </h1>
      <section className="md:w-[75%] w-[90%] h-[65%]">
        <img src={"/fourth_grid_card.png"} className="h-full object-fill object-center" alt="grid-card" />
      </section>
    </div>
  );
}

export default FourthGrid;
