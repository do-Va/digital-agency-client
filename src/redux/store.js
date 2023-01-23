import { configureStore } from '@reduxjs/toolkit';
import {
  menuSlice,
  heroSlice,
  ourTeamSlice,
  aboutSlice,
  serviceSlice,
  ourWorkSlice,
  testimonialSlice,
  contactUsSlice,
} from '.';

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    hero: heroSlice,
    about: aboutSlice,
    service: serviceSlice,
    ourTeam: ourTeamSlice,
    ourWork: ourWorkSlice,
    testimonial: testimonialSlice,
    contactUs: contactUsSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
