import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


/**
 * API
 *      createApi
 *          combo of createSlice, and createAsyncThunk
 *          it will manage all of our server/api calls
 *              it will automatically update the store with the data returned from those calls
 * 
 * 
 *      takes in an object
 *          reducerPath - the path used in your redux store as a reducer
 *          baseQuery - the default URL to the server that all other queries will build off of
 *          endpoints - object with all the specific api calls
 *              builder has two methods:
 *                  query - GET
 *                  mutation - POST, PUT, DELETE, PATCH
 */


export const productApi = createApi({
    reducerPath : 'productApi',
    baseQuery : fetchBaseQuery({baseUrl : 'https://bvanek-api.azure-api.net/api'}),
    endpoints : (builder) => ({
        findAllProducts : builder.query({
            query : () => '/getAllProducts'         // default is a GET
        }),
        findProductById : builder.query({
            query : (id, categoryId) => '/getProductById?id=' + id + '&categoryId=' + categoryId
        }),
        createProduct : builder.mutation({
            query : (newProduct) => {
                return {
                    method : 'POST',
                    url: '/createProduct',              // endpoint doesn't exist this is just an example
                    body: newProduct
                }
            }
        })
    })
});