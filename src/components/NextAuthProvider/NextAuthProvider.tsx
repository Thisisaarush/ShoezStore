"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

// types
type TNextAuthProvider = (props: { children: React.ReactNode }) => JSX.Element;

export const NextAuthProvider: TNextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
