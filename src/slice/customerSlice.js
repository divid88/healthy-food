import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const requestAddFavoiteVendor = createAsyncThunk('favorite/requestAddFavoriteVendor', 
                                                        async(data) => {
    const config = {
        headers : {
            'context_type': 'application/json',
            'Authorization': `Bearer ${data.access}`
        }
    }

    const response = await axios.post(`/customer/toggle_favorite/`, {vendor_id:data.vendor_id}, config)
        return response.data
})



export const requestRemoveFavoiteVendor = createAsyncThunk('favorite/requestRemoveFavoriteVendor', 
                                                        async(data) => {
    const config = {
        headers : {
            'context_type': 'application/json',
            'Authorization': `Bearer ${data.access}`
        }
    }
    console.log(data);
    const response = await axios.delete(`/customer/delete_favorite/${data.vendor_id}/`, config)
        return response.data
})




export const requestLoginCustomer = createAsyncThunk('customer/requestLogin', async(data) =>{

    const config = {
        headers:{
            'content_type': 'application/json',
        }
    }
    console.log(data);
    const response = await axios.post('/user/token/', data, config)
    return response.data
})

export const checkAuthorization = createAsyncThunk('customer/checkAuthorization', async(token) => {
    const config = {
        headers:{
            'context_type': 'application/json',
            
        }
    }
    console.log(token);
    const response = await axios.post('/user/refresh/', token, config)
        return response.data 
})


const initialState = {
    status: 'idle',
    customer: {},
    refresh: '',
    access : '',
    username: '',
    favorites: [],
    authorization: false,
    refresh_exp: false
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        logout: (state, action) => {
            state.customer = {}
            state.refresh = ''
            state.access = ''
            state.username = ''
            state.authorization = false
        }
    },
    extraReducers: builder => {
        builder 
            .addCase(requestLoginCustomer.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(requestLoginCustomer.fulfilled, (state, action) => {
                state.status = 'success'
                state.customer = action.payload
                state.refresh = action.payload.refresh
                state.access = action.payload.access
                state.username = action.payload.username
                state.authorization = true
                state.refresh_exp = false
                const flag = true
                localStorage.setItem('access_token', JSON.stringify(flag))
          
                
            })
            .addCase(requestLoginCustomer.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                state.authorization = true
            })


            .addCase(checkAuthorization.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(checkAuthorization.fulfilled, (state, action) => {
                console.log('refresh token ', action.payload)
                state.status = 'success'
                state.access = action.payload.access
                state.authorization = true
                state.refresh_exp = false
                const flag = true
                localStorage.setItem('access_token', JSON.stringify(flag))
            })
            .addCase(checkAuthorization.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
                state.authorization = false
                state.refresh_exp = true
                const flag = false
                localStorage.setItem('access_token', JSON.stringify(flag))
            })

            .addCase(requestAddFavoiteVendor.pending, state => {
                state.status = 'loading'
            })
            .addCase(requestAddFavoiteVendor.fulfilled, (state, action) => {
                state.status = 'success'
                state.favorites.push(action.payload)
            })
            .addCase(requestAddFavoiteVendor.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })

            .addCase(requestRemoveFavoiteVendor.pending, state => {
                state.status = 'loading'
            })
            .addCase(requestRemoveFavoiteVendor.fulfilled, (state, action) => {
                state.status = 'success'
                state.favorites = action.payload
            })
            .addCase(requestRemoveFavoiteVendor.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })

    }
})

export const {logout} = customerSlice.actions


export default customerSlice.reducer;