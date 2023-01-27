"use client";

import React from "react";
import { TProduct, TCartItem } from "@types";
import Image from "next/image";
import { useCartStore } from "@zustand";

// types
type TCartItemComp = (props: {
  item: TProduct;
  cartItem: TCartItem;
}) => JSX.Element;

export const CartItem: TCartItemComp = ({ item, cartItem }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const setNumberOfProducts = useCartStore(
    (state) => state.setNumberOfProducts
  );
  const deleteNumberOfProducts = useCartStore(
    (state) => state.deleteNumberOfProducts
  );
  const removeProduct = useCartStore((state) => state.removeProduct);

  // subtract items from cart
  const handleSubtractItem = () => {
    if (cartItem?.numberOfItems > 1) {
      deleteNumberOfProducts(cartItem);
    }
    if (cartItem?.numberOfItems === 1) {
      removeProduct(cartItem, cartItems);
    }
  };

  // add items in cart
  const handleAddItem = () => {
    setNumberOfProducts(cartItem);
  };

  return (
    <div className="h-40 border-b md:h-44">
      <div className="flex h-32 items-start justify-start gap-2 sm:gap-6 md:h-36 ">
        <div className="relative mb-2 h-full w-[150px] md:w-[200px]">
          <Image
            src={item?.uri}
            alt="product"
            fill={true}
            style={{ objectFit: "cover" }}
            quality="50"
            sizes="(max-width: 1024px) 100vw"
          />
        </div>

        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-col gap-2 capitalize">
            <span className="font-semibold">{item?.name}</span>
            <div className="text-sm">
              <span className="text-gray-400">size: </span>
              <span className="font-medium uppercase">
                us {cartItem?.itemSize}
              </span>
            </div>
            <span className="text-sm capitalize text-gray-400">
              free delivery
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              &#8377; {item?.price * cartItem?.numberOfItems}
            </span>
            <div className="mr-4 flex items-center justify-center gap-6">
              <span
                onClick={handleSubtractItem}
                className="flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full border bg-gray-50 p-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                -
              </span>
              <span>{cartItem?.numberOfItems}</span>
              <span
                onClick={handleAddItem}
                className="flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full border bg-gray-50 p-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
