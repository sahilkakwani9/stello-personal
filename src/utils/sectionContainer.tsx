/* eslint-disable @next/next/no-img-element */
import React from "react";

const SectionContainer = ({ data }: any) => {
  return (
    <section
      className="flex flex-col min-h-screen justify-center items-center w-[80%] gap-12 my-[300px] mx-auto"
      style={{ marginTop: "300px", marginBottom: "300px" }}
    >
      {data.map((section: any, index: number) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: index % 2 === 1 ? "row-reverse" : "row",
          }}
        >
          <main
            className="bg-[#141417] md:w-[50%] w-[50%] h-full rounded-xl flex justify-center relative"
            style={{ paddingTop: "60px" }}
          >
            <img
              src={"/gradient-ellipse.svg"}
              alt="gradient-ellipse"
              className="absolute bottom-20 left-0"
            />
            <img
              src={"/gradient-ellipse-vertical.svg"}
              alt="gradient-ellipse-vertical"
              className="absolute top-0 right-16 "
            />

            <img src={section.mainImageSrc} alt="phone-1" className="w-[50%]" />
          </main>
          <div className="w-[50%] flex flex-col justify-center gap-3">
            <h1 className="font-primary-bold text-2xl">{section.title}</h1>
            <p className="font-secondary-regular leading-5">
              {section.description}
              {index}
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
