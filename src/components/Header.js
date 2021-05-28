import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      {/* top nav*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className={"cursor-pointer"}
          />
        </div>
        {/*Search bar */}
        <div className="hidden sm:flex h-10 rounded-md flex-grow cursor-pointer bg-yellow-400  items-center hover:bg-yellow-500">
          <input
            className="h-full p-2 w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/*Right Bar */}
        <div className="text-white flex items-center text-xs space-x-6 whitespace-nowrap ml-3">
          <div className="cursor-pointer link">
              <p>Hello,Harpreet Attri</p>
              <p className="font-extrabold md:text-sm">Accounts & Lists</p>

          </div>
          <div className="cursor-pointer link">
          <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className=" relative cursor-pointer link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 rounded-full text-center text-black font-bold">4</span>
              <ShoppingCartIcon className="h-10"/>
              <p className=" hidden mt-2 md:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      {/* bottom nav*/}
      

      <div className="flex items-center text-white space-x-3 bg-amazon_blue-light p-2 pl-6">
      <p className="link flex  cursor-pointer">
      <MenuIcon className="h-6"/>
      All
      </p>
      <p className="link cursor-pointer">Prime Video</p>
      <p className="link cursor-pointer">Amazon Buissness</p>
      <p className="link cursor-pointer">Today's Deals</p>
      <p className="link cursor-pointer hidden lg:inline">Electronics</p>
      <p className="link cursor-pointer hidden lg:inline">Food &Grocery</p>
      <p className="link cursor-pointer hidden lg:inline">Prime</p>
      <p className="link cursor-pointer hidden lg:inline">Buy Again</p>
      <p className="link cursor-pointer hidden lg:inline">Shopper Toolkit</p>
      <p className="link cursor-pointer hidden lg:inline">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
