import SectionContainer from "@/utils/sectionContainer";

const sectionData = [
  {
    title: "Seamless Cashback Across Multiple Chains!",
    description:
      "Earn orbs effortlessly and watch your cashback soar! The more orbs you hold, the higher your cashback percentage. It's that simple, that exciting!",
    universalCashbackText: "Universal Cashback",
    crossChainBenefitsText: "Cross-Chain Benefits",
    mainImageSrc: "/sections_img_1.png",

    pointsOneImageSrc: "/sections_universal.png",
    pointsTwoImageSrc: "/sections_universal_link.png",
  },
  {
    title: "Empowers Privacy, Ensures Authority",
    description:
      "Discover the power of privacy and authority with our platform. Take control of your data and decisions, navigating the digital world with confidence. With us, your privacy is protected, your authority respected. Embrace empowerment in the digital age.",
    universalCashbackText: "Privacy Empowerment",
    crossChainBenefitsText: "Authority Assurance",
    mainImageSrc: "/sections_img_2.png",

    pointsOneImageSrc: "/sections_empowers_lock.png",
    pointsTwoImageSrc: "/sections_empowers_privacy.png",
  },
  {
    title: "Swap Crypto With Zero Fees",
    description:
      "Swap cryptocurrencies effortlessly, without any fees. Enjoy seamless transactions and maximize your assets without worrying about extra charges. Experience the freedom of fee-free crypto swapping today!",
    universalCashbackText: "Fee-Free Swapping",
    crossChainBenefitsText: "Authority Assurance",
    mainImageSrc: "/sections_img_3.png",

    pointsOneImageSrc: "/sections_crypto_swap.png",
    pointsTwoImageSrc: "/sections_crypto_wallet.png",
  },
];

function Sections() {
  return <SectionContainer data={sectionData} />;
}

export default Sections;
