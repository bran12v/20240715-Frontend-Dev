import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, set } from '../slices/counterSlice';
import { useRef } from 'react';


export default function AnotherStoreCounter() {

    /**
     * 
     * 
     * Since the store os global state, changes to that state in one component will be reflected in ALL other components
     * 
     * 
     */


    const {count} = useSelector((store) => store.counter);
    const dispatch = useDispatch();
    const inputRef = useRef();

    return (
        <>
            <h1>Another Store Example</h1>
            <h2>Count: {count}</h2>

            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            
            <input type="number" ref={inputRef} />
            <button onClick={() => dispatch(set(Number(inputRef.current?.value)))}>Set</button>
        </>
    );
}