import React from "react";
import { ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Promax™</h1>
      <ul className="flex gap-6 text-lg">
        <li className="cursor-pointer">Man</li>
        <li className="cursor-pointer">Woman</li>
        <li className="cursor-pointer">Tech</li>
      </ul>
      <div className="flex gap-4 items-center">
        <Search className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
        <span className="bg-black text-white px-2 py-1 rounded-full">7</span>
      </div>
    </nav>
  );
};

export default Navbar;
