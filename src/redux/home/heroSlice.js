import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk } from './homeThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  hero: [],
  heroLoader: true,
};

export const getHero = createAsyncThunk(
  'hero/getHero',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {},
  extraReducers: {
    [getHero.pending]: state => {
      state.heroLoader = true;
    },
    [getHero.fulfilled]: (state, { payload }) => {
      state.heroLoader = false;
      state.hero = { ...payload[0], title: convertHtml(payload[0].title) };
    },
    [getHero.rejected]: (state, { payload }) => {
      state.heroLoader = false;
    },
  },
});

export const {} = heroSlice.actions;

export default heroSlice.reducer;
