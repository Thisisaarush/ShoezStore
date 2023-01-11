import React from "react";

export const SearchBar = (props: { classes: string; autoFocus?: boolean }) => {
  const { classes, autoFocus = false } = props;

  return (
    <form action="/search" method="get" className={classes}>
      <span className="p-2">🔍</span>
      <input
        type="search"
        name="q"
        id="searchBar"
        placeholder="Search Here..."
        autoFocus={autoFocus}
        className="w-full p-2 outline-none"
      />
    </form>
  );
};
