"use client";

import React from "react";

// components
import { Error, Loading, ProductItem } from "@components";

// graphql queries
import { GET_CATEGORIES } from "@utils/graphql";
import { useQuery } from "@apollo/client";

//types
import { TProduct } from "@types";

const Women = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const womenShoes: TProduct[] = data?.category.filter(
    (product: TProduct) => product?.category === "women"
  );

  // loading and error states
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="m-auto flex min-h-screen max-w-5xl flex-col items-center py-10">
      <div className="flex w-full justify-between px-4 sm:px-6 lg:px-8">
        <span className="text-xl font-semibold capitalize md:text-2xl">
          Women's
        </span>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-4 py-10 md:gap-8 md:py-16">
        {womenShoes?.map((product: TProduct) => (
          <ProductItem product={product} key={product.uri} />
        ))}
      </div>
    </div>
  );
};

export default Women;
