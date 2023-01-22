import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TLoginState {
  isUserLoggedIn: boolean;
  setUserLoggedIn: (input: boolean) => void;
}

export const useLoginStore = create<TLoginState>()(
  devtools(
    persist(
      (set) => ({
        isUserLoggedIn: false,
        setUserLoggedIn: (input) => set({ isUserLoggedIn: input }),
      }),
      {
        name: "isUserLoggedIn",
      }
    )
  )
);
