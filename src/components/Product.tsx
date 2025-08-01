// import React from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="rounded-xl shadow-md bg-white p-4 flex flex-col gap-2 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto"
      />
      <h3 className="font-bold text-sm line-clamp-2">{product.title}</h3>
      <p className="text-gray-500 text-xs line-clamp-3">{product.description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="font-semibold text-amber-600">${product.price}</span>
        <span className="text-xs text-gray-400">{product.rating.rate} ⭐ ({product.rating.count})</span>
      </div>
    </div>
  );
};

export default ProductCard;
