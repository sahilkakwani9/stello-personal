import React from "react";

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="px-[16px] py-[8px] rounded-[33px] bg-gradient-to-r from-start-gradient to-end-gradient"
      onClick={() =>
        (window.location.href =
          "https://drive.google.com/drive/u/2/folders/1ZZTj-ZkiE4RH1zJQgMONOkYpIzd4TH5q")
      }
    >
      <p className="text-[16px] font-secondary-semibold text-white">
        {children}
      </p>
    </div>
  );
}

export default PrimaryCTA;
