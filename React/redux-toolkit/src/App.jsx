import AnotherStoreCounter from "./components/AnotherStoreCounter";
import StoreCounter from "./components/StoreCounter";
import UseReducerCounter from "./components/UseReducerCounter";

export default function App() {

    return (
        <>
            <UseReducerCounter />
            <br />
            <h1>-------------------------------------</h1>
            <StoreCounter />
            <br />
            <h1>-------------------------------------</h1>
            <AnotherStoreCounter />
        </>
    );
}