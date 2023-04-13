"use client";

import React, { useState, useEffect } from "react";
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
const UPDATE_PRODUCT = gql`
mutation EditProduct($updateProductId: ID!, $input: ProductInput) {
    updateProduct(id: $updateProductId,input: $input) {
        name
        productionCapacity
        price
        description
        image
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
    const [EditProduct, { data, loading, error }] = useMutation(UPDATE_PRODUCT, product_data);
    // console.log(props.docId)
    var docRow = '';
    if (props.docId) {




        const { data, loading, error } = useQuery(SINGLE_PRODUCT, {
            variables: {
                getProductId: props.docId
            }
        });

        if (loading) return 'Loading...';
        if (error) return `Submission error! ${error.message}`;

        // setEditDoc(data);
        docRow = data?.getProduct


        // if (loading) return 'Submitting...';
        // if (error) return `Submission error! ${error.message}`;
    } else {
        const [AddProduct, { data, loading, error }] = useMutation(ADD_PRODUCT, product_data);
        if (loading) return 'Submitting...';
        if (error) return `Submission error! ${error.message}`;
    }

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
        if (props.docId) {

            setProductData({
                variables: {
                    updateProductId: props.docId,
                    "input": fd
                }
            })
            EditProduct(product_data);

        } else {
            setProductData({
                variables: {

                    "input": fd
                }
            });
            AddProduct(product_data);
        }

    }
    return (
        <>{console.log('docRow:', docRow)}
            {/*  // We pass the event to the handleSubmit() function on submit. */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="product_name">Product Name</label>
                <input type="text" id="product_name" name="ProductName" defaultValue={docRow?.name} />

                <label htmlFor="per_unit">Per unit</label>

                <input type="text" id="per_unit" name="productionCapacity" defaultValue={docRow?.productionCapacity} />

                <label htmlFor="product_price">Product price</label>
                <input type="text" id="product_price" name="price" defaultValue={docRow?.price} />

                <label htmlFor="product_desc">Description</label>
                <input type="text" id="product_desc" name="description" defaultValue={docRow?.description} />
                <label htmlFor="thumb">Thumb URL</label>
                <input type="text" id="thumb" name="image" defaultValue={docRow?.image} />
                {/*  <UserFileUpload /> */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ProductForm;