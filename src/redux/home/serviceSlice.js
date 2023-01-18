import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk } from './homeThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  service: [],
  serviceLoader: true,
  serviceList: [],
  serviceListLoader: true,
};

export const getService = createAsyncThunk(
  'service/getService',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const getAllServiceList = createAsyncThunk(
  'service/getAllServiceList',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const ServiceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: {
    [getService.pending]: state => {
      state.serviceLoader = true;
    },
    [getService.fulfilled]: (state, { payload }) => {
      state.serviceLoader = false;
      state.service = {
        ...payload[0],
        title: convertHtml(payload[0].title),
        title2: convertHtml(payload[0].title2),
      };
    },
    [getService.rejected]: (state, { payload }) => {
      state.serviceLoader = false;
    },

    [getAllServiceList.pending]: state => {
      state.serviceListLoader = true;
    },
    [getAllServiceList.fulfilled]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.serviceList = payload;
    },
    [getAllServiceList.rejected]: (state, { payload }) => {
      state.serviceListLoader = false;
    },
  },
});

export const {} = ServiceSlice.actions;

export default ServiceSlice.reducer;
