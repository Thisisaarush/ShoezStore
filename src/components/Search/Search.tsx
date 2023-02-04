import React from "react";
import { SearchBar } from "./SearchBar/SearchBar";

export const Search = () => {
  return (
    <div className="relative flex w-full flex-col items-center bg-white shadow-md">
      <div className="flex w-full max-w-3xl items-center justify-start py-4 px-8 sm:py-8">
        <div className="font-orbitron font-medium uppercase tracking-wider sm:text-xl">
          Shoez store
        </div>
        <SearchBar
          classes="ml-28 flex w-96 items-start justify-start rounded-md border p-1"
          autoFocus={true}
        />
      </div>

      <div className="z-20 flex w-full items-center justify-center border-t">
        <div className="flex w-full max-w-3xl justify-between py-4 px-8">
          <span className="text-lg text-gray-500">Popular Searches</span>
          <div className="mr-20 flex w-1/2 items-center justify-evenly">
            <span>Air Zoom</span>
            <span>Jordan</span>
            <span>White Sneakers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
