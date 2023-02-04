"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { Error, Loading, ProductItem } from "@components";
import { TProduct } from "@types";
import { GET_CATEGORIES } from "@utils/graphql";
import { useFavoriteStore } from "@zustand";

const FavoritesPage = () => {
  const favoriteItems = useFavoriteStore((state) => state.favoriteItems);

  // queries
  const { data: CategoriesData, loading, error } = useQuery(GET_CATEGORIES);

  // filtering cart items
  const favoriteItemsFilteredData: TProduct[] =
    favoriteItems?.map((itemId) =>
      CategoriesData?.category.find(
        (product: TProduct) => product?.id === itemId
      )
    ) || [];

  // loading and error states
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="m-auto flex  max-w-5xl flex-col items-center py-10">
      <div className="flex w-full justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-xl font-semibold capitalize md:text-2xl">
          Your Favorites
        </span>
      </div>
      {favoriteItems.length ? (
        <div className="flex min-h-[50vh] w-full flex-wrap justify-center gap-4 py-10 md:gap-8 md:py-16">
          {favoriteItemsFilteredData.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <span className="mt-20 min-h-[50vh] capitalize text-gray-500">
          No Favorite Shoes Found
        </span>
      )}
    </div>
  );
};

export default FavoritesPage;
