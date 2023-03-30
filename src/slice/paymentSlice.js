import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const requestPayment = createAsyncThunk('payment/requestPayment', async(data) =>{

    const config = {
        headers:{
            'context_type': 'application/json',
            
        }
    }

    
    const response = await axios.post('/payment/payment_request/', data.data, config)
    return response.data
})


export const requestVerifyPayment = createAsyncThunk('payment/requestVerifyPayment', async(id) => {
    const config = {
        headers:{
            'context_type': 'application/json',
        }
    }
        const response = await axios.get(`/payment/payment_varify/${id}/`, config)
        return response.data

})


const initialState = {
    status: 'idle',
    payment: {},
    is_available: false,
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder 
            .addCase(requestPayment.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(requestPayment.fulfilled, (state, action) => {
                state.status = 'success'
                state.payment = action.payload
                
            })
            .addCase(requestPayment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                
            })
            .addCase(requestVerifyPayment.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(requestVerifyPayment.fulfilled, (state, action) => {
                state.status = 'success'
                state.payment = action.payload
                state.is_available = true
            })
            .addCase(requestVerifyPayment.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                state.is_available = false
            })

    }
})

export default paymentSlice.reducer;