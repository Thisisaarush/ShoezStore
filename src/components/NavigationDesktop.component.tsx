import Image from "next/image";

// icons
import menu from "../../public/icons/menu.svg";
import search from "../../public/icons/search.svg";
import favorite from "../../public/icons/favorite.svg";
import cart from "../../public/icons/cart.svg";

export const NavigationDesktop = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center z-20">
      <div className="w-full h-14 flex justify-between items-center border-b border-custom-light-grey">
        <div className="h-full flex justify-evenly items-center">
          <span className="h-full px-12 flex justify-center items-center">
            <Image src={menu} alt="menu" />
          </span>
          <span className="h-full px-12 flex justify-center items-center border-x border-custom-light-grey">
            <Image src={search} alt="search" />
          </span>
        </div>

        <h1 className="uppercase font-orbitron font-medium text-xl">
          Shoez Store
        </h1>

        <div className="h-full flex justify-evenly items-center">
          <span className="h-full px-12 flex justify-center items-center border-x border-custom-light-grey">
            <Image src={favorite} alt="favorite" />
          </span>
          <span className="h-full px-12 flex justify-center items-center">
            <Image src={cart} alt="cart" />
          </span>
        </div>
      </div>

      <div className="w-full py-6 flex justify-center items-center border-b border-custom-light-grey">
        <div className="w-1/2 flex justify-evenly items-center">
          <div className="flex justify-center items-center">
            <span className="w-28 h-6 bg-custom-yellow px-2 -skew-x-12 absolute -z-10"></span>
            <p>Just Arrived</p>
          </div>
          <p className="text-custom-dark-grey">Men</p>
          <p className="text-custom-dark-grey">Women</p>
          <p className="text-custom-dark-grey">Kids</p>
          <div className="flex justify-center items-center">
            <span className="w-20 h-6 bg-custom-red px-2 -skew-x-12 absolute -z-10"></span>
            <p className="text-white">Sale</p>
          </div>
        </div>
      </div>
    </div>
  );
};
