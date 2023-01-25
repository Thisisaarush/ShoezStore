"use client";

import React, { useEffect } from "react";

//components
import {
  Carousel,
  Recommended,
  Giftings,
  Trending,
  ShoppingFor,
} from "@components";
import { useLoginStore, useCartStore } from "@zustand";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_CART_ITEMS } from "@utils/graphql";

export default function Home() {
  const [updateUserCartItems] = useMutation(UPDATE_USER_CART_ITEMS);
  const isUserLoggedIn = useLoginStore((state) => state.isUserLoggedIn);
  const userDetails = useLoginStore((state) => state.userDetails);
  const cartItems = useCartStore((state) => state.cartItems);
  // updating user cart on login
  useEffect(() => {
    const updateCart = async () => {
      if (isUserLoggedIn) {
        await updateUserCartItems({
          variables: {
            user: { email: userDetails?.email, cartItems: cartItems },
          },
        });
      }
    };
    updateCart();
  }, [isUserLoggedIn]);
  return (
    <main>
      <Carousel />
      <Recommended />
      <Giftings />
      <Trending />
      <ShoppingFor />
    </main>
  );
}
