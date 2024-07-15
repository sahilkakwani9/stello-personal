/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import SectionItem from "@/components/Sections/SectionItem";
import { ISectionData } from "@/constants/sections";

const SectionContainer = ({ data }: { data: ISectionData[] }) => {
  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center w-[90%] md:w-[80%] mx-auto z-10 bg-black"
      id="features"
    >
      {data.map((section: ISectionData, index: number) => {
        return <SectionItem sectionData={section} index={index} key={index} />;
      })}
    </div>
  );
};

export default SectionContainer;
