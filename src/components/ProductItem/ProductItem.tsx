import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TProduct } from "@types";

// types
type TProductItem = (props: { product: TProduct }) => JSX.Element;

export const ProductItem: TProductItem = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="relative flex w-44 cursor-pointer flex-col items-start justify-center  bg-white py-2 text-sm hover:opacity-90 sm:w-56 md:text-base"
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
        <p className="mb-2 text-slate-700">{product?.name}</p>
        <p className="">&#8377; {product?.price}</p>
      </span>
    </Link>
  );
};
