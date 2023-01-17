"use client";

import React from "react";
import Image from "next/image";
import { TCategoryProduct } from "@types";

// icons
import heart from "@icons/heart.svg";
import heartRed from "@icons/heartRed.svg";

// types
type TProductItem = (props: { product: TCategoryProduct }) => JSX.Element;

export const ProductItem: TProductItem = ({ product }) => {
  return (
    <div
      className="relative flex w-44 cursor-pointer flex-col items-start justify-center  bg-white py-2 text-sm shadow-md hover:opacity-90 sm:w-56 md:text-base"
      key={product?.uri}
    >
      <div className="relative mb-2 h-48 w-full sm:h-64">
        <Image
          src={product?.uri}
          alt="product"
          fill={true}
          style={{ objectFit: "cover" }}
          quality="50"
          sizes="(max-width: 1024px) 100vw"
        />
      </div>
      <span className="flex w-full flex-col  px-2 py-3">
        <p className="mb-2 font-semibold">{product?.name}</p>
        <p>&#8377; {product?.price}</p>
      </span>

      <Image className="absolute top-4 left-4" src={heart} alt="heart" />
      {/* <Image className="absolute top-4 left-4" src={heartRed} alt="heart" /> */}
    </div>
  );
};
