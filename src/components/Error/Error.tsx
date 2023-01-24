import { ApolloError } from "@apollo/client";
import React from "react";

export const Error = (props: { error?: ApolloError }) => {
  return (
    <div className="mt-10 flex items-center justify-center text-red-500">
      Error! {props.error?.message}
    </div>
  );
};
