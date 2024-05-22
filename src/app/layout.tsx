import type { Metadata } from "next";
import "./globals.css";
import local from "next/font/local";

export const metadata: Metadata = {
  title: "Stello",
  description: "The Only Wallet That Pays Back Your Gas",
};
const fontDegularBlack = local({
  src: "./fonts/Degular-Black.otf",
  weight: "900", 
  style: "normal",
  variable: "--font-degular-black"
});

const fontDegularBold = local({
  src: "./fonts/Degular-Bold.otf",
  weight: "700", 
  style: "normal",
  variable: "--font-degular-bold"
});

const fontDegularSemibold = local({
  src: "./fonts/Degular-Semibold.otf",
  weight: "600", 
  style: "normal",
  variable: "--font-degular-semibold"
});

const fontDegularMedium = local({
  src: "./fonts/Degular-Medium.otf",
  weight: "500", 
  style: "normal",
  variable: "--font-degular-medium"
});

const fontDegularRegular = local({
  src: "./fonts/Degular-Regular.otf",
  weight: "400", 
  style: "normal",
  variable: "--font-degular-regular"
});

const fontDegularLight = local({
  src: "./fonts/Degular-Light.otf",
  weight: "300", 
  style: "normal",
  variable: "--font-degular-light"
});

const fontDegularDisplayBlack = local({
  src: "./fonts/DegularDisplay-Black.otf",
  weight: "900", 
  style: "normal",
  variable: "--font-degular-display-black"
});

const fontDegularDisplayBold = local({
  src: "./fonts/DegularDisplay-Bold.otf",
  weight: "700", 
  style: "normal",
  variable: "--font-degular-display-bold"
});

const fontDegularDisplaySemibold = local({
  src: "./fonts/DegularDisplay-Semibold.otf",
  weight: "600", 
  style: "normal",
  variable: "--font-degular-display-semibold"
});

const fontDegularDisplayMedium = local({
  src: "./fonts/DegularDisplay-Medium.otf",
  weight: "500", 
  style: "normal",
  variable: "--font-degular-display-medium"
});

const fontDegularDisplayRegular = local({
  src: "./fonts/DegularDisplay-Regular.otf",
  weight: "400", 
  style: "normal",
  variable: "--font-degular-display-regular"
});

const fontDegularDisplayLight = local({
  src: "./fonts/DegularDisplay-Light.otf",
  weight: "300", 
  style: "normal",
  variable: "--font-degular-display-light"
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${fontDegularBlack.variable} 
        ${fontDegularBold.variable} 
        ${fontDegularSemibold.variable} 
        ${fontDegularMedium.variable} 
        ${fontDegularRegular.variable} 
        ${fontDegularLight.variable} 
        ${fontDegularDisplayBlack.variable} 
        ${fontDegularDisplayBold.variable} 
        ${fontDegularDisplaySemibold.variable} 
        ${fontDegularDisplayMedium.variable} 
        ${fontDegularDisplayRegular.variable} 
        ${fontDegularDisplayLight.variable} 
        font-primary-bold
      `}>{children}</body>
    </html>
  );
}