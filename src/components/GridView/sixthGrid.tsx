/* eslint-disable @next/next/no-img-element */
import { SIXTH_GRID_HEADLINE } from "../constatnts";

function SixthGrid() {
  return (
    <div className="pt-4 flex flex-col justify-between bg-gradient-to-t from-[#5110107A] gap-4 h-full w-full text-2xl items-center">
      <h1 className="font-primary-medium text-center px-4">
        {SIXTH_GRID_HEADLINE}
      </h1>
      <section className="w-full h-full relative overflow-hidden py-4">
        <div className="overflow-hidden h-full w-full ">
          <img
            src={"/sixth_grid_coin.png"}
            className="absolute top-[10px] left-[30px] h-[6vh] object-cover w-full"
          />
          <img
            src={"/sixth_grid_moonpay.png"}
            className="absolute top-[53px] left-[40px] h-[6vh] object-cover w-full"
          />
          <img
            src={"/sixth_grid_pancake.png"}
            className="absolute top-[95px] left-[50px] h-[6vh] object-cover w-full z-[20]"
          />
        </div>

        <img
          src={"/sixth_grid_dollar_sign.png"}
          className="absolute top-[-30px] left-[54px] bottom-0 h-[30vh] w-full object-center object-scale-down -scale-75 z-[10]"
        />
      </section>
    </div>
  );
}

export default SixthGrid;
