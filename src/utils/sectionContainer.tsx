/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionItem from "@/components/Sections/SectionItem";

const SectionContainer = ({ data }: any) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-[90%] md:w-[80%] mx-auto">
      {/* {data.map((section: any, index: number) => {
        return <SectionItem index={index} key={index} />;
      })} */}
      <SectionItem />
    </div>
  );
};

export default SectionContainer;
