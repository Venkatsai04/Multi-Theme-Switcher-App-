// src/components/Product.tsx
import React from 'react';
    
type ProductProps = {
  title: string;
  price: string;
  image: string;
};

const Product: React.FC<ProductProps> = ({ title, price, image }) => {
  return (
    <div className="p-4 rounded shadow-sm bg-white flex flex-col gap-4 h-full">
      <div
        className="w-full aspect-video bg-cover bg-center bg-no-repeat rounded"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-col gap-2">
        <p className="text-[#60758a] text-sm font-normal leading-normal">Featured</p>
        <p className="text-[#111418] text-base font-bold leading-tight">{title}</p>
        <p className="text-[#60758a] text-sm font-normal leading-normal">${price}</p>
      </div>
      <button className="mt-auto bg-[#f0f2f5] text-[#111418] rounded px-4 h-8 w-fit text-sm font-medium">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
