import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <div className="container min-w-[100%]">
      <Navbar />
      <Hero />
    </div>
  );
}
