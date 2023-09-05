import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    rockets: [],
    isLoading: true
}

export const getRockets = createAsyncThunk('rockets/getRocket', async () => {
    try{
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const output = response.json();
        return output;
    } catch(error){
        console.error('Error fetching data');
        throw error;
    }
});