import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./redux/productSlice";
import bankSlice from "./redux/bankSlice";

export const store = configureStore({
    reducer: {
        cart: productSlice,
        bank: bankSlice
    },
})