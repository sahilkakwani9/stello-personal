"use client";
import React, { useState } from "react";
import { FAQ_HEADER, FAQ_ITEMS } from "../constatnts";
import Item from "./Item";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div className="container p-12 lg:p-[100px] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-10 ">
      <FaqHeader />
      <div className="flex flex-1 flex-col justify-around gap-3">
        {FAQ_ITEMS.map((faq, index) => (
          <Item
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

const FaqHeader = () => {
  return (
    <div className="font-secondary-light font-semibold text-2xl lg:text-5xl leading-5xl text-center flex-1 min-w-fit">
      {FAQ_HEADER}
    </div>
  );
};
export default FAQs;
