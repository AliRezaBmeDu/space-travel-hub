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
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (rocket.rocketId !== id) return rocket;
        return { ...rocket, reserve: true };
      });
      state.rockets = newState;
      console.log('newState', newState);
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      let rocketDB = state.rockets;
      console.log('rocketDB', rocketDB);
      const fetchedRockets = action.payload;
      let bool = false;
      if (state.rockets === null) {
        rocketDB = fetchedRockets;
        const newRockets = rocketDB.map((rocket) => {
          const {
            rocket_name: rocketName,
            rocket_id: rocketId,
            description,
            flickr_images: flickrImages,
          } = rocket;
          bool = localStorage.getItem(rocketId) || false;
          return {
            rocketName, rocketId, description, flickrImages, reserve: bool,
          };
        });
        console.log(newRockets);
        state.rockets = newRockets;
      }
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
