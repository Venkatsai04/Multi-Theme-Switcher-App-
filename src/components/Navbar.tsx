import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


interface NavbarProps {
  currentTheme: string;
  handleThemeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Navbar = ({ currentTheme, handleThemeChange }: NavbarProps) => {


  const [menuOpen, setMenuOpen] = useState(false);
  const [BgTheme, setBgTheme] = useState('bg-[#e4f2ff]')
  const [TextTheme, setTextTheme] = useState('text-black')

  useEffect(() => {
    console.log('Current theme from Redux:', currentTheme);
    if (currentTheme == 'Minimalist') {
      setBgTheme('bg-[#e4f2ff]')
      setTextTheme('text-black')
    }
    else if (currentTheme == 'Dark') {
      setBgTheme('bg-[#000027]')
      setTextTheme('text-white')
    }
    else if (currentTheme == 'Modern') {
      setBgTheme('bg-[#ffeb3b]')
      setTextTheme('text-black')
    }
  }, [currentTheme]);

  return (
    <nav className={`${BgTheme} ${TextTheme} border-b border-gray-200 p-4 flex items-center justify-between`}>
      {/* Logo & Dropdown */}
      <div className="flex items-center gap-4">
        <h2 className={`${TextTheme} text-lg font-bold leading-tight tracking-[-0.015em]`}>
          Switch<span className="text-yellow-500">X</span>
        </h2>

        <select
          value={currentTheme}
          onChange={handleThemeChange}
          className="form-input rounded-xl border border-[#dde0e4] bg-white h-10 px-3 text-sm text-[#121417] focus:outline-none focus:ring-0"
        >
          <option value="Minimalist">Minimalist (Theme 1)</option>
          <option value="Dark">Dark Sidebar (Theme 2)</option>
          <option value="Modern">Modern (Theme 3)</option>
        </select>
      </div>

      {/* Desktop Links */}
      <div className={`hidden md:flex gap-6 text-l font-medium ${TextTheme} pr-3`}>
        <Link to="/" className="hover:bg-yellow-500 p-2 rounded-xl">Home</Link>
        <Link to="/about" className="hover:bg-yellow-500 p-2 rounded-xl">About</Link>
        <Link to="/contact" className="hover:bg-yellow-500 p-2 rounded-xl">Contact</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 hover:text-gray-800 focus:outline-none scale-125"
        >
          ☰
        </button>
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className={`${TextTheme} absolute top-16 right-4 ${BgTheme} border rounded-lg shadow-md p-4 space-y-3 w-40 md:hidden z-50`}>
          <Link to="/" className="block hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-yellow-500" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
