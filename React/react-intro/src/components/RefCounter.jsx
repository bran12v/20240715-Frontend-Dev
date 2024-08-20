import { useRef, useState } from "react";


export default function RefCounter() {


    /**
     * REACT HOOK - useRef
     *      similar to useState - but it creates a reference, NOT a piece of state
     * 
     *      not really used to store data - usually used to interact with HTML elements
     * 
     */
    const count = useRef(0);    // this isn't really done
    function increment() {
        count.current++;
        console.log(count.current);
    }
    function decrement() {
        count.current--;
        console.log(count.current);
    }


    // this is more how useRef is commonly used
    const inputRef = useRef();
    const [inputText, setInputText] = useState('');

    function handleInput() {
        console.log(inputRef.current.value);


        if(!inputRef.current.value.includes('@')){
            setInputText(inputRef.current.value);
        }
    }


    return (
        <>
            {/* .current allows us to get the current value out of the reference */}
            <h4>Current Count: {count.current}</h4>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <br />

            <div>
                {/**
                 * uncontrolled vs controlled
                 *      html elements are uncontrolled by default
                 * 
                 *      useRef gives react (some) control 
                 *      useRef + useState gioves react full control
                 */}
                <label>Input Data</label>
                <input ref={inputRef} onChange={handleInput}/>
                <p>{inputText}</p>
            </div>
        </>
    );
}