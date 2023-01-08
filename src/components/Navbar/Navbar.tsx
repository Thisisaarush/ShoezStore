import Image from "next/image";
import React from "react";

// icons
import menu from "@icons/menu.svg";
import search from "@icons/search.svg";
import profile from "@icons/profile.svg";
import cart from "@icons/cart.svg";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <Image src={menu} alt="menu"></Image>
        </div>
        <div>
          <Image src={search} alt="search"></Image>
        </div>
        <div>shoez store</div>
        <div>
          <Image src={profile} alt="profile"></Image>
        </div>
        <div>
          <Image src={cart} alt="cart"></Image>
        </div>
      </div>

      <div></div>
    </nav>
  );
};
