"use client";
// ! making the whole app client side because of @apollo-client doesn't support new nextjs(app dir) features
// todo: remove 'use client' when @apollo-client supports this out of the box

// apollo client
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/graphql";

//components
import {
  Navbar,
  Carousel,
  Recommended,
  Giftings,
  Trending,
  ShoppingFor,
  Footer,
} from "@components";

export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
        <Navbar />
        <Carousel />
        <Recommended />
        <Giftings />
        <Trending />
        <ShoppingFor />
        <Footer />
      </ApolloProvider>
    </main>
  );
}
