import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// icons
import menu from "@icons/menu.svg";
import search from "@icons/search.svg";
import profile from "@icons/profile.svg";
import cart from "@icons/cart.svg";

// components
import { Menu } from "@components/Menu";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="relative flex w-screen flex-col items-center justify-center">
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            key="menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            className="absolute inset-0 z-10 h-max w-max"
          >
            <Menu setIsMenuOpen={setIsMenuOpen} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="flex w-full max-w-5xl content-center items-center justify-between border-b sm:border-none">
        <div
          onClick={() => setIsMenuOpen(true)}
          className="flex h-[50px]  max-w-[130px] flex-auto cursor-pointer items-center justify-center border-r transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-white"
        >
          <Image src={menu} alt="menu" />
        </div>
        <div className="hidden h-[50px] max-w-[130px] flex-auto cursor-pointer items-center justify-center border-r transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-white sm:flex">
          <Image src={search} alt="search" />
        </div>
        <div className="relative flex h-[50px] flex-auto cursor-pointer items-center justify-center font-orbitron font-medium uppercase tracking-wide transition-all duration-300 ease-in hover:tracking-widest hover:text-white hover:before:absolute hover:before:inset-0 hover:before:bg-black">
          <span className="relative">shoez store</span>
        </div>
        <div className="hidden h-[50px] max-w-[130px] flex-auto cursor-pointer items-center justify-center border-l transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-white sm:flex">
          <Image src={profile} alt="profile" />
        </div>
        <div className="flex h-[50px] max-w-[130px] flex-auto cursor-pointer items-center justify-center border-l transition-colors duration-300 ease-in-out hover:bg-gray-100 hover:text-white">
          <Image src={cart} alt="cart" />
        </div>
      </div>
      <div className="hidden w-full items-center justify-center border-t py-4 text-sm sm:flex">
        <div className="relative mx-4 inline-block cursor-pointer px-2 capitalize before:absolute before:-inset-0.5 before:block before:-skew-x-12 before:bg-yellow-300">
          <span className="relative">Just Arrived</span>
        </div>
        <div className="mx-4 cursor-pointer px-2 capitalize  text-gray-500">
          Men
        </div>
        <div className="mx-4 cursor-pointer px-2 capitalize text-gray-500">
          Women
        </div>
        <div className="mx-4 cursor-pointer px-2 capitalize text-gray-500">
          Kids
        </div>
        <div className="relative mx-4 cursor-pointer px-2 capitalize text-white before:absolute before:-inset-0.5 before:block before:-skew-x-12 before:bg-red-500">
          <span className="relative">Sale</span>
        </div>
      </div>
    </nav>
  );
};
