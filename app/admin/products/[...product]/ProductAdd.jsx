"use client"
import React, { useState, useEffect } from "react";

const ProductAdd = (props) => {
    const [product, setProduct] = useState({
        name: "",
        productionCapacity: "",
        price: "",
        description: "",
        image: "",
    });
    // if (props.row) {
    //     setProduct({
    //         name: props.row?.name,
    //         productionCapacity: props.row?.productionCapacity,
    //         price: props.row?.price,
    //         description: props.row?.description,
    //         image: props.row?.image
    //     })
    // }
    useEffect(() => {
        if (props.row) {
            setProduct({
                name: props.row?.name,
                productionCapacity: props.row?.productionCapacity,
                price: props.row?.price,
                description: props.row?.description,
                image: props.row?.image
            })
        }
    }, [])
    const inputChange = (e) => {

        const { name, value } = e.target;
        // console.log('typeof:', parseFloat(value));
        setProduct({ ...product, [name]: value });
    }
    const inputChangeInt = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: parseInt(value) });
    }
    const inputChangeFloat = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: parseFloat(value) });
    }
    props.childto(product);

    return (<>
        <label htmlFor="product_name">Product Name</label>
        <input type="text" id="product_name" name="name" onChange={inputChange} defaultValue={product.name} />
        <label htmlFor="per_unit">Per unit</label>

        <input type="text" id="per_unit" name="productionCapacity" onChange={inputChangeInt} defaultValue={product.productionCapacity} />

        <label htmlFor="product_price">Product price</label>
        <input type="text" id="product_price" name="price" onChange={inputChangeFloat} defaultValue={product.price} />

        <label htmlFor="product_desc">Description</label>
        <input type="text" id="product_desc" name="description" onChange={inputChange} defaultValue={product.description} />
        <label htmlFor="thumb">Thumb URL</label>
        <input type="text" id="thumb" name="image" onChange={inputChange} defaultValue={product.image} />


    </>);

}
export default ProductAdd;