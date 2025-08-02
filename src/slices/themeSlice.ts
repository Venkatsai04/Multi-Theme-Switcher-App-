import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Correct the spelling of 'Modren' to 'Modern'
export type ThemeName = 'Minimalist' | 'Dark' | 'Modern'; 

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