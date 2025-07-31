import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice'; // example slice

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Types for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
