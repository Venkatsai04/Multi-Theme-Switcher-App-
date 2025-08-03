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
  // State variables for dynamic styling based on theme
  const [cardTheme, setCardTheme] = useState(''); // Controls background, shadow, border, and overall card structure
  const [textTheme, setTextTheme] = useState(''); // Controls main text color
  const [buttonTheme, setButtonTheme] = useState(''); // Controls button background and text color
  const [subheadingTheme, setSubheadingTheme] = useState(''); // Controls subheading text color
  const [fontTheme, setFontTheme] = useState(''); // Controls font family for text within the card

  useEffect(() => {
    // Apply theme-specific styles based on currentTheme
    if (currentTheme === 'Minimalist') {
      setCardTheme('bg-white shadow-md border border-gray-200'); // Light card with subtle shadow and border
      setTextTheme('text-black');
      setSubheadingTheme('text-[#60758a]');
      setButtonTheme('bg-[#f0f2f5] text-[#111418] hover:bg-gray-200'); // Light button with hover effect
      setFontTheme('font-sans'); // Minimalist uses sans-serif font
    } else if (currentTheme === 'Dark') {
      // Dark card with stronger, deeper shadow and a subtle border for depth
      setCardTheme('bg-[#000027] shadow-xl border border-[#3a3a65]');
      setTextTheme('text-white');
      setSubheadingTheme('text-white/80');
      // Dark button with a subtle white border for better visibility
      setButtonTheme('bg-[#1a1a45] text-white hover:bg-[#2a2a55] border border-white/20');
      setFontTheme('font-serif'); // Dark mode uses serif font
    } else if (currentTheme === 'Modern') {
      // Vibrant yellow card with a more pronounced shadow, thick black border, and a slight scale on hover
      setCardTheme('bg-[#ffde22] shadow-2xl border-4 border-black transform hover:scale-102');
      setTextTheme('text-black');
      setSubheadingTheme('text-black/80');
      // Black button with white text and a contrasting white border
      setButtonTheme('bg-black text-white hover:bg-gray-800 border-2 border-white');
      setFontTheme('font-pacifico'); // Modern theme uses playful Pacifico font
    }
  }, [currentTheme]); // Re-run effect when currentTheme changes

  return (
    <div className={`p-4 rounded-lg flex flex-col gap-4 h-full transition-all duration-300 ${cardTheme} transition-transform`}>
      {/* Product Image */}
      <div
        className="w-full aspect-video bg-cover bg-center bg-no-repeat rounded-md"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Product Details */}
      <div className="flex flex-col gap-2">
        <p className={`${subheadingTheme} text-sm font-normal leading-normal ${fontTheme}`}>Featured</p>
        <p className={`${textTheme} text-base font-bold leading-tight ${fontTheme}`}>{title}</p>
        <p className={`${subheadingTheme} text-sm font-normal leading-normal ${fontTheme}`}>{price}</p>
      </div>
      {/* Add to Cart Button */}
      <button className={`mt-auto rounded px-4 h-8 w-fit text-sm font-medium transition-colors duration-300 ${buttonTheme}`}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
