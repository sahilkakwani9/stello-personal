export const slideInWithAngleLeft = {
  hidden: { opacity: 0, x: "-50%", rotate: -15 },
  desktop: { opacity: 1, x: 0, rotate: 0 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const slideInWithAngleRight = {
  hidden: { opacity: 0, x: "50%", rotate: 15 },
  desktop: { opacity: 1, x: 0, rotate: 0 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};
