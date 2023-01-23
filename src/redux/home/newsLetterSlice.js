import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk, createItemThunk } from './homeThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  newsName: '',
  newsEmail: '',
  newsLetter: [],
  newsLetterLoader: true,
  newsLetterListLoader: true,
  createSuccess: false,
};

export const getNewsLetter = createAsyncThunk(
  'newsLetter/getNewsLetter',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const createNewsLetterMember = createAsyncThunk(
  'newsLetter/createNewsLetterMember',
  async (object, thunkAPI) => {
    return createItemThunk(object, thunkAPI);
  }
);

const newsLetterSlice = createSlice({
  name: 'newsLetter',
  initialState,
  reducers: {
    changeNewsLetterState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetValue: state => {
      state.newsName = '';
      state.newsEmail = '';
    },
  },
  extraReducers: {
    [getNewsLetter.pending]: state => {
      state.newsLetterLoader = true;
    },
    [getNewsLetter.fulfilled]: (state, { payload }) => {
      state.newsLetterLoader = false;
      state.newsLetter = {
        ...payload[0],
        title: convertHtml(payload[0].title),
      };
    },
    [getNewsLetter.rejected]: (state, { payload }) => {
      state.newsLetterLoader = false;
    },

    [createNewsLetterMember.pending]: state => {
      state.newsLetterListLoader = true;
      state.createSuccess = false;
    },
    [createNewsLetterMember.fulfilled]: (state, { payload }) => {
      state.newsLetterListLoader = false;
      state.createSuccess = true;
    },
    [createNewsLetterMember.rejected]: (state, { payload }) => {
      state.newsLetterListLoader = false;
      state.createSuccess = false;
    },
  },
});

export const { changeNewsLetterState, resetValue } = newsLetterSlice.actions;

export default newsLetterSlice.reducer;
