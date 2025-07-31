import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { setTheme } from '../slices/themeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value;
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  return (
    <select value={currentTheme} onChange={handleChange}>
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );
};

export default Home;
