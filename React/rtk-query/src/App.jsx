import { productApi } from "./apis/productsApi";


export default function App() {

    // all of the endpoints in the API get turned into custom hooks we can use to access them
    const {data, refetch} = productApi.useFindAllProductsQuery();   // will automatically perform the GET request for us
    const [createproduct] = productApi.useCreateProductMutation();

    function handleSubmit(event) {
        
        // get form data and set to newProduct
        const newProduct = {}

        createproduct(newProduct);      // to make that POST request listed in API
    }

    return (
        <>
            {data?.map((product) => (
                <h3 key={product.id}>{product.name}</h3>
            ))}
        </>
    );
}