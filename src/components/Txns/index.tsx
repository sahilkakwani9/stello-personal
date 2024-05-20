/* eslint-disable @next/next/no-img-element */
import { INTRO_ORBS_HEADLINE, TxnText } from "../constatnts";

function Txns() {
  return (
    <main className="relative w-[70%] bg-introToOrbs mx-auto self-center bg-cover -mt-4">
      <img
        alt="mockup-with-chains"
        src="/mockup-with-chains.webp"
        className="h-[30%] w-[45%] mx-auto pt-20"
      />
      <img
        alt="middle-blend-bg"
        src="/middle-blend-blur.svg"
        className="absolute -bottom-10 left-0 z-1"
      />
      <div className="absolute bottom-16 z-20 left-[27.5%] w-[45%]">
        <p className="font-primary-bold text-[36px] text-white relative text-center ml-8">
          {TxnText.heading}
        </p>
        <p className="font-primary-regular text-[18px] text-white text-center ml-8 mx-auto">
          {TxnText.subHeading}
        </p>
      </div>
    </main>
  );
}

export default Txns;
