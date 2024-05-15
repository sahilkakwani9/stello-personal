"use client";
import React, { useState } from "react";
import { INTRO_ORBS_HEADLINE } from "../constatnts";

function IntroToOrbs() {

    return (
        <main className="container">
        <div className="w-[70%] h-screen mx-auto">
            <section className="bg-introToOrbs relative bg-cover bg-no-repeat w-full h-full">
                <div className="relative" id="dark_overlay">
                <h1 className="pt-12 pb-8 font-primary-semibold text-[40px] md:text-6xl text-center text-transparent bg-gradient-radial bg-clip-text from-start-gradient to-end-gradient leading-tight" >{INTRO_ORBS_HEADLINE}</h1>
                </div>

                <div className="rounded relative bg-">
                    

                </div>
            </section>

        </div>
        </main>
    );
}

export default IntroToOrbs;
