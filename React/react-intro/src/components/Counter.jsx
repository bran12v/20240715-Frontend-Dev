import { useEffect, useState } from "react";
import Item from "./Item";
import RefCounter from "./RefCounter";


export default function Counter() {

    //let count = 0;  // this count is not STATE

    /**
     * REACT HOOK - useState
     *      turns something into state
     *  
     *      destructure out 2 things:
     *          your piece of state
     *          a setter function to mutate state
     */
    const [ count, setCount ] = useState(0); // takes in a default value

    function increment() {
        //count++;      // manual mutation of state - which is bad
        setCount(count + 1);
        console.log(count);
    }
    function decrement() {
       
        // state setter method can take in a callback function that can give you a copy of the old state
        setCount((oldState) => oldState - 1);
    }


    /**
     * REACT HOOK - useEffect
     *      tap into the component lifecycle
     *          run code at specific stages of a components life
     * 
     *      component initialization (on mount)
     *      state update (did update)
     *      component destruction (will unmount)
     * 
     *      you tap into the different stages, based on how you use useEffect
     *          has 2 params:
     *              a callback funtion - code that is ran when the lifecycle stage occues
     *              (optional) array of state to care about
     *                  no array - care about ALL STATE changes
     *                  empty array - care about ZERO state changes (on mount only)
     *                  array with values - run when those specific pieces of state are updated
     *          can optionally return a function
     *              this will be any unmount logic
     */

    // on mount and did update
    useEffect(() => {
        // not often used
        console.log("The component has been mounted to the DOM, or anything has changed");
    });

    // on mount only
    useEffect(() => {
        // commonly used for database fetches/API calls
        console.log("The component has been mounted to the DOM");
    }, []);

    // on mount and did update (count only)
    useEffect(() => {
        // commonly used for data validation
        console.log("The component has been mounted to the DOM or count has changed");
    }, [count]);


    useEffect(() => {
        
        const intervalKey = setInterval(() => {
            console.log(new Date);
        }, 1000);

        // any TEARDOWN logic should go in here
        return () => {
            console.log("Component is unmounted");

            clearInterval(intervalKey);
        }

    }, []);

    /**
     * HOW TO UNMOUNT COMPONENTS???
     *      - if-else condition/conditional rendering
     *              - parent (App.jsx) can conditionally render this component 
     *      - refresh page
     *      - closed the app/server
     */




    return (
        <>
            <h4>Current Count: {count}</h4>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>



            <Item name="Puzzles" desc="1000 pieces" quantity={count} >

                {/** RefCounter is now a child to Item */}
                <RefCounter count={count} />
            </Item>
        </>
    );
}