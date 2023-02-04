"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// icons
import menu from "@icons/menu.svg";
import search from "@icons/search.svg";
import profile from "@icons/profile.svg";
import cart from "@icons/cart.svg";

// components
import { Menu, Search, Profile } from "@components";

// utils
import { SlideDownAnimation } from "@utils/animations";
import Link from "next/link";
import { useCartStore } from "@zustand";

export const Navbar: React.FC = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  return (
    <nav className="relative flex w-screen flex-col items-center justify-center">
      <span
        onClick={() => {
          setIsMenuOpen(false);
          setIsProfileOpen(false);
          setIsSearchOpen(false);
        }}
        className={`fixed inset-0 z-10 w-screen bg-black transition-opacity duration-200 ease-in-out ${
          isMenuOpen || isProfileOpen || isSearchOpen
            ? "block opacity-40"
            : "hidden"
        }`}
      />
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="absolute top-0 z-20 w-screen"
            {...SlideDownAnimation}
          >
            <Menu
              setIsMenuOpen={setIsMenuOpen}
              setIsProfileOpen={setIsProfileOpen}
            />
          </motion.div>
        )}
        {isSearchOpen && (
          <motion.div
            key="search"
            className="absolute top-0 z-20 w-screen"
            {...SlideDownAnimation}
          >
            <Search setIsSearchOpen={setIsSearchOpen} />
          </motion.div>
        )}
        {isProfileOpen && (
          <motion.div
            key="profile"
            className="absolute top-0 z-20 w-screen"
            {...SlideDownAnimation}
          >
            <Profile setIsProfileOpen={setIsProfileOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex w-full max-w-5xl content-center items-center justify-between border-b sm:border-none">
        <div
          onClick={() => setIsMenuOpen(true)}
          className="flex h-[50px]  max-w-[130px] flex-auto cursor-pointer items-center justify-center border-r transition-colors duration-300 ease-in-out hover:bg-gray-100"
        >
          <Image src={menu} alt="menu" />
        </div>
        <div
          onClick={() => setIsSearchOpen(true)}
          className="hidden h-[50px] max-w-[130px] flex-auto cursor-pointer items-center justify-center border-r transition-colors duration-300 ease-in-out hover:bg-gray-100 sm:flex"
        >
          <Image src={search} alt="search" />
        </div>
        <Link
          href="/"
          className="relative flex h-[50px] flex-auto cursor-pointer items-center justify-center font-orbitron font-medium uppercase tracking-wide transition-all duration-300 ease-in hover:tracking-widest hover:text-white hover:before:absolute hover:before:inset-0 hover:before:bg-black"
        >
          <p className="relative">shoez store</p>
        </Link>
        <div
          onClick={() => setIsProfileOpen(true)}
          className="hidden h-[50px] max-w-[130px] flex-auto cursor-pointer items-center justify-center border-l transition-colors duration-300 ease-in-out hover:bg-gray-100 sm:flex"
        >
          <Image src={profile} alt="profile" />
        </div>
        <Link
          href="/cart"
          className="relative flex h-[50px] max-w-[130px] flex-auto cursor-pointer items-center justify-center border-l transition-colors duration-300 ease-in-out hover:bg-gray-100"
        >
          <Image src={cart} alt="cart" />
          <p className="absolute right-6 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white sm:right-8 md:right-10">
            {cartItems.length}
          </p>
        </Link>
      </div>

      <div className="hidden w-full items-center justify-center border-t py-8 text-sm sm:flex md:text-base">
        <Link
          href="/justarrived"
          className="relative mx-4 inline-block cursor-pointer px-2 capitalize before:absolute before:-inset-0.5 before:block before:-skew-x-12 before:bg-yellow-300 hover:before:bg-yellow-400"
        >
          <p className="relative">Just Arrived</p>
        </Link>
        <Link
          href="/men"
          className="mx-4 cursor-pointer px-2 capitalize text-gray-500  hover:text-black"
        >
          Men
        </Link>
        <Link
          href="/women"
          className="mx-4 cursor-pointer px-2 capitalize text-gray-500 hover:text-black"
        >
          Women
        </Link>
        <Link
          href="/kids"
          className="mx-4 cursor-pointer px-2 capitalize text-gray-500 hover:text-black"
        >
          Kids
        </Link>
        <Link
          href="/sale"
          className="relative mx-4 cursor-pointer px-2 capitalize text-white before:absolute before:-inset-0.5 before:block before:-skew-x-12 before:bg-red-500 hover:before:bg-red-600"
        >
          <p className="relative">Sale</p>
        </Link>
      </div>
    </nav>
  );
};
