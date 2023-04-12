import ProductList from "./ProductList";
import ProductForm from "./ProductFrom";



export default function page({ params }) {
    const renderPath = params.product;

    const viewTemplate = (currentpath) => {
        // console.log(currentpath[currentpath.indexOf('list') + 1])
        if (currentpath.indexOf('list') !== -1) {
            const page_no = currentpath[currentpath.indexOf('list') + 1] ? currentpath[currentpath.indexOf('list') + 1] : 1
            return <ProductList pagination={page_no} />
        } else if (currentpath.indexOf('add') !== -1) {
            return <ProductForm docId={0} />
        } else if (currentpath.indexOf('edit') !== -1) {
            const id = currentpath[currentpath.indexOf('edit') + 1] ? currentpath[currentpath.indexOf('edit') + 1] : '';
            // const client = getClient();

            // const { data } = await client.query({ query: SINGLE_PRODUCT }, {
            //     variables: {
            //         getProductId: id
            //     }
            // }
            // );
            // console.log("edit data:", data);
            return <ProductForm docId={id} />
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