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
  userName?: string | null;
  isUserLoggedIn: boolean;
  setUserName: (input?: string | null) => void;
  resetUserName: () => void;
  setUserLoggedIn: (input: boolean) => void;
}
