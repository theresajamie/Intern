import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import EyewearCollection from "./components/EyewearCollection";

import sunglasses from "./assets/sunglasses.jpg";
import jacket from "./assets/jacket.jpg";
import curlyCreme from "./assets/curly-creme.jpg";
import leggings from "./assets/leggings.jpg";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 place-items-center">
    <ProductCard image={sunglasses} title="Les Deux® Scott Sunglasses" category="Sunglasses" />
    <ProductCard image={jacket} title="Nike® Sportswear Thermo" category="Hooded Jacket" />
    <ProductCard image={curlyCreme} title="SEEN® Curly Creme" category="Skin and Hair" />
    <ProductCard image={leggings} title="Nike Universa Women's Leggings" category="Gym Leggings" />
    </div>

      <EyewearCollection />
    </div>
  );
};

export default App;
