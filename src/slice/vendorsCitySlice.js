import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const requestAllVendorCity = createAsyncThunk('vendors/requestAllVendor', async(city) => {
    const config = {
        headers : {
            'context_type': 'application/json'
        }
    }
 
    const response = await axios.get(`/vendor/vendors/${city}/`, config)
        return response.data
})

export const requestVendorCitySearch = createAsyncThunk('vendors/requestVendorCitySearch', 
                                                        async(data) => {
    const config = {
        headers : {
            'context_type': 'application/json'
        }
    }
  
    alert(data.searchText)
    const response = await axios.get(`/vendor/vendors/${data.city}/?search=${data.searchText}`, config)
        return response.data
})


export const requestVendorDetail = createAsyncThunk('vendors/requestVendorDetaile', async(id) => {
    const config = {
        headers : {
            'context_type': 'application/json'
        }
    }

    const response = await axios.get(`/vendor/menu/${id}/`, config)
        return response.data
})


const initialState = {
    status: 'idel',
    vendors: [],
    vendor: {}
}


const vendorsSlice = createSlice({
    name: 'vendors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(requestAllVendorCity.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(requestAllVendorCity.fulfilled, (state, action) => {
            state.status = 'success'
            state.vendors = action.payload
        })
        .addCase(requestAllVendorCity.rejected, (state, action) => {
            state.status = 'errors'
            state.errors = action.payload
        })
        .addCase(requestVendorDetail.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(requestVendorDetail.fulfilled, (state, action) => {
            state.status = 'success'
            state.vendor = action.payload
        })
        .addCase(requestVendorDetail.rejected, (state, action) => {
            state.status = 'errors'
            state.errors = action.payload
        })
        
        .addCase(requestVendorCitySearch.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(requestVendorCitySearch.fulfilled, (state, action) => {
            state.status = 'success'
            state.vendors = action.payload
        })
        .addCase(requestVendorCitySearch.rejected, (state, action) => {
            state.status = 'errors'
            state.errors = action.error.message
        })
    
    }
})


export default vendorsSlice.reducer

