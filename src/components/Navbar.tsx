"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Heading from "./Heading";
import PrimaryCTA from "./PrimaryCTA";
export const Navbar = (props: {}) => {
  return (
    <div className="py-[24px] px-[24px] md:px-[140px] flex flex-row items-center justify-between w-[100%]">
      <Image src="/logo-text.webp" width={84} height={32} alt="Picture of the author" />
      <div className="md:flex flex-row items-center justify-center gap-[48px] hidden">
        <p className="font-primary-semibold text-[16px] text-white">Features</p>
        <p className="font-primary-semibold text-[16px] text-white">FAQs</p>
      </div>
      <PrimaryCTA>Download App</PrimaryCTA>
    </div>
  );
};
