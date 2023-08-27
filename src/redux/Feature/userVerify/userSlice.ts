import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";




interface IUserTyps {
    user: {
        email: string | null,
        name: string | null
    },
    isLoading: boolean,
    isError: boolean,
    error: string | null
}

const initialState:IUserTyps = {
    user: {
        email: null,
        name: null
    },
    isLoading: false,
    isError: false,
    error: null
}



interface emailPasswordTypes {
    email: string,
    password: string
}

export const userCreate = createAsyncThunk("users/createuser", async ({email, password}:emailPasswordTypes) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email
})



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers:  (builder) => {
        builder.addCase(userCreate.pending, (state) => {
            state.isLoading = true
        }).addCase(userCreate.fulfilled, (state, action) =>{
            state.user.email= action.payload,
            state.isLoading= false,
            state.isError = false
        }).addCase(userCreate.rejected, (state, action) =>{
            state.user.email= null,
            state.isError= true,
            state.isLoading= false
            state.error= action.error.message!
        })
    }
})





export default userSlice.reducer