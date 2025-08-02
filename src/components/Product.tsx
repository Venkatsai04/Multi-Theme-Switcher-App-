import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

type ProductProps = {
  title: string;
  price: string;
  image: string;
};

const Product: React.FC<ProductProps> = ({ title, price, image }) => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const [cardTheme, setCardTheme] = useState('bg-white');
  const [textTheme, setTextTheme] = useState('text-[#111418]');
  const [buttonTheme, setButtonTheme] = useState('bg-[#f0f2f5] text-[#111418]');
  const [subheadingTheme, setSubheadingTheme] = useState('text-[#60758a]');

  useEffect(() => {
    if (currentTheme === 'Minimalist') {
      setCardTheme('bg-white');
      setTextTheme('text-black');
      setSubheadingTheme('text-[#60758a]');
      setButtonTheme('bg-[#f0f2f5] text-[#111418]');
    } else if (currentTheme === 'Dark') {
      setCardTheme('bg-[#000027]');
      setTextTheme('text-white');
      setSubheadingTheme('text-white/80');
      setButtonTheme('bg-[#1a1a45] text-white');
    } else if (currentTheme === 'Modern') {
      setCardTheme('bg-[#ffeb3b]');
      setTextTheme('text-black');
      setSubheadingTheme('text-black/80');
      setButtonTheme('bg-black text-white');
    }
  }, [currentTheme]);

  return (
    <div className={`p-4 rounded shadow-sm flex flex-col gap-4 h-full ${cardTheme}`}>
      <div
        className="w-full aspect-video bg-cover bg-center bg-no-repeat rounded"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex flex-col gap-2">
        <p className={`${subheadingTheme} text-sm font-normal leading-normal`}>Featured</p>
        <p className={`${textTheme} text-base font-bold leading-tight`}>{title}</p>
        <p className={`${subheadingTheme} text-sm font-normal leading-normal`}>{price}</p>
      </div>
      <button className={`mt-auto rounded px-4 h-8 w-fit text-sm font-medium ${buttonTheme}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;