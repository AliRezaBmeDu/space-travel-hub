import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: null,
  isLoading: true,
};

export const getRockets = createAsyncThunk('rockets/getRocket', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const output = response.json();
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
      state.isLoading = false;
      const rocketDB = action.payload;
      const newRockets = rocketDB.map((rocket) => {
        const {
          id,
          name,
          description,
          flickr_images: flickrImages,
        } = rocket;
        return {
          id, name, description, flickrImages,
        };
      });
      if (state.rockets !== newRockets) {
        state.rockets = newRockets;
      }
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default rocketsSlice.reducer;
