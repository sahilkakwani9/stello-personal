import React from "react";

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[16px] py-[8px] rounded-[33px] bg-gradient-to-r from-start-gradient to-end-gradient">
      <p className="text-[16px] font-secondary-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export default PrimaryCTA;
