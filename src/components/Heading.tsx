import React from "react";
import { fontFamily } from "./constatnts";

const fontWeightMap: { [key: number]: string } = {
  300: fontFamily.primaryLight,
  400: fontFamily.primaryRegular,
  500: fontFamily.primaryMedium,
  600: fontFamily.primarySemiBold,
  700: fontFamily.primaryBold,
  800: fontFamily.primaryBlack,
};

function Heading({
  children,
  className="",
  fontSize,
  fontWeight,
}: {
  children: React.ReactNode;
  fontSize: number;
  fontWeight: number;
  className?: string;
}) {
  return (
    <p
      className={`font-${fontWeightMap[fontWeight]} text-[${fontSize}px] ${className}`}
    >
      {children}
    </p>
  );
}

export default Heading;
