"use client";

import React from "react";
import Image from "next/image";

// images
import shoe from "@images/shoe.svg";
import { SearchBar } from "@components/Search";

export const Menu = (props: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  setIsProfileOpen: (isProfileOpen: boolean) => void;
}) => {
  const { setIsMenuOpen, setIsProfileOpen } = props;

  return (
    <menu className="relative flex w-full flex-col items-center bg-white shadow-md">
      <div className="flex w-full max-w-3xl items-center justify-between py-4 px-8 font-orbitron font-medium uppercase tracking-wider sm:py-8 sm:text-xl">
        <div>Shoez store</div>
        <div
          onClick={() => setIsMenuOpen(false)}
          className="w-auto cursor-pointer p-1"
        >
          X
        </div>
      </div>

      <div className="z-20 flex w-full items-center justify-center border-t">
        <ol className="relative flex w-full max-w-3xl flex-col gap-6 overflow-hidden py-6 px-8 capitalize sm:text-lg">
          <SearchBar classes="flex items-start justify-start rounded-md border p-1 sm:hidden" />
          <li className="relative inline-block w-[200px] cursor-pointer p-2 capitalize before:absolute before:inset-0 before:block before:-skew-x-12 before:bg-yellow-300 sm:hidden">
            <span className="relative">Just Arrived</span>
          </li>
          <li className="relative w-[150px] cursor-pointer p-2 capitalize text-white before:absolute before:-inset-0.5 before:block before:-skew-x-12 before:bg-red-500 sm:hidden">
            <span className="relative">Sale</span>
          </li>
          <li
            onClick={() => {
              setIsProfileOpen(true);
              setIsMenuOpen(false);
            }}
            className="cursor-pointer p-2 sm:hidden"
          >
            👤 profile &#8690;
          </li>
          <li className="cursor-pointer p-2">❤️ favorites &#8690;</li>
          <li className="cursor-pointer p-2 sm:hidden">👧 women &#8690;</li>
          <li className="cursor-pointer p-2 sm:hidden">👦 men &#8690;</li>
          <li className="cursor-pointer p-2 sm:hidden">👶 kids &#8690;</li>
          <Image
            src={shoe}
            alt="shoe"
            className="absolute bottom-0 -right-20 -z-10 select-none opacity-50 grayscale sm:right-20 sm:-bottom-20"
          />
        </ol>
      </div>

      <span
        onClick={() => setIsMenuOpen(false)}
        className="absolute inset-0 -z-20 h-screen w-full bg-gradient-to-b  from-black to-transparent opacity-20"
      />
    </menu>
  );
};
