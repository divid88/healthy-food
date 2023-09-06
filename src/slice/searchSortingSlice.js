import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    search:'',
    sorting: {},
    filterng: []
}

const searchSortingSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        
        worldSearch : (state, action) => {
            state.search = action.payload
            console.log(action.payload)
        },
    },
})

export const {worldSearch} = searchSortingSlice.actions

export default searchSortingSlice.reducer