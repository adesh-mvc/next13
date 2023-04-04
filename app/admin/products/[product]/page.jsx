import ProductList from "./ProductList";
export default function page({ params }) {
    const renderPath = params.product;

    const viewTemplate = (currentpath) => {
        if (currentpath.indexOf('list') !== -1) {
            return <ProductList />
        } else if (currentpath.indexOf('add') !== -1) {
            return <>Add new product</>
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