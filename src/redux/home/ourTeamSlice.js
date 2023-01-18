import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllItemsThunk } from './homeThunk';

const initialState = {
  ourTeams: [],
  ourTeamLoader: false,
};

export const getAllOurTeams = createAsyncThunk(
  'ourTeam/getAllOurTeams',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const ourTeamSlice = createSlice({
  name: 'ourTeam',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllOurTeams.pending]: state => {
      state.ourTeamLoader = true;
    },
    [getAllOurTeams.fulfilled]: (state, { payload }) => {
      state.ourTeamLoader = false;
      state.ourTeams = payload;
    },
    [getAllOurTeams.rejected]: (state, { payload }) => {
      state.ourTeamLoader = false;
    },
  },
});

export default ourTeamSlice.reducer;
