import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { addressReducer } from "./slice/addressSlice";
import { cartReducer } from "./slice/cartSlice";
import citySlice from "./slice/citySlice";
import vendorsCitySlice from "./slice/vendorsCitySlice";
import vendorSlice from './slice/vendor'

import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import customerSlice from "./slice/customerSlice";
import orderSlice from "./slice/orderSlice";
import paymentSlice from "./slice/paymentSlice";
import { healthyApi } from "./api/api";
import searchSortingSlice from "./slice/searchSortingSlice";



const persistConfigOrder = {
    key: 'order',
    version: 1,
    storage,
    
};


const persistConfigCity = {
    key: 'city',
    version: 1,
    storage,
    
    
};

const persistConfigCart = {
    key: 'cart',
    version: 1,
    storage,
    
};

const persistConfigCustomer = {
    key: 'customer',
    version: 1,
    storage,
    
};

const persistConfigVendor = {
    key: 'vendor',
    version: 1,
    storage,
    
};



const rootReducer = combineReducers({
    [healthyApi.reducerPath]: healthyApi.reducer,
    location: persistReducer(persistConfigCity, citySlice),
    vendors: vendorsCitySlice,
    cart: persistReducer(persistConfigCart, cartReducer),
    customer: persistReducer(persistConfigCustomer, customerSlice),
    address: addressReducer,
    order: persistReducer(persistConfigOrder, orderSlice), 
    payment: paymentSlice,
    search : searchSortingSlice,
    vendor : persistReducer(persistConfigVendor, vendorSlice),

})


const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
               // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
        }).concat(healthyApi.middleware),

})


let persistor = persistStore(store)

export default store;

setupListeners(store.dispatch)