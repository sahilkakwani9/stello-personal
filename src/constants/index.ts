export class fontFamily {
  static primaryRegular = "primary-regular";
  static primaryMedium = "primary-medium";
  static primarySemiBold = "primary-semibold";
  static primaryBold = "primary-bold";
  static primaryLight = "primary-light";
  static primaryBlack = "primary-black";
  static secondaryRegular = "secondary-regular";
  static secondaryMedium = "secondary-medium";
  static secondarySemiBold = "secondary-semibold";
  static secondaryBold = "secondary-bold";
  static secondaryLight = "secondary-light";
  static secondaryBlack = "secondary-black";
}

export const HERO_HEADLINE_TOP = "The Only Wallet That ";
export const HERO_HEADLINE_BOTTOM = "Pays Back Your Gas";
export const HERO_SECONDARY_HEADLINE =
  "With Stello, when you transact → we refund your gas. We’re cool like that.";

export const HERO_GIFT_HEADLINE =
  "20  free  orb  awaits  you  when  you  sign  up!";

export const WalletText = {
  topCard: {
    heading: "Interact And Refuel Orbs",
    subHeading:
      "Running low on Orbs? Buy more, or complete tasks, play our daily spin, and win more Orbs!",
  },
  middleCard: {
    heading: "Claim refund via Orbs",
    subHeading:
      "Oops, spent a lot on gas fees? No worries! Receive fee rebates via Orbs.",
  },
  bottomCard: {
    heading: `Orbs are exclusive \nrewards created for \nStello users.`,
    subHeading: "",
  },
};

export const TxnText = {
  heading: "Settle Transactions",
  subHeading:
    "Interact with your favourite dApps, or send and receive crypto across 100+ networks.",
};

//Faqs

export const FAQ_HEADER = "Frequently Asked Questions";

export const FAQ_ITEMS: Array<{ question: string; answer: string }> = [
  {
    question: "What is Stello?",
    answer:
      "Stello is the first on-chain non-custodial wallet that refunds your gas fees. We support all major EVM networks, cryptocurrencies, and collectibles.",
  },
  {
    question: "Is Stello safe to use?",
    answer:
      "Yes, Stello is completely safe. We never store your private keys or track your activity.",
  },
  {
    question: "Will it cost me to use Stello?",
    answer:
      "Nope, Stello is 100% free to use. In fact, we reward you with Orbs for gas refunds.",
  },
  {
    question: "What are Orbs?",
    answer:
      " Orbs are rewards exclusive to the Stello ecosystem. You can earn Orbs by completing quests and playing games on the Stello Wallet App. Today, you can use Orbs to claim refunds on the gas you spend on transactions. Tomorrow — who knows? 👀",
  },
  {
    question: "Can I use Stello for interacting with dApps?",
    answer:
      "Yes, Stello can be used to interact with any EVM/SOLANA dApp or website.",
  },
  {
    question: "Do you have access to my private keys?",
    answer:
      "Never. We take security very seriously and never store your private keys or track your activity.",
  },
  {
    question: "I need help. How can I reach out to your team?",
    answer:
      "Feel free to hop on our Discord here or shoot us an email at help@stello.com",
  },
];

export const INTRO_ORBS_HEADLINE = "Introducing \nOrbs";

export const DOWNLOAD_HEADLINE_FIRST =
  "Hold Orbs, Get your Gas refunded – Your Loyalty Rewarded!";
export const DOWNLOAD_BUTTON = "Download App";
export const ENCRYPTION = "Zero personal tracking with added encryption.";
export const SECOND_GRID_HEADLINE =
  "One wallet for assets across 100+ blockchains";
export const THIRD_GRID_HEADLINE = "Access to multiple chains";
export const FOURTH_GRID_HEADLINE = "Get 100% of your gas fee refunded";
export const FIFTH_GRID_HEADLINE = "Spin and win rewards, every day";
export const SIXTH_GRID_HEADLINE = "Deposit assets directly from exchanges";
export const SEVENTH_GRID_HEADLINE = "Daily Bonus!";

export const TUTORIALS_DATA = [
  {
    image: "/tutorials/t1.webp",
    title: "How to import your wallet into Stello",
    description:
      "Seamless wallet integration! Learn to import your wallet into Stello for easy access to your crypto assets.",
  },
  {
    image: "/tutorials/t2.webp",
    title: "How to connect to a dApp or website",
    description:
      "Unlock decentralized apps! Connect effortlessly to dApps and websites for endless possibilities.",
  },
];

export const textVariant = {
  hidden: {
    opacity: 0,
    transform: "translate3d(0px, 50%, 0px)",
  },
  visible: {
    opacity: 1,
    transform: "translate3d(0px, 0%, 0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
