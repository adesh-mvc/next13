"use client";
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
    // https://tkdodo.eu/blog/mastering-mutations-in-react-query
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const fd = {
            name: event.target.ProductName.value,
            productionCapacity: event.target.productionCapacity.value,
            price: event.target.price.value,
            description: event.target.description.value,
            image: event.target.image.value
        }

        const { data, loading, error } = useMutation(ADD_PRODUCT, {
            variables: {
                "input": {
                    "name": "Samsung Mobile",
                    "description": "You can use variables to simplify mutation client logic just like you can with queries",
                    "price": 1508.50,
                    "productionCapacity": 29
                }
            }
        });
        if (loading) return 'Submitting...';
        if (error) return `Submission error! ${error.message}`;
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
                <input type="text" id="product_name" name="ProductName" required />

                <label htmlFor="per_unit">Per unit</label>

                <input type="text" id="per_unit" name="productionCapacity" required />

                <label htmlFor="product_price">Product price</label>
                <input type="text" id="product_price" name="price" required />

                <label htmlFor="product_desc">Description</label>
                <input type="text" id="product_desc" name="description" required />
                <label htmlFor="thumb">Thumb URL</label>
                <input type="text" id="thumb" name="image" required />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ProductForm;