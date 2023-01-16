import React from "react";
import Image from "next/image";

// images
import men from "@images/men.png";
import women from "@images/women.png";
import kids from "@images/kids.png";

export const ShoppingFor = () => {
  return (
    <div className="m-auto my-10 mb-20 flex max-w-5xl flex-col gap-10 capitalize">
      <span className="ml-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:ml-0">
        who are you shopping for
      </span>

      <div className="flex flex-col items-center gap-4 px-2 sm:flex-row lg:px-0">
        <div className="cursor-pointer hover:opacity-90">
          <Image quality={50} src={men} alt="men" />
          <span className="text-sm sm:text-base">Men's</span>
        </div>
        <div className="cursor-pointer hover:opacity-90">
          <Image quality={50} src={women} alt="women" />
          <span className="text-sm sm:text-base">women's</span>
        </div>
        <div className="cursor-pointer hover:opacity-90">
          <Image quality={50} src={kids} alt="kids" />
          <span className="text-sm sm:text-base">kids'</span>
        </div>
      </div>
    </div>
  );
};
