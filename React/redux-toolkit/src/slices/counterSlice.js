import { createSlice } from '@reduxjs/toolkit';

/**
 * SLICES
 *      redux toolkit uses slices to hold your reducers and their actions
 *          in redux by itself (ie no toolkit) the reducers and actions are in separate files
 * 
 *      all state management logic is maintained here in the slice
 * 
 * 
 *      createSlice
 *          takes in an object with 3 properties (the name of this object is "reducer")
 *              name of your reducer
 *              initialState
 *              reducers
 */

const counterSlice = createSlice({
    name : 'counter',
    initialState : { count : 0 },
    reducers : {
        increment : (state) => {
            // within your slice, it is ok to mututate your state directly
            state.count++;
        },
        decrement : (state) => {
            state.count--;
        },
        set : (state, action) => {
            state.count = action.payload;
        },
        reset : (state) => {
            state.count = 0;
        }
    }
});

// your reducer should be a default export
export default counterSlice.reducer;

// named exports for your actions - that way your actions can be used thoughout your project
export const { increment, decrement, set, reset } = counterSlice.actions;