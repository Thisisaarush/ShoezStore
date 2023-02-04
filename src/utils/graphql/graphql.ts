import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    // uri: "http://localhost:4000/",
    uri: "https://shoezstore.up.railway.app/",
    credentials: "same-origin",
  }),
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

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems {
      email
      items {
        numberOfItems
        itemSize
        itemId
      }
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

export const CREATE_RAZORPAY_ORDERID = gql`
  mutation CreateRazorpayOrderId($order: IOrder) {
    createRazorpayOrderId(order: $order) {
      message
      orderId
      success
    }
  }
`;
