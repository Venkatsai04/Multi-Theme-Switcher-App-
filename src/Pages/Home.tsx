import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { setTheme, type ThemeName } from '../slices/themeSlice';
import Product from '../components/Product';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const [BgTheme, setBgTheme] = useState('bg-[#e4f2ff]')
  const [TextTheme, setTextTheme] = useState('text-black')
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as ThemeName;
    dispatch(setTheme(selected));
    console.log('Dispatching theme:', selected);


  }


  useEffect(() => {
    console.log('Current theme from Redux:', currentTheme);
    if (currentTheme == 'Minimalist') {
      setBgTheme('bg-[#ffffff]')
      setTextTheme('text-black')
    }
    else if (currentTheme == 'Dark') {
      setBgTheme('bg-[#000027]')
      setTextTheme('text-white')
    }
    else if (currentTheme == 'Modern') {
      setBgTheme('bg-[#ffde22]')
      setTextTheme('text-black')
    }
  }, [currentTheme]);


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
    <div
      className={`relative flex min-h-screen flex-col justify-between overflow-x-hidden ${BgTheme} ${TextTheme} `}
      style={{
        fontFamily:
          currentTheme === 'Dark'
            ? 'serif'
            : currentTheme === 'Modern'
              ? '"Pacifico", cursive'
              : 'sans-serif',
      }}
    >
      <div>
        <Navbar currentTheme={currentTheme} handleThemeChange={handleThemeChange} />

        <div className="p-4">
          <div className={`${currentTheme == 'Dark' ? 'p-0  bg-[url(dark.svg)]' : ''} ${currentTheme == 'Modern' ? 'p-0  bg-[url(Modern.svg)]' : ''}  bg-center bg-no-repeat flex flex-col items-center justify-center min-h-[480px] gap-6 rounded-xl p-4 bg-[url(Minimal.svg)]`}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className={`${TextTheme} text-5xl font-black leading-tight tracking-[-0.033em]`}>Welcome to Our App</h1>
              <h2 className={`${TextTheme} text-l font-normal leading-normal`}>
                Instantly switch between beautiful themes with a single click. Explore Minimal, Dark,
                and Modern styles — tailor your interface to your mood, your vibe, your way.
              </h2>
            </div>

          </div>
          <button className="bg-[#3490f3] mt-5 rounded px-4 py-2 text-white text-sm font-bold m-auto text-center flex ">Get Started</button>
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
    </div>
  );
}

export default Home;