import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,  } from "firebase/auth";
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
    password: string,
    name?: string
}


export const userCreate = createAsyncThunk("users/createuser", async ({email, password, name}:emailPasswordTypes) => {                
    const data = await createUserWithEmailAndPassword(auth, email, password)
    // const userEmail= data.user.email
     updateProfile(auth.currentUser!, {displayName: name})
    console.log(auth.currentUser)
    return { email: data.user.email, name: data.user.displayName }
})

export const userlogin = createAsyncThunk("users/userlogin", async ({email, password}:emailPasswordTypes) =>{
       const data = await signInWithEmailAndPassword(auth, email, password)
       return data.user
})





const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setuserEmail: (state , action) =>{
            state.user.email= action.payload
        },
        setuserName: (state, action) => {
            state.user.name= action.payload
        }
    },
    extraReducers:  (builder) => {
        builder.addCase(userCreate.pending, (state) => {
            state.isLoading = true
        }).addCase(userCreate.fulfilled, (state, action) =>{
            state.user.email= action.payload.email,
            state.user.name = action.payload.name,
            state.isLoading= false,
            state.isError = false
        }).addCase(userCreate.rejected, (state, action) =>{
            state.user.email= null,
            state.isError= true,
            state.isLoading= false
            state.error= action.error.message!
        }).addCase(userlogin.pending, (state) =>{
            state.isLoading = true
        }).addCase(userlogin.fulfilled, (state, action) => {
            state.user.email = action.payload.email
            state.user.name = action.payload.displayName
            state.isLoading = false
            state.isError = false
        }).addCase(userlogin.rejected, (state, action)=>{
            state.error = action.error.message!
        })
    }
})





export const {setLoading, setuserEmail, setuserName} = userSlice.actions
export default userSlice.reducer