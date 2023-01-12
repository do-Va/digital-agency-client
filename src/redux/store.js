import { configureStore } from '@reduxjs/toolkit';
import { menuSlice, heroSlice } from '.';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    hero: heroSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
