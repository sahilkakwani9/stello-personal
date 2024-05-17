import { ENCRYPTION } from "../constatnts";

function FirstGrid(){
    return (
        <section className="relative flex justify-between items-center h-full w-full">
        <div className="w-full h-full bg-[#141417] flex">
            <img src={"/vectorLinesLeft.svg"} alt="lines-left" className="absolute top-[-75px] left-[-60px] w-[30%]" />
            <img src={"/encryption.svg"} alt="encryption" className="absolute top-[-3px] left-[154px] w-[9%] z-[15] " />
            <img src={"/vectorLinesRight.svg"} alt="lines-right" className="absolute top-[-55px] left-[185px] w-[60%] z-[10]" />
        </div>
        <div>
            <p className="font-primary-medium text-2xl w-[80%]">{ENCRYPTION}</p>
        </div>
        </section>
    )
}

export default FirstGrid;