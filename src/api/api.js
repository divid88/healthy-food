import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const healthyApi = createApi({
    reducerPath: 'healthyApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:8000'}),
    endpoints: (builder) => ({
        saveFavoriteVendor: builder.mutation({
            
        })
    })
})