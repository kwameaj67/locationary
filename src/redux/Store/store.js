import { configureStore }  from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice'
import locationReducer from '../slices/locationSlice'

    const allReducers = {
        categories: categoryReducer,
        locations:locationReducer,
    }
    const reduxStore = configureStore({
        reducer:allReducers
    })



    export default reduxStore

