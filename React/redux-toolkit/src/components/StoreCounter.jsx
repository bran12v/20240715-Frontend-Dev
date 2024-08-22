import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, set } from '../slices/counterSlice';
import { useRef } from 'react';


export default function StoreCounter() {


    /**
     * REACT REDUX HOOK
     *      useSelector - allows you to get a piece of state out of your store
     */
    const {count} = useSelector((store) => store.counter);

    /**
     * REACT REDUX HOOK
     *      useDispatch - allows you to call the actions from your slice in the reducer
     */
    const dispatch = useDispatch();

    // reference used to get data out of input field
    const inputRef = useRef();

    return (
        <>
            <h1>Store Example</h1>
            <h2>Count: {count}</h2>

            {/**
             * dispatch function is used to mutate state
             *      takes in the "action" object used in the defined reducer
             */}
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            
            <input type="number" ref={inputRef} />
            <button onClick={() => dispatch(set(Number(inputRef.current?.value)))}>Set</button>
        </>
    );
}