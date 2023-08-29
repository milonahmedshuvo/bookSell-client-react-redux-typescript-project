import { createSlice } from "@reduxjs/toolkit";

interface ISearch {
    search: string | null
}

const initialState:ISearch ={
    search: null
}

const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers: {
        setSearchData: (state, action) =>{
            state.search = action.payload
        }
    }
})


export const {setSearchData} = bookSlice.actions
export default bookSlice.reducer