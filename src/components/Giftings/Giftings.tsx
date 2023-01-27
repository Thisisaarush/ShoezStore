import React from "react";

// images
import giftingsImage from "@images/gifting.png";
import Image from "next/image";
import Link from "next/link";

export const Giftings = () => {
  return (
    <div className="m-auto my-10 mb-20 flex max-w-5xl flex-col gap-10 capitalize">
      <span className="ml-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:ml-0">
        holiday giftings
      </span>
      <Link href="/sale">
        <Image
          src={giftingsImage}
          alt="giftings"
          className="cursor-pointer hover:opacity-90"
          quality={50}
        />
      </Link>
    </div>
  );
};
