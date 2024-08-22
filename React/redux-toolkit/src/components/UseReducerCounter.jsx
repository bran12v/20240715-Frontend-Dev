import { useReducer, useRef } from "react";

export default function UseReducerCounter() {

    /**
     * REACT HOOK - useReducer
     *      from native react - not redux toolkit
     * 
     *      gives you a piece of state, and more options for managing it than useState
     *          "more options" - a dispatcher function that will call some predefined actions or "reducers"
     * 
     *      preferred when you have more complex state management
     */

    /**
     * REDUCER FUNCTION
     *      tkae in 2 params
     *          the current state to manipulate
     *          the action to perform
     *              an object with a few properties
     *                  type - the name of the action
     *                  payload - the data required for the action, if any
     *
     */
    const counterReducer = (state, action) => {

        // increment, decrement, reset, set

        switch(action.type) {
            case 'INCREMENT' :
                // reducers need to return an object, with the old state AS we are overriding it with the new value
                return { ...state, count : state.count + 1 };
            case 'DECREMENT' :
                return { ...state, count : state.count - 1 };
            case 'SET' :
                return { ...state, count : action.payload };
            case 'RESET' :
                return { ...state, count : 0 };
            default :
                return state;
        }
    }




    // takes in reducers and an initial value
    const [state, dispatch] = useReducer(counterReducer, { count : 0 });
    
    // reference used to get data out of input field
    const inputRef = useRef();


    return (
        <>
            <h1>useReducer Example</h1>
            <h2>Count: {state.count}</h2>

            {/**
             * dispatch function is used to mutate state
             *      takes in the "action" object used in the defined reducer
             */}
            <button onClick={() => dispatch({type : "RESET"})}>Reset</button>
            <button onClick={() => dispatch({type : "INCREMENT"})}>+</button>
            <button onClick={() => dispatch({type : "DECREMENT"})}>-</button>
            
            <input type="number" ref={inputRef} />
            <button onClick={() => dispatch({type : "SET", payload : Number(inputRef.current?.value)})}>Set</button>
            

        </>
    );

}