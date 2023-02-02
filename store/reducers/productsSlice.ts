import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: Array<any> = []

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts: (state, { payload }) => {
            state.push(...payload)
        }
    }
});


export const { fetchProducts } = productsSlice.actions;

export const selectProduct = (state: RootState) => state.products;

export default productsSlice.reducer;
