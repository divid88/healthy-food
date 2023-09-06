import {  createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    status: 'idel',
    vendors: [],
    vendor: {}
}


const vendorsSlice = createSlice({
    name: 'vendors',
    initialState,
    reducers: {},

})


export default vendorsSlice.reducer

