import React from "react";
import { motion } from "framer-motion";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
};

const Item = ({ question, answer, isOpen }: Props) => {
  return (
    <div
      className={`w-full lg:w-[100%] transition-all ease-in-out overflow-hidden border-gradient p-[1px] rounded-[14px] bg-gradient-to-b from-[#a9a9a9] to-black`}
    >
      <div className="flex flex-col gap-y-2  bg-black px-5 pt-[24px] pb-[16px] rounded-[14px]  ">
        <div className="flex flex-row justify-between">
          <FaqCardTitle title={question} />
          <ToggleExpand isOpen={isOpen} />
        </div>
        <FaqCardAnswer content={answer} isOpen={isOpen} />
      </div>
    </div>
  );
};
export default Item;

const ToggleExpand = ({ isOpen }: { isOpen: boolean }) => {
  return <div>{<PlusToCrossIcon isCross={isOpen} />}</div>;
};

const FaqCardTitle = ({ title }: { title: string }) => {
  return (
    <div className="font-secondary-regular font-semibold text-sm md:text-[18px] leading-6 text-left text-white">
      {title}
    </div>
  );
};

const FaqCardAnswer = ({
  content,
  isOpen,
}: {
  content: string;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`font-secondary-regular font-light text-sm lg:text-base leading-5 text-left text-[#C3C3C3]`}
      style={{
        maxHeight: isOpen ? "108px" : "0",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 0.3s ease-in-out, opacity 0.1s ease-out",
      }}
    >
      {content}
    </div>
  );
};

const PlusToCrossIcon = ({ isCross }: { isCross: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <motion.path
        d="M6 12H18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={{
          rotate: isCross ? 45 : 0,
          x: 5,
          y: 5,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.path
        d="M12 18V6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={{
          rotate: isCross ? 45 : 0,
          x: 5,
          y: 5,
        }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
};
