import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    is_vendor: false,
 
}

const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers:{
        setVendor: (state, action) => {
            state.is_vendor = true
            
        }
    }
})


export default vendorSlice.reducer;