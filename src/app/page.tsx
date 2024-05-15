import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";
import FAQs from "@/components/FAQs";

export default function Home() {
  return (
    <div className="container min-w-[100%]">
      <Navbar />
      <Hero />
      <FAQs />
      <Footer />
    </div>
  );
}
