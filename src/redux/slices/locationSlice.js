import {  createSlice } from '@reduxjs/toolkit'

const locationSlice = createSlice({
    name:"locations",
    initialState: [
        {
            id:1,
            name:"Accra",
            address:"South Ghana",
            coordinates:{ lat: 3.55602, lng: -0.1969,time:2323 },
            category:"Plants",
            completed:false
        },
        {
            id:2,
            name:"Ho",
            address:"North Ghana",
            coordinates:{ lat:5.6338208, lng: -0.182515,time:403423 },
            category:"Fuego",
            completed:false
        },
    ],
    reducers:{ 
        addLocationAction:(state, action) =>{
            const newLocation = {
                id:Date.now(),
                name:action.payload.name,
                address:action.payload.address,
                coordinates:action.payload.coordinates,
                category:action.payload.category,
                completed:action.payload.completed,
            }
            state.push(newLocation)
            // stores data in memory
            sessionStorage.setItem("newLocation",JSON.stringify(newLocation))
            sessionStorage.setItem("locationData",JSON.stringify(state))
        },
        removeLocationAction:(state, action) => {
            const removeItem = state.filter((item) => item.id !== action.payload.id)
            return removeItem
        },
        editLocationAction:(state, action) => {
            const index = state.findIndex((item) => item.id === action.payload.id)  //finds index of particular item
            state[index].name = action.payload.name
            state[index].address = action.payload.address
            state[index].category = action.payload.category
            state[index].coordinates = action.payload.coordinates
        }
    }
})

export const { addLocationAction,removeLocationAction,editLocationAction } = locationSlice.actions

export default locationSlice.reducer