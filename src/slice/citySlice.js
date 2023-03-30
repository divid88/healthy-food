import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const requestAllCities = createAsyncThunk('city/requestAllCities', async() => {
    const config = {
        headers : {
            'context_type': 'application/json'
        }
    }
    
    const response = await axios.get('/vendor/cities/', config)
        return response.data
})



const initialState = {
    status: 'idle',
    all_cities: [],
    city: 0,
    vendors: []
}


const citySlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        choiceCity: (state, action) => {
            state.city = action.payload
        }
    },
    extraReducers: builder => { 
        builder
            .addCase(requestAllCities.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(requestAllCities.fulfilled, (state, action) => {
                state.status = 'success'
                state.all_cities = action.payload
            })
            .addCase(requestAllCities.rejected, (state, action) => {
                state.status = 'errors'
                state.errors = action.payload
            })

       
    }
})

export default citySlice.reducer


export const {
    choiceCity,
} = citySlice.actions