import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart_items: [],
    vendor: 0,
    shipping_address: 0,
    
}



const cartSice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const exist_item = state.cart_items.find(item => item.id === action.payload.food.id)
             
            if(exist_item){
                exist_item.qty += 1
            }
            else{
                state.cart_items.push({...action.payload.food, qty:1})
                state.vendor = action.payload.id
            }
        },
        minusCartItem: (state, action) => {
            const exist_item = state.cart_items.find(item => item.id === action.payload.id)
            if(exist_item.qty > 1){
                exist_item.qty -= 1
            }else{
                const removeItem = state.cart_items.filter((item) => item.id !== action.payload.id);
                state.cart_items = removeItem
            }
        },
        addAddress: (state, action) => {
            console.log(action.payload)
            state.shipping_address = action.payload
        },

        removeCartItem: (state, action) => {
            const removeItem = state.cart_items.filter((item) => item.id !== action.payload.id);
            state.cart_items = removeItem
        },

        resetCart: (state) => {
            state.cart_items = []
            state.shipping_address = 0
            state.vendor = 0
        }
    },
    extraReducers: {}
})


export const { 
    addCartItem,
    addAddress,
    minusCartItem,
    resetCart,
} = cartSice.actions


export const cartReducer =  cartSice.reducer