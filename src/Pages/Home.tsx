import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import type { RootState } from '../store';
import Product from '../components/Product';

type ProductType = {
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

const Home = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  //  base grid structure for each theme
  let layoutClasses = "grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 ";
  if (currentTheme === "Minimalist") {
    layoutClasses += " lg:grid-cols-3";
  } else if (currentTheme === "Dark") {
    layoutClasses += " lg:grid-cols-2";
  } else if (currentTheme === "Modern") {
    layoutClasses += " lg:grid-cols-3";
  }

  return (
    <div>
      <div className={`flex flex-col md:flex-row w-full h-[100vh] p-6 gap-4 items-center justify-center transition-colors duration-500`}>
        <div className="flex-1 flex flex-col justify-center items-start p-6 animate-fade-in max-sm:mt-[-50px] z-30">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-4 transition-colors duration-500">
            Welcome to Our App
          </h1>
          <p className="text-base md:text-lg mb-6 transition-colors duration-500">
            Instantly switch between beautiful themes with a single click. Explore
            Minimal, Dark, and Modern styles — tailor your interface to your mood,
            your vibe, your way.
          </p>
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Get Started</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </div>
        <div
          className={`max-sm:mt-[-250px] scale-[1.2] flex-1 rounded-xl bg-center bg-no-repeat bg-cover w-full h-[400px] md:h-[80%] transition-all duration-700 ease-in-out ${currentTheme === "Dark"
            ? "bg-[url('/Dark.png')]"
            : currentTheme === "Modern"
              ? "bg-[url('/Modern.png')]"
              : "bg-[url('/Minimal.png')]"
            }`}
        ></div>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center p-8">
          <p className="text-lg">Loading products...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center p-8">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      ) : (
        <div className={layoutClasses}>
          {products.map((product, index) => (
            <Product
              key={product.id}
              title={product.title}
              price={`$${product.price.toFixed(2)} · ★ ${product.rating.rate.toFixed(1)}`}
              image={product.image}
              layout={currentTheme}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;