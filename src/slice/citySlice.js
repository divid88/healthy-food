import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    status: 'idle',
    all_cities: [],
    city: 0,
    city_name:'',
    vendors: []
}


const citySlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        choiceCity: (state, action) => {
            console.log(action);
            state.city = action.payload.city.id
            state.city_name = action.payload.city.name
        }
    },
})

export default citySlice.reducer


export const {
    choiceCity,
} = citySlice.actions