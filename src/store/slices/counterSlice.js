import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count:0
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        incrementPorValor: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
});

export const {increment, incrementPorValor, decrement} = counterSlice.actions;
export default counterSlice.reducer;
