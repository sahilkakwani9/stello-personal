import React from "react";

const SectionContainer = ({ data }: any) => {
  return (
    <section
      className="flex flex-col min-h-screen justify-center items-center w-[80%] gap-12 my-[300px] mx-auto"
      style={{ marginTop: "300px", marginBottom: "300px" }}
    >
      {/* {data.map((section: any, index: number) => (
        <div
          key={index}
          className={`flex flex-row-reverse justify-center items-center border border-green-900 gap-4 md:gap-12 ${
            index % 2 === 1 ? "border-3 border-pink-100" : ""
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
      ))} */}

{data.map((section: any, index: number) => (
  <div
    key={index}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
      // border: '1px solid #4d4d4d',
      // borderWidth: index % 2 === 1 ? '3px' : '1px',
      // borderColor: index % 2 === 1 ? '#f3c5c5' : '#4d4d4d',
    }}
  >
    <main className="bg-[#141417] md:w-[50%] w-[50%] h-full rounded-xl md:pt-8 md:px-8 flex justify-center relative">
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
