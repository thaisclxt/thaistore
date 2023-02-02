import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reducers/counterSlice";
import fetchReducer from "./reducers/productsSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: fetchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
