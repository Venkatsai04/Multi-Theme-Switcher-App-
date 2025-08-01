// themeSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ThemeName = 'Minimalist' | 'Dark Knight' | 'Modren'; 

interface ThemeState {
  currentTheme: ThemeName;
}

const initialState: ThemeState = {
  currentTheme: (localStorage.getItem('theme') as ThemeName) || 'Minimalist',
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
