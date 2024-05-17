import Image from "next/image";
import { DOWNLOAD_BUTTON, DOWNLOAD_HEADLINE_FIRST, DOWNLOAD_HEADLINE_SECOND } from "../constatnts";
import FirstGrid from "./firstGrid";
import SecondGrid from "./secondGrid";

function GridSection() {
    return (
        <section className="w-[90%] mx-auto min-h-screen">
            <div className="grid grid-cols-4 gap-4">
                <div className="flex rounded col-span-3 row-span-1 justify-center items-center text-white text-xl p-4 relative bg-[#141417] overflow-hidden">
                    <FirstGrid />
                </div>
                <div className="flex rounded col-span-1 row-span-4 justify-center items-center bg-[#141417] text-white text-xl">
                    <SecondGrid />
                </div>
                <div className="flex rounded col-span-1 row-span-5 justify-center items-center bg-white text-black text-xl p-4">
                    
                </div>
                <div className="flex rounded col-span-2 row-span-6 justify-center items-center bg-white text-black text-xl p-4">Fourth</div>
                <div className="flex rounded col-span-1 row-span-5 justify-center items-center bg-white text-black text-xl p-4">Five</div>
                <div className="flex rounded col-span-1 row-span-3 justify-center items-center bg-white text-black text-xl p-4">Six</div>
                <div className="flex rounded col-span-2 row-span-2 justify-center items-center bg-white text-black text-xl p-4">Seven</div>
            </div>
        </section>
    )
}

export default GridSection;