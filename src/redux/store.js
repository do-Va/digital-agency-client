import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from '.';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
