import type { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {type RootState } from '../store';
import { setTheme, type ThemeName } from '../slices/themeSlice';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  
  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as ThemeName;
    dispatch(setTheme(selected));
  };
  
  // Derive Tailwind CSS classes from the Redux state
  let bgTheme = 'bg-white';
  let textTheme = 'text-black';
  let fontFamily = 'sans-serif';

  if (currentTheme === 'Dark') {
    bgTheme = 'bg-[#000027]';
    textTheme = 'text-white';
    fontFamily = 'serif';
  } else if (currentTheme === 'Modern') {
    bgTheme = 'bg-[#ffde22]';
    textTheme = 'text-black';
    fontFamily = '"Pacifico", cursive';
  }
  return (
   <div className={`${currentTheme == 'Dark' ? 'bg-white' : '' } ${currentTheme == 'Modern' ? 'bg-white' : '' } bg-white`}>
     <div
      className={`relative flex min-h-screen flex-col justify-between overflow-x-hidden ${bgTheme} ${textTheme} m-1 rounded-xl`}
      style={{ fontFamily }}
    >
      <Navbar currentTheme={currentTheme} handleThemeChange={handleThemeChange} />
      {children}
    </div>
   </div>
  );
};

export default Layout;