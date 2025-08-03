import { useState } from "react";
import { Link } from "react-router-dom";
import type { ThemeName } from '../slices/themeSlice';

interface NavbarProps {
  currentTheme: ThemeName;
  handleThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Navbar = ({ currentTheme, handleThemeChange }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownBg = currentTheme === 'Dark' ? 'bg-[#000027]' : 'bg-white';
  const dropdownText = currentTheme === 'Dark' ? 'text-white' : 'text-black';
  const dropdownBorder = currentTheme === 'Dark' ? 'border-white' : 'border-[#dde0e4]';

  return (
    <div className={`min-w-full flex items-center justify-between px-6 py-4 border-b z-50`}>
      {/* Logo + Theme Switcher */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold">
          Switch<span className="text-yellow-500">X</span>
        </h2>
        <select
          value={currentTheme}
          onChange={handleThemeChange}
          className={`form-input rounded-xl h-10 px-3 text-sm focus:outline-none focus:ring-0 ${dropdownBg} ${dropdownText} ${dropdownBorder}`}
        >
          <option value="Minimalist">Minimalist (Theme 1)</option>
          <option value="Dark">Dark (Theme 2)</option>
          <option value="Modern">Modern (Theme 3)</option>
        </select>
      </div>

     
      <div className="hidden md:flex gap-6 font-medium">
        <Link to="/" className="hover:bg-yellow-500 p-2 rounded-xl">Home</Link>
        <Link to="/about" className="hover:bg-yellow-500 p-2 rounded-xl">About</Link>
        <Link to="/contact" className="hover:bg-yellow-500 p-2 rounded-xl">Contact</Link>
      </div>


      <button onClick={() => setMenuOpen(!menuOpen)} className="relative group md:hidden z-30">
        <div className="relative z-20 flex items-center justify-center rounded-full w-[50px] h-[50px] transition-all bg-sky-400 ring-0 ring-gray-300 hover:ring-8 focus:ring-8 ring-opacity-30 duration-200 shadow-md">
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-[45deg]" : ""
            }`}
          >
            <div
              className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 origin-right delay-75 ${
                menuOpen ? "-rotate-90 h-[1px] -translate-y-[1px]" : ""
              }`}
            />
            <div className="bg-white h-[1px] rounded" />
            <div
              className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${
                menuOpen ? "-rotate-90 h-[1px] translate-y-[1px]" : ""
              }`}
            />
          </div>
        </div>

        
        <div
          className={`absolute right-0 top-16 bg-white text-sky-700 shadow-xl rounded-md origin-top-right transform transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-90 invisible"
          }`}
        >
          <ul className="text-sm divide-y p-2 w-40">
            <li className="px-4 py-2 hover:bg-gray-100 rounded">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 rounded">
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 rounded">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default Navbar;