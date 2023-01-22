import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TLoginState {
  userName: string;
  isUserLoggedIn: boolean;
  setUserName: (input: string) => void;
  resetUserName: () => void;
  setUserLoggedIn: (input: boolean) => void;
}

export const useLoginStore = create<TLoginState>()(
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
        name: "isUserLoggedIn",
      }
    )
  )
);
