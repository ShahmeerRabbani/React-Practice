import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counter: 10,
}

const counterSlicer = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        addCounter: (state, action) => {
            state.counter = ++state.counter
        },
        minusCounter: (state, action) => {
            // if(state.counter > 0){
            //     --state.counter
            // }else{
            //    state.counter=0
            // }
            state.counter = state.counter > 0 ? --state.counter : 0;
        }
    }
})

const {actions, reducer} = counterSlicer;

export const {addCounter, minusCounter} = actions

export default reducer;