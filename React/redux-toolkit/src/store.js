import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

/**
 * STORE
 *      is where all your state that you want managed by redux will go
 *          store is for global state management, not local state management
 */
const store = configureStore({
    reducer : {
        counter : counterReducer
    }
});

export default store;