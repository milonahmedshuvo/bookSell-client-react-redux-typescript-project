import { configureStore } from '@reduxjs/toolkit'
import { api } from './Feature/api/apiSlice'
import UserReducer from "./Feature/userVerify/userSlice"

export const store = configureStore({
    reducer: {
        users: UserReducer,
        [api.reducerPath] : api.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})





export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch