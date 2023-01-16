import React from "react";

// images
import giftingsImage from "@images/gifting.png";
import Image from "next/image";

export const Giftings = () => {
  return (
    <div className="m-auto my-10 flex max-w-5xl flex-col gap-10 capitalize mb-20">
      <span className="ml-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:ml-0">
        holiday giftings
      </span>
      <Image
        src={giftingsImage}
        alt="giftings"
        className="cursor-pointer hover:opacity-90"
        quality={50}
      />
    </div>
  );
};
