import React from "react";

// types
type TSearchBar = (props: {
  classes: string;
  autoFocus?: boolean;
}) => JSX.Element;

export const SearchBar: TSearchBar = ({ classes, autoFocus = false }) => {
  return (
    <form action="/search" method="GET" className={classes}>
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
