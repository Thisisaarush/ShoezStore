import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TCartStore, TFavoriteStore, TLoginStore } from "@types";

export const useLoginStore = create<TLoginStore>()(
  devtools(
    persist(
      (set) => ({
        userDetails: { name: "User", email: "Email" },
        isUserLoggedIn: false,
        setUserDetails: ({ userName, userEmail }) =>
          set({ userDetails: { name: userName, email: userEmail } }),
        resetUserName: () => set({ userDetails: { name: "User" } }),
        setUserLoggedIn: (input) => set({ isUserLoggedIn: input }),
      }),
      {
        name: "user",
      }
    )
  )
);

export const useCartStore = create<TCartStore>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        currentProductSize: 0,
        setCurrentProductSize: (input) => set({ currentProductSize: input }),
        setNumberOfProducts: (product) => {
          product.numberOfItems += 1;
          set((state) => ({
            cartItems: [...state.cartItems],
          }));
        },
        deleteNumberOfProducts: (product) => {
          product.numberOfItems -= 1;
          set((state) => ({
            cartItems: [...state.cartItems],
          }));
        },
        removeProduct: (product, cartItems) => {
          const index = cartItems.indexOf(product);
          cartItems.splice(index, 1);
          set((state) => ({
            cartItems: [...state.cartItems],
          }));
        },
        setCartItems: (input) =>
          set((state) => ({
            cartItems: [...state?.cartItems, input],
          })),
        replaceCartItems: (input) =>
          set({
            cartItems: [...input],
          }),
      }),
      {
        name: "cartItems",
      }
    )
  )
);

export const useFavoriteStore = create<TFavoriteStore>()(
  devtools(
    persist(
      (set) => ({
        favoriteItems: [],
        addToFavorites: (itemId) =>
          set((state: any) => ({
            favoriteItems: [...state.favoriteItems, itemId],
          })),
        removeFromFavorites: (itemId, favoriteItems) => {
          const index = favoriteItems.indexOf(itemId);
          favoriteItems.splice(index, 1);
          set((state) => ({
            favoriteItems: [...state.favoriteItems],
          }));
        },
      }),
      {
        name: "favoriteItems",
      }
    )
  )
);
