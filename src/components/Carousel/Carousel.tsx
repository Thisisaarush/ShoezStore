"use client";
import React from "react";
import { useQuery } from "@apollo/client";

//queries
import { GET_HERO_SLIDES } from "@utils/graphql";

export const Carousel = () => {
  const { loading, error, data } = useQuery(GET_HERO_SLIDES);

  if (loading) return <div>...Loading</div>;
  if (error) return <div>Error! {error.message}</div>;

  console.log(data);

  return <div>Carousel</div>;
};
