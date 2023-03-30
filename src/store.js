import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { addressReducer } from "./slice/addressSlice";
import { cartReducer } from "./slice/cartSlice";
import citySlice from "./slice/citySlice";
import vendorsCitySlice from "./slice/vendorsCitySlice";

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



const rootReducer = combineReducers({
    location: persistReducer(persistConfigCity, citySlice),
    vendors: vendorsCitySlice,
    cart: persistReducer(persistConfigCart, cartReducer),
    customer: persistReducer(persistConfigCustomer, customerSlice),
    address: addressReducer,
    order: persistReducer(persistConfigOrder, orderSlice), 
    payment: paymentSlice,

})


const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),

})


let persistor = persistStore(store)

export default store;