// product types
export type TProduct = {
  name: string;
  price: number;
  sizes: number[];
  uri: string;
};

export type TCategoryProduct = {
  brand: string;
  category: string;
  color: string;
  name: string;
  price: number;
  sizes: number[];
  tag: string;
  uri: string;
};

// store types
export interface TLoginStore {
  userName?: string | null;
  isUserLoggedIn: boolean;
  setUserName: (input?: string | null) => void;
  resetUserName: () => void;
  setUserLoggedIn: (input: boolean) => void;
}
