/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionItem from "@/components/Sections/SectionItem";

const SectionContainer = ({ data }: any) => {
  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center w-[80%] gap-12 mx-auto"
      style={{ marginBlock: "100px" }}
    >
      {data.map((section: any, index: number) => {
        return <SectionItem index={index} section={section} key={index} />;
      })}
    </div>
  );
};

export default SectionContainer;
