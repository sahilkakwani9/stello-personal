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

export default function Home() {
  return (
    <div className="container min-w-[100%]">
      <Navbar />
      <Hero />
      <IntroToOrbs />
      <Txns />
      <SectionContainer />
      <GridSection />
      <FAQs />
      <DownloadSection />
      <Footer />
    </div>
  );
}
