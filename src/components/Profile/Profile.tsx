"use client";

import React from "react";
import Link from "next/link";
import { useLoginStore } from "@zustand";

// types
type TProfile = (props: {
  setIsProfileOpen: (isProfileOpen: boolean) => void;
}) => JSX.Element;

export const Profile: TProfile = ({ setIsProfileOpen }) => {
  const { isUserLoggedIn, setUserLoggedIn, userName, resetUserName } =
    useLoginStore();

  return (
    <div className="relative flex w-full flex-col items-center bg-white shadow-md">
      <div className="flex w-full max-w-3xl items-center justify-between py-4 px-8 font-orbitron font-medium uppercase tracking-wider sm:py-8 sm:text-xl">
        <span>{userName}</span>
        <span
          onClick={() => setIsProfileOpen(false)}
          className="w-auto cursor-pointer p-1"
        >
          X
        </span>
      </div>

      <div className="z-20 flex w-full items-center justify-center border-t">
        <ol className="relative flex w-full max-w-3xl flex-col gap-6 overflow-hidden py-6 px-8 capitalize sm:text-lg">
          {!isUserLoggedIn ? (
            <span className="flex flex-col gap-6">
              <Link
                href="/register"
                onClick={() => setIsProfileOpen(false)}
                className="relative inline-block w-[200px] cursor-pointer p-2 capitalize before:absolute before:inset-0 before:block before:-skew-x-12"
              >
                <span className="relative">register &#8690;</span>
              </Link>
              <Link
                href="/login"
                onClick={() => setIsProfileOpen(false)}
                className="relative w-[150px] cursor-pointer p-2 capitalize before:absolute before:-inset-0.5 before:block before:-skew-x-12"
              >
                <span className="relative">login &#8690;</span>
              </Link>
            </span>
          ) : (
            <li
              onClick={() => {
                setUserLoggedIn(false);
                setIsProfileOpen(false);
                resetUserName();
              }}
              className="relative w-[150px] cursor-pointer p-2 capitalize before:absolute before:-inset-0.5 before:block before:-skew-x-12"
            >
              <span className="relative">logout &#8690;</span>
            </li>
          )}
        </ol>
      </div>

      <span
        onClick={() => setIsProfileOpen(false)}
        className="absolute inset-0 -z-20 h-screen w-full bg-gradient-to-b  from-black opacity-30"
      />
    </div>
  );
};
