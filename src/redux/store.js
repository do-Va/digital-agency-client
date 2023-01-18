import { configureStore } from '@reduxjs/toolkit';
import { menuSlice, heroSlice, ourTeamSlice, aboutSlice } from '.';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    hero: heroSlice,
    about: aboutSlice,
    ourTeam: ourTeamSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
