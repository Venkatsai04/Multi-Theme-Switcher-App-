import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  currentTheme: string;
}

const initialState: ThemeState = {
  currentTheme: 'theme1',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
