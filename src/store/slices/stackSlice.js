import { createSlice } from "@reduxjs/toolkit";

const stackSlice = createSlice({
    name: "stack",
    initialState: {
        stack: [],
        valorPeek: null,
        valorIsEmpty: true,
        valorSize: 0
    },
    reducers: {
        push: (state, action) => {
            state.stack.push(action.payload);
        },
        pop: (state) => {
            if (state.stack.length > 0) {
                state.stack.pop();
            }
        },
        peek: (state) => {
            state.valorPeek = state.stack.length > 0 ? state.stack[state.stack.length - 1] : null;
        },
        isEmpty: (state) => {
            state.valorIsEmpty = state.stack.length === 0;
        },
        size: (state) => {
            state.valorSize = state.stack.length;
        },
    }
});

export const { push, pop, peek, isEmpty, size } = stackSlice.actions;
export default stackSlice.reducer;
