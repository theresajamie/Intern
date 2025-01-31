import React from "react";

const ProductCard = ({ image, title, category }) => {
  return (
    <div className="text-center w-full max-w-xs">
      <div className="w-64 h-80 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{category}</p>
    </div>
  );
};

export default ProductCard;
