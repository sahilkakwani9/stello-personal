/* eslint-disable @next/next/no-img-element */
import { SECOND_GRID_HEADLINE } from "../constatnts";

function SecondGrid() {
  return (
    <div className="flex flex-col justify-between gap-4 h-full w-full z-20">
      <section className="p-4 pb-2">
        <h1 className="font-secondary-regular text-center md:text-start w-[80%] text-[20px]">
          {SECOND_GRID_HEADLINE}
        </h1>
      </section>
      <section className="relative flex h-[20vh] mr-4 md:mr-0">
        <img
          src={"/gradient-ellipse.webp"}
          alt="grid-ellipse"
          className="pl-5 md:pl-0 object-cover object-center absolute z-10"
        />
        <img
          src={"/second_grid_card.svg"}
          alt="grid-card"
          className="absolute z-20 right-0 bottom-0"
        />
        <img
          src={"/second_grid_card_2.svg"}
          alt="grid-card"
          className="absolute z-20 right-0 bottom-0"
        />
        <img
          src={"/second_grid_card_3.svg"}
          alt="grid-card"
          className="absolute z-20 right-0 bottom-0"
        />
      </section>
    </div>
  );
}

export default SecondGrid;
