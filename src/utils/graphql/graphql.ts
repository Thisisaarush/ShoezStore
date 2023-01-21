import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// apollo client
export const client = new ApolloClient({
  uri: "https://shoezstore.up.railway.app/",
  cache: new InMemoryCache(),
});

// queries
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

export const GET_CATEGORIES = gql`
  query GetCategories {
    category {
      brand
      category
      color
      name
      price
      sizes
      tag
      uri
    }
  }
`;

// mutations
export const REGISTER_USER = gql`
  mutation RegisterUser($user: IUser!) {
    registerUser(user: $user) {
      email
      message
      name
      success
      token
    }
  }
`;
