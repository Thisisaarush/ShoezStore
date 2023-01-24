import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TCartStore, TLoginStore } from "@types";

export const useLoginStore = create<TLoginStore>()(
  devtools(
    persist(
      (set) => ({
        userName: "User",
        isUserLoggedIn: false,
        setUserName: (input) => set({ userName: input }),
        resetUserName: () => set({ userName: "User" }),
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
        setCartItems: (input) =>
          set((state: any) => ({
            cartItems: [...state?.cartItems, input],
          })),
      }),
      {
        name: "cartItems",
      }
    )
  )
);
