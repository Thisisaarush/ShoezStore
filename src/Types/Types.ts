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

export type TItem = {
  __typename?: string;
  itemId: string;
  itemSize: number;
  numberOfItems: number;
};

export interface TLoginStore {
  userDetails: { name?: string; email?: string };
  isUserLoggedIn: boolean;
  setUserDetails: (input: { userName?: string; userEmail?: string }) => void;
  resetUserName: () => void;
  setUserLoggedIn: (input: boolean) => void;
}

export interface TCartStore {
  cartItems: TItem[];
  currentProductSize: number;
  setCurrentProductSize: (input: number) => void;
  setNumberOfProducts: (product: TItem) => void;
  deleteNumberOfProducts: (product: TItem) => void;
  removeProduct: (product: TItem, cartItems: TItem[]) => void;
  setCartItems: (input: TItem) => void;
  replaceCartItems: (input: TItem[]) => void;
}

export interface TFavoriteStore {
  favoriteItems: string[];
  addToFavorites: (itemId: string) => void;
  removeFromFavorites: (ItemId: string, favoriteItems: string[]) => void;
}
