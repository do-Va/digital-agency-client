import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk } from './homeThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  about: [],
  aboutLoader: true,
};

export const getAbout = createAsyncThunk(
  'about/getAbout',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: {
    [getAbout.pending]: state => {
      state.aboutLoader = true;
    },
    [getAbout.fulfilled]: (state, { payload }) => {
      state.aboutLoader = false;
      state.about = {
        ...payload[0],
        title: convertHtml(payload[0].title),
        description: convertHtml(payload[0].description),
      };
    },
    [getAbout.rejected]: (state, { payload }) => {
      state.aboutLoader = false;
    },
  },
});

export const {} = aboutSlice.actions;

export default aboutSlice.reducer;
