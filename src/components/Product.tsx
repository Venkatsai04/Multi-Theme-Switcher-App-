import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

type ProductProps = {
  title: string;
  price: string;
  image: string;
  layout?: string;
  index: number;
};

const Product: React.FC<ProductProps> = ({ title, price, image, layout, index }) => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  
  const themeStyles = {
    Minimalist: {
      card: 'bg-white shadow-md border border-gray-200',
      text: 'text-black',
      subheading: 'text-[#60758a]',
      button: 'bg-[#f0f2f5] text-[#111418] hover:bg-gray-200',
      font: 'font-sans',
    },
    Dark: {
      card: 'bg-[#000027] shadow-xl border border-[#3a3a65]',
      text: 'text-white',
      subheading: 'text-white/80',
      button: 'bg-[#1a1a45] text-white hover:bg-[#2a2a55] border border-white/20',
      font: 'font-serif',
    },
    Modern: {
      card: 'bg-[#ffde22] shadow-2xl transform hover:scale-102',
      text: 'text-black',
      subheading: 'text-black/80',
      button: 'bg-black text-white hover:bg-gray-800 border-white',
      font: 'font-pacifico',
    },
  };

  const currentStyles = themeStyles[currentTheme] || themeStyles.Minimalist;
  
  let productLayoutClasses = '';
  if (layout === 'Dark') {
    if (index % 3 === 0) {
      productLayoutClasses = 'lg:col-span-2';
    }
  } else if (layout === 'Modern') {
    if (index % 4 === 0) {
      productLayoutClasses = 'lg:col-span-2';
    }
  }

  return (
    <div className={`p-4 rounded-lg flex flex-col gap-4 h-full transition-all duration-300 ${currentStyles.card} ${productLayoutClasses}`}>
      <div
        className="w-full aspect-video bg-cover bg-center bg-no-repeat rounded-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-col gap-2">
        <p className={`${currentStyles.subheading} text-sm font-normal leading-normal ${currentStyles.font}`}>Featured</p>
        <p className={`${currentStyles.text} text-base font-bold leading-tight ${currentStyles.font}`}>{title}</p>
        <p className={`${currentStyles.subheading} text-sm font-normal leading-normal ${currentStyles.font}`}>{price}</p>
      </div>
      <button className={`mt-auto rounded px-4 h-8 w-fit text-sm font-medium transition-colors duration-300 ${currentStyles.button}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;