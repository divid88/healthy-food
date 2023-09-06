import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setAccess } from '../slice/customerSlice'

export const healthyApi = createApi({
    reducerPath: 'healthyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://0.0.0.0:8000',
    


}),

    endpoints: (builder) => ({
       
        getAllCites: builder.query({
            query: () => '/vendor/cities/',
            headers : {'context_type': 'application/json'}, 
        }),
        
        getVendorsCities: builder.query({
            query: (name) => `/vendor/vendors/${name}/`,
            prepareHeaders: (headers)=>{
            headers.set('context_type', 'application/json');
            }
            }),

        getVendorMenu: builder.query({
            query: (name) => `vendor/menu/${name}/`,
            headers : {'context_type': 'application/json'}, 
        }),

        getCategory: builder.query({
            query: () => `menu/food_category/`,
            headers : {'context_type': 'application/json'}, 
        }),

        // user######################################
        requestAddresses: builder.query({
            query: (data) => {
                return{
                url: '/customer/address/',
                method:'GET',
                headers:{'Content-Type': 'application/json',
                    'Authorization': `Bearer ${data}`},
                }

            },
        }),


        requestLogin: builder.mutation({
            query: (data)=>({
                url: 'customer/login/',
                method: 'POST',
                body: data
            }),
        }),

        refreshToken: builder.mutation({
            query: (data) => ({
                url: 'customer/token/refresh/',
                method: 'POST',
                body: data
            })
        }),

        registerUser: builder.mutation({
            query: (data) => ({
                url: 'user/register/',
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: data
            })
        }),

        registerAddress: builder.mutation({
            query: (data) => ({
                url: '/customer/address/',
                method: 'POST',
                headers:{'Content-Type': 'application/json', 
                'Authorization': `Bearer ${data.access}`},
                body: data.data
            })
        }),

//User########################################################


//Order ##########################################


    createOrder: builder.mutation({
        query: (data) => ({
            url: '/order/create/',
            method: 'POST',
            headers:{'Content-Type': 'application/json', 
            'Authorization': `Bearer ${data.access}`},
            body: data.data
        })
}),


//Order###########################################
//Payment###########################################


createPayment: builder.mutation({
    query: (data) => ({
        url: '/payment/payment/',
        method: 'POST',
        headers:{'Content-Type': 'application/json', 
        'Authorization': `Bearer ${data.access}`},
        body: data.data
    })
}),

// Vendor ################################################

createTimeVendor: builder.mutation({
    query: (data) => ({
        url: '/vendor/time_add/',
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.access}`},
        body: data.tableDate
    })
}),

        vendorAdmin: builder.query({
            query: () => `/vendor/admin-vendor/`,
            headers : {'context_type': 'application/json'},

            }),

            createTypeFoodVendor: builder.mutation({
                query: (data) => ({
                    url: '/menu/type_food/',
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${data.access}`},
                    body: data.data
                })
            })

            




//menu###########################################




    })
})


export const { useGetAllCitesQuery,
        useGetVendorsCitiesQuery,
        useGetVendorMenuQuery,
        useGetCategoryQuery,

        useRequestAddressesQuery,
        useRegisterAddressMutation,
        useRequestLoginMutation,
        useRefreshTokenMutation,
        useRegisterUserMutation,

        useCreateOrderMutation,
        
        useCreatePaymentMutation,

        useCreateTimeVendorMutation,
        useVendorAdminQuery,
        useCreateTypeFoodVendorMutation,

        } = healthyApi
