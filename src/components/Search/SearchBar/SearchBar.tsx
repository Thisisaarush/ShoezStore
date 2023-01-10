"use client";
import React from "react";

export const SearchBar = () => {
  return (
    <form action="/search" method="get" className="ml-28 w-96">
      <input
        type="search"
        name="q"
        id="searchBar"
        placeholder="Search Here..."
        className="w-full border border-gray-300 p-2"
      />
    </form>
  );
};
 