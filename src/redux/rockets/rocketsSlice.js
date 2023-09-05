import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
};

export const getRockets = createAsyncThunk('rockets/getRocket', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const output = response.json();
    console.log(output);
    return output;
  } catch (error) {
    console.error('Error fetching data');
    throw error;
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.rockets = [...state.rockets, action.payload];
      state.isLoading = false;
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default rocketsSlice.reducer;
