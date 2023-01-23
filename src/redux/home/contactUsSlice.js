import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk, createItemThunk } from './homeThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  name: '',
  email: '',
  message: '',
  contactUs: [],
  contactUsLoader: true,
};

export const getContactUs = createAsyncThunk(
  'contactUs/getContactUs',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const createContactUsMember = createAsyncThunk(
  'contactUs/createContactUsMember',
  async (object, thunkAPI) => {
    return createItemThunk(object, thunkAPI);
  }
);

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    changeContactUsState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetValue: state => {
      state.name = '';
      state.email = '';
      state.message = '';
    },
  },
  extraReducers: {
    [getContactUs.pending]: state => {
      state.contactUsLoader = true;
    },
    [getContactUs.fulfilled]: (state, { payload }) => {
      state.contactUsLoader = false;
      state.contactUs = { ...payload[0], title: convertHtml(payload[0].title) };
    },
    [getContactUs.rejected]: (state, { payload }) => {
      state.contactUsLoader = false;
    },
  },
});

export const { changeContactUsState, resetValue } = contactUsSlice.actions;

export default contactUsSlice.reducer;
