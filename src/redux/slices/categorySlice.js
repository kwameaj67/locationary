import { createSlice } from '@reduxjs/toolkit'

// slices controls, defines reducers
const categorySlice  = createSlice({
    name:"categories",
    initialState: [],
    reducers:{
        addCategoryAction: (state, action) => {
            const newCategory = {
                id:Date.now(),
                name:action.payload.name,
                completed:true,
            }
            state.push(newCategory);
            // stores data in memory
            localStorage.setItem('categoryData', JSON.stringify(state));
        },
        removeCategoryAction: (state, action) =>{
           const removeItem = state.filter((item) => item.id !== action.payload.id)
           return removeItem
        },
        editCategoryAction: (state, action) =>{
            // finds a particular item index in entire state
            const index = state.findIndex((item) => item.id === action.payload.id)  
            state[index].name = action.payload.name  //sets whatever value a componenet passed to update the name item in state
        }
    }
})
// we export slices as actions so we can access its logic
export const { addCategoryAction,removeCategoryAction,editCategoryAction } = categorySlice.actions
// we do this to add to the store
export default categorySlice.reducer