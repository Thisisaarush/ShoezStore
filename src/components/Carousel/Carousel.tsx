"use client";

import React, { useState } from "react";
import { useQuery } from "@apollo/client";

//queries
import Image from "next/image";
import { GET_HERO_SLIDES } from "@utils/graphql";
import { motion, AnimatePresence } from "framer-motion";

// icons
import leftArrow from "@icons/leftArrow.svg";
import rightArrow from "@icons/rightArrow.svg";
import { SlideRightAnimation } from "@utils/animations";

export const Carousel = () => {
  let [heroImageNumber, setHeroImageNumber] = useState(0);
  const { loading, error, data } = useQuery(GET_HERO_SLIDES);

  if (loading)
    return (
      <div className="mt-10 flex items-center justify-center">...Loading</div>
    );
  if (error) return <div>Error! {error.message}</div>;

  // changing hero slides based on time
  setTimeout(() => {
    if (heroImageNumber >= 3) {
      setHeroImageNumber((heroImageNumber = 0));
    } else {
      setHeroImageNumber((heroImageNumber += 1));
    }
  }, 6000);

  return (
    <div className="relative mx-auto my-0 max-w-5xl flex-row-reverse overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={heroImageNumber}
          {...SlideRightAnimation}
          className="flex select-none"
        >
          <Image
            src={data?.heroSlider[heroImageNumber]?.uri}
            alt="Carousel"
            width={1200}
            height={400}
          />
        </motion.div>
      </AnimatePresence>

      <Image
        src={leftArrow}
        alt="left arrow"
        width={55}
        height={55}
        className="opacity-1 absolute top-1/2 left-8 -translate-y-1/2 cursor-pointer rounded-full bg-gray-500 p-4 opacity-50 transition-opacity hover:opacity-70"
      />
      <Image
        src={rightArrow}
        alt="right arrow"
        width={55}
        height={55}
        className="opacity-1 absolute top-1/2 right-8 -translate-y-1/2 cursor-pointer rounded-full bg-gray-500 p-4 opacity-50 transition-opacity hover:opacity-70"
      />

      <ul className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 p-1">
        <li className="h-[16px] w-[16px] cursor-pointer rounded-full bg-gray-300 opacity-100"></li>
        <li className="h-[16px] w-[16px] cursor-pointer rounded-full bg-gray-300 opacity-60"></li>
        <li className="h-[16px] w-[16px] cursor-pointer rounded-full bg-gray-300 opacity-60"></li>
        <li className="h-[16px] w-[16px] cursor-pointer rounded-full bg-gray-300 opacity-60"></li>
      </ul>
    </div>
  );
};
