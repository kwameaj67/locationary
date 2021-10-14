import { createSlice } from '@reduxjs/toolkit'

// slices controls, defines reducers
const categorySlice  = createSlice({
    name:"categories",
    initialState: [
        {id:1,name:"Plants",completed:false},
        {id:2,name:"Fuego",completed:false},
        {id:3,name:"One Dance",completed:false},
    ],
    reducers:{
        addCategoryAction: (state, action) => {
            const newCategory = {
                id:Date.now(),
                name:action.payload.name,
                completed:true,
            }
            state.push(newCategory);
            sessionStorage.setItem('categoryData', JSON.stringify(state));
            sessionStorage.setItem('newCategory', JSON.stringify(newCategory));
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