import ProductList from "./ProductList";
import ProductForm from "./ProductFrom";
export default function page({ params }) {
    const renderPath = params.product;

    const viewTemplate = (currentpath) => {
        if (currentpath.indexOf('list') !== -1) {
            return <ProductList />
        } else if (currentpath.indexOf('add') !== -1) {
            return <ProductForm />
        } else {
            return <>Error page going render...</>
        }
    }
    const renderTemplate = viewTemplate(renderPath);
    return (
        <>
            {renderTemplate}
        </>
    )
}