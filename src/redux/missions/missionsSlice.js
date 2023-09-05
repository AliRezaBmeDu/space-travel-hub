import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  loading: false,
  error: '',
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const missionsSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload;
        if (data) {
          state.missions = data.map((mission) => {
            const { mission_id: id, mission_name: name, description } = mission;
            return { id, name, description };
          });
        }
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default missionsSlice.reducer;
