import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const requestAllAddresses = createAsyncThunk('address/allAddresses', async() => {
    const config = {
        headers:{
            'context-type': 'application/json'
        }
    }

    const response = await axios.get('/customer/address/', config)
        return response.data
})

export const requestAddAddresses = createAsyncThunk('address/addAddress', async(data) => {
    const config = {
        headers:{
            'context-type': 'application/json'
        }
    }
   
    const response = await axios.post('/customer/address/', data,config)
        return response.data
})

const initialState = {
    statusGet: 'idel',
    statusPost: 'idel',
    addresses: [],
    newAddress: {}
}


const addressSlice = createSlice({
    name:'address',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(requestAllAddresses.pending, (state)=> { 
                state.statusGet = 'loading'
            })
            .addCase(requestAllAddresses.fulfilled, (state, action) => {
                state.statusGet = 'success'
                state.addresses = action.payload
            })
            .addCase(requestAllAddresses.rejected, (state, action) => {
                state.statusGet = 'error'
                state.error = action.payload
            })

            .addCase(requestAddAddresses.pending, (state)=> { 
                state.statusPost = 'loading'
            })
            .addCase(requestAddAddresses.fulfilled, (state, action) => {
                state.statusPost = 'success'
                state.newAddress = action.payload
            })
            .addCase(requestAddAddresses.rejected, (state, action) => {
                state.statusPost = 'error'
                state.error = action.payload
            })

            

            
    }
})

export const addressReducer = addressSlice.reducer

