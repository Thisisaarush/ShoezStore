"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/graphql";

// types
type TApolloClientProvider = (props: {
  children: React.ReactNode;
}) => JSX.Element;

export const ApolloClientProvider: TApolloClientProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
