"use client";
// ! making the root layout 'client side' because of @apollo/client doesn't support nextjs13 app-dir yet
// ? context is not supported in ssr yet

import "./globals.css";
import { SessionProvider } from "next-auth/react";

// apollo client
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/graphql";

// components
import { Navbar, Footer } from "@components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider>
          <ApolloProvider client={client}>
            <Navbar />
            {children}
            <Footer />
          </ApolloProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
