/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { DOWNLOAD_BUTTON, DOWNLOAD_HEADLINE_FIRST, DOWNLOAD_HEADLINE_SECOND } from "../constatnts";

function DownloadSection() {
    return (
        <section className="hidden md:block w-[90%] mx-auto min-h-screen">
            <div className="flex justify-between items-center bg-gradient-to-b from-[#D2D2D214] to-[#08080800] rounded-[32px] h-[350px] border border-solid border-image-source[linear-gradient(170.69deg,rgba(255,255,255,0.2)4.53%,rgba(181,181,181,0.141667)7.62%,rgba(152,144,144,0.152)15.14%,rgba(255,255,255,0.2)20%,rgba(155,155,155,0.2)30.62%,rgba(0,0,0,0)61.57%,rgba(82,82,82,0)92.96%),linear-gradient(320.86deg,rgba(239,239,239,0.35)7.05%,rgba(217,216,216,0.042)52.95%)]">
                <section className="flex flex-col items-start justify-center gap-4 pl-20">
                    <div className="">
                        <h1 className="font-secondary-bold text-3xl">{DOWNLOAD_HEADLINE_FIRST}</h1>
                        <h1 className="font-secondary-bold text-3xl">{DOWNLOAD_HEADLINE_SECOND}</h1>
                    </div>
                    <div className="flex gap-1 items-center">
                        <p className="py-3 px-16 cursor-pointer text-sm rounded-[33px] bg-white text-black leading-5">{DOWNLOAD_BUTTON}</p>
                        <a href="" className="p-3 rounded-full bg-white text-black leading-5 cursor-pointer">
                            <img src={"/arrow-right.svg"} alt="arrow-right" />
                        </a>
                    </div>
                </section>
                <section className="relative">
                    <img src={"/download_stello.svg"} alt="download-icon" className="" />
                    <Image
                        src="/stello_plain.svg"
                        width={180}
                        height={180}
                        alt="Stello"
                        className="absolute top-[-25px] right-[-124px] my-14 h-16 w-16 object-contain lg:my-36 lg:w-96 lg:h-28 "
                    />
                </section>
            </div>
        </section>
    )
}

export default DownloadSection;