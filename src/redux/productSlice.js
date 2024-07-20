import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}
const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        //state will have react state obejct and your initalState value
        //action will 2 properties type and payload
        //type is the type of action
        //payload is the data that you want to pass to the reducer
        addToCart:(state,action)=>{
            console.log(state)
            console.log(action)//action.payload
            state.cart.push(action.payload)
        }


    }
})
export const {addToCart} = productSlice.actions
export default productSlice.reducer