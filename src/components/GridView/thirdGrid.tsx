/* eslint-disable @next/next/no-img-element */
import { THIRD_GRID_HEADLINE } from "../constatnts";

function ThirdGrid() {
  return (
    <div className="pt-8 flex flex-col justify-between gap-8 md:gap-4 text-2xl ">
      <h1 className="font-primary-regular text-[34px] w-[70%] mx-auto md:w-full md:text-2xl px-3 text-center leading-snug">
        {THIRD_GRID_HEADLINE}
      </h1>
      <section className="h-full px-12">
        <img
          src={"/third_grid_card.png"}
          className="md:w-full mx-auto my-0 w-[70%] md:h-full"
          alt="muliti-chain-asset"
        />
        <img
          src={"/grid/orange-grid-blend.svg"}
          className="w-full absolute left-0 bottom-0 rounded-xl"
          alt="muliti-chain-asset"
        />
      </section>
    </div>
  );
}

export default ThirdGrid;
