"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, gql } from "@apollo/client";

import ProductAdd from "./ProductAdd";
import UserFileUpload from "../../users/[...user]/UserFileUpload";
import DragDrop from "./DragDrop";
import { useForm } from "react-hook-form";
// import TestCheckBox from "./TestCheckbox"
// import UserFileUpload from "../../users/[...user]/UserFileUpload";
// import Tree from "./test/TreeView"

// DragDrop data
// export Status = 'good' | 'bad' | 'normal'
const DargDropData = [
    {
        id: 1,
        content: 'Aqua-man',
        status: 'good'
    },
    {
        id: 2,
        content: 'Flash',
        status: 'normal'
    },
    {
        id: 3,
        content: 'Green Lantern',
        status: 'good'
    },
    {
        id: 4,
        content: 'Batman',
        status: 'bad'
    },
]

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
        createAt
      }
}
`;
const ProductForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter();
    const [childData, setChildData] = useState({})
    const [product_data, setProductData] = useState({});
    const [tariff, setTariff] = useState({ normal: [], bad: [] });

    const tariffHandler = (th) => {
        console.log('tariffHandler', th)
        // th.map((item) => {
        //     if (item.status !== 'good') {
        //         setTariff(result => ({
        //             ...result,
        //             [item.status]: item.id
        //         }))

        //     }
        // })
    }


    const childToParent = (dataSet) => {
        setChildData(dataSet)
    }

    var docRow = '';
    const [AddProduct, newData] = useMutation(ADD_PRODUCT);
    const [EditProduct, { data, loading, error }] = useMutation(UPDATE_PRODUCT);


    // console.log('data:', data)
    // https://tkdodo.eu/blog/mastering-mutations-in-react-query

    const productSubmit = (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        console.log('childData productSubmit', childData);

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
            let dataSubmit = { ...childData };
            dataSubmit['image'] = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F5261%2F5261211.png&tbnid=YDdG3rPGUNfE-M&vet=12ahUKEwiMss2bieP_AhWmpmMGHStJCg0QMygCegUIARD3AQ..i&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fsdk_5261211&docid=fMFUc7lG4_5zCM&w=512&h=512&q=sdk%20icons&ved=2ahUKEwiMss2bieP_AhWmpmMGHStJCg0QMygCegUIARD3AQ"

            console.log('Apollo error during product add:' + dataSubmit);
            try {
                EditProduct({
                    variables: {
                        updateProductId: props.docId,
                        "input": dataSubmit
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
    // useEffect(() => {
    //     console.log(tariff)
    // }, [tariff])
    return (
        <>
            {/*  // We pass the event to the productSubmit() function on submit. */}
            <form onSubmit={productSubmit} encType={'multipart/form-data'}>
                <ProductAdd row={docRow} childto={childToParent} />
                {/*   <UserFileUpload /> */}
                {/* <DragDrop
                    data={DargDropData}
                    mytariff={tariffHandler}
                /> */}
                <button type="submit">Submit</button>
            </form>


            <br />
            {/*  <TestCheckBox /> */}
            <br />
            {/*   <Tree treeData={treeData} /> */}
        </>
    )
}
export default ProductForm;