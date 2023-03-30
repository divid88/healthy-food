import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { stringify } from "stylis";


export const requestCreateOrder = createAsyncThunk('order/orderCreate', async(data) =>{

    const config = {
        headers:{
            'context_type': 'application/json',
            'Authorization': `Bearer ${data.access}`
        }
    }
    const response = await axios.post('/order/create/', data, config)
    return response.data
})

export const requestReportOrder = createAsyncThunk('order/reportOrder', async(token) =>{

    const config = {
        headers:{
            'context_type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }

    const response = await axios.get('/order/report_order/', config)
    return response.data
})



export const requestUpdateOrder = createAsyncThunk('order/orderUpdate', async(data) =>{

    const config = {
        headers:{
            'context_type': 'application/json',
        }
    }
    try{
    const response = await axios.put(`/order/detail/${data.order_id}/`, data.cart_items, config)
    return response.data
    }catch(error){
        console.log(error)
    }
})


const initialState = {
    status: 'idle',
    order: {},
    is_available: false,
    report_orders: [],
    report_status: 'idle',

}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{
        orderReset: (state) => {
            state.order = {}
            state.is_available = false
        }
    },
    extraReducers: builder => {
        builder 
            .addCase(requestCreateOrder.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(requestCreateOrder.fulfilled, (state, action) => {
                state.status = 'success'
                state.order = action.payload
                state.is_available = true
                const flag = true
                localStorage.setItem('access_token', JSON.stringify(flag))
            })
            .addCase(requestCreateOrder.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                state.is_available = false
                const flag = false
                localStorage.setItem('access_token', JSON.stringify(flag))
                
            })

            .addCase(requestUpdateOrder.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(requestUpdateOrder.fulfilled, (state, action) => {
                state.status = 'success'
                state.order = action.payload
                state.is_available = true
            })
            .addCase(requestUpdateOrder.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                state.is_available = false
            })

            .addCase(requestReportOrder.pending, (state) => {
                state.report_status = 'loading'
            })
            .addCase(requestReportOrder.fulfilled, (state, action) => {
                state.report_status = 'success'
                state.report_orders = action.payload
             
            })
            .addCase(requestReportOrder.rejected, (state, action) => {
                state.report_status = 'failed'
                state.error = action.payload
            
            
            })

    }
})

export default orderSlice.reducer;

export const {
    orderReset,
 } = orderSlice.actions