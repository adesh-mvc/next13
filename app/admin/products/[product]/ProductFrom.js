"use client";

import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const ADD_PRODUCT = gql`
mutation AddProduct($input: ProductInput) {
        newProduct (input: $input){
        name
        productionCapacity
        price
        description
    }
}
`;
const ProductForm = () => {
    const [product_data, setProductData] = useState({});




    const [AddProduct, { data, loading, error }] = useMutation(ADD_PRODUCT, product_data);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    console.log('data:', data)
    // https://tkdodo.eu/blog/mastering-mutations-in-react-query
    const handleSubmit_x = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        Swal.fire({
            html: "Sorry, looks like there are some errors detected, please try again. <br/><br/>Please note that there may be errors in the <strong>General</strong> or <strong>Advanced</strong> tabs",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
                confirmButton: "btn btn-primary"
            }
        });
    }
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        if (!event.target.ProductName.value.length) {
            alert('Name is required')
        }
        // Get data from the form.
        const fd = {
            name: event.target.ProductName.value,
            productionCapacity: parseInt(event.target.productionCapacity.value),
            price: parseFloat(event.target.price.value),
            description: event.target.description.value,
            image: event.target.image.value
        }

        setProductData({
            variables: {
                "input": fd
            }
        });

        AddProduct(product_data);


        // const product = useQuery(ADD_PRODUCT, {
        //     Variables: {
        //         "input": data
        //     }
        // });
        // console.log(product)
        // // Send the data to the server in JSON format.
        // const JSONdata = JSON.stringify(data)

        // // API endpoint where we send form data.
        // const endpoint = '/api/form'

        // // Form the request for sending data to the server.
        // const options = {
        //     // The method is POST because we are sending data.
        //     method: 'POST',
        //     // Tell the server we're sending JSON.
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     // Body of the request is the JSON data we created above.
        //     body: JSONdata,
        // }

        // // Send the form data to our forms API on Vercel and get a response.
        // const response = await fetch(endpoint, options)

        // // Get the response data from server as JSON.
        // // If server returns the name submitted, that means the form works.
        // const result = await response.json()
        // alert(`Is this your full name: ${result.data}`)
    }
    return (
        <>
            {/*  // We pass the event to the handleSubmit() function on submit. */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="product_name">Product Name</label>
                <input type="text" id="product_name" name="ProductName" />

                <label htmlFor="per_unit">Per unit</label>

                <input type="text" id="per_unit" name="productionCapacity" />

                <label htmlFor="product_price">Product price</label>
                <input type="text" id="product_price" name="price" />

                <label htmlFor="product_desc">Description</label>
                <input type="text" id="product_desc" name="description" />
                <label htmlFor="thumb">Thumb URL</label>
                <input type="text" id="thumb" name="image" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ProductForm;