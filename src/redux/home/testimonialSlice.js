import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk } from './homeThunk';

const initialState = {
  testimonials: [],
  testimonialLoader: false,
};

export const getAllTestimonials = createAsyncThunk(
  'testimonial/getAllTestimonials',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllTestimonials.pending]: state => {
      state.testimonialLoader = true;
    },
    [getAllTestimonials.fulfilled]: (state, { payload }) => {
      state.testimonialLoader = false;
      state.testimonials = payload;
    },
    [getAllTestimonials.rejected]: (state, { payload }) => {
      state.testimonialLoader = false;
    },
  },
});

export default testimonialSlice.reducer;
