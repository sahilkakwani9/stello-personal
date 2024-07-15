import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";
import FAQs from "@/components/FAQs";
import IntroToOrbs from "@/components/IntroOrbs";
import DownloadSection from "@/components/Download";
import GridSection from "@/components/GridView";
import SectionContainer from "@/components/Sections";
import Txns from "@/components/Txns";
import Tutorials from "@/components/Tutorials/Index";

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <Hero />
      {/* <IntroToOrbs /> */}
      <Txns />
      <SectionContainer />
      <GridSection />
      <FAQs />
      {/* <Tutorials/> */}
      <DownloadSection />
      <Footer />
    </div>
  );
}
