import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// apollo client
export const client = new ApolloClient({
  // uri: "http://localhost:4000/",
  uri: "https://shoezstore.up.railway.app/",
  cache: new InMemoryCache(),
});

// queries
export const GET_HERO_SLIDES = gql`
  query GetHeroslides {
    heroSlider {
      id
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
      id
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
      id
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
      id
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

export const LOGIN_USER = gql`
  mutation loginUser($user: IUserLogin!) {
    loginUser(user: $user) {
      email
      message
      name
      success
      token
    }
  }
`;

export const UPDATE_USER_CART_ITEMS = gql`
  mutation updateUserCartItems($user: IUserCartItems!) {
    updateUserCartItems(user: $user) {
      email
      items {
        numberOfItems
        itemSize
        itemId
      }
      message
      success
    }
  }
`;
