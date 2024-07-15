export type ISectionData = {
  title: string;
  description: string;
  pointsOneText: string;
  pointsTwoText: string;
  mainImageSrc: string;
  pointsOneImageSrc: string;
  pointsTwoImageSrc: string;
};
export const sectionData: ISectionData[] = [
  {
    title: "Seamless Cashback Across Multiple Chains!",
    description:
      "Earn orbs effortlessly and watch your cashback soar! The more orbs you hold, the higher your cashback percentage. It's that simple, that exciting!",
    pointsOneText: "Universal Cashback",
    pointsTwoText: "Cross-Chain Benefits",
    mainImageSrc: "/sections_img_1.webp",

    pointsOneImageSrc: "/sections_universal.webp",
    pointsTwoImageSrc: "/sections_universal_link.webp",
  },
  {
    title: "Empowers Privacy, Ensures Authority",
    description:
      "Discover the power of privacy and authority with our platform. Take control of your data and decisions, navigating the digital world with confidence. With us, your privacy is protected, your authority respected. Embrace empowerment in the digital age.",
    pointsOneText: "Privacy Empowerment",
    pointsTwoText: "Authority Assurance",
    mainImageSrc: "/sections_img_2.webp",

    pointsOneImageSrc: "/sections_empowers_lock.webp",
    pointsTwoImageSrc: "/sections_empowers_privacy.webp",
  },
  {
    title: "Swap Crypto With Zero Fees",
    description:
      "Swap cryptocurrencies effortlessly, without any fees. Enjoy seamless transactions and maximize your assets without worrying about extra charges. Experience the freedom of fee-free crypto swapping today!",
    pointsOneText: "Fee-Free Swapping",
    pointsTwoText: "Maximize Your Assets",
    mainImageSrc: "/sections_img_3.webp",

    pointsOneImageSrc: "/sections_crypto_swap.webp",
    pointsTwoImageSrc: "/sections_crypto_wallet.webp",
  },
];
