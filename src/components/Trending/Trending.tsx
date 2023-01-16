import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";

// graphql queries
import { GET_TRENDING } from "@utils/graphql";

// loading & error
import { Loading, Error } from "@components";

export const Trending = () => {
  const { loading, error, data } = useQuery(GET_TRENDING);

  // loading and error states
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="m-auto my-10 mb-20 flex max-w-5xl flex-col gap-10 capitalize">
      <span className="ml-4 text-xl font-semibold sm:text-2xl md:text-3xl lg:ml-0">
        trending
      </span>

      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:justify-evenly sm:gap-0">
        <span className="relative h-64 cursor-pointer hover:opacity-90 sm:h-[416px] sm:w-[300px] md:h-[616px] md:w-[360px] lg:w-[480px]">
          <Image
            src={data?.trending[0]?.uri}
            alt="trending"
            fill={true}
            style={{ objectFit: "cover" }}
            quality={50}
          />
        </span>

        <div className=" flex flex-col gap-4">
          <span className="relative h-64 cursor-pointer hover:opacity-90 sm:h-[200px] sm:w-[300px] md:h-[300px] md:w-[360px] lg:w-[480px]">
            <Image
              src={data?.trending[1]?.uri}
              alt="trending"
              fill={true}
              style={{ objectFit: "cover" }}
              quality={50}
            />
          </span>
          <span className="relative h-64 cursor-pointer hover:opacity-90 sm:h-[200px] sm:w-[300px] md:h-[300px] md:w-[360px] lg:w-[480px]">
            <Image
              src={data?.trending[2]?.uri}
              alt="trending"
              fill={true}
              style={{ objectFit: "cover" }}
              quality={50}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
