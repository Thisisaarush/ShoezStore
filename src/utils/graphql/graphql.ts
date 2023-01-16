import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// apollo client
export const client = new ApolloClient({
  uri: "https://shoezstore.up.railway.app/",
  cache: new InMemoryCache(),
});

// query herosliders
export const GET_HERO_SLIDES = gql`
  query GetHeroslides {
    heroSlider {
      name
      price
      sizes
      uri
    }
  }
`;

export const GET_RECOMMENDED = gql`
  query GetRecommended {
    recommended {
      name
      price
      sizes
      uri
    }
  }
`;

export const GET_TRENDING = gql`
  query GetTrending {
    trending {
      name
      price
      sizes
      uri
    }
  }
`;
