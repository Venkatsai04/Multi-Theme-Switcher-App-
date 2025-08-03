import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

//export TODO
export type ThemeName = 'Minimalist' | 'Dark' | 'Modern';

interface ThemeState {
  currentTheme: ThemeName;
}

const getInitialTheme = (): ThemeName => {
  const storedTheme = localStorage.getItem('theme');
  return (storedTheme as ThemeName) || 'Minimalist';
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeName>) => {
      state.currentTheme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;