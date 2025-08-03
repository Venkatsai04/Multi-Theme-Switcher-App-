import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import Product from '../components/Product';


const Home = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);


  //products fetched from API

  const products = [
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

        <div className="flex-1 flex flex-col justify-center items-start p-6 animate-fade-in max-sm:mt-[-50px] z-30">
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
          className={`max-sm:mt-[-250px] scale-[1.2] flex-1  rounded-xl bg-center bg-no-repeat bg-cover w-full h-[400px] md:h-[80%] transition-all duration-700 ease-in-out ${currentTheme === "Dark"
            ? "bg-[url('/Dark.png')]"
            : currentTheme === "Modern"
              ? "bg-[url('/Modern.png')]"
              : "bg-[url('/Minimal.png')]"
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