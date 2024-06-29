import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './authSlice'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()