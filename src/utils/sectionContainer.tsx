import React from "react";

const SectionContainer = ({ data }: any) => {
  return (
    <section
      className="flex flex-col justify-center items-center w-[80%] gap-12 mt-[100px]"
      style={{ marginTop: "300px" }}
    >
      {data.map((section: any, index: number) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <main className="bg-[#141417] md:w-[50%] w-[90%] h-full rounded-xl md:pt-8 md:px-8 flex justify-center relative">
            <img
              src={section.backgroundImageSrc1}
              className="absolute md:w-[10%] w-[3vw] top-0 md:right-40 right-0"
            />
            <img
              src={section.backgroundImageSrc2}
              className="absolute md:w-[10%] w-[3vw] -rotate-90 bottom-28 md:-left-3 left-0"
            />
            <img src={section.mainImageSrc} alt="phone-1" className="w-[50%]" />
          </main>
          <div className="w-[50%] flex flex-col justify-center gap-3">
            <h1 className="font-primary-bold text-2xl">{section.title}</h1>
            <p className="font-secondary-regular leading-5">
              {section.description}
            </p>
            <div className="flex items-center gap-2">
              <img
                src={section.pointsOneImageSrc}
                alt=""
                style={{ width: "10%" }}
              />
              <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
                {section.universalCashbackText}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={section.pointsTwoImageSrc}
                alt=""
                style={{ width: "10%" }}
              />
              <span className="text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient font-secondary-light">
                {section.crossChainBenefitsText}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SectionContainer;
