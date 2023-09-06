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
  reducers: {
    toggleReserve: (state, action) => {
      const id = action.payload;
      const rocket = state.rockets.find((rocket) => rocket.rocketId === id);
      rocket.reserve = !rocket.reserve;
      localStorage.setItem(id, rocket.reserve);
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      const rocketDB = action.payload;
      if (rocketDB) {
        const newRockets = rocketDB.map((rocket) => {
          const {
            rocket_name: rocketName,
            rocket_id: rocketId,
            description,
            flickr_images: flickrImages,
          } = rocket;
          const bool = localStorage.getItem(rocketId);
          let reserve = false;
          if (bool === 'true') {
            reserve = true;
          }
          return {
            rocketName, rocketId, description, flickrImages, reserve,
          };
        });
        state.rockets = newRockets;
      }
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { toggleReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;
