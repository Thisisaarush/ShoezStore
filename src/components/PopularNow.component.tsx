import Image from "next/image";
import { useAppSelector } from "../utils/customHooks/useAppSelector";
import { useAppDispatch } from "../utils/customHooks/useAppDispatch";

import {
  carouselSlideLeft,
  carouselSlideRight,
} from "../actions/carouselSlide";

import banner1 from "../../public/images/banner/banner1.jpg";
import banner2 from "../../public/images/banner/banner2.webp";
import banner3 from "../../public/images/banner/banner3.jpg";
import banner4 from "../../public/images/banner/banner4.webp";
import arrowLeft from "../../public/icons/arrowLeft.svg";
import arrowRight from "../../public/icons/arrowRight.svg";

const Banners = [banner1, banner2, banner3, banner4];

export const PopularNow = () => {
  const dispatch = useAppDispatch();
  const imageNumber = useAppSelector((state) => state.carousel.image);

  return (
    <div className="flex flex-col justify-center mb-40">
      <h1 className="w-4/5 mx-auto text-4xl font-medium mb-20">
        Popular Right Now
      </h1>
      <div className="w-4/5 h-132 relative mx-auto">
        <Image
          src={Banners[imageNumber]}
          alt="banner"
          layout="fill"
          className="object-cover"
        />
        <span
          className="flex justify-center items-center bg-black w-fit p-2 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
          onClick={() => dispatch(carouselSlideLeft())}
        >
          <span className="w-14 h-14 border-black border absolute top-1 -left-1"></span>
          <Image src={arrowLeft} alt="arrow left" width={40} height={40} />
        </span>
        <span
          className="flex justify-center items-center bg-black w-fit p-2 absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
          onClick={() => dispatch(carouselSlideRight())}
        >
          <span className="w-14 h-14 border-black border absolute top-1 left-1"></span>
          <Image src={arrowRight} alt="arrow right" width={40} height={40} />
        </span>
      </div>
    </div>
  );
};
