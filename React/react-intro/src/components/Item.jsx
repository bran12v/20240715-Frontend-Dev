

export default function Item(props) {

    /**
     * props is the common name for all the attributes set on a component by the parent
     * 
     *      props ALWAYS has a hidden attribute called children
     */

    return (
        <>
            <h2>{props.name}</h2>
            <h4>{props.desc}</h4>
            <h4>Quantity: {props.quantity}</h4>
            {props.children}
        </>
    );
}

/** you can destructure out your props */
// export default function Item({name, desc, quantity, children}) {

//     /**
//      * props is the common name for all the attributes set on a component by the parent
//      * 
//      *      props ALWAYS has a hidden attribute called children
//      */

//     return (
//         <>
//             <h2>{name}</h2>
//             <h4>{desc}</h4>
//             <h4>Quantity: {quantity}</h4>
//             {children}
//         </>
//     );
// }