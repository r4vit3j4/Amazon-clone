import Image from "next/image";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            className="cursor-pointer"
            src="https://links.papareact.com/f90"
            alt="logo"
            width={150}
            height={40}
            objectFit="contain"
          />
        </div>
        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md flex-grow cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none p-x-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right Section */}
        <div className="text-white flex items-center text-xs md:text-sm space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Friend</p>
            <p className="font-bold">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 sm:right-10 md:-top-1 h-4 w-4 bg-yellow-400 text-center rounded-full flex items-center justify-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden sm:inline font-bold mt-1">Cart</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Food & Grocery</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex link">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
