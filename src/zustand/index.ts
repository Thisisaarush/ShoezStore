import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TCartStore, TLoginStore } from "@types";

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
          set((state: any) => ({
            cartItems: [...state.cartItems],
          }));
        },
        deleteNumberOfProducts: (product) => {
          product.numberOfItems -= 1;
          set((state: any) => ({
            cartItems: [...state.cartItems],
          }));
        },
        removeProduct: (product, cartItems) => {
          const index = cartItems.indexOf(product);
          cartItems.splice(index, 1);
          set((state: any) => ({
            cartItems: [...state.cartItems],
          }));
        },
        setCartItems: (input) =>
          set((state: any) => ({
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
