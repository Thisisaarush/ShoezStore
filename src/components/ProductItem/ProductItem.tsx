import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TProduct } from "@types";
import { Favorite } from "@components";

// types
type TProductItem = (props: { product: TProduct }) => JSX.Element;

export const ProductItem: TProductItem = ({ product }) => {
  return (
    <div className="relative w-44 text-sm sm:w-56 md:text-base">
      <Link
        href={`/product/${product?.id}`}
        className="flex cursor-pointer flex-col items-start justify-center bg-white hover:opacity-90 "
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
        <span className="flex w-full flex-col px-2 py-3">
          <span className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {product?.name}
          </span>
          <p className="font-medium">&#8377; {product?.price}</p>
        </span>
      </Link>
      <Favorite productId={product.id} />
    </div>
  );
};
