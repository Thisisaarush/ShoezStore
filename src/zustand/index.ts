import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TLoginStore } from "@types";

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
