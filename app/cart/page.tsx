"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { useCartStore } from "@zustand";
import {
  GET_CATEGORIES,
  GET_HERO_SLIDES,
  GET_RECOMMENDED,
  GET_TRENDING,
} from "@utils/graphql";
import { CartItem, Error, Loading } from "@components";
import { TProduct } from "@types";

const Cart = () => {
  let totalPrice: number = 0;
  const cartItems = useCartStore((state) => state.cartItems);

  // queries
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

  // filtering cart items
  const cartItemsFilteredData: TProduct[] =
    cartItems?.map(
      ({ itemId }) =>
        CategoriesData?.category.find(
          (product: TProduct) => product?.id === itemId
        ) ||
        HeroSlidesData?.heroSlider.find(
          (product: TProduct) => product?.id === itemId
        ) ||
        RecommendedData?.recommended.find(
          (product: TProduct) => product?.id === itemId
        ) ||
        TrendingData?.trending.find(
          (product: TProduct) => product?.id === itemId
        )
    ) || [];

  // total price
  cartItemsFilteredData.map((item, idx) => {
    totalPrice += item?.price * cartItems[idx]?.numberOfItems;
  });

  // loading and error states
  if (l1 || l2 || l3 || l4) <Loading />;
  if (e1 || e2 || e3 || e4) <Error error={e1 || e2 || e3 || e4} />;

  return (
    <div className="m-auto mt-10 max-w-5xl px-2 sm:px-4">
      <div className="flex flex-col gap-8">
        <span className="mb-4 text-xl font-semibold capitalize sm:text-2xl">
          cart
        </span>
        {cartItems.length ? (
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-8 md:w-3/5">
              {cartItemsFilteredData?.map((item, idx) => (
                <CartItem item={item} cartItem={cartItems[idx]} />
              ))}
            </div>

            <div className="mt-10 flex h-fit flex-col gap-4 capitalize md:mt-0 md:w-1/3">
              <div className="flex flex-col gap-3">
                <span className="font-semibold">cart summary</span>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">subtotal</span>
                  <span className="font-medium">&#8377; {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">delivery charges</span>
                  <span>&#8377; 0.00</span>
                </div>
              </div>

              <div className="flex justify-between border-y py-4">
                <span className="font-medium">total</span>
                <span className="font-medium">&#8377; {totalPrice}</span>
              </div>

              <span className="mt-8 w-fit cursor-pointer select-none rounded-md bg-black px-6 py-2 text-sm text-white hover:bg-gray-800 active:scale-95">
                checkout
              </span>
            </div>
          </div>
        ) : (
          <div className="flex min-h-screen flex-col items-center gap-4 capitalize">
            <span className="text-gray-500">
              There are no products in the cart
            </span>
            <Link
              href="/"
              className="h-fit w-fit rounded-md border bg-black py-2 px-4 text-sm text-white hover:bg-gray-800 active:scale-90"
            >
              explore more &#8690;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
