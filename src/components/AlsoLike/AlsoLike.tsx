"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@utils/graphql";
import { Loading, Error, ProductItem } from "@components";

export const AlsoLike = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  const randomProducts = [2, 20, 12, 1, 3, 9, 13, 17];

  //loading and error states
  if (loading) <Loading />;
  if (error) <Error error={error} />;

  return (
    <div className="mt-20 flex max-w-5xl flex-col gap-6">
      <span className="text-lg font-semibold capitalize sm:ml-8">
        you might also like
      </span>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {randomProducts.map((item: number) => (
          <ProductItem
            product={data?.category[item]}
            key={data?.category[item].id}
          />
        ))}
      </div>
    </div>
  );
};
