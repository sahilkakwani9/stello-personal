import { ENCRYPTION } from "../constatnts";

function FirstGrid(){
    return (
        <section className="relative flex flex-col-reverse md:flex-row justify-between h-full w-full gap-16">
  <div className="w-full md:w-1/2 h-full bg-[#141417] flex relative">
    <img src={"/vectorLinesLeft.svg"} alt="lines-left" className="absolute top-[-75px] left-[-45px] w-[30%] md:w-[15%]" />
    <img src={"/encryption.svg"} alt="encryption" className="absolute top-[-40px] left-[15%] w-[13%] z-[15] md:w-[5%] md:left-[77px]" />
    <img src={"/vectorLinesRight.svg"} alt="lines-right" className="absolute top-[-70px] left-[100px] w-[70%] z-[10] md:w-[30%] md:left-[92px]" />
  </div>
  <div className="md:w-1/2">
    <p className="font-primary-medium text-2xl w-[80%] md:w-full">{ENCRYPTION}</p>
  </div>
</section>
    )
}

export default FirstGrid;