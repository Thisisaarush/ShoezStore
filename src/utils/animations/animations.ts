//animation
export const SlideDownAnimation = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: { ease: "easeOut", duration: 0.3 },
};

export const CarouselAnimation = {
  initial: (direction: number) => {
    return { x: direction > 0 ? "100%" : "-100%" };
  },
  animate: { x: 0 },
  exit: (direction: number) => {
    return { x: direction < 0 ? "100%" : "-100%" };
  },
};
