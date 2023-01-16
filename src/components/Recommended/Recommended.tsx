import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";

// graphql queries
import { GET_RECOMMENDED } from "@utils/graphql";

// components
import { Loading, Error } from "@components";

//types
export type TProduct = {
  name: string;
  price: number;
  sizes: number[];
  uri: string;
};

export const Recommended = () => {
  const { loading, error, data } = useQuery(GET_RECOMMENDED);

  // loading and error states
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="m-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 py-10 mb-10">
      {data?.recommended.map((product: TProduct) => (
        <div className="flex cursor-pointer flex-col items-center justify-center bg-white p-2 text-sm shadow-md hover:opacity-90 md:text-base">
          <div className="relative mb-2 h-52 w-40 lg:h-72 lg:w-56">
            <Image
              src={product?.uri}
              alt="recommended"
              fill={true}
              style={{ objectFit: "cover" }}
              quality="70"
            />
          </div>
          <p>{product?.name}</p>
        </div>
      ))}
    </div>
  );
};
