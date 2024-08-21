import { Button, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "../pages/Products";


type ProductFormInputs = {
    name : string
    sku : string
    price : number
}

type ProductFormProps = {
    //handleNewProduct : Function
    handleNewProduct : (newProduct : Product) => void       // setting the data type to a function that takes in a product object and returns void
}


export default function ProductsForm(props : ProductFormProps) {

    /**
     * REACT HOOK FORM
     *      makes forms way easier to manage
     * 
     *      useForm() hook
     *          gives everything needed to manage/maintain a form
     *              handleSubmit - function that will run validation on all inputs and then call your actual submit function
     *              register - indicates that an input field is being used in your form
     *              formState - tacks the current state of the entire form - including errors
     *              watch - track specific inputs and return their values (similar to tracking inputs with useRef)
     *              reset - return the form to the default state
     */
    const {handleSubmit, register, reset} = useForm<ProductFormInputs>();

    // SubmitHandler comes from react hook form and is returned by handleSubmit
    const formSubmission : SubmitHandler<ProductFormInputs> = (formData : ProductFormInputs ) => {
        console.log('Name: ' + formData.name + ', SKU: ' + formData.sku + ', Price: ' + formData.price);

        // calling the handler function in parent component
        props.handleNewProduct(formData);

        // reset the form
        reset();
    }

    

    return (
        <>
            <form onSubmit={handleSubmit(formSubmission)}>

                {/**
                 * register function is actually doing many different things
                 *      onChange, onBlur, name, and ref all rolled into one
                 * 
                 *      some components from a component library (like MUI), don't expose a ref attribute
                 *          in that case, for those components, you ned to use Controller from react-hook-form
                 */}
                <TextField id="name-input" label="Product Name" {...register("name")} />
                <TextField id="sku-input" label="Product SKU" {...register("sku")} />
                <TextField id="price-input" label="Product Price" {...register("price")} />
                <Button id="submit-button" type="submit" variant="contained" size="large">Submit</Button>
            </form>
            
        </>
    );
}