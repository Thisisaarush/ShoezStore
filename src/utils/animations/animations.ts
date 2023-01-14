//animation
export const SlideDownAnimation = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: { ease: "easeOut", duration: 0.3 },
};

export const SlideRightAnimation = {
  initial: { x: "0%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: {
    ease: "easeInOut",
    duration: 1,
  },
};
