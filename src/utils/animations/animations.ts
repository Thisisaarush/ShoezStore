//animation
export const BounceAnimation = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: { type: "spring", stiffness: 80, bounce: 0.2 },
};
