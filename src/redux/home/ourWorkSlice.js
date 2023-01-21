import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk } from './homeThunk';

const initialState = {
  ourWorks: [],
  ourWorkLoader: false,
};

export const getAllOurWorks = createAsyncThunk(
  'ourWork/getAllOurWorks',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const ourWorkSlice = createSlice({
  name: 'ourWork',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllOurWorks.pending]: state => {
      state.ourWorkLoader = true;
    },
    [getAllOurWorks.fulfilled]: (state, { payload }) => {
      state.ourWorkLoader = false;
      state.ourWorks = payload;
    },
    [getAllOurWorks.rejected]: (state, { payload }) => {
      state.ourWorkLoader = false;
    },
  },
});

export default ourWorkSlice.reducer;
