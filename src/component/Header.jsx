import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // starting point
    <div className="container flex justify-between items-center py-5 relative bg-white">
      <div className="flex gap-1 items-center">
        <div className="rounded-full bg-cyan-200 w-12 h-12 p-2">
          <img src="./logo.svg" alt="logo" />
        </div>
        <span className="text-xl font-bold">HeroGadget</span>
      </div>

      <div className="flex gap-7 items-center text-base font-medium hidden md:flex">
        <NavLink
          to="/"
          title="home"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          title="shop"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Shop
        </NavLink>
        <Link className="relative" title="cart">
          <ShoppingCartIcon className="h-6 w-6 text-cyan-700" />
          <span className="absolute left-6 bottom-2">0</span>
        </Link>
      </div>

      
      {/* mobile bar icon  */}
      <Bars3Icon className="w-8 md:hidden" onClick={() => setIsOpen(true)} />

      {/* mobile menu */}
      {isOpen && (
        <div className="absolute top-5 w-[100%] left-1/2 -translate-x-1/2 flex flex-col justify-start gap-10 p-7 bg-white shadow-lg md:hidden">
          <div className="flex gap-2 items-center w-auto">
            <div className="rounded-full bg-cyan-200 w-12 h-12 p-2">
              <img src="./logo.svg" alt="logo" />
            </div>
            <span className="text-xl font-bold">HG</span>
            <XMarkIcon
              className="w-8 ms-auto"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="flex flex-col gap-7 justify-start text-base font-medium">
            <NavLink
              to="/"
              title="home"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              title="shop"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Shop
            </NavLink>
            <Link className="relative" title="cart">
              <ShoppingCartIcon className="h-6 w-6 text-cyan-700" />
              <span className="absolute left-6 bottom-2">0</span>
            </Link>
          </div>
        </div>
      )}
    </div>
    // end point
  );
};

export default Header;
