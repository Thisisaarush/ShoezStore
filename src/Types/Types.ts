// product types
export type TProduct = {
  id: string;
  name: string;
  uri: string;
  price: number;
  sizes: number[];
  brand?: string;
  category?: string;
  color?: string;
  tag?: string;
};

// store types
export interface TLoginStore {
  userDetails: { name?: string; email?: string };
  isUserLoggedIn: boolean;
  setUserDetails: (input: { userName?: string; userEmail?: string }) => void;
  resetUserName: () => void;
  setUserLoggedIn: (input: boolean) => void;
}

export type TCartItem = {
  __typename?: string;
  itemId: string;
  itemSize: number;
  numberOfItems: number;
};

export interface TCartStore {
  cartItems: TCartItem[];
  currentProductSize: number;
  setCurrentProductSize: (input: number) => void;
  setNumberOfProducts: (product: TCartItem) => void;
  deleteNumberOfProducts: (product: TCartItem) => void;
  removeProduct: (product: TCartItem, cartItems: TCartItem[]) => void;
  setCartItems: (input: TCartItem) => void;
  replaceCartItems: (input: TCartItem[]) => void;
}
