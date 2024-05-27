import { Metadata } from "next";

const MetaData: Metadata = {
  title: "Stello",
  description: "The Only Wallet That Pays Back Your Gas",
  category: "Wallet, Web3, Self Custodial Wallet",
  keywords: [
    "self custodial wallet",
    "wallet",
    "web3 wallet",
    "eth wallet",
    "solana wallet",
    "tron wallet",
  ],
  openGraph: {
    type: "website",
    description: "The Only Wallet That Pays Back Your Gas",
    title: "Stello",
    images:new URL("https://stello-web-private.vercel.app/og.webp")
  },
};

export const SiteMetadata = {
  ...MetaData,
};
