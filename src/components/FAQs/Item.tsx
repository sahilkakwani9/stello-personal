import React from "react";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
};

const Item = ({ question, answer, isOpen }: Props) => {
  const itemHeight = isOpen ? "auto" : "70px";

  return (
    <div
      className={`w-full lg:w-[100%] transition-all ease-in-out overflow-hidden border-gradient p-[1px] rounded-[14px] bg-gradient-to-b from-[#a9a9a9] to-black`}
      style={{ height: itemHeight }}
    >
      <div className="flex flex-col gap-y-2  bg-black px-5 pt-[24px] pb-[32px] rounded-[14px]  ">
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
  return <div>{isOpen ? <MinusIcon /> : <PlusIcon />}</div>;
};

const FaqCardTitle = React.memo(({ title }: { title: string }) => {
  return (
    <div className="font-primary-regular font-semibold text-sm lg:text-[18px] leading-6 text-left text-white">
      {title}
    </div>
  );
});

const FaqCardAnswer = ({ content, isOpen }: { content: string; isOpen: boolean }) => {
  return (
    <div
      className={`font-secondary-regular font-light text-sm lg:text-base leading-5 text-left text-[#C3C3C3]`}
      style={{
        maxHeight: isOpen ? "108px" : "0",
        opacity: isOpen ? 1 : 0,
        transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-out",
      }}
    >
      {content}
    </div>
  );
};
const MinusIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12H18"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 12H18"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 18V6"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
