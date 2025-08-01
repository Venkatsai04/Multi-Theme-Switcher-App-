// Home.tsx
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { setTheme, type ThemeName } from '../slices/themeSlice';
import ProductCard from '../components/Product';

const Home = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const [products, setProducts] = useState([]);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as ThemeName;
    dispatch(setTheme(selected));
    console.log('Theme changed to:', selected);
    console.log('Stored in localStorage:', localStorage.getItem('theme'));

  };


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products', err));
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col justify-between overflow-x-hidden bg-white"
      style={{
        fontFamily: 'Inter, Noto Sans, sans-serif',
      }}
    >

      <div>
        <div className="flex items-center justify-between bg-white px-4 py-2 mt-2 gap-4">
          {/* App Logo/Title */}
          <h2 className="text-[#121417] text-lg font-bold leading-tight tracking-[-0.015em] text-center flex-1">
            <span>
              Switch
              <span className="font-extrabold text-amber-500">X</span>
            </span>
          </h2>

          {/* Theme Switcher */}
          <div className="w-full max-w-[200px]">
            <label className="w-full">
              <select
                value={currentTheme}
                onChange={handleThemeChange}
                className="form-input w-full rounded-xl border border-[#dde0e4] bg-white h-14 px-4 text-base text-[#121417] placeholder:text-[#677583] focus:outline-none focus:ring-0"
              >
                <option value="theme1">Minimalist</option>
                <option value="theme2">Dark Knight</option>
                <option value="theme3">Modern</option>
              </select>
            </label>
          </div>
        </div>



        <h1 className="text-[#121417] text-[22px] font-bold text-center px-4 pb-3 pt-5">
          Welcome to Our App
        </h1>
        <p className="text-[#121417] text-base text-center px-4 pb-3 pt-1">
          Explore the features and enjoy the experience. We're excited to have you on board.
        </p>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="flex px-4 py-3 justify-center">
          <button className="min-w-[84px] rounded-xl bg-[#d2e2f3] px-4 py-2 text-sm font-bold text-[#121417] cursor-pointer scale-120">
            Get Started
          </button>
        </div>
      </div>


    </div>
  );
};

export default Home;
