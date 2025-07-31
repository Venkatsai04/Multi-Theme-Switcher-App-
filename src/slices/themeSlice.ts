// themeSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ThemeName = 'theme1' | 'theme2' | 'theme3'; // ✅ Exported here

interface ThemeState {
  currentTheme: ThemeName;
}

const initialState: ThemeState = {
  currentTheme: (localStorage.getItem('theme') as ThemeName) || 'theme1',
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
