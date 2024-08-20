import { useState } from "react";
import Counter from "./components/Counter";
import RefCounter from "./components/RefCounter";



function App() {

    /**
     * 
     * 
     * where we can write JS code
     * 
     * 
     * 
     */

    const [shouldRender, setShouldRender] = useState(false);

    function toggleCounter() {
        setShouldRender(!shouldRender);
    }

    // we return JSX from components
    return (
        <>
            {/*
                THIS IS A JSX COMMENT

                React Fragment: <> ... </>
                    does not show up on DOM
                    wraps around the rest of the HTML to give us only "one parent"

            */}

            <h1>Austin's Super Fun Amazing App</h1>
            <p>Our first react app!</p>
            <br />
            <h1>-------------------------------------------------------</h1>
            <button onClick={toggleCounter}>Toggle Counter</button>
            {shouldRender ? <Counter /> : null}    {/*components can be self-closing, or not */}
            {shouldRender && <Counter />}   {/* does the exact same as the line above because components are truthy */}
            <br />
            <h1>-------------------------------------------------------</h1>
            <RefCounter />
           
        </>
    );


}


/**
 * DEFAULT EXPORT
 *      only allowed 1 per file
 *          the function that is the component
 * 
 *      import App from './App.jsx';
 */
export default App;


/**
 * NAMED EXPORT
 *      as many of these as you want
 *      exporting something specific
 * 
 *      importing a named export requires destructuring
 *          import { num1 } from './App.jsx';  
 */
export const num1 = 12;
