import ProductList from "./ProductList";
export default function page({ params }) {
    console.log("product page:", params);
    return (
        <>
            <ProductList />
        </>
    )
}