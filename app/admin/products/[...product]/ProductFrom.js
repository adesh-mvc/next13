"use client";

import React, { useState } from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import UserFileUpload from "../../users/[...user]/UserFileUpload";

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
const SINGLE_PRODUCT = gql`
query singleProduct($getProductId: ID!){
    getProduct(id: $getProductId) {
        name
        price
        productionCapacity
        description
        image
      }
}
`;
const ProductForm = (props) => {
    const [product_data, setProductData] = useState({});

    // console.log(props.docId)


    const [AddProduct, { data, loading, error }] = useMutation(ADD_PRODUCT, product_data);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    // console.log('data:', data)
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
            // Swal.fire({
            //     html: "Sorry, looks like there are some errors detected, please try again. <br/><br/>Please note that there may be errors in the <strong>General</strong> or <strong>Advanced</strong> tabs",
            //     icon: "error",
            //     buttonsStyling: false,
            //     confirmButtonText: "Ok, got it!",
            //     customClass: {
            //         confirmButton: "btn btn-primary"
            //     }
            // });


            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                confirmButtonText: "Ok, got it!",

            })
            return false;
        }
        // Get data from the form.
        const fd = {
            name: event.target.ProductName.value,
            productionCapacity: parseInt(event.target.productionCapacity.value) ? parseInt(event.target.productionCapacity.value) : 0,
            price: parseFloat(event.target.price.value) ? parseFloat(event.target.price.value) : 0,
            description: event.target.description.value,
            image: event.target.image.value
        }

        setProductData({
            variables: {
                "input": fd
            }
        });

        AddProduct(product_data);

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
                {/*  <UserFileUpload /> */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ProductForm;