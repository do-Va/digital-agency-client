import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk } from './homeThunk';

const initialState = {
  menus: [],
  menuLoader: false,
};

export const getAllMenus = createAsyncThunk(
  'menu/getAllMenus',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMenus.pending]: state => {
      state.menuLoader = true;
    },
    [getAllMenus.fulfilled]: (state, { payload }) => {
      state.menuLoader = false;
      state.menus = payload;
    },
    [getAllMenus.rejected]: (state, { payload }) => {
      state.menuLoader = false;
    },
  },
});

export default menuSlice.reducer;
