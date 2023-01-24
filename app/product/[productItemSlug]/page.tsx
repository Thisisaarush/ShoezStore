"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Error, Loading } from "@components";
import { TProduct } from "@types";
import { useQuery } from "@apollo/client";
import {
  GET_CATEGORIES,
  GET_HERO_SLIDES,
  GET_RECOMMENDED,
  GET_TRENDING,
} from "@utils/graphql";

const Product = () => {
  const pathName = usePathname();
  const productId = pathName?.split(/\//g)[2];

  const {
    data: CategoriesData,
    loading: l1,
    error: e1,
  } = useQuery(GET_CATEGORIES);
  const {
    data: HeroSlidesData,
    loading: l2,
    error: e2,
  } = useQuery(GET_HERO_SLIDES);
  const {
    data: RecommendedData,
    loading: l3,
    error: e3,
  } = useQuery(GET_RECOMMENDED);
  const { data: TrendingData, loading: l4, error: e4 } = useQuery(GET_TRENDING);

  // filtering productId
  const product: TProduct[] =
    CategoriesData?.category.filter(
      (product: TProduct) => product?.id === productId
    ) ||
    HeroSlidesData?.heroSlider.filter(
      (product: TProduct) => product?.id === productId
    ) ||
    RecommendedData?.recommended.filter(
      (product: TProduct) => product?.id === productId
    ) ||
    TrendingData?.trending.filter(
      (product: TProduct) => product?.id === productId
    ) ||
    [];

  // loading and error states
  if (l1 || l2 || l3 || l4) <Loading />;
  if (e1 || e2 || e3 || e4) <Error error={e1 || e2 || e3 || e4} />;

  return (
    <div className="m-auto flex max-w-5xl flex-col p-2 sm:flex-row">
      <div className="relative h-80 cursor-pointer hover:opacity-90 sm:h-[416px] sm:w-[300px] md:h-[550px] md:w-[480px] lg:w-[480px]">
        <Image
          src={product[0]?.uri}
          alt="product"
          fill={true}
          style={{ objectFit: "cover" }}
          quality={50}
          sizes="(max-width: 1024px) 100vw"
        />
      </div>

      <div className="mt-10 flex flex-col gap-8 sm:mt-0 sm:ml-8">
        <div className="flex flex-col">
          <span className="mb-3 text-xl font-semibold capitalize md:text-2xl">
            {product[0]?.name}
          </span>
          <span className="text-green-600">&#8377; {product[0]?.price}</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="capitalize text-gray-500">select size</span>
          <div className="flex flex-wrap gap-2">
            {product[0]?.sizes.map((size: number) => (
              <span className="relative flex h-10 w-16 items-center hover:bg-gray-100">
                <input
                  type="radio"
                  id={product[0]?.uri}
                  name="size"
                  className="peer absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0"
                  checked
                />
                <label
                  htmlFor={product[0]?.uri}
                  className="h-full w-full cursor-pointer border p-2 text-center text-sm uppercase peer-checked:bg-black peer-checked:text-white"
                >
                  us {size}
                </label>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex h-fit w-fit items-center gap-4 capitalize">
          <span className="w-fit cursor-pointer bg-black px-6 py-3 text-white transition-all duration-300 ease-in-out hover:opacity-80 active:scale-95">
            add to cart
          </span>
          <Link href="/" className="h-fit w-fit text-gray-500">
            explore more &#8690;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
