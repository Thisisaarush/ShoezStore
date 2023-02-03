"use client";

import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@apollo/client";
import Link from "next/link";

//queries
import Image from "next/image";
import { GET_HERO_SLIDES } from "@utils/graphql";
import { motion, AnimatePresence } from "framer-motion";

// icons
import leftArrow from "@icons/leftArrow.svg";
import rightArrow from "@icons/rightArrow.svg";
import { CarouselAnimation } from "@utils/animations";

// components
import { Loading, Error } from "@components";

// types
import { TProduct } from "@types";

//utils
import { getImageAvgColor } from "@utils/getImageAvgColor";

export const Carousel = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  let [[heroImageNumber, direction], setHeroImage] = useState([0, 0]);
  const { loading, error, data } = useQuery(GET_HERO_SLIDES);
  let prevIdx = heroImageNumber;

  // changing hero slides based on time
  useEffect(() => {
    const timeOut = setTimeout(() => {
      paginate(1);
    }, 6000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [heroImageNumber]);

  // changing hero slides based on direction
  const paginate = (direction: 1 | -1) => {
    if (heroImageNumber >= 3 && direction > 0) {
      setHeroImage([0, direction]);
    } else if (heroImageNumber <= 0 && direction < 0) {
      setHeroImage([3, direction]);
    } else {
      setHeroImage([heroImageNumber + direction, direction]);
    }
  };

  // handling active dots
  const isActive = (index: number): boolean => {
    if (index === heroImageNumber) return true;
    return false;
  };

  // loading & error states from graphql
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  // ? disabling gradient for now - average color of hero slides for gradient
  // getImageAvgColor(data?.heroSlider[heroImageNumber].uri)
  //   .then((res) => {
  //     if (gradientRef.current) {
  //       gradientRef.current.style.background = `linear-gradient(to bottom, ${res.hex}, transparent)`;
  //     }
  //   })
  //   .catch((e) => console.log(e));

  return (
    <div className="relative mx-auto my-0 h-max max-w-5xl">
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={heroImageNumber}
            custom={direction}
            variants={CarouselAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset }) => {
              if (offset.x < 0) paginate(1);
              else paginate(-1);
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="relative flex h-[300px] cursor-pointer select-none overflow-hidden sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <Link href={`/product/${data?.heroSlider[heroImageNumber]?.id}`}>
              <Image
                src={data?.heroSlider[heroImageNumber]?.uri}
                alt="Carousel"
                fill={true}
                style={{ objectFit: "cover" }}
                className="hover:opacity-90"
                sizes="(max-width: 1024px) 100vw"
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        <Image
          src={leftArrow}
          alt="left arrow"
          width={55}
          height={55}
          className="opacity-1 absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer rounded-full p-4 opacity-20 transition-opacity hover:opacity-50 sm:left-8 sm:bg-gray-600"
          onClick={() => paginate(-1)}
        />
        <Image
          src={rightArrow}
          alt="right arrow"
          width={55}
          height={55}
          className="opacity-1 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full p-4 opacity-20 transition-opacity hover:opacity-50 sm:right-8 sm:bg-gray-600"
          onClick={() => paginate(1)}
        />

        <ul className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 p-1 sm:bottom-6">
          {data?.heroSlider.map((slide: TProduct, idx: number) => (
            <li
              key={slide?.uri}
              onClick={() => {
                const dir = idx > prevIdx ? 1 : -1;
                setHeroImage([idx, dir]);
              }}
              className={`h-[10px] w-[10px] cursor-pointer rounded-full bg-gray-300 hover:opacity-100 sm:h-[16px] sm:w-[16px] ${
                isActive(idx) ? "opacity-100" : "opacity-30"
              }`}
            />
          ))}
        </ul>
      </div>
      {/* <div
        className="max-w-5x absolute -z-50 h-screen w-full"
        ref={gradientRef}
      ></div> */}
    </div>
  );
};
