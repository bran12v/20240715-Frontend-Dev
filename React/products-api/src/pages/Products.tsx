import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductsTable from "../components/ProductsTable";
import ProductsForm from "../components/ProductsForm";


// types are extensibile - meaning they can be unioned and intersectioned
// type Product = {
//     id : string
//     name : string
//     sku : string
//     price: number
// }

// if yuo are matching a type to an existing object, make sure the property names match EXACTLY
export interface Product {
    id? : string,       // making id property optional with ?
    name : string,
    sku : string,
    price: number
}


export default function Products() {

    // typescript types are added after the variable name
    const PRODUCTS_ENDPOINT : string = 'https://bvanek-api.azure-api.net/api/getAllProducts';

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetch(PRODUCTS_ENDPOINT)
            .then(response => response.json())
            .then(returnedData => {
                setProducts(returnedData);
            })
            .catch(error => console.error(error));

    }, []);


    function handleNewProduct(newProduct : Product) {

        // NORAMALLY, SEND DATA OFF TO SERVER/DB FOR PERSISTENCE - skipping for simplicitly

        newProduct.id = String(Math.random() * 100000); // ID would normally come from backend. DONT DO THIS


        // how to add to an array when that array is state
        setProducts((oldState) => {
            return [newProduct, ...oldState]
        });

        // THIS SHOULD BE AVOIDED:
        // let productList = products;     // productList is now a reference to the products state
        // productList.push(newProduct);   // so this is manual mutation of state - which is bad
        // setProducts(productList);

    }


    return (
        <>
            <Typography variant="h1">Products</Typography>
            
            <Grid container spacing={12}>
                <Grid item xs={8} lg={6}>      {/** can set multiple values based on screen size: xs, sm, md, lg, xl */}
                    <ProductsTable productList={products} />
                </Grid>
                <Grid item xs={4} lg={6}>
                    <ProductsForm handleNewProduct={handleNewProduct} />
                </Grid>
            </Grid>
        </>
    );
}