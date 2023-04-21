"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, gql } from "@apollo/client";

import ProductAdd from "./ProductAdd";
import TestCheckBox from "./TestCheckbox"
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
    const router = useRouter();
    const [childData, setChildData] = useState({})
    const [product_data, setProductData] = useState({});



    const childToParent = (dataSet) => {
        setChildData(dataSet)
    }

    var docRow = '';
    const [AddProduct, newData] = useMutation(ADD_PRODUCT);
    const [EditProduct, { data, loading, error }] = useMutation(UPDATE_PRODUCT);


    // console.log('data:', data)
    // https://tkdodo.eu/blog/mastering-mutations-in-react-query

    const handleSubmit = (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        console.log('childData handlesubmit', childData);

        if (!childData.name.length) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                confirmButtonText: "Ok, got it!",

            })
            return false;
        }
        // Get data from the form.

        if (!props.docId) {

            try {

                AddProduct({
                    variables: {
                        "input": childData
                    }
                });
            }
            catch (e) {
                console.log('Apollo error during product add');
            }

        } else {

            try {
                EditProduct({
                    variables: {
                        updateProductId: props.docId,
                        "input": childData
                    }
                });
                if (loading) return 'Loading...';
                if (error) return `Submission error! ${error.message}`;
            } catch (e) {
                console.log('Apollo error during edit porduct.')
            }
            // console.log('data after add:', data)

        }
        router.push('/admin/products/list', { query: { action: "success" } });


    }
    if (props.docId) {
        const single = useQuery(SINGLE_PRODUCT, {
            variables: {
                getProductId: props.docId
            }
        });
        if (single.loading) return 'Loading...';
        if (single.error) return `Submission error! ${error.message}`;
        docRow = single.data?.getProduct
    }
    return (
        <>
            {/*  // We pass the event to the handleSubmit() function on submit. */}
            <form onSubmit={handleSubmit}>
                <ProductAdd row={docRow} childto={childToParent} />
                {/*  <UserFileUpload /> */}
                <button type="submit">Submit</button>
            </form>


            <br />
            <TestCheckBox />
        </>
    )
}
export default ProductForm;