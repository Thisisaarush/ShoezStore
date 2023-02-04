"use client";

import React from "react";
import Image from "next/image";
import { useFavoriteStore } from "@zustand";

// icons
import heart from "@icons/heart.svg";
import heartRed from "@icons/heartRed.svg";

// types
type TFavoriteComp = (props: { productId: string }) => JSX.Element;

export const Favorite: TFavoriteComp = ({ productId }) => {
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems);
  const addToFavorites = useFavoriteStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteStore(
    (state) => state.removeFromFavorites
  );

  // handle favorites
  const handleFavorites = () => {
    const item = favoriteItems.find((itemId) => itemId === productId);
    if (item) {
      removeFromFavorites(productId, favoriteItems);
    } else {
      addToFavorites(productId);
    }
  };

  return (
    <div className="absolute right-2 top-2">
      <div className="relative flex h-[30px] w-[30px] items-center justify-center transition-all duration-1000 ease-in-out">
        <Image
          src={heart}
          alt="heart"
          className="absolute"
          onClick={handleFavorites}
        />
        {favoriteItems.map((itemId) => {
          if (itemId === productId) {
            return (
              <Image
                src={heartRed}
                alt="redheart"
                className="absolute"
                onClick={handleFavorites}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
