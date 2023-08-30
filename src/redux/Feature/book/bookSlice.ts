import { createSlice } from "@reduxjs/toolkit";

interface ISearch {
    search: string | null,
    publicationYear: string | null,
    genre: string | null
}

const initialState:ISearch ={
    search: null,
    publicationYear: null,
    genre: null
}


const bookSlice = createSlice({
    name:"book",
    initialState,
    reducers: {
        setSearchData: (state, action) =>{
            state.search = action.payload
        },
        setPublicationYear: (state, action) => {
            state.publicationYear = action.payload
        },
        setGenre: (state , action ) =>{
            state.genre = action.payload
        }
    }
})


export const {setSearchData, setPublicationYear, setGenre } = bookSlice.actions
export default bookSlice.reducer