import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Product from '../components/Product';


const Home = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  
  // Remove useState and useEffect for BgTheme and TextTheme.
  // The global layout now handles this.

  const products = [
    // ... (Your products array is unchanged)
    {
      title: 'Product 1',
      price: '$29.99 · ★ 4.5',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC8oc_Fp5y6Z3IZDnTxNATU3-dVChSU9nY_qmJh8gRDmZ7vkAdiDIe7kOABA9YgBXaYyJIsYveQDF-zFHmEBt0ryVsx7Xhch6Q8OmS-fpQC6_k6IA4UAstVrtbExGEjWVgld1_Yj2LuM1GO8gtGo7kYwGgdZwXiRv0szjlFO5AbWE-g-pZ8fPXW534v9JzbBvCIs6kDEstw40bTkoVoMNI6d_ELJDlJTx7V-trSpqdwRL2rCBEDydqxvaiaxoZy41lVR2fTPbox7vWl',
    },
    {
      title: 'Product 2',
      price: '$49.99 · ★ 4.2',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBK7gNj8i_6q47YyCHxdlUYEF9W9wPpA2xTNAj7lMfFYzBbxwJUL0jfneG40JmEZKCMbw4y_7IMPO2MX6n08fOXqYLASwfgR7q_J4pUPtRdiceLtS8JtRERR6iZmbjDgCYUkuaBwiw1vpHpqG0yWsd-1VsOa1K7ThYLGDY3ONa5zT5ET8SKAzjhiEsE3pEpa1rSaRyHT-NofXTuvc68mvOIw3z7hFbeeEjbE2q513Ghs0yhYPsDr8KIEoCoRMNkYkhK5yXUDKlWRlEM',
    },
    {
      title: 'Product 3',
      price: '$19.99 · ★ 4.8',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAR9Nd9jzLUlkB9Dr-u4TG3ovEiIFvADG8iIcwNNp1mieMSBeVXi-Tofeq9rVgoJ55yarrnqfwrt3Ds8GTlOaBQR6wuHHwD0_HGNFfE6DfhyVqmM-KoG8mBiAFEZgn5pkZ0iGzX1wbGvtQB44y7_v8oSFqhlCqGd2IeBY4rmDedr4-WQihLyfMHyJZrJtayDiJMXg3p_Bv5a6pvGjvMGMdfNg0l1SA95uppXf-6_qRcyW044n7fUBNTbn_s4d3OpxnYYYnVs8fL1xh5',
    },
    {
      title: 'Product 3',
      price: '$19.99 · ★ 4.8',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC8oc_Fp5y6Z3IZDnTxNATU3-dVChSU9nY_qmJh8gRDmZ7vkAdiDIe7kOABA9YgBXaYyJIsYveQDF-zFHmEBt0ryVsx7Xhch6Q8OmS-fpQC6_k6IA4UAstVrtbExGEjWVgld1_Yj2LuM1GO8gtGo7kYwGgdZwXiRv0szjlFO5AbWE-g-pZ8fPXW534v9JzbBvCIs6kDEstw40bTkoVoMNI6d_ELJDlJTx7V-trSpqdwRL2rCBEDydqxvaiaxoZy41lVR2fTPbox7vWl',
    },
  ];

  return (
    <div>
      <div className={`flex flex-col md:flex-row w-full h-[100vh] p-6 gap-4 items-center justify-center transition-colors duration-500 `}>
        {/* Left Side: Heading and Text */}
        <div className="flex-1 flex flex-col justify-center items-start p-6 animate-fade-in mt-[-100px]">
          <h1
            className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.03em] mb-4 transition-colors duration-500"
          >
            Welcome to Our App
          </h1>
          <p
            className="text-base md:text-lg mb-6 transition-colors duration-500"
          >
            Instantly switch between beautiful themes with a single click. Explore
            Minimal, Dark, and Modern styles — tailor your interface to your mood,
            your vibe, your way.
          </p>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>
        </div>

        {/* Right Side: Background Image */}
        <div
          className={`mt-[-120px] flex-1 rounded-xl bg-center bg-no-repeat bg-cover w-full h-[300px] md:h-[80%] transition-all duration-700 ease-in-out ${currentTheme === "Dark"
              ? "bg-[url('/Dark.svg')]"
              : currentTheme === "Modern"
                ? "bg-[url('/Modern.svg')]"
                : "bg-[url('/Minimal.svg')]"
            }`}
        ></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {products.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;